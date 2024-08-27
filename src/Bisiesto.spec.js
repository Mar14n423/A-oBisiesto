import generarBisiesto from "./Bisiesto.js";

describe("Bisiesto", () => {
  it("Deberia generar TRUE para un año divisible entre 400 como el 2000", () => {
    expect(generarBisiesto(2000)).toEqual(true);
  });
  it("Deberia generar TRUE para cuqluier año divisible entre 400", () => {
    expect(generarBisiesto(2400)).toEqual(true);
  });
  it("Deberia generar FALSE para cualquier año divisible entre 100 pero no entre 400 como el 2200", () => {
    expect(generarBisiesto(2200)).toEqual(false);
  });
  it("Deberia generar FALSE para cualquier año divisible entre 100 pero no entre 400", () => {
    expect(generarBisiesto(2300)).toEqual(false);
  });

  it("Deberia generar TRUE para un año divisible entre 4 pero no entre 100", () => {
    expect(generarBisiesto(2008)).toEqual(true);
  });

  it("Deberia generar TRUE para cualquier año divisible entre 4 pero no entre 100", () => {
    expect(generarBisiesto(2012)).toEqual(true);
  });
  

});