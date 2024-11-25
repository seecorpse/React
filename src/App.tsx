import HomePage from "./components/HomePage";
import OfferPage from "./components/OfferPage";
import PriceListPage from "./components/PriceListPage";
import { Topbar } from "./components/topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="min-h-screen flex justify-center p-5 items-center">
          <Topbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Offer" element={<OfferPage/>}/>
          <Route path="/Price" element={<PriceListPage/>}/>
          <Route path="/#OurProjects" element={<HomePage/>}/>
          <Route path="/#Contact" element={<HomePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
