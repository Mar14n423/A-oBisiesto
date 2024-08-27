function generarBisiesto(numero){
  if(numero % 4 === 0 && numero % 100 !== 0)
    return true;
  if(numero % 100 === 0 && numero % 400 !== 0)
    return false;
  if(numero % 400 === 0)
    return true;
  if(numero % 4 !== 0)
    return false;
  
}

export default generarBisiesto;