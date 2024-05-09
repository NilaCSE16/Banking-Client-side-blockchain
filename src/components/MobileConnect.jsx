import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { contractAddress } from "../ether-connections/constants.js";
import detectEthereumProvider from "@metamask/detect-provider";

const MobileConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  // const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

  // console.log(contractAddress);

  useEffect(() => {
    const connectWallet = async () => {
      // detectEthereumProvider();
      const injectedProvider = await detectEthereumProvider();
      // console.log(injectedProvider);

      if (injectedProvider) {
        setProvider(injectedProvider);
      } else {
        console.error(
          "Please install MetaMask or connect to a wallet provider"
        );
      }
    };

    connectWallet();
  }, []);

  const handleConnect = async () => {
    if (!provider) return;

    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setIsConnected(true);
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };
  const handleScanQR = async () => {
    if (!provider) return;

    try {
      // Generate a unique QR code string for your contract interaction (replace with your specific logic)
      const qrCodeString = `ethereum:pay?address=${contractAddress}&value=0.1`; // Example for a payment interaction

      // const qrCodeString = `https://sepolia.etherscan.io/address/${contractAddress}#code`;
      // Display the QR code using the qrcode.react component
      console.log("QR Code string:", qrCodeString);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };
  return (
    <div>
      {!isConnected && <button onClick={handleConnect}>Connect Wallet</button>}
      {isConnected && (
        <div>
          <p>Connected account: {account}</p>
          <button onClick={handleScanQR}>
            Scan QR Code to Interact with Contract
          </button>
        </div>
      )}
      {isConnected && (
        <QRCode
          value={`${contractAddress}`} // Example QR code for payment
          size={256}
          level="H"
        /> // Adjust size and error correction level as needed
      )}
    </div>
  );
};

export default MobileConnect;
