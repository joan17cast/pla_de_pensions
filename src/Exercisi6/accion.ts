export default class Accion {
    private nombre$!:string;
  
    private unidades$!:number;
  
    private apertura$!:number;
  
    private invertido$!:number;
  
    private gananciasPerdidas$!:number;
  
    private gananciasPerdidasPorcentaje$!:number;
  
    private valor$!:number;
  
    constructor(
      nombre$: string,
      unidades$: number,
      apertura$:number,
      invertido$:number,
      gananciasPerdidas$:number,
      gananciasPerdidasPorcentaje$:number,
  
    ) {
      this.nombre$ = nombre$;
      this.unidades$ = unidades$;
      this.apertura$ = apertura$;
      this.invertido$ = invertido$;
      this.gananciasPerdidas$ = gananciasPerdidas$;
      this.invertido$ = gananciasPerdidasPorcentaje$;
    }
  
    public get invertido() {
      return this.invertido$;
    }
  
    public get gananciasPerdidas() {
      return this.gananciasPerdidas$;
    }
  }