import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3Contract, useChain } from "react-moralis";
import { ADDRESS, ABI } from "../utils/contractData";
import Query from "../components/contractFunctions/Query";
import Update from "../components/contractFunctions/Update";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const { switchNetwork, chainId, chain, account } = useChain();

  const connectAndCheck = async () => {
    await enableWeb3();
    if (chainId !== "0x5") {
      //change to goerli
      console.log("Wrong network, sending request to Goerli");
      switchNetwork("0x5");
    }
  };

  return (
    <div>
      <Head>
        <title>Basic Moralis template</title>
        <meta name="description" content="Generated Hachikoi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.border}>
        <h1>Connect me whit this cool app</h1>
        <button onClick={connectAndCheck}></button>

        <p>{`is web3 enabled?: ${isWeb3Enabled}`}</p>
        <p>Cuurent network is: {chainId}</p>
        <Query />
        <Update />
      </div>
    </div>
  );
}
