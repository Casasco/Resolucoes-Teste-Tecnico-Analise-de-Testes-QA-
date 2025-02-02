const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntaValor() {
  rl.question('Insira o valor da multa por dia em reais (deve ser maior ou igual a 1): ', (valor) => {
    valor = parseFloat(valor.replace(',', '.'));

    if (isNaN(valor) || valor < 1) {
      console.log('Por favor, insira um valor maior ou igual a 1.');
      perguntaValor();
    } else {
      perguntaDias(valor);
    }
  });
}

function perguntaDias(valor) {
  rl.question('Insira os dias de atraso: ', (dias) => {
    dias = parseFloat(dias.replace(',', '.'));

    if (isNaN(dias) || dias <= 0 || !Number.isInteger(dias)) {
      console.log('Por favor, insira um número válido de dias (número inteiro positivo).');
      perguntaDias(valor);
    } else {
      const multaTotal = valor * dias;
      console.log('O valor da multa para', dias + ' dias de atraso é: R$', multaTotal.toFixed(2).replace('.', ","));
      rl.close();
    }
  });
}

perguntaValor();
