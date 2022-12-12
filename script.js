// TRANSIÇÃO DE TELA
// tela anúncio produtos
let ads = document.getElementById("ads");

// adicionar a class="hidde" que atribui display="none"
function change() {
    ads.classList.add("hidde");
}

// remover a class="hidde"
function remove() {
    ads.classList.remove("hidde")
}

// trocar a tela de 5 em 5 segundos
setInterval(change, 5000);
setInterval(remove, 10000);