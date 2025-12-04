class Tragaperra {
  constructor(fig1,fig2,fig3) {
    this.fig1 = fig1;
    this.fig2 = fig2;
    this.fig3 = fig3;
  }
}

  const historialGiros = [];
  function Guardarfig(figura,historial){

    const fig1= Math.floor(Math.random()*figura.length);
    const fig2= Math.floor(Math.random()*figura.length);
    const fig3= Math.floor(Math.random()*figura.length);

    const nuevaTirada = new Tragaperra(fig1, fig2, fig3);

    historial.push(nuevaTirada);
}