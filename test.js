/*
function sum(a, b) {
    return a + b;
}
module.exports = sum;
*/

/*
module.exports = (a, b) => {
    return a + b;
}

*/

module.exports = {
    sum: function (a, b) {
        return a + b;
    },
    mul: function (a, b) {
        return a * b;
    }
}