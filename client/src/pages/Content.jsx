import React from "react";
import Connect from "../components/Connect-wallet";
import Donate from "../components/Donate";
const Content = () => {
  return (
    <div className="flex items-center justify-center h-screen mt-10">
      {/* <Connect /> */}
      <Donate/>
    </div>
  );
};

export default Content;