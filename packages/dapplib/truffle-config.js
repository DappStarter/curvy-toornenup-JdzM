require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture struggle dash saddle evidence grace inhale foster gentle'; 
let testAccounts = [
"0x3ba44f37527ace2b7b766a44edee0c6eb36350070634988c0342dc15bbb04719",
"0x257f4092e61323268444d43c0107a5f4e92bdd96a202270c485e2f9f5a104c87",
"0xdba853d308c4c9290328e7c0f707552cd66d9695ac566041045f2e4ce71ed48f",
"0x2f684f156c502738da6213c41c2f8007738d9d72175ba4c6b8018c1b11cb2831",
"0xe2aafeb5f96bc3d72bc597169fc94b14cce10cb15e288a7e158b21cefec4d64b",
"0xf6945f47faa3142cf818175c08118bb343755271ec8686c5ae680fc3a6c76abc",
"0x3fad36b85c9e8db9629f8c68a60c13d9f61dbd95f6f3f9decd3891089074347b",
"0x1454ff53d85a1d6ae35b8e636472cc2210db602239dc39cb3821fd1171e08e58",
"0xda8db0e3bb394ca720b3333c56aea0beeee9ac1a8c2bd0af2aff4a30fbf8753e",
"0x9843396e49ed26f6d29461b725a4bd7ec608020b5ee37fb2f214fa867020bda3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


