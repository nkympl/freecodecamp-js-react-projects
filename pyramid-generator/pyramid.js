const character = "#";
const count = 8;
const rows = [];
let inverted = true;

// Versão 1:
/* for (let i = 0; i < count; i = i + 1) {
  rows.push(character.repeat(i + 1));
} */

// Versão 2:
/*
Essa função manda calcular o número de espaços para centralizar, calcular o número ímpar de caracteres para formar a pirâmide, 
e então juntar essas três partes para formar a string de uma linha.
*/
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) + // Parte 1: Espaços (Preenchimento Esquerdo)
    character.repeat(2 * rowNumber - 1) + // Parte 2: O Caractere (#)
    " ".repeat(rowCount - rowNumber) // Parte 3: Espaços (Preenchimento Direito)
  );
}

// Usar um diferente tipo de loop (está logo abaixo!)
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
} */

// E se eu virasse a pirâmide de cabeça para baixo (está logo abaixo!)
/*  while (rows.lenght < count) {
  rows.push(padRow(rows.length + 1, count));
}
*/

// Invertendo a pirâmide
/* for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}
*/

// Invertendo a pirâmide (versão 2)
/* for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
} */

// Invertendo a pirâmide (versão 3)
/* for (let i = 1; i <= count; i++) {
  rows.unshift(padRow(i, count));
} */

// Alternando entre pirâmides
for (let i = 1; i <= count; i++) {
  if (!inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

let result = "";

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
