import Chain from '../models/Chain';
import Transaction from '../models/Transaction';
import Wallet from '../models/Wallet';

const walletA = new Wallet();
const walletB = new Wallet();

let coins = new Chain();
//Start the miner
coins.minePendingTransactions(walletA.getAddress());
coins.minePendingTransactions('virtual');
const tx1 = new Transaction(
    walletA.getAddress(),
    walletB.getAddress(),
    10
)
tx1.signTransaction(walletA.getKey());
coins.addTransaction(tx1);


coins.minePendingTransactions('virtual'); //mine the next
console.log('Balance of studentA is', coins.getBalanceOfAddress(walletA.getAddress()))
console.log('Balance of studentB is', coins.getBalanceOfAddress(walletB.getAddress()))

// console.log(JSON.stringify(coins, null, 4));
console.log('check integrity', coins.checkChainValidity());