import React from "react";
import Connect from "../components/Connect-wallet";
import Donate from "../components/Donate";
import Swap from "../components/Swap";
const Content = () => {
  return (
    <div className="flex items-center justify-center h-screen mt-10 relative ">
      <Connect />
      {/* <Donate/> */}
      {/* <Swap/> */}
      <div className="w-[380px] h-[380px] rounded-xl bg-[#2F3338] absolute top-[10px] left-[900px] flex justify-center items-center">
        <div className=" w-[330px] h-[330px] justify-between">
          <div className="pb-4 w-[330px] h-[50px] flex justify-between items-center">
            <p className="text-white text-2xl">Connect Wallet</p>
            <div className="w-[24px] h-[24px] flex justify-center items-center">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 5.75L5.25 19.25"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.75 19.25L5.25 5.75"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="w-[330px] h-[280px] flex flex-col space-y-4">
            <div className=" px-4 h-[80px] bg-[#3F444E] rounded-t-xl flex justify-start  items-center">
              <div className="w-[250px] h-[52px] flex justify-start items-center">
                <img className=" bg-white w-[52px] h-[52px] rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png" alt="" />
                <p className="mx-5 text-white text-xl">Uniswap Wallet</p>
              </div>
            </div>
            <div className=" px-4 h-[80px] bg-[#3F444E] flex justify-start  items-center">
              <div className="w-[250px] h-[52px] flex justify-start items-center">
                <img className="bg-white w-[52px] h-[52px] rounded-lg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png" alt="" />
                <p className="mx-5 text-white text-xl">Install MetaMask</p>
              </div>
            </div>
            <div className=" px-4 h-[80px] bg-[#3F444E] rounded-b-xl flex justify-start  items-center">
              <div className="w-[250px] h-[52px] flex justify-start items-center">
                <img className="bg-white w-[52px] h-[52px] rounded-lg" src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg" alt="" />
                <p className="mx-5 text-white text-xl">Coinbase Wallet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
