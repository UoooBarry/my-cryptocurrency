import { sign } from 'crypto';
import SHA256 from 'crypto-js/sha256';
import elliptic, { ec } from 'elliptic';
const EC = elliptic.ec;
const _ec = new EC('secp256k1'); //same as bit coin wallet

class Transaction{
  private sender: any
  private receiver: any;
  private amount: number;
  private timestamp: Date;
  private signature: any;
  validate?: boolean;

  constructor(sender: any, receiver: any, amount: number) {
    this.sender = sender;
    this.receiver = receiver;
    this.amount = amount;
    this.timestamp = new Date();
  }

  getDetail() {
    const { sender, receiver, amount, timestamp, signature } = this;
    return {
      sender,
      receiver,
      amount,
      timestamp,
      signature,
    };
  }

  calculateHash() {
    return SHA256(this.sender + this.receiver + this.amount).toString();
  }

  signTransaction(key: ec.KeyPair) { //Receive a key pair
    if (key.getPublic('hex') !== this.sender) {
      throw new Error('Key not match');
    }

    const hashTx = this.calculateHash();
    const signature = key.sign(hashTx, 'base64');
    this.signature = signature.toDER('hex');
    // console.log(this.signature)
  }

  isValid(): boolean {
    if (this.sender === null) {
      return true;
    } //Mining reward


    if (!this.signature || this.signature.length === 0) return false;

    const publicKey = _ec.keyFromPublic(this.sender, 'hex');
    
    return publicKey.verify(this.calculateHash(), this.signature); //If the hash is signed by the signature of this transaction

  }
}


export default Transaction;