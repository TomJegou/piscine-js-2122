const get = function(src, path) {
    const keys = path.split('.')
    keys.map((key) => {
        src = src[key]
    })
    return src
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path)) // -> 'peekaboo'