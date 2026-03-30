import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const getData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const getPromise = getData();

function App() {
  return (
    <>
      <h1 className="bg-amber-400 font-extrabold text-white">Welcome</h1>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className=" loading loading-spinner loading-xl"></span>}
      >
        <Cards getPromise={getPromise}></Cards>
      </Suspense>
    </>
  );
}

export default App;
