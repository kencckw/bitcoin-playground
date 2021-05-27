import { bip32, networks, payments } from 'bitcoinjs-lib';

export class HDSegWitAddresses {
  private _seed: string = '';
  private _seedBuffer?: Buffer = new Buffer('');
  private _path: string[] = [];
  private _p2shAddresses: string[] = [];

  private static DEFAULT_PATH = "m/44'/0'/1'/1/0";
  private static ACCOUNT_ADDRESS_INDEX = 3;
  private static PATH_ADDRESS_INDEX = 5;

  constructor() {
    this.addPath();
  }

  private updateP2shAddress = (index: number) => {
    if (!this.isSeedValid() || !this.isPathValid(index)) {
      return;
    }

    const path = this._path[index];
    const hdMaster = bip32.fromSeed(this._seedBuffer!, networks.bitcoin); // seed from above
    let payment = payments.p2wpkh({
      pubkey: hdMaster.derivePath(path).publicKey,
    });
    this._p2shAddresses[index] = payment.address!;
  };

  private getNextPath = () => {
    const validPaths = this._path
      .filter((_v, index) => this.isPathValid(index))
      .reverse();
    if (validPaths.length <= 0) {
      return HDSegWitAddresses.DEFAULT_PATH;
    }
    const items = validPaths[0].split('/');

    if (items.length - 1 >= HDSegWitAddresses.PATH_ADDRESS_INDEX) {
      const value = items[HDSegWitAddresses.PATH_ADDRESS_INDEX];
      items[HDSegWitAddresses.PATH_ADDRESS_INDEX] = (
        Number(value) + 1
      ).toString();
    } else if (items.length - 1 >= HDSegWitAddresses.ACCOUNT_ADDRESS_INDEX) {
      // update account
      const value = items[HDSegWitAddresses.ACCOUNT_ADDRESS_INDEX];
      const hasQuote = value.indexOf("'") >= 0;
      if (hasQuote) {
        items[HDSegWitAddresses.ACCOUNT_ADDRESS_INDEX] =
          (Number(value.replace("'", '')) + 1).toString() + "'";
      } else {
        items[HDSegWitAddresses.ACCOUNT_ADDRESS_INDEX] = (
          Number(value) + 1
        ).toString();
      }
    } else {
      return '';
    }
    return items.join('/');
  };

  getSeed = (): string => {
    return this._seed;
  };

  setSeed = (seed: string) => {
    this._seed = seed;
    if (!this.isSeedValid()) {
      this._seedBuffer = undefined;
      return;
    }
    this._seedBuffer = Buffer.from(seed, 'hex');
    this._path.forEach((_v, index) => this.updateP2shAddress(index));
  };

  isSeedValid = (): boolean => {
    try {
      const seedBuffer = Buffer.from(this._seed, 'hex');
      return seedBuffer.length >= 16 && seedBuffer.length <= 64;
    } catch (e) {
      return false;
    }
  };

  isPathValid = (index: number) => {
    return this._path[index].match(/^(m\/)?(\d+'?\/)*\d+'?$/) !== null;
  };

  setPath = (index: number, address: string) => {
    this._path[index] = address;
    this.updateP2shAddress(index);
  };

  addPath = () => {
    let newLength = this._path.push(this.getNextPath());
    this._p2shAddresses.push('');
    this.updateP2shAddress(newLength - 1);
  };

  removePath = (index: number) => {
    this._path.splice(index, 1);
    this._p2shAddresses.splice(index, 1);
  };

  getP2shAddresses = (index: number) => {
    return this._p2shAddresses[index];
  };

  getPath = (index: number) => {
    return this._path[index];
  };

  getPathObjects = () => {
    return this._path.map((path, index) => {
      return {
        path,
        address: this._p2shAddresses[index],
      };
    });
  };
}
