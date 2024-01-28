import { useState } from "react";
import { ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import { abi, contractAddress } from "../ether-connections/constants.js";
// import { listenForTransactionMine } from "../ether-connections/listenForTransactionMine.js";
import { Link, useLocation } from "react-router-dom";

const AllAccount = () => {
  const [funders, setFunders] = useState([]);
  // const [accountDetails, setAccountDetails] = useState([]);
  const location = useLocation();

  // const [account, setAccount] = useState([]);
  const account = [];

  // console.log("Location: ", accountDetails);

  const apiKey = "P2FWXRVZ6J1CB5QVM7U8ZQVWTDDNQ9ZZ51";
  fetch(
    `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const accountDetails = data.result;
      // console.log(accountDetails);
      // console.log("After fetch: ", accountDetails[0]);
      // const acc = accountDetails.filter((value) => value.from === funder);
      // const acc = [];

      for (const obj of accountDetails) {
        //   console.log("Obj: ", parseInt(obj.from));
        //   console.log("funder: ", parseInt(funder));
        //   console.log(parseInt(obj.from) === parseInt(funder));
        account.push(obj);
      }
      // console.log("Acc: ", account[0].from);
    });
  // console.log(accountDetails);
  const getAllUser = async (event) => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      // console.log(contract);
      try {
        const fundersArr = await contract.getFunders();
        // console.log("funders", fundersArr);

        let funders = [];
        fundersArr.forEach((element) => {
          if (!funders.includes(element)) {
            funders.push(element);
          }
        });
        setFunders(funders);
      } catch (error) {
        console.log(error);
      }
    } else {
      fundBtn.innerHTML = "Please install MetaMask";
    }
  };
  return (
    <div>
      {/* <h1> Acounts{funders}</h1> */}
      {funders.map((funder) => (
        <div key={funder}>
          <span> Account: {funder}</span>
          <Link
            to={`/viewaccount/:${funder}`}
            state={{ funder: funder, account: account }}
          >
            <button className="bg-fuchsia-600 m-4 text-white pl-4 pr-4 pt-2 pb-2 rounded-btn">
              View Details
            </button>
          </Link>
          <br />
        </div>
      ))}
      <div>
        {/* <Connect /> */}
        <button
          className="bg-fuchsia-800 mt-4 p-6 rounded-full text-white"
          onClick={getAllUser}
        >
          Show All Accounts
        </button>
      </div>
    </div>
  );
};

export default AllAccount;
