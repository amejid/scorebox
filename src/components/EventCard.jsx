import lockClosedSvg from "../assets/LockSimple.svg";
import lockOpenSvg from "../assets/LockSimpleOpen.svg";

const EventCard = ({
  period,
  city,
  place,
  address,
  open,
  entriesSubmitted,
  musicSubmitted,
}) => {
  return (
    <li className="p-4 bg-white/[0.05] rounded-2xl flex flex-col justify-between">
      <div>
        <div className="flex justify-end mb-1.5">
          <p className="font-semibold text-xl leading-5">{period}</p>
        </div>
        <div className="flex flex-col font-semibold mb-6">
          <p>Versastyle: {city.split(",")[0]}</p>
          <p>{city}</p>
          <p>{place}</p>
          <p>{address}</p>
        </div>
        {open && (
          <div className="pl-2 flex flex-col gap-5 mb-7 w-2/4">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#95A4FC]"></div>
                <p className="text-xs">Entries Submitted</p>
              </div>
              <p className="text-xs text-white/[0.5]">{entriesSubmitted}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6C7F8]"></div>
                <p className="text-xs">Music Submitted</p>
              </div>
              <p className="text-xs">{musicSubmitted}</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <div className="flex gap-2 items-center">
          <button className="py-1 px-4 text-xs bg-[#95A4FC] text-[#1C1C1C] rounded-full">
            {open ? "Select Event" : "Locked"}
          </button>
          <img src={open ? lockOpenSvg : lockClosedSvg} />
        </div>
      </div>
    </li>
  );
};

export default EventCard;
