/**
 * Get to know the syntax part 2
 */
function* gen() {
  const x = yield (1 + 1);
  console.info(`x: ${x}`);
  return 'generator finished';
}

const iter = gen();

let v = iter.next();
console.info(v);
v = iter.next("data sent by yield");
console.info(v);
