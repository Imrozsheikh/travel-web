import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout"; // separate component
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
