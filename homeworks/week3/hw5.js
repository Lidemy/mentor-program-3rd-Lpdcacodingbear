function add(a, b) {
  const numA = a.split('').reverse();
  const numB = b.split('').reverse();
  const ans = [''];
  const length = Math.max(numA.length, numB.length);
  let carry = 0;

  for (let i = 0; i < length; i += 1) {
    ans[i] = Number(numA[i] || 0) + Number(numB[i] || 0) + carry;
    carry = 0;
    if (ans[i] >= 10) {
      carry = 1;
      ans[i] -= 10;
    }
  }

  if (carry) {
    ans.push(carry);
  }

  return ans.reverse().join('');
}

module.exports = add;
