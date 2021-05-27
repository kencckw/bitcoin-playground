import { MultiSignatureP2SHAddress } from '../multisig';

const expectPublicKeys = (n: string, previousPublicKeys?: string[]) => {
  let address = new MultiSignatureP2SHAddress();
  if (previousPublicKeys) {
    address['_publicKeys'] = previousPublicKeys;
  }
  address.setN(n);
  return expect(address.publicKeys);
};

const expectPublicKeyValid = (publicKey: string) => {
  let address = new MultiSignatureP2SHAddress();
  address.setPublicKey(0, publicKey);
  return expect(address.isValidPublicKey(0));
};

const expectP2SHAddress = (m: string, publicKeys: string[]) => {
  let address = new MultiSignatureP2SHAddress();
  address['_publicKeys'] = publicKeys;
  address.setM(m);
  return expect(address.calculateAddress());
};

const expectM = (m: string) => {
  let address = new MultiSignatureP2SHAddress();
  address.setM(m);
  return expect(address.m);
};

describe('MultiSignatureP2SHAddress', () => {
  describe('Public Keys', () => {
    it('should be able to control the length of public key by value n', () => {
      expectPublicKeys('0').toHaveLength(0);
      expectPublicKeys('2').toHaveLength(2);
      expectPublicKeys('2', ['1', '2', '3']).toEqual(['1', '2']);
      expectPublicKeys('3', ['1', '2']).toEqual(['1', '2', '']);
    });
  });

  describe('Validation', () => {
    it('should be able to validate public key', () => {
      expectPublicKeyValid('').toBeFalsy();
      expectPublicKeyValid('1234').toBeFalsy();
      expectPublicKeyValid(
        '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
      ).toBeTruthy();
    });
  });

  describe('Address', () => {
    it('should be able to generate a valid p2sh address', () => {
      const publicKeys = [
        '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
        '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
        '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
      ];
      expectP2SHAddress('1', publicKeys).toEqual(
        '35S6KvPkBrbgCEAUDPopKopJpJtHfJ1T7k',
      );
      expectP2SHAddress('2', publicKeys).toEqual(
        '36NUkt6FWUi3LAWBqWRdDmdTWbt91Yvfu7',
      );
      expectP2SHAddress('3', publicKeys).toEqual(
        '3DzZeJHxdCgWnDCjwmJZap1nHNLJNvWvGJ',
      );
    });
  });

  describe('M', () => {
    it('should be able to convert m to correct number', () => {
      expectM('-1').toBe(0);
      expectM('1').toBe(1);
      expectM('1.').toBe(1);
      expectM('a').toBe(0);
    });
  });
});
