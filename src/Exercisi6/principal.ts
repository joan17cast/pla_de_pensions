// Instancia de Porfolio
// Rellenar la propiedad accionList$ con las 6 acciones
// Realizar los calculos, los puedes calcular con expresiones lambda y
// también operaciones asíncronas
// https://www.peerbits.com/blog/nodejs-vs-java.html
import { List } from 'ts-generic-collections-linq';
import Accion from './accion';
import Club from './club';
import Portfolio from './portfolio';
import Usuario from './usuario';

const accionGoogle = new Accion('GOOG', 9.12, 1371.63, 2500.00, 10675.25, 427.01);
const accionTrgp = new Accion('TRGP', 15.76, 16.50, 260.00, 795.92, 306.12);
const accionTsla = new Accion('TSLA', 4.02, 216.37, 870.00, 2445.79, 281.13);
const accionMsft = new Accion('MSFT', 27.28, 183.25, 1000.00, 2523.65, 252.36);
const accionNvda = new Accion('NVDA', 12.82, 78.03, 1000.00, 1756.96, 175.70);
const accionByd = new Accion('BYD', 11.56, 21.62, 250.00, 460.28, 184.27);

const listaAcciones = new List<Accion>();
listaAcciones.add(accionGoogle);
listaAcciones.add(accionTrgp);
listaAcciones.add(accionTsla);
listaAcciones.add(accionMsft);
listaAcciones.add(accionNvda);
listaAcciones.add(accionByd);

const usuario = new Usuario('Jordi Ascensión', 'JAP', Club.Silver);

const disponibleInicial = 100000.00;
const totalDisponible = disponibleInicial - listaAcciones.sum((accion) => accion.invertido);
const totalInvertido = listaAcciones.sum((accion) => accion.invertido);
const totalBeneficio = listaAcciones.sum((accion) => accion.gananciasPerdidas);
const capitalVirtual = totalDisponible + totalInvertido + totalBeneficio;

const portfolio = new Portfolio(
  totalDisponible,
  totalInvertido,
  totalBeneficio,
  capitalVirtual,
  listaAcciones,
);

console.log(`El usuario ${usuario.nombre}`);
console.log(`Tiene Disponible ${portfolio.disponible}$`);
console.log(`El total invertido es ${portfolio.capitalInvertido}$`);
console.log(`El beneficio es ${portfolio.beneficio}$`);
console.log(`El capital virtual es ${portfolio.capitalVirtual}$`);