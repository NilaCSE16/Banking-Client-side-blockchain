import React, { useState } from "react";
import { Contract, ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import { abi, contractAddress } from "../ether-connections/constants.js";

const GetBalance = () => {
  const [amount, getAmount] = useState(0);
  const showBalance = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(contractAddress);
      try {
        const balance = await provider.getBalance(contractAddress);
        console.log(ethers.utils.formatEther(balance));
        getAmount(ethers.utils.formatEther(balance));
      } catch (error) {
        console.log(error);
      }
    } else {
      balanceButton.innerHTML = "Please install MetaMask";
    }
  };
  return (
    <div className="pt-5">
      <h2 className="text-2xl text-fuchsia-600">Current Balance</h2>
      <div className="flex flex-row">
        {/* <div className="rounded-full bg-fuchsia-600 px-10"> */}
        {/* <p className="text-black  bg-fuchsia-300 px-10 py-4 text-1xl my-auto">
          {amount}
        </p> */}
        <input
          type="text"
          value={amount}
          className="input input-bordered w-24 md:w-auto bg-fuchsia-100 mt-10"
          readOnly
        />
        {/* </div> */}
        <button
          className=" btn rounded-btn bg-fuchsia-600 text-white text-1xl m-10"
          onClick={showBalance}
        >
          Show Balance
        </button>
      </div>
    </div>
  );
};

export default GetBalance;
