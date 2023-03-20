// const is = {}

is.num = function (params) {
    return typeof(params) == "number";
}

is.nan = function (params) {
    return Number.isNaN(params);
}

is.str = function (params) {
    return typeof(params) == "string";
}

is.bool = function (params) {
    return typeof(params) == "boolean";
}

is.undef = function (params) {
    return typeof(params) == "undefined";
}

is.def = function (params) {
    return !is.undef(params);
}

is.arr = function (params) {
    return Array.isArray(params);
}

is.obj = function (params) {
    return typeof(params) === 'object' && !is.fun(params) && !is.arr(params) && params !== null;
}

is.fun = function (params) {
    return typeof(params) == "function";
}


is.truthy = function (params) {
    return !!params;
}

is.falsy = function (params) {
    return !params;
}

// console.log(is.obj({}));
// console.log(is.obj({ length: 10 }));
// console.log(is.obj(Object.create(null)));