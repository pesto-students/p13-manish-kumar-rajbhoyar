const fs = require('fs');
const readline = require('readline');
const generateGreeting = require('./custom_module/greetings');

let rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('What is your name? ', (name) => {
    // Generate personalized greeting
    const greetingMessage = generateGreeting(name);
  
    // Save greeting to output.txt
    fs.writeFile('output.txt', greetingMessage, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Greeting saved to output.txt');
      }
  
      // Close the readline interface
      rl.close();
    });
  });