import './App.css';
import Header from'./Components/Header';
import Footer from'./Components/Footer';
import Home from './Components/Home';
import About from'./Components/About';
import Product from './Components/Product';
import Contact from './Components/Contact';
import {Routes,Route} from 'react-router-dom';
//import Slider from './Components/Slider';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="product" element={<Product />} />
      <Route exact path="contact" element={<Contact />} />
      {/* <Route path="/" element={<Navigate replace to="/home" />} /> */}
    </Routes>
    <Home />
    {/* <Slider /> */}
    {/* <Product /> */}
    <Footer />
    </>
  );
}

export default App;
