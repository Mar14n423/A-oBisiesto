function generarBisiesto(numero){
  if(numero % 100 === 0 && numero % 400 !== 0)
    return false;
  if(numero % 400 === 0)
    return true;
}

export default generarBisiesto;