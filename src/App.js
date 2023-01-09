import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Slider from "./components/slider/Slider";
import Virtual from "./components/virtual/Virtual";
import Product from "./components/product/Product";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";


function App() {
 
  return (
   <>
   <Header/>
    <Hero/>
    <Virtual/>
    {/* <Product/> */}
    <Testimonials/>
    {/* <Slider/> */}
    <Footer/>
   </>
  );
}

export default App;
