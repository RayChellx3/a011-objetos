// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
const sacolao = []
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
// nome: string;
// preco: number;
// disponibilidade: boolean;

const frutas01 = {
    nome: "morango",
    preco: 4,
    disponibilidade: true
}

const frutas02 = {
    nome: "maçã",
    preco: 6,
    disponibilidade: true
}

const frutas03 = {
    nome: "melancia",
    preco: 10,
    disponibilidade: false
}

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutas01, frutas02, frutas03)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)


