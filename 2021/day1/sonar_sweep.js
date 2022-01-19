//Solution for Day 1 puzzle

//Example Input
const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let increased = 0;

const part1 = () => {
  for (let index = 1; index < input.length; index++) {
    const current = input[index];
    const previous = input[index - 1];
    if (current > previous) increased++;
  }
};

const part2 = () => {
  for (let index = 1; index < input.length; index++) {
    if (index >= input.length - 2) {
      return;
    }
    const current = input[index] + input[index + 1] + input[index + 2];
    const previous = input[index - 1] + input[index] + input[index + 1];
    if (current > previous) increased++;
  }
};

//Result
console.log('Increased ', increased, ' times');
