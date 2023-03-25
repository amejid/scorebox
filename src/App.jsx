import SideMenu from "./components/SideMenu.jsx";
import MainSection from "./components/MainSection.jsx";
import NotificationSection from "./components/NotificationSection.jsx";
import { useState } from "react";

const App = () => {
  const [openLeft, setOpenLeft] = useState(true);
  const [openRight, setOpenRight] = useState(true);

  const openLeftHandler = () => {
    setOpenLeft((prev) => !prev);
  };

  const openRightHandler = () => {
    setOpenRight((prev) => !prev);
  };

  return (
    <div className="flex">
      {openLeft && <SideMenu />}
      <MainSection
        onOpenLeft={openLeftHandler}
        onOpenRight={openRightHandler}
      />
      {openRight && <NotificationSection />}
    </div>
  );
};

export default App;
