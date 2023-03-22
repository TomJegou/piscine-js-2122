const get = function(src, path) {
    let keys = path.split('.')
    while (keys.length > 0) {
        const key = keys[0]
        if (typeof src == "string") {
            return `${src}.${keys.join('.')}`
        } else {
            src = src[key]
            if(src === undefined) {
                return src
            }
            keys = keys.slice(1)
        }
    }
    return src
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'

// console.log(get({ nested: { key: 'value' } }, 'nx.nx'))
// console.log(get({ nested: { key: 'value' } }, 'nx.nx') === undefined)
// console.log(get({ "a": [{ "b": "t" }] }, 'a.0.b.toString'))