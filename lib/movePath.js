var {ap, flip, assocPath, pipe, path, is, split, dissocPath} = require( 'ramda');

/**
 *
 * @param orgPathValue
 * @param newPathValue
 * @param object
 * @returns {*}
 */
var movePath = function (orgPathValue, newPathValue, object) {
    // console.log('signature:', arguments.length, arguments);

    function exec(_orgPathValue) {
        var orgPathArray = is(String, _orgPathValue) ? split('.', _orgPathValue) : _orgPathValue;
        // console.log('parse org:', orgPathArray);
        return function (_newPathValue) {
            var newPathArray = is(String, _newPathValue) ? split('.', _newPathValue) : _newPathValue;
            // console.log('parse new:', newPathArray);
            return pipe( ap(
                    flip(
                        assocPath(newPathArray)
                    ),
                    path(orgPathArray)
                ),
                dissocPath(orgPathArray)
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

module.exports = movePath;