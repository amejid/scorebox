import Notifications from "./Notifications.jsx";
import Activities from "./Activities.jsx";

const NotificationSection = ({ open, onOpenNotification }) => {
  return (
    <div
      className={`min-w-[20%] border-l border-white/[0.1] absolute right-0 top-0 sm:static ${
        open ? "flex z-[50] bg-[#1C1C1C] w-9/12 h-full" : "hidden"
      } min-h-screen sm:flex flex-col p-6 gap-8`}
    >
      {open && (
        <button className="self-end" onClick={onOpenNotification}>
          <strong className="text-xl align-center cursor-pointer">
            &times;
          </strong>
        </button>
      )}
      <Notifications />
      <Activities />
    </div>
  );
};

export default NotificationSection;
