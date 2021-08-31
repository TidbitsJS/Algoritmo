const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

function createPassword(length, hasNumbers, hasSymbols) {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  return generatePassword(length, chars);
}

function generatePassword(length, chars) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}

module.exports = createPassword;
