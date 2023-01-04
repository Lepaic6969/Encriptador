export const encriptar = (mensaje = "") => {
  let msgEncriptado ="";

  for(let i=0;i<mensaje.length;i++){
    if(mensaje[i]==="a"){
      msgEncriptado +="ai";
    }else if(mensaje[i]==="e"){
      msgEncriptado +="enter";
    }else if(mensaje[i]==="i"){
      msgEncriptado +="imes";
    }else if(mensaje[i]==="o"){
      msgEncriptado +="ober";
    }else if(mensaje[i]==="u"){
      msgEncriptado +="ufat";
    }else{
      msgEncriptado += mensaje[i];
    }
  }

    return msgEncriptado;
};
