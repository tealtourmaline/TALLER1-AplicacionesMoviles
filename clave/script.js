let teclado = [];
let caja_clave;
let valor = "";

window.onload = init;

//obtiene los valores de cada una de las teclas
function init(){
  teclado[0] = document.getElementById("btn_0");
  teclado[1] = document.getElementById("btn_1");
  teclado[2] = document.getElementById("btn_2");
  teclado[3] = document.getElementById("btn_3");
  teclado[4] = document.getElementById("btn_4");
  teclado[5] = document.getElementById("btn_5");
  teclado[6] = document.getElementById("btn_6");
  teclado[7] = document.getElementById("btn_7");
  teclado[8] = document.getElementById("btn_8");
  teclado[9] = document.getElementById("btn_9");
  teclado[10] = document.getElementById("btn_borrar");
  
  caja_clave = document.getElementById("clave");
  
  asignarAccion();
}

function asignarAccion(){
    for(var i=0;i<teclado.length;i++)
    {
     teclado[i].addEventListener("click",presionoTecla);
    }
}

//Si la tecla es diferente de borrar, su valor se añade al campo de la clave; de lo contrario, se borra todo el contenido
function presionoTecla(event){
  let tecla = event.target.value;
  let bandera = false;
  
  if(tecla!="Borrar")
  {
    bandera = true;
  }

  
  if(bandera)
  {
      valor = valor + event.target.value;
      caja_clave.value = valor;
   } else{
     borrar();
   }
}

function borrar(){
  valor = ""; 
  caja_clave.value = "";
}

//aleatorizar el orden de los botones en el teclado en el momento en que se recarga
document.addEventListener('DOMContentLoaded', function() {
    var teclado = document.getElementById('teclado');
    var teclas = Array.from(teclado.getElementsByClassName('tecla'));
    var borrar = Array.from(teclado.getElementsByClassName('borrar'));

    teclas.sort(function() {
        return 0.5 - Math.random();
    });

    teclas.forEach(function(teclas) {
        teclado.appendChild(teclas);
    });
  
  borrar.forEach(function(borrar) {
        teclado.appendChild(borrar);
    });

  //asigna el valor inicial de la tecla a *
    teclas.forEach(function(teclas) {
        teclas.dataset.value = teclas.value;
        teclas.value = '*';
    });
  
  // Funcion que asigna el valor real correspondiente a todas las teclas
    function mostrarValores() {
        teclas.forEach(function(teclas) {
            teclas.value = teclas.dataset.value;
        });
    }

    // Función que oculta el valor de todas las teclas
    function ocultarValores() {
        teclas.forEach(function(teclas) {
        });
    }

    // Añade listeners para todos los botones que muestran los valores cuando entra el mouse, y los oculta cuando sale
    teclas.forEach(function(teclas) {
        teclas.addEventListener('mouseenter', ocultarValores);
        teclas.addEventListener('mouseleave', mostrarValores);
    });

  

});
