const words = function(str) {
    return str.split(' ');
}

const sentence = function(t){
    return t.join(" ");
}

const yell = function(str) {
    return str.toUpperCase();
}

const whisper = function(str) {
    return `*${str.toLowerCase()}*`;
}

const capitalize = function(str) {
    const t = words(str);
    for(var i = 0; i < t.length; i++) {
        t[i][0] = t[i][0].toUpperCase();
        for(var j = 1; j < t[i].length; j++){
            t[i][j] = t[i][j].toLowerCase();
        }
    }
    return sentence(t);
}