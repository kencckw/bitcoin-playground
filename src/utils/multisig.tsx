import ecc from 'tiny-secp256k1';
import { payments } from 'bitcoinjs-lib';

export class MultiSignatureP2SHAddress {
  private _m: number = 2;
  private _publicKeys: string[] = ['', '', ''];

  get n(): number {
    return this._publicKeys.length;
  }

  setN = (value: string) => {
    const n = Number.isNaN(Number(value)) ? 0 : Number(value);

    const publicKeys = this._publicKeys;
    if (Number.isNaN(n) || n <= 0) {
      this._publicKeys = [];
    } else if (publicKeys.length > n) {
      this._publicKeys = publicKeys.slice(0, n);
    } else if (publicKeys.length === n) {
    } else {
      this._publicKeys = [
        ...publicKeys,
        ...Array.apply(null, Array(n - publicKeys.length)).map(() => ''),
      ];
    }
  };

  get m(): number {
    return this._m;
  }

  setM = (value: string) => {
    this._m =
      Number.isNaN(Number(value)) || Number(value) <= 0 ? 0 : Number(value);
  };

  get publicKeys(): string[] {
    return this._publicKeys;
  }

  toPublicKeyObjects = () => {
    return this._publicKeys.map((key) => ({ value: key }));
  };

  setPublicKey = (index: number, publicKey: string) => {
    this._publicKeys[index] = publicKey;
  };

  isValid = (): boolean => {
    if (this._m > this._publicKeys.length) {
      return false;
    }

    return (
      undefined ===
      this._publicKeys.find((_v, index) => !this.isValidPublicKey(index))
    );
  };

  isValidPublicKey = (index: number) => {
    let publicKey = this.publicKeys[index];

    let buffer;
    try {
      buffer = Buffer.from(publicKey, 'hex');
    } catch (e) {
      return false;
    }
    return ecc.isPoint(buffer);
  };

  calculateAddress = () => {
    if (!this.isValid()) {
      return '';
    }

    const multiSig = payments.p2sh({
      redeem: payments.p2ms({
        m: this._m,
        pubkeys: this._publicKeys.map((value) => Buffer.from(value, 'hex')),
      }),
    });

    return multiSig.address;
  };
}
