/**
 * See the syntax
 */
function* gen() {
  console.info('generater got executed');
  yield 1;
}

// invoke generator method
//console.info('before generator')
//const iter = gen();
//console.info('after generator')

//let v = iter.next();
//console.info(v);
//v = iter.next();
//console.info(v);
