import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Pricing from "./components/Pricing";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const getPromise = getData();

function App() {
  const [cart, setCart] = useState([]);
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      <Navbar cart={cart}></Navbar>

      {!showComponent && <Banner></Banner>}

      <Suspense
        fallback={<span className=" loading loading-spinner loading-xl"></span>}
      >
        <Cards
          getPromise={getPromise}
          cart={cart}
          setCart={setCart}
          setShowComponent={setShowComponent}
        ></Cards>
      </Suspense>

      <Pricing></Pricing>

      <ToastContainer />
    </>
  );
}

export default App;
