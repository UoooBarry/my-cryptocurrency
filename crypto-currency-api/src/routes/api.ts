import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { coins } from '../app'; //Import the chain
import Transaction from '../models/Transaction';
import Wallet from '../models/Wallet';
import elliptic from 'elliptic';
const EC = elliptic.ec;
const _ec = new EC('secp256k1'); //same as bit coin wallet


//When user want to create a new wallet. Give them a wallet key
router.post('/wallet/create', (req: Request, res: Response) => {
  const wallet = new Wallet(); //create a wallet for user
  res.json({
    address: wallet.getAddress(),
    secret: wallet.getSecret() 
  })
});

router.post('/transactions/create', (req: Request, res: Response) => {
  try {
    // const transaction = new Transaction(req.body.sender, req.body.receiver, req.body.amount); //create transaction information
    const key = _ec.keyFromPrivate(req.body.secret);
    const transaction = new Transaction(req.body.sender_public, req.body.receiver, req.body.amount);
    transaction.signTransaction(key);
    coins.addTransaction(transaction);

    res.json({
      message: "success"
    });
  } catch (err) {
    res.json({
      message: 'fail',
      reason: err.message
    })
  }

});

//See all transactions
router.get('/chain', (req: Request, res: Response) => {
  const chain = coins.blockchain;
  res.json(
    {chain}
  );
});

//Specify a block
router.get('/blocks/:index/transactions', (req: Request, res: Response) => {
  const block = coins.blockchain[parseInt(req.params.index)];
  const transactions = block.transactions;
  for (let transaction of transactions){
    transaction.validate = transaction.isValid();
  }
  res.json(
    {transactions}
  );
})

//Give reward to one receiver
router.get('/mine/:receiver', (req: Request, res: Response) => { 
  coins.minePendingTransactions(req.params.receiver)
  res.json({
    message: "success",
    reward: coins.reward
  });
})


//Get all pending transactions
router.get('/pending/transactions', (req: Request, res: Response) => {
  const pendings = coins.getAllPendingTransactions();
  res.json({
    pendings
  })
})


//Get balance
router.get('/balance/:address', (req: Request, res: Response) => { 
  res.json({
    balance: coins.getBalanceOfAddress(req.params.address)
  })
})


export default router;