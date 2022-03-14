import Car from './car';

export default class GasCar extends Car {
  Refill(): this {
    console.log('Gas car has been refilled');
    return this;
  }
}
