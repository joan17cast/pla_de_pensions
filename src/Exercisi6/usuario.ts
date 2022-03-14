import Club from './club';

export default class Usuario {
  private nombre$!:string;

  private alias$!:string;

  private club$!:Club;

  constructor(
    nombre$: string,
    alias$: string,
    club$: Club,
  ) {
    this.nombre$ = nombre$;
    this.alias$ = alias$;
    this.club$ = club$;
  }

  public get nombre() {
    return this.nombre$;
  }
}