import { v4 as uuid } from "uuid";
import Notification from "./Notification.jsx";

const dummyNotifications = [
  {
    id: uuid(),
    title: "You have a bug that needs to be fixed.",
    desc: "Email@gmail.com",
    type: "bug",
  },
  { id: uuid(), title: "New user registered", desc: "1:23 AM", type: "user" },
  {
    id: uuid(),
    title: "You have a bug that needs to be fixed.",
    desc: "0:32 AM",
    type: "bug",
  },
  {
    id: uuid(),
    title: "Andi Lane sent payment",
    desc: "Yesterday 12:39 AM",
    type: "info",
  },
];

const Notifications = () => {
  return (
    <div>
      <p className="font-semibold mb-5">Notifications</p>
      <ul className="flex flex-col gap-4">
        {dummyNotifications.map(({ id, title, desc, type }) => (
          <Notification key={id} title={title} desc={desc} type={type} />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
