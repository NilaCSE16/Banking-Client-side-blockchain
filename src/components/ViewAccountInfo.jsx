import { useLoaderData, useLocation } from "react-router-dom";
import { accountsInfo } from "../ether-connections/listenForTransactionMine";
import { useEffect, useState } from "react";
import { abi, contractAddress } from "../ether-connections/constants";
import { ethers } from "../ether-connections/ethers-5.6.esm.min.js";
import AccountCalculation from "./AccountCalculation.jsx";

const ViewAccountInfo = () => {
  const location = useLocation();
  const { funder, account } = location.state;
  const acc = [];
  // const [account, setAccount] = useState([]);

  // const apiKey = "P2FWXRVZ6J1CB5QVM7U8ZQVWTDDNQ9ZZ51";
  // useEffect(() => {
  //   async function getInfo() {
  //     await fetch(
  //       `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
  //     )
  //       // const fetchedData = await response.json();
  //       // console.log("fetched: ", fetchedData);
  //       // setAccount(fetchedData);
  //       // fetch(
  //       //     `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${contractAddress}&startblock=0&endblock=99999999&sort=asc&apikey=${apiKey}`
  //       //   )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const accountDetails = data.result;
  //         console.log(accountDetails);
  //         // console.log("After fetch: ", accountDetails[0]);
  //         //   const acc = accountDetails.filter((value) => value.from === funder);
  //         const acc = [];

  //         for (const obj of accountDetails) {
  //           //   console.log("Obj: ", parseInt(obj.from));
  //           //   console.log("funder: ", parseInt(funder));
  //           //   console.log(parseInt(obj.from) === parseInt(funder));

  //           if (parseInt(obj.from) == parseInt(funder)) {
  //             acc.push(obj);
  //             setAccount[obj];
  //             console.log("Obj1111: ", obj.from);
  //           }
  //         }
  //         console.log("Acc: ", acc);
  //       });
  //   }
  //   if (!account) {
  //     getInfo();
  //   }
  // }, []);
  for (const obj of account) {
    // console.log("Obj: ", parseInt(obj.from));
    // console.log("funder: ", parseInt(funder));
    //   console.log(parseInt(obj.from) === parseInt(funder));

    if (parseInt(obj.from) == parseInt(funder)) {
      acc.push(obj);
      // console.log("0000000000000: ", setAccount[obj]);
      // console.log("Obj1111: ", obj.from);
    }
  }

  console.log("From Button: ", funder);
  console.log("From Accounts: ", acc);
  return (
    <div>
      {/* <h2>View All: {funder}</h2>
      <p>Current Account: {acc.length}</p> */}
      <h2 className="text-fuchsia-500 font-bold text-4xl text-center">
        Transaction History
      </h2>
      <div className="overflow-x-auto mt-5">
        <table className="table text-black">
          {/* head */}
          <thead className="bg-fuchsia-300 text-black text-sm">
            <tr>
              <th>Transaction Hash</th>
              <th>Method</th>
              <th>Block</th>
              <th>Value</th>
              <th>Time</th>
              {/* <th></th> */}
            </tr>
          </thead>
          {/* row 1 */}
          {acc.map((acnt) => (
            <AccountCalculation
              key={acnt.blockNumber}
              acnt={acnt}
            ></AccountCalculation>
            // <tr key={acnt.blockNumber}>
            //   <th>
            //     <div className="text-sm ">{acnt.hash}</div>
            //   </th>
            //   <td>
            //     <div>
            //       <div className="text-sm">
            //         <button
            //           onClick={() =>
            //             getMethodName(acnt.functionName, acnt.methodId)
            //           }
            //         >
            //           Click Me
            //         </button>
            //         {/* <p>{acnt.functionName}</p> */}
            //         {/* {() => getMethodName(acnt.methodId)} */}
            //       </div>
            //     </div>
            //   </td>
            //   <td>
            //     <div>
            //       <div className="text-sm">{acnt.blockNumber}</div>
            //     </div>
            //   </td>
            //   <td>
            //     <div>
            //       <div
            //         className="text-sm"
            //         onClick={() => USDtoETH(acnt.value)}
            //       >
            //         {acnt.value} USD
            //       </div>
            //     </div>
            //   </td>
            //   <th>
            //     <div>
            //       <div
            //         className="text-sm"
            //         onClick={() => dateTimeFormat(acnt.timeStamp)}
            //       >
            //         {acnt.timeStamp}
            //       </div>
            //     </div>
            //   </th>
            // </tr>
          ))}
        </table>
      </div>
    </div>
  );
  // function getMethodName(functionName, methodId) {
  //   // console.log(typeof functionName);
  //   let method = "";
  //   if (functionName === "fund()") {
  //     method = "Funded";
  //   } else if (functionName == "withdraw(uint256 amount)") {
  //     method = "Withdraw";
  //   } else if (
  //     functionName == "transferEther(address recipient,uint256 percentage)"
  //   ) {
  //     method = "Transfer ETH";
  //   } else {
  //     // console.log(methodId);
  //     method = methodId;
  //   }
  //   console.log(method);
  // }

  // function USDtoETH(value) {
  //   const val = value / 1000000000000000000;
  //   console.log(val);
  // }

  // function dateTimeFormat(timestamp) {
  //   const date = new Date(timestamp * 1000);
  //   const formattedDate = date.toLocaleString();
  //   console.log(formattedDate);
  // }
};

export default ViewAccountInfo;
