const rxApplyPath = require('../index');

const R = require('ramda');

// import R from 'ramda';

const o = {
    x: {
        y: '1',
        z: 'a',
    },
    a: {
        b: 'test'
    },
    v: 'auto'
};

const pathXY = rxApplyPath.applyPath(Number, 'x.y');
//
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );
console.log( 'pathXY(o)', pathXY(o) );


console.log('A3', rxApplyPath.applyPath(Number, 'x.y', o) );
console.log('A2', rxApplyPath.applyPath(Number, 'x.y')(o) );
console.log('A1', rxApplyPath.applyPath(Number)('x.y')(o) );

// console.log( rxApplyPath.applyPath(R.toUpper, 'x.z', o) );
// console.log( rxApplyPath.applyPath(R.toUpper, 'x.z')(o) );

// const removeKey = R.curry( (key, object) =>  );

const pipe = R.pipe(
    rxApplyPath.applyPathNumber('x.y'),
    rxApplyPath.applyPath(R.toUpper, 'x.z'),
    R.omit('v')
);

console.log('pipe:', pipe(o));