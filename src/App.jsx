import React from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";

const App = () => {
  return (
    <div className="bg-[#4443d1] h-full flex flex-col justify-between overflow-x-hidden">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
