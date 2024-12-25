import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Lifestyle from "./components/Lifestyle";
import Newproduct from "./components/Newproduct";
import Radio from "./components/Radio";
import BestSelect from "./components/BestSelect";
import MainBanner from "./components/MainBanner";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      {/* header 영역 */}
      <Header />

      {/*Lifestyle */}
      <Lifestyle />

      {/* Newproduct */}
      <Newproduct />

      {/* Radio */}
      <Radio />

      {/* BestSelect */}
      <BestSelect />

      {/* MainBanner */}
      <MainBanner />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
