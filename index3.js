import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

if (argv[2]) {
  const initialColor = { luminosity: 'light', hue: 'blue' };
  initialColor.hue = argv[2];
  const hexGenerated = randomColor(initialColor);
  const layout = `#############################,#############################,#############################,#####                   #####,#####      ${hexGenerated}      #####,#####                   #####,#############################,#############################,#############################`;
  const printRandomColor = chalk.hex(hexGenerated)(
    layout.split(',').join('\r\n'),
  );
  console.log(printRandomColor);
}
