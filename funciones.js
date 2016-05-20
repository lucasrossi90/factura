function cargarDatos(){
	numero = prompt('Ingrese el NÚMERO de factura');
	fecha = prompt('Ingrese la FECHA de la factura');
	cliente =  prompt('Ingrese el CLIENTE de la factura');
	cuit = prompt('Ingrese el CUIT del cliente');
	document.getElementById('nfact').innerHTML = numero;
	document.getElementById('fecha').innerHTML = fecha;
	document.getElementById('cliente').innerHTML = cliente;
	document.getElementById('cuit').innerHTML = cuit;
}