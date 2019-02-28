import applyPath from './applyPath';
import {curry, split} from 'ramda';

var applyPathByString = curry (
    function (fn, pathString) {
        return applyPath(
            fn,
            split('.', pathString)
        )
    }
);
export default applyPathByString;