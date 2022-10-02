import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import Home from './components/Home';

function App() {
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
      <WhatsAppWidget phoneNumber="923312455191" />
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