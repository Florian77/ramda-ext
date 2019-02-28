var {ap, flip, assocPath, path, is, split} = require( 'ramda');

/**
 *
 * @param orgPathValue
 * @param newPathValue
 * @param object
 * @returns {*}
 */
var copyPath = function (orgPathValue, newPathValue, object) {
    // console.log('signature:', arguments.length, arguments);

    function exec(_orgPathValue) {
        var orgPathArray = is(String, _orgPathValue) ? split('.', _orgPathValue) : _orgPathValue;
        // console.log('parse org:', orgPathArray);
        return function (_newPathValue) {
            var newPathArray = is(String, _newPathValue) ? split('.', _newPathValue) : _newPathValue;
            // console.log('parse new:', newPathArray);
            return ap(
                flip(
                    assocPath(newPathArray)
                ),
                path(orgPathArray)
            );
        }
    }

    if (arguments.length === 1) {
        return exec(orgPathValue);
    }
    if (arguments.length === 2) {
        return exec(orgPathValue)(newPathValue);
    }
    return exec(orgPathValue)(newPathValue)(object);

};

module.exports = copyPath;