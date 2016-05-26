function imprimir(){

	calcularCostos();
	ponerValores();

	var boton = document.getElementById("btnFin");   

	quitarBoton(boton);

}

function calcularCostos(){
	var costos = document.getElementsByClassName("prod");
    var subtot = 0;
    var cant= 0;
    var precio = 0;
    var desc = 0;

      for (var j = 0; j < costos.length; j++) {
        cant = parseInt(costos[j].querySelectorAll('.cant')[0].value || 1);
        precio = parseFloat(costos[j].querySelectorAll('.costo')[0].value || 0);
        subtot = subtot + (cant * precio);
      }

      desc = ((document.getElementById("inputDesc").value || 0)/100);
      impDesc = subtot * desc;
      document.getElementById("subtotal").innerHTML = subtot;
      document.getElementById("montoIVA").innerHTML= subtot * 0.21;
      document.getElementById('total').innerHTML = (subtot * 1.21) - (impDesc);
      document.getElementById('descuento').innerHTML = impDesc;
}

function ponerValores(){
	  var valores = document.getElementsByTagName("input");
      for (var i = 0; i < valores.length ; i++){
          elem = valores[i];
          cadaValor(elem);
        }
}

function cadaValor(elem){
		var valor = elem.value;
		elem.style = "display:none";
    	elem.parentElement.innerHTML += valor;
}

function quitarBoton(btn){
	btn.style = "display:none";
}


function cambiarIcono(select){
    switch(select.value) {
      case "B": document.getElementById("icono").innerHTML = "<span class='glyphicon glyphicon-bold'></span>";
      break;

      case "F": document.getElementById("icono").innerHTML = "<span class='glyphicon glyphicon-remove'></span>";
      break;

      case "A": document.getElementById("icono").innerHTML = "<span class='glyphicon glyphicon-font'></span>";
      break;
    }
}



document.getElementsByTagName('select')[0].onchange()
