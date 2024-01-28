import { useRef } from "react";
import { ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import { abi, contractAddress } from "../ether-connections/constants.js";
import {
  accountsInfo,
  listenForTransactionMine,
} from "../ether-connections/listenForTransactionMine.js";
const Deposit = () => {
  const ethAmountRef = useRef();

  const handleDeposit = async (event) => {
    event.preventDefault();
    const ethAmount = ethAmountRef.current?.value;
    console.log(`Funding with ${ethAmount}...`);
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      //console.log(signer);
      const address = signer.getAddress();
      console.log(address);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      //console.log(contract);
      try {
        const transactionResponse = await contract.fund({
          value: ethers.utils.parseEther(ethAmount),
        });
        await listenForTransactionMine(transactionResponse, provider);
        contract.on("Funded", (address, ethAmount, event) => {
          let info = {
            from: address,
            to: contractAddress,
            value: ethers.utils.formatEther(ethAmount),
            data: event,
          };
          const acc = JSON.stringify(info, null, 4);
          console.log(acc);
          accountsInfo.push(info);
        });
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
      <form onSubmit={handleDeposit}>
        <input
          id="eth-amount"
          placeholder="eth-amount"
          type="text"
          ref={ethAmountRef}
          className="w-96 p-5 rounded-full border-solid border-2 border-indigo-600"
        />
        <button
          type="submit"
          className=" btn rouded-full bg-fuchsia-600 text-white text-1xl mx-4"
        >
          Deposit
        </button>
      </form>
    </div>
  );
};

export default Deposit;
