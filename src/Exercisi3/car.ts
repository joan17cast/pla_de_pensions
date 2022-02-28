export default class Car {
  Rent(type: string):this {
    console.log(`${type} has been rent.`);
    return this;
  }

  Record():this {
    console.log(`Car was rented at ${new Date().toLocaleDateString()} has been rent.`);
    return this;
  }

  Return(type:string):this {
    console.log(` ${type} has been returned.`);
    return this;
  }
}
