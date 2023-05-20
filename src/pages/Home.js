import React from "react";

import SearchStudent from "../components/SearchStudent";
import Areacounting from "../components/Areacounting";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";


const Home = () => {

  let location = useLocation();
  console.log(location);


  return (
    <>
    <Hero/>
    <SearchStudent/>
    <Areacounting/>
    </>
  );
};

export default Home;
