const testFn = require('../index');

const o = {
    "create_time": "2018-11-13 13:59:11.966561",
    "itemid": "302",
    "client": "1",
    "artikelnummer": "300182",
    "packagenumber": "0",
    "weight": "0,26",
    "laenge": "126",
    "breite": "126",
    "hoehe": "126",
    "id": "1"
};


console.log(
    'OKAY',
    testFn.applyPathNumber("laenge")(o)
);

// ToDo: Fix this!
console.log(
    'ERROR',
    testFn.applyPathNumber("laenge", o)
);