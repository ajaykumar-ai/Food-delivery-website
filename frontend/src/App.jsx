import React, { useState } from 'react'
import Navebar from './components/Navebar/Navebar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/placeOrder'  
import Footer from './components/Footer/Footer'
import Loginpopup from './components/LoginPopup/Loginpopup'
import Verify from './pages/verify/verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { useLocation } from 'react-router-dom';

const App = () => {


   const location = useLocation();
  console.log('Current path:', location.pathname);


  const [showLogin,setshowLogin] = useState(false)

 return (
    <> 
      {showLogin ? <Loginpopup setshowLogin={setshowLogin} /> : <></>}
      <div className='app'>
        <Navebar setshowLogin={setshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify/>} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App