import { useState } from "react";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  const [toggle, setToggle] = useState();
  const handleToggle = () => {
    setToggle((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <div className="flex bg-Secondary">
      <div className={`lg:block ${toggle ? "" : "hidden"}`}>
        <Sidebar toggle={toggle} onClick={handleToggle} />
      </div>

      <div className="w-full lg:w-[130%]  bg-Secondary px-8 lg:px-32 text-gray-200 h-full">
        <span
          onClick={setToggle}
          className="text-2xl mx-4 cursor-pointer lg:hidden block"
        >
          <i className="fa-solid fa-bars mt-6"></i>
        </span>
        {children}
      </div>
    </div>
  );
};

export default Layout;
