import byeWindSvg from "../assets/ByeWind.svg";
import arrowDownSvg from "../assets/ArrowDown.svg";
import buildingsSvg from "../assets/Buildings.svg";
import gearSixSvg from "../assets/GearSix.svg";
import logoSvg from "../assets/Logo.svg";

const SideMenu = ({ open, onOpenSideMenu }) => {
  return (
    <div
      className={`p-6 absolute left-0 top-0 sm:static ${
        open ? "flex z-[50] bg-[#1C1C1C] w-9/12 h-full" : "hidden"
      } sm:flex flex-col min-w-[15%] justify-between min-h-screen border-r border-white/[0.1]`}
    >
      <div>
        <div className="flex gap-2 items-center justify-between mb-6">
          <div className="flex gap-2 items-center">
            <img src={byeWindSvg} />
            <p>Clark Kent</p>
          </div>
          {open && (
            <button onClick={onOpenSideMenu}>
              <strong className="text-xl align-center cursor-pointer">
                &times;
              </strong>
            </button>
          )}
        </div>
        <div className="mb-16">
          <div className="flex gap-5 mb-3">
            <p className="text-white/[0.4]">Favourites</p>
            <p className="text-white/[0.2]">Recently</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white/[0.2]"></div>
            <p>Versastyle: Toronto</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-white/[0.4] mb-3">Dashboards</p>
          <div className="flex gap-2 items-center">
            <img src={arrowDownSvg} />
            <div className="flex gap-2 items-center">
              <img src={buildingsSvg} />
              <p className="text-white/[0.8]">Event Selection</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white/[0.4] mb-3">Global Settings</p>
          <div className="flex gap-2 items-center">
            <img src={arrowDownSvg} />
            <div className="flex gap-2 items-center">
              <img src={gearSixSvg} />
              <p className="text-white/[0.8]">Settings</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={logoSvg} />
      </div>
    </div>
  );
};

export default SideMenu;
