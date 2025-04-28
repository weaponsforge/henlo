#!/usr/bin/env node

const main = (name) => {
  console.log(`Henlo, ${name}!`)
}

// Parse command-line arguments
const args = process.argv.slice(2);
const nameArg = args.find(arg => arg.startsWith('--name='));

if (nameArg) {
  const name = nameArg.split('=')[1];
  main(name);
} else {
  console.log('Usage: myapp --name=yourname');
}
