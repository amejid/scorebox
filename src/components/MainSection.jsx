import { v4 as uuid } from "uuid";
import Navbar from "./Navbar.jsx";
import arrowDownSvg from "../assets/ArrowDown.svg";
import EventCard from "./EventCard.jsx";
import Footer from "./Footer.jsx";

const dummyEvents = [
  {
    id: uuid(),
    period: "Mar 23 to Mar 26",
    city: "Toronto, Ontario",
    place: "Meridian Arts Centre",
    address: "5040 Yonge St., North York, ON M2N 6R8",
    open: true,
    entriesSubmitted: 72,
    musicSubmitted: 15,
  },
  {
    id: uuid(),
    period: "Mar 30 to Apr 2",
    city: "Regina, Saskatchewan",
    place: "Conexus Arts Centre",
    address: "200 Lakeshore Dr., Regina, SK S4S 7A1",
    open: false,
  },
  {
    id: uuid(),
    period: "Apr 13 to Apr 16",
    city: "Fredericton, New Brunswick",
    place: "Fredericton Convention Centre",
    address: "670 Queen St., Fredericton, NB E3B 1C2",
    open: false,
  },
  {
    id: uuid(),
    period: "Apr 20 to Apr 23",
    city: "Kelowna, British Columbia",
    place: "Rotary Centre for the Arts",
    address: "421 Cawston Ave., Kelowna, BC V1Y 6Z1",
    open: true,
    entriesSubmitted: 65,
    musicSubmitted: 12,
  },
];

const MainSection = ({ onOpenLeft, onOpenRight }) => {
  return (
    <div className="w-full min-w-[65%] min-h-screen flex flex-col relative">
      <Navbar onOpenLeft={onOpenLeft} onOpenRight={onOpenRight} />
      <div className="py-8 px-7">
        <div className="mb-6 flex gap-1 items-center">
          <p>All Events</p>
          <img src={arrowDownSvg} />
        </div>
        <ul className="grid mb-8 sm:grid-cols-2 gap-7 sm:pr-32">
          {dummyEvents.map(
            ({
              id,
              period,
              city,
              place,
              address,
              open,
              entriesSubmitted,
              musicSubmitted,
            }) => (
              <EventCard
                key={id}
                period={period}
                city={city}
                place={place}
                address={address}
                open={open}
                entriesSubmitted={entriesSubmitted}
                musicSubmitted={musicSubmitted}
              />
            )
          )}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default MainSection;
