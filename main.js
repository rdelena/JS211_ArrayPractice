// .length
let cars = ["Ford", "Toyota", "Chevrolet", "BMW"];
console.log(cars.length);

// .concat()
let moreCars = ["Dodge", "Chrysler", "Fiat", "Honda"];
let totalCars = cars.concat(moreCars);
console.log(totalCars);

// .indexOf() & lasIndexOf()
console.log(totalCars.indexOf("Honda"));
console.log(totalCars.lastIndexOf("Ford"));

// .join()
let stringOfCars = totalCars.join();
console.log(stringOfCars);

// .split()
let carsFromString = stringOfCars.split(",");
console.log(carsFromString);

// .reverse()
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

// .sort()
console.log(carsInReverse.sort());

// .slice()
const pets = ["dog", "cat", "fish", "rabbit", "snake", "lizard", "bird"];
let reptiles = pets.slice(4, 6);
console.log(reptiles);
console.log(pets);
/* Why do you think snake and lizard are still in the original array?
The slice() returns a shallow copy of the array as a new array object selected from the start to finish. The original array is not modified. */

// .splice()
let removedReptiles = pets.splice(4, 2, "hamster");
console.log(removedReptiles);
console.log(pets);

// .pop()
let removePet = pets.pop();
console.log(removePet);
console.log(pets);

// .push()
pets.push(removePet);
console.log(pets);

// .shift()
pets.shift();
console.log(pets);

// .unshift()
pets.unshift("turtle");
console.log(pets);

// .forEach()
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];
const addTwo = (num, index, arr) => {
  numbers.push(num + 2);
};
numbers.forEach(addTwo);
// splice to return only the plus 2 numbers in the numbers array
numbers.splice(0, 11);
console.log(numbers);
