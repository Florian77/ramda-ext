const testFn = require('../../lib/copyPath');
const R = require('ramda');

const o = {
    x: {
        y: '1',
        z: 'a',
    },
    v: 'do not touch'
};

const n = R.clone(o);
n.x.y1 = o.x.y;
// ...

console.log('NEW:', n);

const pathXY = testFn('x.y', 'x.y1');
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );

console.log('A3', testFn('x.y', 'x.y1', o) );
console.log('A2', testFn('x.y', 'x.y1')(o) );
console.log('A1', testFn('x.y')('x.y1')(o) );

const pipe = R.pipe(
    testFn('x.y', 'x.y1'),
    testFn('x.z', 'x.z1'),
    R.omit(['v'])
);

console.log('pipe:', pipe(o));