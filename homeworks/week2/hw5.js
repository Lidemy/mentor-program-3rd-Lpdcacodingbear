function join(arr, concatStr) {
  if (arr.length === 0) { // special case
    return '';
  }

<<<<<<< HEAD
  var result = arr[0]
  for (var i=1; i < arr.length; i++) {
    result += concatStr + arr[i]
=======
  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    result += concatStr + arr[i];
>>>>>>> 30f9ee7820c7ca80d33fd66f2b647bd2143de207
  }
  return result;
}

function repeat(str, times) {
<<<<<<< HEAD
  var result = ''
  for (var i=1; i<=times; i++) {
    result += str
=======
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
>>>>>>> 30f9ee7820c7ca80d33fd66f2b647bd2143de207
  }
  return result;
}

console.log(join('abr4donp', '!'));
console.log(repeat('a', 6));
