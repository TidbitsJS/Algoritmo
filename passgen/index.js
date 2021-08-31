#!/usr/bin/env node
const program = require("commander");
const chalk = require("chalk");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const log = console.log;

program.version("1.0.0").description("Simple Password Generator");

program
  .option("-l, --length <number>", "length of password", "8")
  .option("-s, --save", "Save password to passwords.txt")
  .option("-nn, --no-numbers", "No numbers")
  .option("-ns, --no-symbols", "No symbols")
  .parse();

const { length, save, numbers, symbols } = program.opts();

// Generate Password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output Password
log(chalk.blue("Generated Password: ") + chalk.bold(generatedPassword));
log(chalk.yellow("* Password copied to clipboard *"));
