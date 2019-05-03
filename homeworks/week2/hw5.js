function join(arr, concatStr) {
  if (arr.length === 0) { // special case
    return '';
  }

  var result = arr[0]
  for (var i=1; i < arr.length; i++) {
    result += concatStr + arr[i]
  }
  return result;
}

function repeat(str, times) {
  var result = ''
  for (var i=1; i<=times; i++) {
    result += str
  }
  return result;
}

console.log(join('abr4donp', '!'));
console.log(repeat('a', 6));
