var {/*curry, curryN,*/ ap, flip, assocPath, pipe, path, is, split} = require( 'ramda');


var applyPath = function (fn, pathValue, object) {
        // console.log('signature:', arguments.length, arguments);
        function exec(xFn) {
            return function (xPath) {
                var pathArray = is(String, xPath) ? split('.', xPath) : xPath;
                // console.log('parse:', xPath);
                return ap(
                    flip(
                        assocPath(pathArray)
                    ),
                    pipe(path(pathArray), xFn)
                );
            }
        }

        if(arguments.length === 1) {
            return exec(fn);
        }
        if (arguments.length === 2) {
            // return 'curryed function EXEC(2)';
            return exec(fn)(pathValue);
        }
        return exec(fn)(pathValue)(object);
};

module.exports = applyPath;