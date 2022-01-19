//Solution for Day 1 puzzle

//Example Input
const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let increased = 0;

for (let index = 1; index < input.length; index++) {
  const current = input[index];
  const previous = input[index - 1];
  if (current > previous) increased++;
}
//Result
console.log('Increased ', increased, ' times');
