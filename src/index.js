function numLen (n) {
    let len = 0;
    while (n / 10 >= 1) {
        len += 1;
        n /= 10;
    }
    return len;
}

module.exports = function reverse (n) {
//function reverse (n) {
  if (n < 0) {
    n *= -1;
  }
  let len = numLen(n);
  let ans = 0;

  while (n >= 10) {
      ans += (n % 10) * 10**numLen(n);
      n = Math.trunc(n / 10);
  }
  ans += (n % 10);

  return ans;
}