// fix Math.sign with zero and negative zero values
function sign(v) {
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1
}