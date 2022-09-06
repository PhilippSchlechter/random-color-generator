import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const rdnColor = randomColor();
const block = `#############################,#############################,#############################,#####                   #####,#####      ${rdnColor}      #####,#####                   #####,#############################,#############################,#############################`;

//console.log(chalk.hex(randomColor())(block.split(',').join('\r\n')));
const colorBlock = chalk.hex(randomColor())(block.split(',').join('\r\n'));
//console.log(colorBlock);

const colorInput = { luminosity: 'light', hue: 'blue' };
colorInput.hue = argv[2];
colorInput.luminosity = argv[3];

if (argv[1]) {
  console.log(colorBlock);
}
