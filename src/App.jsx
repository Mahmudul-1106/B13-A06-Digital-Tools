import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { ToastContainer } from "react-toastify";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const getPromise = getData();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Suspense
        fallback={<span className=" loading loading-spinner loading-xl"></span>}
      >
        <Cards getPromise={getPromise} cart={cart} setCart={setCart}></Cards>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
