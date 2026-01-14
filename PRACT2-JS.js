
const numero = document.getElementById("numero");
const mensaje = document.getElementById("mensaje");


const btnIncrementar = document.getElementById("inc");
const btnDecrementar = document.getElementById("dec");
const btnReiniciar   = document.getElementById("res");

let contador = 0;


numero.textContent = contador;


let temporizadorMensaje = null;


btnIncrementar.addEventListener("click", function () {
    contador++;
    numero.textContent = contador;
    if (contador > 10){
        alert("Has superado el numero 10")
    }
});



btnDecrementar.addEventListener("click", function () {
    if (contador > 0) {
        contador--; 
        numero.textContent = contador;
    } else {
    mensaje.textContent = "No puede ser menor que 0";

    clearTimeout(temporizadorMensaje);

    temporizadorMensaje = setTimeout(function () {
        mensaje.textContent = "";
    }, 1000);
}
});



btnReiniciar.addEventListener("click", function () {
    contador = 0;
    numero.textContent = contador;
});


