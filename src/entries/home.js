import React from "react";
import { render } from "react-dom";
import Home from "../pages/containers/home";
//import Playlist from "./src/playlist/components/playlist";
import data from "../api.json";
/*ReactDOM.render(Que voy a renderizar, Donde lo haré);*/
//console.log('Hola Mundo!!!')
const app = document.getElementById("app");
/* const holaMundo = < h1 > Hola Mundo!... < /h1>; */
render(<Home data={data} />, app);
