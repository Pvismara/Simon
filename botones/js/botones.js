/**
 * This JavaScript function always returns a random 
 * number between min and max (both included)
 * 
 * @url https://www.w3schools.com/js/js_random.asp
 * 
 * @param min Number min  random 
 * @param max Number max random
 * @returns int Random Number
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById('botonRojo').onclick=function(){
	document.getElementById('botonRojo').style.opacity='1';
	document.getElementById('audioBotonRojo').play();
	setTimeout(function(){
		document.getElementById('botonRojo').style.opacity='0.2';
	},500);
}

document.getElementById('botonVerde').onclick=function(){
	document.getElementById('botonVerde').style.opacity='1';
	document.getElementById('audioBotonVerde').play();
	setTimeout(function(){
		document.getElementById('botonVerde').style.opacity='0.2';
	},500);
}

document.getElementById('botonAzul').onclick=function(){
	document.getElementById('botonAzul').style.opacity='1';
	document.getElementById('audioBotonAzul').play();
	setTimeout(function(){
		document.getElementById('botonAzul').style.opacity='0.2';
	},500);
}
document.getElementById('botonAmarillo').onclick=function(){
	document.getElementById('botonAmarillo').style.opacity='1';
	document.getElementById('audioBotonAmarillo').play();
	setTimeout(function(){
		document.getElementById('botonAmarillo').style.opacity='0.2';
	},500);
}
// Variables globales
var numeros=[1,1,1,2,2,2,3,3,3];
var pos=0;

// Cuando se hace un click al boton de empezar se inicia la funcion play
document.getElementById('start').onclick=play;


/**
 * Funcion que recorre el array y reproduce la secuencia de sonidos
 * @returns 
 */
function play(){
	if(pos<numeros.length){
		switch(numeros[pos]){
			case 1:
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonRojo').click();
				break;
			case 2:
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonVerde').click();
				break;
			case 3:
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonAzul').click();
				break;
			case 4:
				// Se utiliza el metodo click para llamar al evento onclick
				document.getElementById('botonAmarillo').click();
				break;
		}
		pos++;
		setTimeout(play,1000);
	}else if(pos==numeros.length){
		pos=0;
	}
}