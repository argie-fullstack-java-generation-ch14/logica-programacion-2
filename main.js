// import the native node module to read what is typed on the keyboard
const readline = require('readline');

// Create an interface to read input and write output
const rl = readline.createInterface({
  input: process.stdin, // Read input from standard input (keyboard)
  output: process.stdout // Write output to standard output (console)
});

console.log("¡Bienvenido a mi conversor de temperaturas! 🌚");

rl.question('Ingresa  la temperatura en grados Celcius ', (tempInCelcius) => {

  const CELCIUS = Number(tempInCelcius);

  if (Number.isNaN(CELCIUS)) {
    console.log("Error: el dato ingresado no es un número. Por favor, intenta de nuevo.");
  } else {
    const KELVIN = CELCIUS + 273.15;
    const FAHRENHEIT = (CELCIUS * 9 / 5) + 32;

    console.log(`Grados Celcius: ${CELCIUS}`);
    console.log(`Grados Kelvin: ${KELVIN}`);
    console.log(`Grados Fahrenheit: ${FAHRENHEIT}`);
  }

  rl.close();
});
