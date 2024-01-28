import React, { useRef } from "react";
import { Contract, ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import { abi, contractAddress } from "../ether-connections/constants.js";
import {
  accountsInfo,
  listenForTransactionMine,
} from "../ether-connections/listenForTransactionMine.js";

const Transfer = () => {
  const ethAmountRef = useRef();
  const addressRef = useRef();
  const handleTransfer = async (event) => {
    event.preventDefault();
    const ethAmount = ethAmountRef.current?.value;
    const toAddress = addressRef.current?.value;
    console.log(`Transaction with ${ethAmount}...and address ${toAddress}`);

    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = signer.getAddress();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const transactionResponse = await contract.transferEther(
          toAddress,
          ethers.utils.parseEther(ethAmount)
        );
        contract.on("Transferred", (address, toAddress, ethAmount, event) => {
          let info = {
            from: address,
            to: toAddress,
            value: ethers.utils.formatEther(ethAmount),
            gasLimit: 250000,
            data: event,
          };
          accountsInfo.push(info);
          console.log(JSON.stringify(info, null, 4));
        });
        await listenForTransactionMine(transactionResponse, provider);
      } catch (error) {
        console.log(error);
      }
    } else {
      fundBtn.innerHTML = "Please install MetaMask";
    }
    event.target.reset();
  };
  return (
    <div className="py-10">
      <h2> Tranfer Ether</h2>
      <form onSubmit={handleTransfer}>
        <input
          id="eth-amount"
          placeholder="eth-amount"
          type="text"
          ref={ethAmountRef}
          className="w-96 p-5 rounded-full border-solid border-2 border-indigo-600"
        />
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
      </form>
    </div>
  );
};

export default Transfer;
