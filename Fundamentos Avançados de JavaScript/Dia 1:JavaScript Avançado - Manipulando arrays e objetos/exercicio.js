// Criar uma função que filtra números pares de um array.


const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,14,16,17,18,19,20];

console.log(`números pares da lista de números de 1 a 20: `)
const pares = (arr) => arr.filter((par) => par % 2 === 0);

console.log(pares(numeros));


// Criar uma função que soma os valores de um array de objetos.

const items = [
    {name:"viola", price:20},
    {name:"gaita", price:2},
    {name:"bateria", price:50},
    {name:"sanfona", price:30},
    {name:"teclado", price:100},
];

function somaPrice(arr) {

    console.log("Itens da lista: ");

    arr.forEach(element => {
        console.log(element);              
    });

    const sum = arr.reduce((acumulador, valorAtual,) => {
        return valorAtual.price + acumulador;
    },0);

    console.log(`Soma dos valores dos itens: ${sum}`);
}

somaPrice(items);








