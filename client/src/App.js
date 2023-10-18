import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative bg-[#2F3338]">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
      </div>
    </div>
  )
}

export default App