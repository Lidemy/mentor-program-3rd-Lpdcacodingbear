function stars(n) {
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    array.push('*'.repeat(i));
  }
  return array;
}

stars(6);
module.exports = stars;
