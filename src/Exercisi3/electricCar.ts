import Car from './car';

export default class ElectricCar extends Car {
  Charge() : this {
    console.log('Electric Car has been charged');
    return this;
  }
}
