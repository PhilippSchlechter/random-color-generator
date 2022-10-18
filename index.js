import kuler from 'kuler';
import randomColor from 'randomcolor';

const randomColorHex = randomColor({
  luminosity: process.argv[3],
  hue: process.argv[2],
});

console.log(
  kuler(
    `
#############################
#############################
#############################
#####                   #####
#####      ${randomColorHex}      #####
#####                   #####
#############################
#############################
#############################`,
    randomColorHex,
  ),
);
