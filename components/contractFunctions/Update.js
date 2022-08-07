import React from "react";
import { useWeb3Contract } from "react-moralis";
import { ADDRESS, ABI } from "../../utils/contractData";

export default function Update() {
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: ABI,
      contractAddress: ADDRESS,
      functionName: "changeNum",
      params: {
        _newNum: 1998,
      },
    });

  return (
    <div className="update">
      <button disabled={isFetching} onClick={runContractFunction}>
        Click me to set 1998
      </button>
    </div>
  );
}
