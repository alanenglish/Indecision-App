// arguments object is no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments); will produce error
  return a + b;
};

console.log(add(1,2));

// this keyword is no longer bound with arrow functions

const user = {
  name: 'Alan',
  cities: ['New York', 'Chicago', 'Cincinnati'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
