
export async function escolhePalavra(){
    
    const listaDePalavras = await fetch('words.json')
        .then((response) => {return response.json()});

    const listaValida = await fetch('./wordsValidas.json')
    .then((response) => {return response.json()});


    const numero = Math.floor(Math.random() * (listaDePalavras.length - 1))
    const palavra = listaDePalavras[numero]


    return[palavra, listaValida];
}







