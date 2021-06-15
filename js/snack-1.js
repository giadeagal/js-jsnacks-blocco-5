// 1. Creare un array di oggetti. Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// 2. Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// 3. Crea un array di 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine


// SNACK 1
var bici = [
    {
        nome:"bianca",
        peso: randNum(5, 10)
    },
    {
        nome:"rossa",
        peso: randNum(5, 10)
    },
    {
        nome:"gialla",
        peso: randNum(5, 10)
    },
    {
        nome:"piccola",
        peso: randNum(5, 10)
    },
    {
        nome:"grande",
        peso: randNum(5, 10)
    },
    {
        nome:"d\'epoca",
        peso: randNum(5, 10)
    }
];

var mini = bici[0];

for (var i = 1; i < bici.length; i++) {
    if (mini.peso > bici[i].peso) {
        mini = bici[i];
    }
}

var toPrint = mini.nome + ", " + mini.peso;

docuPrint("text", toPrint)

function randNum(a, b) {
    return Math.floor(Math.random() * (b - a) ) + a;
}

function docuPrint(a,b) {
    document.getElementById(a).innerHTML = b
}