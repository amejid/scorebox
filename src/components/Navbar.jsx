import sideBarSvg from "../assets/Sidebar.svg";
import starSvg from "../assets/Star.svg";
import sunSvg from "../assets/Sun.svg";
import clockSvg from "../assets/ClockCounterClockwise.svg";
import searchSvg from "../assets/Search.svg";
import bellSvg from "../assets/Bell.svg";
import byeWindSvg from "../assets/ByeWind.svg";
import { useState } from "react";
import SideMenu from "./SideMenu.jsx";
import NotificationSection from "./NotificationSection.jsx";

const Navbar = ({ onOpenLeft, onOpenRight }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const onOpenSideMenu = () => {
    setOpenSideMenu((prev) => !prev);
  };

  const onOpenNotification = () => {
    setOpenNotification((prev) => !prev);
  };

  return (
    <div className="py-6 px-8 flex justify-between border-b border-white/[0.1] w-auto">
      <div className="flex sm:hidden gap-2 items-center">
        <button onClick={onOpenSideMenu}>
          <img src={byeWindSvg} />
        </button>
      </div>
      {openSideMenu && (
        <SideMenu open={openSideMenu} onOpenSideMenu={onOpenSideMenu} />
      )}
      <div className="hidden sm:flex gap-5 items-center">
        <button onClick={onOpenLeft}>
          <img src={sideBarSvg} />
        </button>
        <img src={starSvg} />
        <p>
          Event Selection <span className="text-white/[0.2]">/</span>
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <div className="bg-white/[0.1] rounded-lg hidden sm:flex gap-1 p-1 h-7">
          <img src={searchSvg} />
          <input
            placeholder="Search"
            className="w-40 bg-transparent border-none outline-none"
          />
        </div>
        <img className="hidden sm:block" src={sunSvg} />
        <img className="hidden sm:block" src={clockSvg} />
        <button className="sm:hidden" onClick={onOpenNotification}>
          <img src={bellSvg} />
        </button>
        <img className="hidden sm:block" src={bellSvg} />
        {openNotification && (
          <NotificationSection
            open={openNotification}
            onOpenNotification={onOpenNotification}
          />
        )}
        <button className="hidden sm:block" onClick={onOpenRight}>
          <img src={sideBarSvg} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
