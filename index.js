var applyPath = require('./lib/applyPath');
var copyPath = require('./lib/copyPath');



module.exports.applyPath = applyPath;
module.exports.applyPathNumber = applyPath(Number);


module.exports.copyPath = copyPath;
