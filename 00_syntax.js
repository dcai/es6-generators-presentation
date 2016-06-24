/**
 * Get to know the syntax
 */
function* gen() {
  console.info('== Generater func got executed');
  yield 99;
  console.info('== done')
  return 'yeah';
}


// invoke generator method
//console.info('>> before generator')
const iter = gen();
//console.info('>> after generator')

let v = iter.next();
console.info(v);
v = iter.next();
console.info(v);
