import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Content from './pages/Content';

const App = () => {
  const [sidebarPosition, setSidebarPosition] = useState({ x: 0, y: 0 });
  const [navbarPosition, setNavbarPosition] = useState({ x: 0, y: 0 });

  const handleDragSidebar = (e, data) => {
    setSidebarPosition({ x: data.x, y: data.y });
  };

  const handleDragNavbar = (e, data) => {
    setNavbarPosition({ x: data.x, y: data.y });
  };

  return (
    <div className="relative sm:-8 min-h-screen flex flex-row">
      <div
        className="flex-auto relative bg-[#2F3338] w-[120px] h-[900px] absolute right-0"
        style={{
          transform: `translate(${sidebarPosition.x}px, ${sidebarPosition.y}px)`,
        }}
        draggable
        onDrag={(e) => e.preventDefault()}
        onDragEnd={handleDragSidebar}
      >
        <Sidebar />
      </div>
      <div
        className="flex-auto flex w-[1320px] h-full flex-col absolute"
        style={{
          transform: `translate(${navbarPosition.x}px, ${navbarPosition.y}px)`,
        }}
        draggable
        onDrag={(e) => e.preventDefault()}
        onDragEnd={handleDragNavbar}
      >
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