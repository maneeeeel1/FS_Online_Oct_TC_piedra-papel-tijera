const mispuntos = document.getElementById("contador-usuario");
const puntospc = document.getElementById("contador-ordenador");
const resultadofinal = document.getElementById("resultados")
const options = ["piedra", "papel", "tijera"];
let resultado1= 0;
let resultado2= 0;



document.querySelectorAll(".boton-jugada").forEach(function(boton){
    boton.addEventListener("click", function(){
            const mieleccion = boton.getAttribute("data-jugada");
            juego(mieleccion);
    });


});


function juego (mieleccion){
        const eleccionpc= options[Math.floor(Math.random()*3)];
        const resultado=quiengana(mieleccion, eleccionpc);

        resultadopantalla(mieleccion, eleccionpc, resultado);
        actualizarscore(resultado);
}

function quiengana( mieleccion, eleccionpc){
    if (mieleccion === eleccionpc){
        return "Empate.";
    }else if
        (mieleccion === "piedra" && eleccionpc === "tijera"){
            console.log(mieleccion)
            return "Victoria!!!"
        }else if
        (mieleccion === "papel" && eleccionpc === "piedra"){
            console.log(mieleccion)
            return "Victoria!!!"
        }else if
        (mieleccion === "tijera" && eleccionpc === "papel"){
            console.log(mieleccion)
            return "Victoria!!!"
    }else {
        return "Derrota...";
    }

}

function resultadopantalla( mieleccion, eleccionpc, resultado){
    resultadofinal.innerHTML = "<p>Pulsaste " + mieleccion + " !!</p><br>" + 
    "<p>El ordenador ha elegido " + eleccionpc + " ... </p><br>" + 
    "<p><b> " + resultado + "</b></p>"

}

function actualizarscore (resultado){
        if (resultado === "Victoria!!!"){
            resultado1++;
        }else if ( resultado === "Derrota..."){
            resultado2++;
        }
        mispuntos.innerText= "Tus puntos: "+ resultado1;
        puntospc.innerText= "Puntos de la máquina: "+ resultado2;

}





