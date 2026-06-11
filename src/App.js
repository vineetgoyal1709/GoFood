
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './screens/Signup.jsx';
import { CartProvider } from './components/ContextReducer.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyOrder from './screens/MyOrder.jsx';

function App() {
  return (

    <CartProvider>
    <Router>
      
      <div> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/myOrder" element={<MyOrder />} />
        </Routes>
         </div>
       
    </Router>
    </CartProvider>
  );
}

export default App;
