
export function verificaTentativa(palavra, tentativa, linha){
    for(let index in palavra){
        const bloco = document.getElementById(`${linha}`).children[index]
        const letraMaiuscula = tentativa[index].toUpperCase()
        const tecladoVirtual = document.getElementsByClassName(`${letraMaiuscula}`)
        if(palavra[index] === tentativa[index]){
            tecladoVirtual[0].style.background = "#539165"
            bloco.style.background = "#539165"
            
        }else if (palavra.includes(tentativa[index])){
            bloco.style.background = "#F7C04A"
            if(tecladoVirtual[0].style.background !== "rgb(83, 145, 101)"){
                tecladoVirtual[0].style.background = "#F7C04A"
            }
        } else{
            tecladoVirtual[0].style.background = "#585858"
            bloco.style.background = "gray"
        }
    }

}



export function acertou(){
    Toastify({
        text: "Parabéns, você acertou!!!",
        duration: -1,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
        background: "#557A46",
        },
    }).showToast();
}