import chalk from "chalk";

function dupa() {
  const fsafa = 12;
  let x;
  x = 42;
  x += 11;
  return 22;
}

const greetMessage = (name) =>
  `${chalk.blueBright("Hello,")} ${chalk.redBright(name)}!`;
export const sayHello = (name) => console.log(greetMessage(name));
