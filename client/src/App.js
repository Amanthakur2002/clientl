import './App.css';
import Navbar from './components/header/Navbar';
import Maincomponent from './components/home/Maincomponent';
import Newnav from './components/newnav/Newnav.jsx';
import Footer from './components/footer/Footer';
import SignUp from './components/signup_signin/SignUp';
import Sign_in from './components/signup_signin/Sign_in';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <>
      <Navbar />
      <Newnav />
      <Routes>
        <Route path='/' element={<Maincomponent />} />
        <Route path='/login' element={<Sign_in />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/getproductsone/:id' element={<Cart />} />
        <Route path='/buynow' element={<Buynow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
