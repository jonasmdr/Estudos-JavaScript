let y = 3;
function plus1(x) {
    return x+1;
}

console.log(plus1(y))

let square = function(x) {
    return x*x;
};

console.log(square(plus1(y)))