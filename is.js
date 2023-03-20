function type(value) {
    if (value === null) {
      return "null";
    }
    const baseType = typeof value;
    // Primitive types
    if (!["object", "function"].includes(baseType)) {
      return baseType;
    }
  
    // Symbol.toStringTag often specifies the "display name" of the
    // object's class. It's used in Object.prototype.toString().
    const tag = value[Symbol.toStringTag];
    if (typeof tag === "string") {
      return tag;
    }
  
    // If it's a function whose source code starts with the "class" keyword
    if (
      baseType === "function" &&
      Function.prototype.toString.call(value).startsWith("class")
    ) {
      return "class";
    }
  
    // The name of the constructor; for example `Array`, `GeneratorFunction`,
    // `Number`, `String`, `Boolean` or `MyCustomClass`
    const className = value.constructor.name;
    if (typeof className === "string" && className !== "") {
      return className;
    }
  
    // At this point there's no robust way to get the type of value,
    // so we use the base implementation.
    return baseType;
}

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
    return type(params) == "Array";
}

is.obj = function (params) {
    return typeof(params) == "object";
}

is.fun = function (params) {
    return typeof(params) == "function";
}


is.truthy = function (params) {
    return params == true;
}

is.falsy = function (params) {
    return params == false;
}

// console.log(is.obj(Object.create(null)));
// console.log(type(Object.create(null)));