import Block from "./Block";
import Transaction from "./Transaction";

class Chain {
  blockchain: Block[];
  difficulty: number;
  pendingTransactions: Transaction[];
  reward: number;

  constructor() {
    this.blockchain = [this.generateGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.reward = 100;
  }

  generateGenesisBlock() {
    return new Block(new Date(), [], '0');
  }

  obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock: Block) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
    return newBlock;
  }

  minePendingTransactions(receiver: any) {
    const reward = new Transaction(null, receiver, this.reward);
    this.pendingTransactions.push(reward);

    let block = new Block(new Date(), this.pendingTransactions, this.obtainLatestBlock().hash);
    block.proofOfWork(this.difficulty);


    //Create reward transaction 
    this.blockchain.push(block);

    this.pendingTransactions = [];
  
    return true;
  }

  addTransaction(transaction: Transaction) {
    if (!transaction.getDetail().sender || !transaction.getDetail().receiver)
      throw new Error('Detail not included')
    
    if (!transaction.isValid())
      throw new Error('Invalid transaction')
    
    if (transaction.getDetail().amount <= 0) {
        throw new Error('Transaction amount should be higher than 0');
    }

  // Making sure that the amount sent is not greater than existing balance
  if (this.getBalanceOfAddress(transaction.getDetail().sender) < transaction.getDetail().amount) {
    throw new Error('Not enough balance');
  }

    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address: any) {
    let balance = 0;

    for (const block of this.blockchain) {
      for (const transaction of block.transactions) {
        if (transaction.getDetail().sender && transaction.isValid() === address) //If he is the sender
          balance -= transaction.getDetail().amount;
        
        if (transaction.getDetail().receiver && transaction.isValid() === address) //If he is the receiver
          balance += transaction.getDetail().amount;
      }
    }

    return balance;
  }

  checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (!currentBlock.hasValidateTransactions()) {
        return false;
      }

      if (
        currentBlock.hash !== currentBlock.computeHash() ||
        currentBlock.precedingHash !== precedingBlock.hash
      ) {
        return false;
      }
    }

    return true;
  }

  getAllPendingTransactions() {
    return this.pendingTransactions;
  }
}

export default Chain;
