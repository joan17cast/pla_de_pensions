/* eslint-disable no-await-in-loop */
const greeting = new Promise((resolve) => {
  resolve('Hello');
});

greeting.then((value) => {
  console.log('The promise is error', value);
}).catch((error) => {
  console.error('The promise is resolver', error);
}).finally(() => {
  console.log('The promise is settled, meaning it has been resolved or rejected');
});

// * another example

function delay(mili: number, count: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    if (count === 6) {
      reject(new Error('The number 6 is not allowed'));
    }
    setTimeout(() => {
      resolve(count);
    }, mili);
  });
}

async function dramaticWellcome():Promise<void> {
  console.log('Hello');
  for (let i = 0; i < 7; i += 1) {
    const count: number = await delay(500, i);
    console.log(count);
  }
  console.log('World');
}

dramaticWellcome().catch(() => console.log('Error caught'));

// * Asnyc Await Example (Observables websocket or http request)

async function mySecondFunction(x: number) {
  await setTimeout(() => {}, 500);
  return 2 + x;
}

async function myThirdNestedFunction(x: number) {
  await setTimeout(() => {}, 500);
  return 3 + x;
}

async function myAwesomeFunction() {
  const startingValue = 1;
  const firstResult = await mySecondFunction(startingValue);
  const finalResult = await myThirdNestedFunction(firstResult);
  return finalResult;
}

const promise = myAwesomeFunction();
promise.then((result) => console.log('Final result is %d', result));

async function myAsyncFunction(input: number) {
  const result = await setTimeout(() => {
    console.log('Function %d executed', input);
  }, 1000 * input);
  return result;
}

Promise.all([myAsyncFunction(3), myAsyncFunction(2), myAsyncFunction(1)]);
