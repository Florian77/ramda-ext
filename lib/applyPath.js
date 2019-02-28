import {curry, ap, flip, assocPath, pipe, path} from 'ramda';

var applyPath = curry(
    function (fn, pathArray) {
        return ap(
            // flip the last 2 remaining args to match ap() call
            flip(
                assocPath(pathArray)
            ),
            pipe(path(pathArray), fn),
        )
    }
);

export default applyPath;