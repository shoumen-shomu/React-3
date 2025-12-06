import "./App.css";
import About from "./components/pages/About";
import RootLayouts from "./components/layouts/RootLayouts";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";
import Error from "./components/pages/Error";
import TaskManagement from "./components/pages/TaskManagement";
import CompanyGrowth from "./components/pages/CompanyGrowth";
import TimeTracking from "./components/pages/TimeTracking";
import CustomerService from "./components/pages/CustomerService";
import Accessibility from "./components/pages/Accessibility";
import ContactUs from "./components/pages/ContactUs";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/taskmanagement" element={<TaskManagement />} />
          <Route path="/companygrowth" element={<CompanyGrowth />} />
          <Route path="/timetracking" element={<TimeTracking />} />
          <Route path="/customerservice" element={<CustomerService />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/contactus" element={<ContactUs />} />          
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
