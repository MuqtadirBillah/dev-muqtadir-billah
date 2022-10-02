import logo from './logo.svg';
import './App.css';
import AOS from "aos";
import ReactGA from "react-ga4";
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  
  ReactGA.initialize("G-XQDJ1XKSEJ");
  ReactGA.send("pageview");

  return (
    <div className="">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route  path="/"  element={<Home />} />
          {/* <Route  path="*"  element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;