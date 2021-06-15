// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine


var zucchine = [
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
];

var pesoTot = 0;

for (var i = 0; i < zucchine.length; i++) {
    pesoTot += zucchine[i].peso
}

docuPrint("text", pesoTot)

function randNum(a, b) {
    return Math.floor(Math.random() * (b - a) ) + a;
}

function docuPrint(a,b) {
    document.getElementById(a).innerHTML = b
}