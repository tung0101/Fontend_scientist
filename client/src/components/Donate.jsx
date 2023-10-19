import React from "react";

const Donate = () => {
  return (
    <div className="w-[560px] h-[698px] ">
      <div className="flex justify-center">
        <div className="w-[379px] h-[64px] bg-[#2F3338] rounded-full flex gap-10 justify-center items-center">
          <div className="w-[164px] h-[56px] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Swap</p>
          </div>
          <div className="w-[164px] h-[56px] bg-[#3F444E] rounded-full flex justify-center items-center">
            <p className="text-[#FFFFFF]">Donate</p>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[560px] h-[610px] bg-[#2F3338] rounded-lg mt-3 ptb-5 flex justify-center">
          <div className=" text-white w-[480px] h-[518px] my-auto ">
            <div className="flex justify-center ">
              <p className="text-center text-lg">Donate</p>
            </div>

            <div>
              <div className="w-[480px] h-[62px] rounded-lg bg-[#6F49FD] flex justify-center ">
                <p className="text-white text-lg my-auto ">Connect Wallet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
