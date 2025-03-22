# Array

JavaScript entende os arrays(matrizes) como um objeto. Podemos manipular sua estrutura com métodos _js_.

Sua sintexe é assim:

```js
[elemento0,elemento1,elemento3,...];
new Array(elemento0,elemento1,elemento3,...);
new Array(arrayLength) // Nesse caso esse argumento seria um número
```

O array _js_ é inicializado com os elementos que possui, exceto no caso de seu construtor `new Array()`, começar com um número, nesse caso um novo array com o tamanho desse número é retornado.

Arrays são objetos semelhantes a listas que vêm com uma série de métodos embutidos para realizar operações de **travessia e mutação**.

## Conceituando

Operações de travessia e mutação são conceitos importantes na manipulação de estrutura de dados como arrays, listas encadeadas, árvores e grafos.

### Travessia

São operações que percorrem todos os elementos de uma estrutura de dados, geralmente para leitura ou busca de um elemento específico.

- Percorrer um array e imprimir cada elemento.
- Visitar todos os nós de uma árvore binária em ordem(pré-ordem, in-ordem, pós-ordem).
- Explorar as vértices de um grafo em BFS(busca em largura) ou DFS(busca em profundidade).

```js
const array = [1, 2, 3, 4, 5];
// travessia
array.forEach((elemento) => console.log(elemento));
```

### Mutação

São operaçõe que alteram os seus dados dentro de uma estrutura, alterando seu estado.

- Adicionar ou remover elementos em um array(`push`,`pop`,`splice`).
- Modificar um nó em uma árvore.
- Atualizar um valor em uma lista encadeada.

```js
let numbers = [1, 2, 3];
// Mutaçã
numbers.push(4); // [1,2,3,4] adiciona o último elemento
numbers.pop(); // [1,2,3] remove o último elemento
```

---

Os arrays em _js_ não tem tamanhos fixos e nem tipos fixos, isso quer dizer que podemos definir qualquer quantidade de dados em um array e misturar todos os tipos de dados, mas caso queira, é possível tipar os arrays.

Os indices não podem usar _strings_, somente números inteiros.

Todo array em _js_ começa no indice zero: o primeiro elemento de um array está na posição `0` e o último \*\*está na posição equivalente a `length -1`. `length` é a propriedade que retorna o tamanho do array.

```js
let arr = ["Primeiro elemento", "Segundo elemento"];
console.log(arr[0]); // exibe "Primeiro elemento"
console.log(arr[1]); // exibe "Segundo elemento"
console.log(arr[arr.length - 1]); // exibe "Segundo elemento"
```

Note que para acessar o indice em um array é usado a notação `[]`, se usar a notação `.` causará um erros de sintaxe `console.log(arr.0)`.

```js
let arr = [1999,1991,2001,2016,2020];
console.log(arr.0) // CAUSA ERRO DE SINTAXE
console.log(arr[0]) // FUNCIONA CORRETAMENTE

```

## Length

Propriedade `length` e númericas de um array em jsavasxript são conectadas. Vários dos métodos javascript pré-definidos como (`join`,`slice`,`indexOf` etc) levam em conta o valor da propriedade `length` de array quando eles são chamados. Outros métodos como (`push`, `splice` etc) também resultam em uma atualização em `length` do array.

```js
let frutas = [];
frutas.push("banana", "maça", "pêssego");

console.log(frutas.length); // 3
```

## Propriedades

### `IndexOf`

O método `indeOf()` retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

O exemplo seguinte usa `indexOf()` para localizar valores em um array.

```js
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### `Splice`

O método `splice()` altera o consteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

```js
const meses = ["jan", "mar", "abr", "jun"];
meses.splice(1, 0, "fev"); // indice, quantiaDeElemASerRemovidoDoIndiceParaFrente, elemNovoAdd
console.log(meses); // 'jan','fev,'mar','abr','jun'
meses.splice(4, 1, "mai"); // substitui o elem no 4 indice
console.log(meses); // 'jan','fev,'mar','abr','mai'
```

`splice()` retorna uma lista contendo os elementos removidos.

<h3>Exemplo:</h3>

```js
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]

//remove 1 elemento a partir do índice 2, e insere "trumpet"
removed = myFish.splice(2, 1, "trumpet");
//myFish é ["angel", "clown", "trumpet", "surgeon"]
//removed é ["drum"]

//remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
//myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
//removed é ["angel", "clown"]

//remove 2 elementos a partir do indice 3
removed = myFish.splice(3, Number.MAX_VALUE);
//myFish é ["parrot", "anemone", "blue"]
//removed é ["trumpet", "surgeon"]
```

### `Slice`

O método `slice()` retorna uma cópia de **parte** de um array a partir de um subarray criado entre as posições `inicio` e `fim` (fim não incluído) de um array original. O array original não é modificado.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// index:elem
// 0:1
// 1:2
// 2:3
// 3:4
// 4:5
// 5:6
// 6:7
// 7:8

const copyNumb = number.splice(); // params não especificados, copia o array todo
const copyNumb = number.splice(1, 5); // copia do indice 1 até o 5
const copyNumb = number.splice(-2); // copia de trás para frent 2 elem (7,8)
const copyNumb = number.splice(2, -1); // copia o index 1 e o 6 (como é negativo, conta de trás para frente)
```

<h3>Exemplo:</h3>

```js
// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];
var citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']
```

### `Join`

O método `join()` junta todos os elementos de um array em uma string e retorna essa string.

```js
const elements = ["Fogo", "Ar", "Água"];
console.log(elements.join()); // "Fogo,Ar,Água"
console.log(elements.join("")); // "FogoArÁgua"
console.log(elements.join("-")); // "Fogo-Ar-Água"
```

Sintaxe:
`arr.join([separador] = ',')`

### `Map`

O médoto `map()` invoca uma função `callback` passada por arguments para cada elemento do array e devolve um novo array como resultado.

Sintaxe: `arr.map(callbak[,thisArg])`

Params:

- `callback`  
  Função cujo retorno produz o elemento do novo array, recebe três arguments.

  - `valor atual `  
    O valor do elemento de origem
  - `indice`  
    O índice do elemento atual que está sendo processado no array.
  - `array`  
    O array de origem

- `thisArg`  
  Opcional, valor a ser utilizado como _`this`_ no momento da execução da função de `callback`

<h3>Exemplos: </h3>
Mapeando um array de números para um array de raízes quadradas:

```js
const numbs = [1, 4, 9];
const roots = numbs.map(Math.sqrt);
console.log(roots); // [1,2,3];
```

Mapeando um array de números usando a callback que contém um arguments:

```js
const numbs = [2, 4, 6];
const doble = numbs.map((item) => item * 2);
console.log(doble); // [4,8,12]
```

Usando o map par ainverte uma string:

```js
constg str = "12345";
console.log([].map.call(str,(x) => x).reverse().join("")); // ["54321"]
```

### `Filter`

O método `filter()` cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida;

```js
const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 14, 16, 17, 18, 19, 20,
];

const pares = numeros.filter((par) => par % 2 === 0);

console.log(pares); //[    2,  4,  6,  8, 10,   12, 14, 16, 18, 20 ]
```

`filter()` chama a função callback fornecida, uma vez para cada elemento do array, e constói um novo array com todos os valores para os quais o `callback` retornou o valor `true`. O `callback` é chamado apenas para índices do array que não possuem o valores atribuidos; Ele não é invocado para índices que foream excluídos ou para aqueles que não tiveram valor atribuído. Elementos do array que não passaram no teste do `callback` são simplesmente ignorados, e não são incluídos no novo array.

<h3>Exemplo: </h3>

```js

function gradeOSuficiente(value) {
  return value >= 10;
}

const filtered = [12,4,8,130,44].filter(gradeOSuficiente); // o filter é [12,130,44]

```

### `Reduce`

O método `reduce()` executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

```js

const array1 = [1,2,3,4];
const valorINicial = 0;
const somaComValorInicial = array1.reduce((contador, valorAtual) => contador + valorAtual, valorINicial
);
console.log(somaComValorInicial);

```

A função reduce recebe 4 params:

1. Acumulador(`acc`)
2. Valor atual (`cur`)
3. Index atual(`idx`)
4. Array original(`src`)

O valor de retorno de sua função **reducer** é atribuida ou acumulada. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

Sintaxe: `array.reduce(callback(acumulador, valorAtual[, index[, array]]) [, valorInicial]);`

```js

[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
});
// 10
```

### `forEach`

O método forEach() executa uma dada função em cada elemento de um array.

```js
const array =["a","b","c"];

array.forEach((elemento) => console.log(elemento));
// saída: "a"
// saída: "b"
// saída: "c"
```

Sintaxe: `arr.forEach(callback(currentValue [, index [,array]] )[,thisArg])`

Params:

`callback`  
Função para executar em cada elemento, recebe trê params:
  - `currentValue`  
    Ovalor atual do elemento sendo processado no array.
  - `index` (opcional)  
    O indice do elemento atual sendo processado no array.
  - `thisArg` (opcional)  
    O array que o `forEach()` está sendo aplicado.


`thisArg` (opcional)  
Opciona.Valor a ser usado como `this` quando executar `callback`

O `forEach` executa o `callback` fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).

<h3>Exemplos: </h3>

```js
function logArrayElementos(elemento, index, array) {
  console.log("a[" + index + "] = " + elemento);
}

[2,5,9].forEach(logArrayElementos);
//a[0] = 2
//a[1] = 5
//a[2] = 9
```