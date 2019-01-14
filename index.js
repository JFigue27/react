import React from "react";
import {
    render
} from "react-dom";
import Playlist from "./src/playlist/components/playlist";
import data from "./src/api.json";
/*ReactDOM.render(Que voy a renderizar, Donde lo haré);*/

//console.log('Hola Mundo!!!')
//console.log("jaime")
const app = document.getElementById("app");
/* const holaMundo = < h1 > Hola Mundo!... < /h1>; */
render( < Playlist data = {
            data
        }
        / > , app);