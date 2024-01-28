// import { Wallet, ethers } from "ethers";
import { Contract, ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import { useEffect, useState } from "react";
import Connect from "./Connect.jsx";
// import TransactionDetails from "./TransactionDetails.jsx";

function Home() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  });
  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account != accounts[0]) {
      setAccount(accounts[0]);
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }
  async function connectToMetamask() {
    if (window.ethereum) {
      try {
        const providers = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(providers);
        await providers.send("eth_requestAccounts", []);
        const signer = providers.getSigner();
        const address = await signer.getAddress();
        // const acc = await signer.getBalance();
        console.log("Metamask connected: ", providers);
        // console.log("Providers: ", acc);
        setIsConnected(true);
        setAccount(address);
        console.log(account);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Please install Metamask");
    }
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-fuchsia-400 p-2">
        {" "}
        Welcome to our Decentralized Bank
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media.istockphoto.com/id/1084096262/vector/concept-of-mobile-payments-wallet-connected-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=noILf6rTUyxN41JnmeFhUmqQWiCWoXlg0zCLtcrabD4="
            alt=""
          />
          <div>
            {/* <Connect /> */}
            <button
              className="bg-fuchsia-800 p-6 rounded-full text-white"
              onClick={connectToMetamask}
            >
              Connect to your Wallet
            </button>
          </div>
        </div>
      </div>
      {/* <TransactionDetails /> */}
    </>
  );
}

export default Home;
