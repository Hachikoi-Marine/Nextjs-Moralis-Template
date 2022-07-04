import React from "react";
import { useWeb3Contract } from "react-moralis";
import { ADDRESS, ABI } from "../../utils/contractData";

export default function Query() {
  const {
    data,
    error,
    runContractFunction: queryFunction,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: ABI,
    contractAddress: ADDRESS,
    functionName: "theNum",
  });

  return (
    <div className="query">
      <button disabled={isFetching} onClick={queryFunction}>
        Click me to query
      </button>
      <p>{`${data}`}</p>
    </div>
  );
}
