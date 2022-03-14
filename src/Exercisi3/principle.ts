import ElectricCar from './electricCar';
import GasCar from './gasCar';

const electricCar = new ElectricCar();
electricCar
  .Rent('Electric car')// * Electric car has been rented.
  .Record() // * logs current date and time.
  .Charge(); // * Electric car has been charged.

const gasCar = new GasCar();
gasCar
  .Return('Gas car')// * Gas car has been rented.
  .Record() // * logs current date and time.
  .Refill(); // * Gas car has been charged.
