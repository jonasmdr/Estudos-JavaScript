let nasc = window.document.getElementById('ianonasc')
function verificador() {
    let nasc1 = Number(nasc.value)
    let ident = window.document.getElementById('ident')
    let data = new Date()
    let ano = data.getFullYear
    let idade = Number(data) - Number(nasc1.value)
    ident.innerHTML = `<p> Idade ${idade}</p>`
}