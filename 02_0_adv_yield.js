/**
 * Understand how yield produce and receive data
 *
 */
function* foo(x) {
    console.info(`x: ${x}`);
    var y = 2 * (yield (x + 1));
    console.info(`y: ${y}`);
    var z = yield (y / 3);
    console.info(`z: ${z}`);
    return (x + y + z);
}

const iter = foo(9);
console.info(iter.next());
console.info(iter.next(6));
console.info(iter.next(7));
