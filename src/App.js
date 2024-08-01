import "./App.css";
import Home from "./pages/Home";
import OurTeam from "./components/ourTeam/OurTeam";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import StarsBackground from "./components/StarsBackground";
import EventsContainer from "./components/EventsContainer";
import FloatingButton from "./components/FloatingButton";
import SpiralGalaxy from "./components/SpiralGalaxy";
import FAQsContainer from "./components/FAQsContainer";
import Navbar from "./components/navBar/Navbar";
import NavBar from "./components/navBar/Nav";
import {
 
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Team from "./components/teamMembers/Team";
import OurAchievements from "./pages/achievements/OurAchievements";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllEvents from "./components/AllEvents";
import Splash from "./components/Splash/Splash";
import Event from "./pages/Event";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";
import Resources from "./pages/Resources";
import Events from "./technitude/Events";
import Hackathon from "./hackathon24/Hackathon";
import HackReg from "./hackathon24/HackReg";

const MainApp = ({ showSplash }) => {
  return (
    <>
      {!showSplash && (
        <span className="block md:hidden" data-aos="fade-left">
          <FloatingButton />
        </span>
      )}
      {!showSplash && (
        <div
          className="justify-center hidden md:flex items-center z-10 fixed bottom-0 left-5"
          data-aos="fade-right"
        >
          <Socials />
        </div>
      )}
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Home />
          <EventsContainer />
          {/* <OurTeam /> */}
          <FAQsContainer />
          <div className="relative overflow-hidden">
            <SpiralGalaxy />
          </div>
        </>
      )}
    </>
  );
};

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  useEffect(() => {
    console.log(location.pathname);
    setPath(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <div style={{ overflow: "hidden" }} className="w-screen">
        {!showSplash || path !== "/" ? (
          <>
            <NavBar inView={path} />
            <Navbar path={path} />
          </>
        ) : null}
        <StarsBackground />
        {/* <Router basename="/gits"> */}
          <Routes>
            <Route
              exact
              path="/"
              element={<MainApp showSplash={showSplash} />}
            />
            <Route path="/ourTeam" element={<Team />} />
            {/* <Route path="/Technitude" element={<Events />} /> */}
            <Route path="/hackathon24" element={<Hackathon />} />
            <Route path="/hackReg" element={<HackReg />} />
            <Route path="/achievements" element={<OurAchievements />} />
            <Route path="/resources" element={<Resources />} />
            <Route
              path="/2022-23/committee_members"
              element={<Navigate to="/ourTeam" />}
            />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/events/:id" element={<Event />} />
            <Route path="/events/:id/register" element={<Register />} />
            <Route path="/events/:id/feedback" element={<Feedback />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {!showSplash || path !== "/" ? <Footer path={path} /> : null}
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;

// To Build the app please use `npm run build nosources-source-map` or similar commands
