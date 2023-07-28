// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12, // Password length
    numbers: true, // Include numbers
    symbols: true, // Include symbols
    uppercase: true, // Include uppercase letters
    excludeSimilarCharacters: true, // Exclude similar characters like 'l' and '1'
  });

  return password;
}

const randomPassword = generateRandomPassword();
console.log('Generated Password:', randomPassword);