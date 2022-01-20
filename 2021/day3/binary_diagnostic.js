// Solution for day 3 puzzle

const input = [
  '00100',
  '11110',
  '10110',
  '10111',
  '10101',
  '01111',
  '00111',
  '11100',
  '10000',
  '11001',
  '00010',
  '01010',
];

let gamma = '';
let epsilon = '';

const part1 = () => {
  let options = [];
  // Evaluate the binary numer
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    // Evaluate every element of the number
    // I create and object with the values of 1s and 0s
    for (let position = 0; position < element.length; position++) {
      const number = element[position];

      let ones = options[position]?.ones;
      let ceros = options[position]?.ceros;
      if (number === '1') {
        ones = ones ? ones + 1 : 1;
      } else {
        ceros = ceros ? ceros + 1 : 1;
      }

      options[position] = { ones, ceros };
    }
  }

  //evaluate every object in options to get gamma and epsilon
  options.forEach((object) => {
    if (object.ones > object.ceros) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  });
};

part1();
// parseInt with radix (second value) 2 is to easily convert binary number
console.log('gamma: ', gamma, ' - ', parseInt(gamma, 2));
console.log('epsilon: ', epsilon, ' - ', parseInt(epsilon, 2));

console.log('Result: ', parseInt(gamma, 2) * parseInt(epsilon, 2));

let oxygen = '';
let co2 = '';
const part2 = () => {
  const findOxygen = (arrayToEvaluate, position = 0) => {
    const ones = [];
    const ceros = [];

    arrayToEvaluate.forEach((element) => {
      const number = element[position];
      if (number === '1') {
        ones.push(element);
      } else {
        ceros.push(element);
      }
    });

    if (
      position === arrayToEvaluate[0].length ||
      arrayToEvaluate.length === 1
    ) {
      return arrayToEvaluate[0];
    } else {
      if (ones.length > ceros.length || ones.length === ceros.length) {
        return findOxygen(ones, position + 1);
      } else {
        return findOxygen(ceros, position + 1);
      }
    }
  };

  const findCo2 = (arrayToEvaluate, position = 0) => {
    const ones = [];
    const ceros = [];

    arrayToEvaluate.forEach((element) => {
      const number = element[position];
      if (number === '1') {
        ones.push(element);
      } else {
        ceros.push(element);
      }
    });

    if (
      position === arrayToEvaluate[0].length ||
      arrayToEvaluate.length === 1
    ) {
      return arrayToEvaluate[0];
    } else {
      if (ones.length > ceros.length || ones.length === ceros.length) {
        return findCo2(ceros, position + 1);
      } else {
        return findCo2(ones, position + 1);
      }
    }
  };

  oxygen = findOxygen(input);
  co2 = findCo2(input);
};

part2();
// parseInt with radix (second value) 2 is to easily convert binary number
console.log('oxygen: ', oxygen, ' - ', parseInt(oxygen, 2));
console.log('co2: ', co2, ' - ', parseInt(co2, 2));

console.log('Result: ', parseInt(oxygen, 2) * parseInt(co2, 2));