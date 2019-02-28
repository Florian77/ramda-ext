var applyPath = require('./lib/applyPath');

var copyPath = require('./lib/copyPath');
var copyApplyPath = require('./lib/copyApplyPath');

var movePath = require('./lib/movePath');
var moveApplyPath = require('./lib/moveApplyPath');

module.exports.applyPath = applyPath;
module.exports.applyPathNumber = applyPath(Number);

module.exports.copyPath = copyPath;
module.exports.copyApplyPath = copyApplyPath;
module.exports.copyApplyPathNumber = copyApplyPath(Number);

module.exports.movePath = movePath;
module.exports.moveApplyPath = moveApplyPath;
module.exports.moveApplyPathNumber = moveApplyPath(Number);
