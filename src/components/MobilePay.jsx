// import { useRef } from "react";
// import { ethers } from "../ether-connections/ethers-5.6.esm.min.js";
// import { abi, contractAddress } from "../ether-connections/constants.js";
// import {
//   accountsInfo,
//   listenForTransactionMine,
// } from "../ether-connections/listenForTransactionMine.js";
import MobileConnect from "./MobileConnect.jsx";

const MobilePay = () => {
  // const ethAmountRef = useRef();
  // const addressRef = useRef();
  // const handleMobileTransfer = async (event) => {
  //   event.preventDefault();
  //   const ethAmount = ethAmountRef.current?.value;
  //   const toAddress = addressRef.current?.value;
  //   // console.log(`Transaction with ${ethAmount}...and address ${toAddress}`);

  //   if (typeof window.ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner();
  //     //   const address = signer.getAddress();
  //     const contract = new ethers.Contract(contractAddress, abi, signer);
  //     try {
  //       const tx = await contract.payWithMobile(
  //         ethers.utils.parseEther(ethAmount),
  //         toAddress,
  //         { gasLimit: 210000 }
  //       );
  //       console.log("Transaction sent:", tx.hash);

  //       // Listen for transaction confirmation (optional)
  //       tx.wait().then((receipt) => {
  //         console.log("Transaction confirmed:", receipt.transactionHash);
  //       });
  //       contract.on("Transferred", (address, toAddress, ethAmount, event) => {
  //         let info = {
  //           from: address,
  //           to: toAddress,
  //           value: ethers.utils.formatEther(ethAmount),
  //           gasLimit: 250000,
  //           data: event,
  //         };
  //         accountsInfo.push(info);
  //         console.log(JSON.stringify(info, null, 4));
  //       });
  //       await listenForTransactionMine(tx, provider);
  //     } catch (error) {
  //       console.error("Payment failed:", error);
  //     }
  //     //   try {
  //     //     const transactionResponse = await contract.transferEther(
  //     //       toAddress,
  //     //       ethers.utils.parseEther(ethAmount)
  //     //     );
  //     //     contract.on("Transferred", (address, toAddress, ethAmount, event) => {
  //     //       let info = {
  //     //         from: address,
  //     //         to: toAddress,
  //     //         value: ethers.utils.formatEther(ethAmount),
  //     //         gasLimit: 250000,
  //     //         data: event,
  //     //       };
  //     //       accountsInfo.push(info);
  //     //       console.log(JSON.stringify(info, null, 4));
  //     //     });
  //     //     await listenForTransactionMine(transactionResponse, provider);
  //     //   } catch (error) {
  //     //     console.log(error);
  //     //   }
  //   } else {
  //     //   fundBtn.innerHTML = "Please install MetaMask";
  //     console.log("Please install MetaMask");
  //   }
  //   event.target.reset();
  // };
  return (
    <div className="py-10">
      <MobileConnect></MobileConnect>
      {/* <h2> Tranfer Ether</h2>
      <form onSubmit={handleMobileTransfer}>
        <input
          id="eth-amount"
          placeholder="eth-amount"
          type="text"
          ref={ethAmountRef}
          className="w-96 p-5 rounded-full border-solid border-2 border-indigo-600"
        />{" "}
        <br />
        <input
          id="address"
          placeholder="Enter the address where you want to transfer"
          type="text"
          ref={addressRef}
          className="w-96 mt-2 p-5 rounded-full border-solid border-2 border-indigo-600"
        />
        <button
          type="submit"
          className=" btn rounded-full bg-fuchsia-600 text-white text-1xl mx-4"
        >
          Transfer Ether
        </button>
      </form> */}
    </div>
  );
};

export default MobilePay;
