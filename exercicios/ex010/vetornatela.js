/* let num = [4, 5, 6, 8, 2];
num.push(0) //Adicionar valor no final do array
num.sort()
console.log(num);

for(let pos=0;pos<num.length;pos++) {
    console.log(num[pos])
}
*/

/*
let valores = [5, 4, 2, 7, 8];
for(let pos = 0;pos<valores.length;pos++) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`);
}

*/

let valores = [5, 4, 2, 7, 8];

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

