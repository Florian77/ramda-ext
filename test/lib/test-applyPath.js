const testFn = require('../../lib/applyPath');
const R = require('ramda');

const o = {
    x: {
        y: '1',
        z: 'a',
    },
    v: 'do not touch'
};

const n = R.clone(o);
n.x.y = Number(o.x.y);
// ...

console.log('NEW:', n);

const pathXY = testFn(Number, 'x.y');
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );

console.log('A3', testFn(Number, 'x.y', o) );
console.log('A2', testFn(Number,'x.y')(o) );
console.log('A1', testFn(Number,'x.y')(o) );

const pipe = R.pipe(
    testFn(Number,'x.y'),
    testFn(R.toUpper, 'x.z'),
    R.omit(['v'])
);

console.log('pipe:', pipe(o));