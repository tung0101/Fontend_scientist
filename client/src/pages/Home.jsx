import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import Content from "./Content";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="content flex-grow bg-black text-white overflow-hidden">
            <div className="custom-scrollbar overflow-y-scroll">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;