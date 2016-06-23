// infinite loop
function* primes_generator() {
  let n = 2;
  while(true) {
    if (isPrime(n)) {
      yield n;
    }
    n++;
  }
}

var nums = primes_generator();

console.log([...take(12, nums)]);
console.log([...take(3, nums)]);
console.log([...take(5, nums)]);

// helpers
function* take(length, iterable) {
  for (let x of iterable) {
    if (length <= 0) return;
    length--;
    yield x;
  }
}

function isPrime(num) {
  for (var i = 2;
       i < Math.ceil(Math.sqrt(num));
       i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
