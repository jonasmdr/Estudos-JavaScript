/* function tabuada() {
    let num = document.querySelector('input#txtn');
    let tab = document.querySelector('select#seltab');
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}

*/

function tabuada() {
    let num = document.querySelector('#txtn');
    let tab = document.querySelector('#seltab');
    if (num.value.length == 0) {
        window.alert('[FALHA] Digite um número!')
    } else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for (let c = 1;c <= 10;c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}