const arrToSet = (data) => new Set(data)
const arrToStr = (data) => data.join("")
const setToArr = (data) => [...data]
const setToStr = (data) => Array.from(data).join("")
const strToArr = (data) => [...data]
const strToSet = (data) => new Set(data)
const mapToObj = (data) => Object.fromEntries(data)
const objToArr = (data) => Object.values(data)
const objToMap = (data) => new Map(Object.entries(data))
const arrToObj = (data) => Object.assign({}, data)
const strToObj = (data) => Object.assign({}, data)
const superTypeOf = (data) => {
    if (data === null) {
        return "null";
      }
      const baseType = typeof data;
      if (!["object", "function"].includes(baseType)) {
        if(baseType == "undefined"){
            return baseType
        }
        return baseType[0].toUpperCase() + baseType.slice(1);
      }
      const tag = data[Symbol.toStringTag];
      if (typeof tag === "string") {
        return tag;
      }
      if (
        baseType === "function" &&
        Function.prototype.toString.call(data).startsWith("class")
      ) {
        return "class";
      }
      const className = data.constructor.name;
      if (typeof className === "string" && className !== "") {
        return className;
      }
      return baseType;
}


const str = 'hello';
const arr = [1, 2, 1, 3];
const obj = { x: 45, y: 75, radius: 24 };
const set = new Set();
const map = new Map();
set.add(1);
set.add(2);
set.add(1);
set.add(3);
map.set('a', 1);
map.set('b', 2);
map.set(3, 'c');
map.set(4, 'd');

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
console.log(mapToObj(map)) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
console.log(objToArr(obj)) // -> [45, 75, 24]
console.log(objToMap(obj)) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
console.log(arrToObj(arr)) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
console.log(strToObj(str)) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

console.log(superTypeOf(map)) //         -> 'Map'
console.log(superTypeOf(set)) //         -> 'Set'
console.log(superTypeOf(obj))//         -> 'Object'
console.log(superTypeOf(str)) //         -> 'String'
console.log(superTypeOf(666)) //         -> 'Number'
console.log(superTypeOf(NaN)) //         -> 'Number'
console.log(superTypeOf(arr)) //         -> 'Array'
console.log(superTypeOf(null)) //        -> 'null'
console.log(superTypeOf(undefined)) //   -> 'undefined'
console.log(superTypeOf(superTypeOf)) // -> 'Function'