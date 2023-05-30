import React from "react";
import { Route, Routes} from "react-router-dom";
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Community } from "./Pages/Community";
import { Republic } from "./Pages/Republic";
import { Events } from "./Pages/Events";

const Rotas = () => {
   return(
    <Routes>
        <Route element = {<Home></Home> }  path="/" exact/>
        <Route element = {<Community></Community>}  path="/community"/>
        <Route element = {<Republic></Republic> }  path="/republic"/>
        <Route element = {<Events></Events>}  path="/events"/>
    </Routes>
   )
}

export default Rotas;