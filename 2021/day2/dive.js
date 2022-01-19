// Solution for day 2 puzzle

const input = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

let horizontal = 0;
let depth = 0;
let aim = 0;

const part1 = () => {
  for (let index = 0; index < input.length; index++) {
    const command = input[index];
    if (command.includes('forward'))
      horizontal += parseInt(command.split(' ')[1]);
    if (command.includes('down')) depth += parseInt(command.split(' ')[1]);
    if (command.includes('up')) depth -= parseInt(command.split(' ')[1]);
  }
};

const part2 = () => {
  for (let index = 0; index < input.length; index++) {
    const command = input[index];
    if (command.includes('forward')) {
      horizontal += parseInt(command.split(' ')[1]);
      depth += aim * parseInt(command.split(' ')[1]);
    }
    if (command.includes('down')) aim += parseInt(command.split(' ')[1]);
    if (command.includes('up')) aim -= parseInt(command.split(' ')[1]);
  }
};

console.log('final position: ', horizontal * depth);
