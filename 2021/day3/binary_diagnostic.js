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

const part2 = () => {};

part2();
// parseInt with radix (second value) 2 is to easily convert binary number
console.log('gamma: ', gamma, ' - ', parseInt(gamma, 2));
console.log('epsilon: ', epsilon, ' - ', parseInt(epsilon, 2));

console.log('Result: ', parseInt(gamma, 2) * parseInt(epsilon, 2));
