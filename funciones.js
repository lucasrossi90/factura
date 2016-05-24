function imprimir(){
		var valores = getElementsByTagName('input');
		var largo = valores.length;
				for (var i = 0, i <= largo, i++){
					elem = valores[i];
					cadaValor(elem);
				}
}

function cadaValor(elem){
		var valor = elem.value;
		elem.parentElement.innerHTML = valor;
}