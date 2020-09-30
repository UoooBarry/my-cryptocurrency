import elliptic from 'elliptic';
const EC = elliptic.ec;
const ec = new EC('secp256k1'); //same as bit coin wallet

class Wallet{
  publicKey: string;
  private privateKey: string;
  private keyPair: any;

  constructor() {
    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic('hex');
    this.privateKey = this.keyPair.getPrivate('hex');
  }

  getAddress() {
    return this.publicKey;
  }

  getKey() {
    return this.keyPair;
  }

  getSecret() {
    return this.privateKey;
  }

}


export default Wallet;