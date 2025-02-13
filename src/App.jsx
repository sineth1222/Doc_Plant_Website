import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import Potato from "./components/Potato/potato.jsx";
import Home from "./components/Home/Home.jsx";
import Potato_early_bright from "./components/Potato/potato_early_bright.jsx";
import Potato_late_bright from "./components/Potato/potato_late_bright.jsx";
import Potato_healthy from "./components/Potato/potato_healthy.jsx";
import Tomato from "./components/Tomato/Tomato.jsx";
import Tomato_early_bright from "./components/Tomato/Tomato_early_bright.jsx";
import Tomato_late_bright from "./components/Tomato/Tomato_late_bright.jsx";
import Tomato_bactirial from "./components/Tomato/Tomato_bactirial.jsx";
import Tomato_leaf_mold from "./components/Tomato/Tomato_leaf_mold.jsx";
import Tomato_mosic from "./components/Tomato/Tomato_mosic.jsx";
import Tomato_septorial from "./components/Tomato/Tomato_septorial.jsx";
import Tomato_spider from "./components/Tomato/Tomato_spider.jsx";
import Tomato_target_spot from "./components/Tomato/Tomato_target_spot.jsx";
import Tomato_yellow from "./components/Tomato/Tomato_yellow.jsx";
import Apple from "./components/Apple.jsx/Apple.jsx";
import Apple_black_rot from "./components/Apple.jsx/Apple_black_rot.jsx";
import Apple_cender from "./components/Apple.jsx/Apple_cender.jsx";
import Apple_scarb from "./components/Apple.jsx/Apple_scarb.jsx";
import Chillie from "./components/Chillie/Chillie.jsx";
import Chillie_leaf_curl from "./components/Chillie/Chillie_leaf_curl.jsx";
import Chillie_leaf_spot from "./components/Chillie/Chillie_leaf_spot.jsx";
import Chillie_whitefly from "./components/Chillie/Chillie_whitefly.jsx";
import Chillie_yellowish from "./components/Chillie/Chillie_yellowish.jsx";
import Grapes from "./components/Grapes/Grapes.jsx";
import Grapes_black_rot from "./components/Grapes/Grapes_black_rot.jsx";
import Grapes_esca from "./components/Grapes/Grapes_esca.jsx";
import Grapes_leaf_bright from "./components/Grapes/Grapes_leaf_bright.jsx";
import Coffee from "./components/Coffee/Coffee.jsx";
import Coffee_spider_mite from "./components/Coffee/Coffee_spider_mite.jsx";
import Coffee_rust from "./components/Coffee/Coffee_rust.jsx";
import Cherry from "./components/Cherry/Cherry.jsx";
import Cherry_powdery from "./components/Cherry/Cherry_powdery.jsx";
import Tea from "./components/Tea/Tea.jsx";
import Coconut from "./components/Coconut/Coconut.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
      <Navbar />
      {/*<Hero />*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servise" element={<Services />} />
          <Route path="/potato" element={<Potato />} />
          <Route path="/potato_early_bright" element={<Potato_early_bright />} />
          <Route path="/potato_late_bright" element={<Potato_late_bright/>} />
          <Route path="/potato_healthy" element={<Potato_healthy/>} />
          <Route path="/tomato" element={<Tomato/>} />
          <Route path="/tomato_early_bright" element={<Tomato_early_bright />} />
          <Route path="/tomato_late_bright" element={<Tomato_late_bright />} />
          <Route path="/tomato_bactirial" element={<Tomato_bactirial />} />
          <Route path="/tomato_leaf_mold" element={<Tomato_leaf_mold />} />
          <Route path="/tomato_mosic" element={<Tomato_mosic />} />
          <Route path="/tomato_septorial" element={<Tomato_septorial />} />
          <Route path="/tomato_spider" element={<Tomato_spider />} />
          <Route path="/tomato_target_spot" element={<Tomato_target_spot />} />
          <Route path="/tomato_yellow" element={<Tomato_yellow />} />
          <Route path="/apple" element={<Apple/>} />
          <Route path="/apple_black_rot" element={<Apple_black_rot />} />
          <Route path="/apple_cender" element={<Apple_cender/>} />
          <Route path="/apple_scarb" element={<Apple_scarb/>} />
          <Route path="/chillie" element={<Chillie/>} />
          <Route path="/chillie_leaf_curl" element={<Chillie_leaf_curl/>} />
          <Route path="/chillie_leaf_spot" element={<Chillie_leaf_spot/>} />
          <Route path="/chillie_white_fly" element={<Chillie_whitefly/>} />
          <Route path="/chillie_yellow_wish" element={<Chillie_yellowish/>} />
          <Route path="/grapes" element={<Grapes/>} />
          <Route path="/grapes_black_rot" element={<Grapes_black_rot/>} />
          <Route path="/grapes_esca" element={<Grapes_esca/>} />
          <Route path="/grapes_leaf_bright" element={<Grapes_leaf_bright/>} />
          <Route path="/coffee" element={<Coffee/>} />
          <Route path="/coffee_spider_mite" element={<Coffee_spider_mite/>} />
          <Route path="/coffee_rust" element={<Coffee_rust/>} />
          <Route path="/cherry" element={<Cherry/>} />
          <Route path="/cherry_powdery" element={<Cherry_powdery/>} />
          <Route path="/tea" element={<Tea/>} />
          <Route path="/coconut" element={<Coconut/>} />
        </Routes>
      </Router>
      {/*<Services />*/
      /*<Banner />*/
      /*<AppStore />
      <Testimonials />*/}
      <Footer />
    </div>
  );
};

export default App;
