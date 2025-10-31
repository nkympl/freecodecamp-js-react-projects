// -----------------------------------------------------------------------------
// Propósito: Funções para calcular a média da turma, converter notas para conceitos
// e gerar uma mensagem final de resultado para o estudante.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 1. Cálculo de Média
// -----------------------------------------------------------------------------

/*
A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.
*/

// Esta função calcula a média aritmética de todas as notas fornecidas em um array.
function getAverage(scores) {
  // Inicializa uma variável para somar todas as notas.
  let sum = 0;

  // Percorre o array 'scores', adicionando cada nota à soma.
  for (const score of scores) {
    sum += score;
  }

  // O cálculo da média é a soma total dividida pelo número de notas (tamanho do array).
  return sum / scores.length;
}

// Exemplos para demonstrar o cálculo da média.
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// -----------------------------------------------------------------------------
// 2. Conversão de Nota para Conceito (A, B, C...)
// -----------------------------------------------------------------------------

/*
Now the teacher needs your help converting the student score to a letter grade.
*/

// Esta função recebe uma nota numérica e retorna o conceito de letra correspondente.
// A lógica é avaliada sequencialmente do maior para o menor.
function getGrade(score) {
  if (score == 100) {
    // 100 é a única nota que recebe "A++".
    return "A++";
  } else if (score > 89 && score <= 99) {
    // Notas entre 90 e 99 recebem "A".
    return "A";
  } else if (score > 79 && score <= 89) {
    // Notas entre 80 e 89 recebem "B".
    return "B";
  } else if (score > 69 && score <= 79) {
    // Notas entre 70 e 79 recebem "C".
    return "C";
  } else if (score > 59 && score <= 69) {
    // Notas entre 60 e 69 recebem "D".
    return "D";
  } else {
    // Notas abaixo de 60 recebem "F" (Reprovado).
    return "F";
  }
}

// Exemplos para testar a conversão de notas.
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// -----------------------------------------------------------------------------
// 3. Checagem de Aprovação
// -----------------------------------------------------------------------------

/*
Agora a professora quer uma maneira mais fácil de checar se um estudante tem uma nota pra passar (diferente de F)
*/

// Esta função verifica se o conceito da nota é diferente de "F", indicando aprovação.
function hasPassingGrade(score) {
  // Obtém o conceito da nota chamando a função getGrade.
  if (getGrade(score) != "F") {
    // Se o conceito não for "F", o aluno é considerado aprovado.
    return true;
  } else {
    // Se o conceito for "F", o aluno é considerado reprovado.
    return false;
  }
}

// Exemplos para checar o status de aprovação.
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// -----------------------------------------------------------------------------
// 4. Geração de Mensagem Final
// -----------------------------------------------------------------------------

/*
Agora a professora, dispondo de todas as informações, quer mandar uma mensagem ao estudante com os resultados.
*/

// Esta função constrói a mensagem final para o estudante, usando as outras funções para obter
// a média, o conceito e o status de aprovação.
function studentMsg(totalScores, studentScore) {
  // Verifica se o aluno foi aprovado para determinar o final da mensagem.
  if (hasPassingGrade(studentScore)) {
    // Constrói a mensagem para o caso de aprovação, concatenando:
    // Média da turma, Conceito individual e status de APROVADO.
    return (
      "Class average: " +
      getAverage(totalScores) +
      "." +
      " Your grade: " +
      getGrade(studentScore) +
      ". " +
      "You passed the course."
    );
  } else {
    // Constrói a mensagem para o caso de reprovação, concatenando:
    // Média da turma, Conceito individual e status de REPROVADO.
    return (
      "Class average: " +
      getAverage(totalScores) +
      "." +
      " Your grade: " +
      getGrade(studentScore) +
      ". " +
      "You failed the course."
    );
  }
}

// Exemplo final, unindo todas as funções para gerar a mensagem completa.
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 100));
