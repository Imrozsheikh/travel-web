import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import News from "./pages/News";
import DestinationDetail from "./pages/DestinationDetail";
import ServiceDetail from "./pages/ServiceDetail";
import SocialPage from "./pages/Social";
import Trip from "./pages/Trip";
import NewsDetails from "./pages/NewsDetail";

const Layout = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Header />}

      <div className={!hideLayout ? "pb-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/destination/:name" element={<DestinationDetail />} />
          <Route path="/service/:type" element={<ServiceDetail />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/trips" element={<Trip />} />
        </Routes>
      </div>

      {!hideLayout && <BottomNav />}
    </>
  );
};

export default Layout;
