function gerarVetorAleatorio() {
    const vetor = [];
    for (let i = 0; i < 50; i++) {
      vetor.push(Math.floor(Math.random() * 100) + 1);
    }
    return vetor;
}

const vetorAleatorio = gerarVetorAleatorio();

function verificarMultiplos(vetorAleatorio) {
    const vetorMultiplo = [];
    const vetorNaoMultiplo = [];

    for (let i = 0; i < vetorAleatorio.length; i++) {
        if (vetorAleatorio[i] % 3 === 0) {
            vetorMultiplo.push(vetorAleatorio[i]);
        } else {
            vetorNaoMultiplo.push(vetorAleatorio[i]);
        }
    }

    console.log('Vetor Original:', vetorAleatorio);
    console.log('Vetor múltiplos de 3:', vetorMultiplo);
    console.log('Vetor de não múltiplos de 3:', vetorNaoMultiplo);
  
}

verificarMultiplos(vetorAleatorio);
