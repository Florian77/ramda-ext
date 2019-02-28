var {ap, flip, assocPath, pipe, path, is, split, dissocPath} = require( 'ramda');

/**
 *
 * @param fn
 * @param orgPathValue
 * @param newPathValue
 * @param object
 * @returns {*}
 */
var moveApplyPath = function (fn, orgPathValue, newPathValue, object) {
    // console.log('signature:', arguments.length, arguments);

    function exec(_fn) {
        return function (_orgPathValue) {
            var orgPathArray = is(String, _orgPathValue) ? split('.', _orgPathValue) : _orgPathValue;
            // console.log('parse org:', orgPathArray);
            return function (_newPathValue) {
                var newPathArray = is(String, _newPathValue) ? split('.', _newPathValue) : _newPathValue;
                // console.log('parse new:', newPathArray);
                return pipe(
                    ap(
                        flip(
                            assocPath(newPathArray)
                        ),
                        pipe(
                            path(orgPathArray),
                            _fn
                        )
                    ),
                    dissocPath(orgPathArray)
                );
            }
        }
    }

    if(arguments.length === 1) {
        return exec(fn);
    }
    if (arguments.length === 2) {
        return exec(fn)(orgPathValue);
    }
    if (arguments.length === 3) {
        return exec(fn)(orgPathValue)(newPathValue);
    }
    return exec(fn)(orgPathValue)(newPathValue)(object);


};

module.exports = moveApplyPath;