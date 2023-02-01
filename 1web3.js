// Connect to Ethereum network
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// Fetch transaction data using transaction hash
async function fetchTransactionByHash(transactionHash) {
  const transaction = await web3.eth.getTransaction(transactionHash);
  console.log(transaction);
}
