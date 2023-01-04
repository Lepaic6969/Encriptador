import {encriptar} from "./encriptar.js";
import { desencriptar } from "./desencriptar.js";

//Capturo los botones del aplicativo.
const $encriptar=document.getElementById("encriptar"),
      $desencriptar=document.getElementById("desencriptar"),
      $copiar=document.getElementById("copiar");
//Capturo el campo de texto donde el usuario pone el mensaje.
const $textArea=document.getElementById("mensaje");
const $parrafo=document.getElementById("mensaje-encriptado");
let msg="";
let msgEncriptado="";

//Campuro la información a mostrar en el aside tanto como para éxito como para error.
const $exito=document.getElementById("exito");
const $error=document.getElementById("error");

//Acá voy con los eventos click de mi aplicativo.
document.addEventListener("click",e=>{
    if(e.target.matches("#encriptar")){
        msg=$textArea.value;
        $encriptar.classList.add("boton-activo");
        $desencriptar.classList.remove("boton-activo");
       if (msg===""){
            $exito.classList.remove("is-active");
            $error.classList.add("is-active");
       }else{
            $exito.classList.add("is-active");
            $error.classList.remove("is-active");
            msgEncriptado=encriptar(msg);
            $parrafo.textContent=msgEncriptado;
       }
      
    } 
    if(e.target.matches("#desencriptar")){
        msgEncriptado=$textArea.value;
        $encriptar.classList.remove("boton-activo");
        $desencriptar.classList.add("boton-activo");
        if (msgEncriptado===""){
             $exito.classList.remove("is-active");
             $error.classList.add("is-active");
        }else{
             $exito.classList.add("is-active");
             $error.classList.remove("is-active");
             msg=desencriptar(msgEncriptado);
             $parrafo.textContent=msg;
        }
       
       
    }
    if(e.target.matches("#copiar")){
        console.log("copiando");
    }

});