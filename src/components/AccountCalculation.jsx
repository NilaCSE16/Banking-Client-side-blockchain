import React from "react";

const AccountCalculation = ({ acnt }) => {
  const { functionName, methodId, blockNumber, hash, value, timeStamp } = {
    acnt,
  };
  console.log(acnt.blockNumber);
  let method = "";
  if (acnt.functionName === "fund()") {
    method = "Funded";
  } else if (acnt.functionName == "withdraw(uint256 amount)") {
    method = "Withdraw";
  } else if (
    acnt.functionName == "transferEther(address recipient,uint256 percentage)"
  ) {
    method = "Transfer ETH";
  } else {
    // console.log(methodId);
    method = acnt.methodId;
  }
  console.log(method);

  const valu = acnt.value / 1000000000000000000;
  console.log(valu);

  const date = new Date(acnt.timeStamp * 1000);
  const formattedDate = date.toLocaleString();
  console.log(formattedDate);

  return (
    <tbody>
      <tr>
        <td>
          <div className="text-sm ">{acnt.hash}</div>
        </td>
        <td>
          <div>
            <div className="text-sm">
              {method}
              {/* <p>{acnt.functionName}</p> */}
              {/* {() => getMethodName(acnt.methodId)} */}
            </div>
          </div>
        </td>
        <td>
          <div>
            <div className="text-sm">{acnt.blockNumber}</div>
          </div>
        </td>
        <td>
          <div>
            <div className="text-sm">{valu} USD</div>
          </div>
        </td>
        <td>
          <div>
            <div className="text-sm">{formattedDate}</div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default AccountCalculation;
