const letrasValidas = ["a", "b", "c", "d" ,"e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let letraAtual = 0
let linhaAtual = 1
let acertouResultado = false

import {verificaTentativa, acertou} from "./verificaTentativa.js"
import {escolhePalavra} from './randomizaPalavra.js'



const resposta = await escolhePalavra();
const palavra = resposta[0].split('')
const listaValida = resposta[1]

const tecladoVirtual = document.querySelectorAll("#tecladoVirtual")


for(let index in tecladoVirtual){
    if(index < 28) {
        tecladoVirtual[index].addEventListener('click', (event) => escrita(event.target.value))
    }
    
}

const teclaApagarImg = document.getElementById("teclaApagarImg")
teclaApagarImg.addEventListener('click', (event) => escrita(event.target.className))

document.addEventListener('keydown', (event) => escrita(event.key))


function escrita(event){

    if(acertouResultado === false) {

        const keyName = event.toLowerCase()

        const letraAtualSlot = document.getElementById(`${linhaAtual}`).children[letraAtual]
        const letraAntesSlot = document.getElementById(`${linhaAtual}`).children[letraAtual - 1]
    
        if(letrasValidas.includes(keyName) && letraAtual < 5){
    
            letraAtualSlot.textContent = keyName
            letraAtual++
    
        } else if(keyName === 'backspace' && letraAtual > 0) {
            letraAntesSlot.textContent = ''
            letraAtual--
        } else if(keyName === 'enter'){
            const tentativa = juntaTentativa()
            if(letraAtual === 5){
                if(taNaLista(linhaAtual)){
                    verificaTentativa(palavra, tentativa, linhaAtual)
                    linhaAtual++
                    letraAtual = 0 
                    const resposta = palavra.toString('')
                    const chute = tentativa.toString('')
                    if(resposta === chute){
                        acertou()
                        acertouResultado = true
                    } else if(linhaAtual > 6){
                        Toastify({
                            text: "Não foi dessa vez!",
                            duration: -1,
                            gravity: "top",
                            position: "center",
                            offset: {
                                y: 85 },
                            stopOnFocus: true,
                            style: {
                            background: "#C21010",
                            },
                        }).showToast();

                        Toastify({
                            text: "Jogar novamente!",
                            duration: -1,
                            destination: "#",
                            gravity: "bottom",
                            position: "center",
                            stopOnFocus: true,
                            style: {
                            background: "#F7C04A",
                            },
                        }).showToast();
                    }
                }else {
                    Toastify({
                        text: "Palavra inválida",
                        duration: 1500,
                        gravity: "top",
                        position: "center",
                        stopOnFocus: true,
                        style: {
                        background: "#C21010",
                        },
                    }).showToast();
                    } 

            } else {
                Toastify({
                    text: "Complete todas as letras",
                    duration: 1500,
                    gravity: "top",
                    position: "center",
                    stopOnFocus: true,
                    style: {
                    background: "#C21010",
                    },
                }).showToast();
            }
            
            

        

        }  
    }
}

function juntaTentativa() {
    const letraUm = document.getElementById(`${linhaAtual}`).children[0].innerHTML
    const letraDois = document.getElementById(`${linhaAtual}`).children[1].innerHTML
    const letraTres = document.getElementById(`${linhaAtual}`).children[2].innerHTML
    const letraQuatro = document.getElementById(`${linhaAtual}`).children[3].innerHTML
    const letraCinco = document.getElementById(`${linhaAtual}`).children[4].innerHTML
    const tentativa = []
    tentativa.push(letraUm, letraDois, letraTres, letraQuatro, letraCinco)

    return tentativa
}

function taNaLista(linhaAtual) {
    const letraUm = document.getElementById(`${linhaAtual}`).children[0].innerHTML
    const letraDois = document.getElementById(`${linhaAtual}`).children[1].innerHTML
    const letraTres = document.getElementById(`${linhaAtual}`).children[2].innerHTML
    const letraQuatro = document.getElementById(`${linhaAtual}`).children[3].innerHTML
    const letraCinco = document.getElementById(`${linhaAtual}`).children[4].innerHTML


    return listaValida.includes((letraUm + letraDois + letraTres + letraQuatro + letraCinco))
    
}


