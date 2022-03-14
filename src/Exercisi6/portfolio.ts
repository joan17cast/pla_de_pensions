import { List } from 'ts-generic-collections-linq';
import Accion from './accion';

export default class Portfolio {
  private disponible$!:number;

  private capitalInvertido$!:number;

  private beneficio$!:number;

  private capitalVirtual$!:number;

  private accionList$!:List<Accion>;

  constructor(
    disponible$: number,
    capitalInvertido$: number,
    beneficio$:number,
    capitalVirtual$:number,
    accionList$:List<Accion>,
  ) {
    this.disponible$ = disponible$;
    this.capitalInvertido$ = capitalInvertido$;
    this.beneficio$ = beneficio$;
    this.capitalVirtual$ = capitalVirtual$;
    this.accionList$ = accionList$;
  }

  public get disponible() {
    return this.disponible$;
  }

  public get capitalInvertido() {
    return this.capitalInvertido$;
  }

  public get beneficio() {
    return this.beneficio$;
  }

  public get capitalVirtual() {
    return this.capitalVirtual$;
  }
}