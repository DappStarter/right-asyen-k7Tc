require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stock rifle tortoise punch coral light army genuine'; 
let testAccounts = [
"0xa709da5ba0df2b721acab4e5911d4a377009f6b85174beb592782c84a5d9528e",
"0x172b3e077c61e08be594214f8c361172128c764d161c7f0450ad2ebc207072c0",
"0x4019b789d197cd9abfa505ecfe70ab437ce126a98bff4dca3da0d6c2da0cec19",
"0xab140ce513ee7058976bd79cca7f5c1d63fb953236bfb86e3f1306e38a56557e",
"0x7a00d1c6936cf5fba6ded28ad2161a55edd80b08a1d146e5cd9404378d87fac6",
"0x8494a96d077e848b0953d873122db580a40309a55aeb0ae04d7d4b5b82e43de2",
"0x410301bbc7ce28b07c1cee3f5856fdd9a6b7990b1900c69e261d0f5505ae8277",
"0x9493c40b6954271b1902aa9ce48e1633a7a3a71070fa84ee981ac558adcb4717",
"0xf92f7b9287f4ea928d14b4cb42d9fea00c1034625c3d891af681a13d98c001ec",
"0x9d0d0990764386bb1dd3f6c5fd760096ed934721d0afc4a03c1e4f7f0b7ac971"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

