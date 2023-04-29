import React from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Community } from "./Pages/Community";
import { Republic } from "./Pages/Republic";
import { Events } from "./Pages/Events";

const Rotas = () => {
   return(
       <Routes>
                <Route component = { Home }  path="/" exact/>
                <Route component = { AboutUs }  path="/about-us"/>
                <Route component = { Community}  path="/community"/>
                <Route component = { Republic }  path="/republic"/>
                <Route component = { Events }  path="/events"/>
       </Routes>
   )
}

export default Rotas;