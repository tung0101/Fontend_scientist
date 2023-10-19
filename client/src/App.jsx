import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './pages/Content';

const App = () => {
  return (
    <div className="relative sm:-8 min-h-screen flex flex-row">
      <div
        className="flex-auto relative bg-[#2F3338] w-[120px] h-[900px] left-0"
      >
        <Sidebar />
      </div>
      <div className="flex-auto flex w-[1320px] h-full flex-col absolute right-0">
        <div className="flex-grow bg-[#2F3338] h-[100px]">
          <Navbar className="justify-between" />
        </div>
        <div className="flex-grow bg-[#1A1C1E] w-[1320px] h-full">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;