import './App.css'
import BestSelling from './components/BestSeller/BestSelling'
import Feature from './components/Features/Feature'
import Flowers from './components/Flowers/Flowers'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Occasion from './components/Occasion/Occasion'
import SoulMate from './components/Soulmate/SoulMate'
import TopReviews from './components/TopReview/TopReviews'
import {BrowserRouter , Routes , Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Plants from './components/Plants/Plants'
import Cart from './components/Cart/Cart'
import FlowerDetails from './components/Flowers/FlowerDetails'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
    <>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/flowers' element={<Flowers/>}/>
      <Route path='/product-detail' element={<FlowerDetails/>}/>
      <Route path='/plants' element={<Plants/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
