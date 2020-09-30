import SHA256 from 'crypto-js/sha256';
import Transaction from './Transaction';

class Block{
    timestamp: Date;
    transactions: Transaction[];
    precedingHash: string;
    hash: string;
    nonce: number;

    constructor(timestamp: Date, transactions: Transaction[], precedingHash=" "){
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
        this.nonce = 0;    //Using to compute proof of work
    }


    computeHash(){
        return SHA256(this.precedingHash + this.timestamp + JSON.stringify(this.transactions.toString()) + this.nonce).toString();
    }   

    proofOfWork(difficulty: number) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
          this.nonce++;
          this.hash = this.computeHash();
        }
    }

    hasValidateTransactions() {
        for (const transaction of this.transactions) { //all transactions validate
            if (!transaction.isValid()) {
                return false;
            }
        }

        return true;
    }
}

export default Block;