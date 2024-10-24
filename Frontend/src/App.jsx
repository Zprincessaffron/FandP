import './App.css'
import Flowers from './components/Flowers/Flowers'
import {BrowserRouter , Routes , Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Plants from './components/Plants/Plants'
import Cart from './components/Cart/Cart'
import FlowerDetails from './components/Flowers/FlowerDetails'
import Checkout from './components/Checkout/Checkout'
import Register from './components/Registration/Register'
import Profile from './components/UserProfile/Profile';
import Telecaller from './components/Telecaller/Telecaller';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/flowers' element={<Flowers/>}/>
      <Route path='/product-detail' element={<FlowerDetails/>}/>
      <Route path='/plants' element={<Plants/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />

      {/* TeleCaller */}
      <Route path='/telecaller-dashboard' element={<Telecaller/>} />

      {/* Admin Dashboard */}
      <Route path='/admin-dashboard' element={<AdminDashboard/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
