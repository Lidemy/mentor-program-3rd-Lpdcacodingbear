function printFactor(n) {
<<<<<<< HEAD
  for (var i=1; i<=n; i++) {
=======
  for (let i = 1; i <= n; i += 1) {
>>>>>>> 30f9ee7820c7ca80d33fd66f2b647bd2143de207
    if (n % i === 0) {
      console.log(i);
    }
  }
  return n;
}

printFactor(15);
