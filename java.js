function calcularCarta(){

    let parcela = Number(document.getElementById("parcela").value);

    if(parcela <=0){

        resultado.innerHTML="Digite um valor válido.";

        return;
    }

    let carta = parcela * 150;

    resultado.innerHTML=
    "Você poderá buscar uma carta de aproximadamente <br><br><strong>R$ "
    + carta.toLocaleString('pt-BR')
    + "</strong>";
}

const botoes=document.querySelectorAll(".faq-btn");

botoes.forEach(botao=>{

    botao.addEventListener("click",()=>{

        botao.parentElement.classList.toggle("active");

    });

});