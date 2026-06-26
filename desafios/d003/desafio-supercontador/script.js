let inicio = window.document.querySelector('input#inicio')
let fim = window.document.querySelector('input#fim')
let passo = window.document.querySelector('input#passo')

function contar() {
    let ini = Number(inicio.value)
    let fi = Number(fim.value)
    let pas = Number(passo.value)
    let res = window.document.querySelector('div#res')
    let num = document.createElement('p')
    res.innerHTML = `Contando:`
    if (!ini || !fi || !pas) {
        res.innerHTML = 'Impossível contar!'
    } else if (pas <= 0) {
            window.alert('Passo inválido! Considerando PASSO')
        } else {
    for (let inic = ini;inic <= fi;inic+=pas) {
        num.innerHTML += ` \uD83D\uDC49 ${inic}`
    }
    res.appendChild(num)
}
}