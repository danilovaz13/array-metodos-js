const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 29, 22];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const li = document.querySelectorAll("li");
const liArray = Array.from(li);

console.log(liArray.isArray);

const frutas = ["Banana", "Maça", ["Uva Roxa", "Uva Verde"]];

console.log(frutas[2][0].length);

const instrumentos2 = ["Guitarra", "Baixo", "Violão"];
instrumentos2.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos2);
console.log(idades);

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Honda", "Kia");
carros.push("Toyota", "Chevrolet");

console.log(carros);

const nomeCarros = ["Classic", "Uno", "Fiesta", "Celta"];
const primeiroCarro = nomeCarros.shift();
const ultimoCarro = nomeCarros.pop();

console.log(nomeCarros);

const carros2 = ["Ford", "Fiat", "VW", "Honda"];
carros2.splice(1, 0, "Kia", "Mustang");
carros2.splice(3, 2, "Fusca");

console.log(carros2);

const itens = ["item1", "item2", "item3", "item4", "item5"];

console.log(itens.copyWithin(3, 0, 2));

console.log(itens.fill("Banana", 1, 3));

const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);

const maisTransportes = [].concat(transporte1, transporte2, "Van");

const linguagens = ["html", "css", "js", "php", "python", "js"];
linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); //2
linguagens.lastIndexOf("js"); // 5

linguagens.join(", ");

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join("h1");

console.log(htmlString);

const linguagens2 = ["html", "js", "ruby", "java", "python", "php"];

const cloneLinguagens2 = linguagens2.slice();

console.log(linguagens2.slice(2, 4));
