function isPalindromes(str) {
  return str === str.split('').reverse().join('');
  // return str === reverse(str);
}

// function reverse(str) {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i -= 1) {
//     result += str[i];
//   }
//   console.log(result);
//   return result;
// }

module.exports = isPalindromes;
