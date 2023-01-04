export const desencriptar = (mensajeEncriptado = "") => {
    let msgNormal = mensajeEncriptado
      .replace(/ai/g,"a" )
      .replace(/enter/g,"e")
      .replace(/imes/g,"i")
      .replace(/ober/g,"o")
      .replace(/ufat/g,"u");
  
      return msgNormal;
  };