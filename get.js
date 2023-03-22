const get = function(src, path) {
    const keys = path.split('.')
    for (const key of keys) {
        if (Object.keys(src).includes(key)) {
            src = src[key]
        } else {
            return undefined
        }
    }
    return src
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'

// console.log(get({ nested: { key: 'value' } }, 'nx.nx'))
// console.log(get({ nested: { key: 'value' } }, 'nx.nx') === undefined)