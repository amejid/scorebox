import { v4 as uuid } from "uuid";
import Activity from "./Activity.jsx";
import aliahImg from "../assets/users/AliahLane.svg";
import drewImg from "../assets/users/DrewCano.svg";
import eveImg from "../assets/users/EveLeroy.svg";
import kateImg from "../assets/users/KateMorrison.svg";
import lanaImg from "../assets/users/LanaSteiner.svg";

const dummyActivities = [
  {
    id: uuid(),
    title: "Added entries to Kelowna",
    desc: "Email@gmail.com",
    image: eveImg,
  },
  { id: uuid(), title: "Added students", desc: "1:32 AM", image: aliahImg },
  {
    id: uuid(),
    title: "Submitted a bug",
    desc: "Yesterday 12:39 AM",
    image: drewImg,
  },
  {
    id: uuid(),
    title: "Uploaded music",
    desc: "Last Thursday 3:34 AM",
    image: kateImg,
  },
  { id: uuid(), title: "Deleted entry", desc: "Aug 11", image: lanaImg },
];

const Activities = () => {
  return (
    <div>
      <p className="font-semibold mb-5">Activities</p>
      <ul className="flex flex-col gap-4">
        {dummyActivities.map(({ title, desc, image, id }) => (
          <Activity key={id} title={title} desc={desc} image={image} />
        ))}
      </ul>
    </div>
  );
};
export default Activities;
