import {encriptar} from "./encriptar.js";
import { desencriptar } from "./desencriptar.js";

//Capturo los botones del aplicativo.
const $encriptar=document.getElementById("encriptar"),
      $desencriptar=document.getElementById("desencriptar"),
      $copiar=document.getElementById("copiar");

document.addEventListener("click",e=>{
    if(e.target.matches("#encriptar")){
        console.log("encriptando");
        console.log(encriptar("gato"));
        console.log(encriptar("perro lobo"));
    }
    if(e.target.matches("#desencriptar")){
        console.log("Desencriptando");
        console.log(desencriptar("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"));
       
       
    }
    if(e.target.matches("#copiar")){
        console.log("copiando");
    }

});