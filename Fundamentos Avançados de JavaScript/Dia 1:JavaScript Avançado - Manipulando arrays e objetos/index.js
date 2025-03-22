// CRIANDO UM ARRAY

const arr0 = new Array();
const arr1 = [1,2,3,4,5,6,7,8,9,10];
const arr2 = ['um','dois','tres','quatro','cinco'];
const arr3 = [{1:'um',2:'dois'}];
const frutas = [];

frutas.push('laranja', 'melão', 'melancia', 'kiwi', 'banana', 'tomate', 'pimenta');

function acessandoIndex(arr) {
    console.log('Acessando o primeiro e último indice');
    const indexUm = arr[0];
    const ultimoIndex = arr[arr.length - 1];
    return console.log(indexUm, ultimoIndex);
}


function tamanhoArr(arr) {
    console.log('retorna o tamanho de um array');
    return console.log(arr.length);
}

function addElemArrColchetes(arr) {
    console.log('adiciona elementos em um array pelo seu indice e define o tamanho de 100');
    arr[0] = 'Hello';
    arr[99] = 'World';
    if (arr.length === 100) console.log("O tamanho desse array é 100");
    return console.log(arr);
}

function addElemArr(arr) {
    console.log('add elementos no array com a propiedade de array push()')
    arr.push('seis','sete','oito','nove','dez');
    return console.log(arr);
}

function iterando(arr) {
    console.log('Iternado em um array');    
    arr.forEach((item, indice, array) => {
        console.log(item,indice); // TRATANDO O forEach como uma callBack 
    });
}

const removerUltimoItemArr = (arr) => {
    console.log('Removendo o último elemento do array');    
    console.log(arr);
    const ultimoElem = arr.pop(arr);
    console.log('Elemento removido ', ultimoElem);
    console.log('Array atualizado: ',arr);    
}

const removerPrimeiroItemArr = (arr) => {
    console.log('Removendo o primeiro elemento do array');    
    console.log(arr);
    const primeiroElem = arr.shift();
    console.log('Elemento removido ', primeiroElem);
    console.log('Array atualizado: ',arr);    
}

function addAoPrimeiroIndex(arr) {
    console.log('Adicionado elemento ao inicio do arry');
    console.log(arr);
    const elemAdd = arr.unshift('manga');
    console.log('Elemento adicionado: ',elemAdd);
    console.log('Array atualizado: ',arr);    
} 

procurandoElemArr = (arr) => {
    console.clear();
    console.log('Procurando um elemento em um array');
    console.log('Array atual: ',arr);
    elemCinco = arr.indexOf('cinco');
    console.log('Elemento procurado "cinco": ',elemCinco);
        
}

removerPelaPosicaoArr = (arr) => {
    console.clear();
    console.log('Removendo um elemento do array pela sua posição')
    console.log('Array atual: ',arr);
    itemRemovidoTres = arr.splice(3,1);
    console.log("Elemento revovido: ", itemRemovidoTres);
    console.log('Array atualizado: ',arr);
}

copiandoUmArr = (arr) => {
    console.clear()
    console.log("Copiando os elementos de um array para outro")
    const copia = arr.slice()
    console.log("array copiado: ",copia);
}

filtrandoNumerosMaioresQueTres = (arr) => {
    console.clear();
    console.log("array atual: ", arr);
    console.log('Filter, numeros maiores que 3: ')
    console.log(arr.filter((el) => {
        return el > 3
    }));
}

multiplicandoTudo = (arr) => {
    console.clear()
    console.log('reduce, array atua: ',arr);
    valorInical = 0
    console.log(arr.reduce((contador) => contador * 2));
}

addElemArrColchetes(arr0);
tamanhoArr(arr1);
addElemArr(arr2);
acessandoIndex(arr2);
iterando(frutas);
removerUltimoItemArr(frutas);
removerPrimeiroItemArr(frutas);
addAoPrimeiroIndex(frutas);
procurandoElemArr(arr2);
removerPelaPosicaoArr(frutas);
copiandoUmArr(frutas);
filtrandoNumerosMaioresQueTres(arr1);
multiplicandoTudo(arr1);
console.clear()
console.log([1,2,3,4].reduce(function(acc,cur) {
    acc /= cur ;
    return acc
}));


// Métodos Array

// console.log(Array.from(arr1)); // Cria uma nova instância de um array a partir de um obj semelhante ou iterável
// console.log(Array.isArray(arr3)); // retorna true se a variável é um array

