function reverse(str) {
<<<<<<< HEAD
  var result = ''
  for (var i = str.length-1; i>=0; i--) {
    result += str[i]
=======
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
>>>>>>> 30f9ee7820c7ca80d33fd66f2b647bd2143de207
  }
  return result;
}

console.log(reverse('hello'));
