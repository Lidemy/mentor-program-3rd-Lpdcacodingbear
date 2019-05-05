function join(arr, concatStr) {
  if (arr.length === 0) { // special case
    return '';
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    result += concatStr + arr[i];
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join('abr4donp', '!'));
console.log(repeat('a', 6));
