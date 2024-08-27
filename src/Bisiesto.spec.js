import generarBisiesto from "./Bisiesto.js";

describe("Bisiesto", () => {
  it("Deberia generar TRUE para un año divisible entre 400 como el 2000", () => {
    expect(generarBisiesto(2000)).toEqual(true);
  });
  it("Deberia generar TRUE para cuqluier año divisible entre 400", () => {
    expect(generarBisiesto(2400)).toEqual(true);
  });

});