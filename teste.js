let num = 8;
let $_u = 2;
num **= 2
console.log(num)

soma = 0
for(let n1 = 1;n1 <= 10; n1++) {
    soma += n1
}

console.log(soma)

let total = 0, count = 1;
while (count <=10) {
    total += count;
    count += 1;
}
console.log(total);



function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(5));