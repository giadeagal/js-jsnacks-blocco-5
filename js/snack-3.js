// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine





function randNum(a, b) {
    return Math.floor(Math.random() * (b - a) ) + a;
}

function docuPrint(a,b) {
    document.getElementById(a).innerHTML = b
}