const { from } = require('rxjs');
const { map, first, last, skip, toArray } = require('rxjs/operators');

let nomes = ['Zaqueu', 'Pedro', 'Joao', 'Carlos', 'Alberto', 'Junior', 'Mikael', 'Helena', 'Julia'];

function imprimirNomes() {
    from(nomes)
        .pipe(map(nome => nome), toArray())
        .subscribe(nome => console.log(`Todos os nomes: ${nome}\n`))
}

function primeiroNome() {
    from(nomes)
        .pipe(first())
        .subscribe(nome => console.log(`Primeiro nome: ${nome}\n`))
}

function ultimoNome() {
    from(nomes)
        .pipe(last())
        .subscribe(nome => console.log(`Ultimo nome: ${nome}\n`))
}

function pulaNomes() {
    from(nomes)
        .pipe(skip(2), toArray())
        .subscribe(nome => console.log(`A partir do segundo nome: ${nome}\n`))
}

imprimirNomes();
primeiroNome();
ultimoNome();
pulaNomes();