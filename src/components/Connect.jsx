import React, { useState } from "react";
import { Contract, ethers } from "../ether-connections/ethers-5.6.esm.min.js";

const Connect = () => {
  const [state, setState] = useState("Connect your Metamask Wallet");
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(undefined);
  const connectMetamask = async () => {
    if (typeof window.ethereum !== "undefined") {
      // console.log("I see a metamask");
      // await window.ethereum.request({ method: "eth_requestAccounts" });
      // setState("Connected");

      const providers = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(providers);
      await providers.send("eth_requestAccounts", []);
      const signer = providers.getSigner();
      console.log("Signer", signer);
      const address = await signer.getAddress();
      console.log(address);
      // const acc = await signer.getBalance();
      console.log("Metamask connected: ", providers);
      // console.log("Providers: ", acc);

      setState("Connected");
      setAccount(address);
      console.log(account);

      window.alert(" Yeh!!!  connected to the metamask!!!!!!");
    } else {
      setState("Please Install Metamask");
      console.log("Don't see metamask");
    }
  };
  return (
    <div>
      <button
        className="btn rouded-full bg-fuchsia-600 text-white text-2xl"
        onClick={connectMetamask}
      >
        {state}
      </button>
    </div>
  );
};

export default Connect;
