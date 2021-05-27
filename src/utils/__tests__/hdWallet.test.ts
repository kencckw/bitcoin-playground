import { HDSegWitAddresses } from '../hdWallet';

const expectSeedValid = (seed: string) => {
  let address = new HDSegWitAddresses();
  address.setSeed(seed);
  return expect(address.isSeedValid());
};

const expectPathValid = (path: string) => {
  let address = new HDSegWitAddresses();
  address.setPath(0, path);
  return expect(address.isPathValid(0));
};

const expectGeneratedAddress = (seed: string, path: string) => {
  let address = new HDSegWitAddresses();
  address.setPath(0, path);
  address.setSeed(seed);
  return expect(address.getP2shAddresses(0));
};

const expectNextPath = (path: string) => {
  let address = new HDSegWitAddresses();
  address.setPath(0, path);
  address.addPath();
  return expect(address.getPath(1));
};

describe('HDSegWitAddresses', () => {
  describe('Validation', () => {
    it('should be able to validate seed', () => {
      const seeds = [
        '0123456789012345678901234567890123456789',
        '970ac28abc96a3878886bdb13e72ea3ee316200064a3e1c174ace137a04e18e344337c0baba0fbcb80f0a909bfa1346e46adb50d2b537d83b0d55a7b0e012f6b',
      ];
      seeds.forEach((seed) => expectSeedValid(seed).toBeTruthy());
    });

    it('should be able to validate path', () => {
      const validPaths = [
        `m/44'`,
        `m/44'/0'`,
        `m/44'/0'/1'`,
        `m/44'/0'/1'/1`,
        `m/44'/0'/1'/1/0`,
      ];

      const invalidPaths = [``, `m/'`, `m/44'/`, `m/44'/'`, `m/44'/'0`];

      validPaths.forEach((path) => expectPathValid(path).toBeTruthy());
      invalidPaths.forEach((path) => expectPathValid(path).toBeFalsy());
    });
  });

  describe('Address', () => {
    it('should be able to generate a correct address', () => {
      const seed =
        '7477c90c17f545530f8e275b0509cd6eb849eafca600e3dfac76da68c639a57760a9102c1952542a59115b70fd8415a908182710c71d55f98fe217aa6ee46d05';

      const validPaths = [
        {
          expected: 'bc1q8gp6nys8qxe8p9mpe2hz8wgacrnuj3zh0hht7m',
          path: `m/44'`,
        },
        {
          expected: 'bc1qs2ucprrfq7tee92xfsphag3st35mrtr8sakp59',
          path: `m/44'/0'`,
        },
        {
          expected: 'bc1qt7ezdanctzdgzdandve6qc8uya7yv88370q2ks',
          path: `m/44'/0'/1'`,
        },
        {
          expected: 'bc1qtp0mqlq5n2wa680kv5hfj20498nvfuqxr7sz80',
          path: `m/44'/0'/1'/1`,
        },
        {
          expected: 'bc1q9mxngxcq6mumxx2pzl0n3enxrtkwt0nss9sxfc',
          path: `m/44'/0'/1'/1/0`,
        },
      ];

      validPaths.forEach((data) =>
        expectGeneratedAddress(seed, data.path).toBe(data.expected),
      );
    });
  });

  describe('Next Path', () => {
    it('should be able to generate a new path', () => {
      expectNextPath(`m/44'/0'/1'/1`).toBe(`m/44'/0'/2'/1`);
      expectNextPath(`m/44'/0'/1'/1/0`).toBe(`m/44'/0'/1'/1/1`);
      expectNextPath(`m/44'/0'/1'/1/1`).toBe(`m/44'/0'/1'/1/2`);
    });
  });
});
