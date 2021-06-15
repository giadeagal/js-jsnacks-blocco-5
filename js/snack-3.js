//Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine


var zucchine = [
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    },
    {
        tipo: randNum(1, 5),
        peso: parseInt(randNum(50, 400)),
        lunghezza: parseInt(randNum(10, 30))
    }
];

var lunghe = [];
var corte = [];
var pesoLunghe = 0;
var pesoCorte = 0;

for (var i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza <= 15) {
        corte.push(zucchine[i])
    } else {
        lunghe.push(zucchine[i])
    }
}

for (var i = 0; i < lunghe.length; i++){
    pesoLunghe += lunghe[i].peso
}

for (var i = 0; i < corte.length; i++){
    pesoCorte += corte[i].peso
}

var toPrint = "Hai raccolto " + zucchine.length + " zucchine:" + "<br>" + lunghe.length + " zucchine lunghe, che in totale pesano " + pesoLunghe/1000 + " Kg;" + "<br>" + corte.length + " zucchine corte, che in totale pesano " + pesoCorte/1000 + " Kg;";

docuPrint("text", toPrint)

function randNum(a, b) {
    return Math.floor(Math.random() * (b - a) ) + a;
}

function docuPrint(a,b) {
    document.getElementById(a).innerHTML = b
}