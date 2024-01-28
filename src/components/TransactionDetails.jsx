// import React, { useEffect } from "react";
// import { Contract, ethers } from "../ether-connections/ethers-5.6.esm.min.js";
// import { abi, contractAddress } from "../ether-connections/constants.js";
// const TransactionDetails = () => {

//   useEffect(() => {
//     (async function () {
//         const provider = new ethers.providers.JsonRpcProvider('https://rpc2.sepolia.org');
//       try {
//         if (typeof window.ethereum !== "undefined") {
//           const contract = new ethers.Contract(contractAddress, contractABI, provider);
//           const filter = contract.filters.Funded(address funder, uint256 amount); // Replace 'SomeEvent' with the actual event name
//           const events = await provider.getLogs({
//               fromBlock: 0, // Or a specific starting block
//               toBlock: 'latest', // Or a specific ending block
//               address: contractAddress,
//               topics: filter.topics
//           });

//           const blockNumber = await provider.getBlockNumber();
//           const transactionCount = await provider.getTransactionCount(contractAddress);

//         const transactions = [];
//         for (let i = 0; i < transactionCount; i++) {
//            const transactionReceipt = await provider.getTransactionReceipt(contractAddress, i);
//             if (transactionReceipt) {
//              transactions.push(transactionReceipt);
//             }
// }
//         }

//       } catch (error) {
//         console.error("Error listening for transactions:", error);
//       }
//     })();
//   }, []);
//   return <div></div>;
// };

// export default TransactionDetails;
