import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import MenPage from './Component/Men_Page/MenPage';
import Nav from './Component/Nav';
import Footer from './Component/Footer/Footer';
import WomenPage from './Component/WomenPage/WomenPage';
import ElectronicPage from './Component/ElectronicsPage/ElectronicPage';
import JeweleryPage from './Component/JeweleryPage/JeweleryPage';
import YellowMain from './Component/YellowMain';
import NavTrack from './Component/NavTrack';
import TrackyourId from './Component/TrackyourId';
import NewArrivals from './Component/NewArrivals'
import Cart from './Component/CartPage/Cart'
import Liked from './Component/LikedPage/Liked'

function App() {
  return (
    <div className="App">
      <Router>
      <YellowMain />
      <NavTrack />
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens" element={<MenPage/>}/>
          <Route path="/Women" element={<WomenPage/>}/>
          <Route path="/Electronics" element={<ElectronicPage/>}/>
          <Route path ="/Jewelery" element={<JeweleryPage/>}/>
          <Route path ="/TrackingPackage" element={<TrackyourId/>}/>
          <Route path ="/NewArrivals" element={<NewArrivals/>}/>
          <Route path ="/Cart" element={<Cart/>}/>
          <Route path ="/Liked" element={<Liked/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
