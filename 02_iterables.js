/**
 * Generator returns iterator
 *
 */
function* gen() {
  for (let i = 1; i < 6; i++) {
    yield i * i;
  }
}

const iter = gen();
for (let num of iter) {
  console.info(`-> ${num}`);
}

/**
 * Make a iterator
 *   understand iterator protocol
 *
 */
//function makeIterator(array) {
  //var nextIndex = 0;
  //return {
    //next: function() {
      //return nextIndex < array.length
        //? { value: array[nextIndex++], done: false }
        //: { done: true };
    //}
  //}
//}

//let it = makeIterator([99, 199]);
//console.log(it.next().value);
//console.log(it.next().value);
//console.log(it.next().done);



/**
 * Make object iterable
 *
 */
//var iterableObject = {}
//iterableObject[Symbol.iterator] = function* () {
    //yield 256;
    //yield 1024;
//};
//for (let n of iterableObject) {
  //console.info(`=> ${n}`);
//}
