import bugSvg from "../assets/BugBeetle.svg";
import userSvg from "../assets/User.svg";
import infoSvg from "../assets/Broadcast.svg";

const iconMap = {
  bug: bugSvg,
  user: userSvg,
  info: infoSvg,
};

const Notification = ({ title, desc, type }) => {
  return (
    <li className="flex gap-2">
      <div className="w-6 h-6 min-w-6 min-h-6 rounded-lg bg-[#E3F5FF] flex justify-center items-center">
        <img src={iconMap[type]} />
      </div>
      <div className="flex flex-col truncate">
        <p>{title}</p>
        <p className="text-xs text-white/[0.4]">{desc}</p>
      </div>
    </li>
  );
};

export default Notification;
