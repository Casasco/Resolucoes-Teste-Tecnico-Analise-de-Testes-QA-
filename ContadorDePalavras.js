const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a frase: ', (frase) => {
    const palavras = frase.split(/\s+/).filter(Boolean);
    const quantidade = palavras.length;
    console.log('Quantidade de palavras:', quantidade);
      rl.close();
  });