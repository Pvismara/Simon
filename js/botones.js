
var arrNumeros = [];
// Definimos una variable de tipo array con 4 posibles valores, (uno por cada color) y la llamamos "arrayNumeros".
//Mediante pos=0, indicamos que se coloque en la primera posición del array. 
var pos=0;
//A continuación definimos las variables del array y les asociamos un id por cada botón.
var botonRojo=1;
var botonVerde=2;
var botonAzul=3;
var botonAmarillo=4;

//Para comenzar el juego, al hacer click en "Empezar" llamamos a la función "getRndInteger". 
//Utilizamos el método push para colocarlo dentro del array, empezando por la posición 0. 
//Llamamos la función "replay" para obtener las siguientes posiciones del array.

document.getElementById('start').onclick=function(){
   arrNumeros.push(getRndInteger(1,4));
   pos=0;
   replay();
}

//Encender cada botón al hacer click sobre él. 
//Incluimos la estructura "if", para que si el jugador pulsa sobre el botón que se ha reproducido,continúe el juego.
//Si se pulsa un botón diferente al reproducido, el jugador ha perdido y sale una alerta con el mensaje "You lose!". 
//A continuación, vaciamos el array mediante el método splice, para resetear el array y comenzar una nueva partida. 
//Repetimos el proceso por cada botón.

document.getElementById('botonRojo').onclick=function(){
	document.getElementById('botonRojo').style.opacity='1';
	document.getElementById('audioBotonRojo').play();
	setTimeout(function(){
		document.getElementById('botonRojo').style.opacity='0.2';
	},500); 
	if(arrNumeros[pos]==1){
		pos++;
	    if(pos==arrNumeros.length){
	    	arrNumeros.push(getRndInteger(1,4));
	    	pos=0;
	    	setTimeout(replay,1000); 
	    }
		
	}else{
		alert("You lose!");
		arrNumeros.splice(0,arrNumeros.length);	
	    }
	
}

	
document.getElementById('botonVerde').onclick=function(){
	
	document.getElementById('botonVerde').style.opacity='1';
	document.getElementById('audioBotonVerde').play();
	setTimeout(function(){
		document.getElementById('botonVerde').style.opacity='0.2';
	},500);
	if(arrNumeros[pos]==2){
		pos++;
	    if(pos==arrNumeros.length){
	    	arrNumeros.push(getRndInteger(1,4));
	    	pos=0;
	    	 setTimeout(replay,1000); 
	    }
		
	}else{
		alert("You lose!");
		arrNumeros.splice(0,arrNumeros.length);	
	    }
}
document.getElementById('botonAzul').onclick=function(){
	
	document.getElementById('botonAzul').style.opacity='1';
	document.getElementById('audioBotonAzul').play();
	setTimeout(function(){
		document.getElementById('botonAzul').style.opacity='0.2';
	},500); 
	if(arrNumeros[pos]==3){
		pos++;
	    if(pos==arrNumeros.length){
	    	arrNumeros.push(getRndInteger(1,4));
	    	pos=0;
	    	 setTimeout(replay,1000); 
	    }
		
	}else{
		alert("You lose!");
		arrNumeros.splice(0,arrNumeros.length);	
	    }
}

document.getElementById('botonAmarillo').onclick=function(){

	document.getElementById('botonAmarillo').style.opacity='1';
	document.getElementById('audioBotonAmarillo').play();
	setTimeout(function(){
	 document.getElementById('botonAmarillo').style.opacity='0.2';
	},500); 
	if(arrNumeros[pos]==4){
		pos++;
	    if(pos==arrNumeros.length){
	    	arrNumeros.push(getRndInteger(1,4));
	    	pos=0;
	    	 setTimeout(replay,1000); 
	    }
		
	}else{
		alert("You lose!");
		arrNumeros.splice(0,arrNumeros.length);	
	    }
	
}


/**
 *  La función de Javascript "getRndInteger" se incluye para obtener un número al azar entre los 4 disponibles, asociados a cada color.
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
 

/**
 * La siguiente función de Javascript sirve para reproducir el audio e iluminar el botón correspondiente a la posición del array obtenida al azar. 
 * Se repite por cada botón.
 * 
 * @param style, play
 * @returns cambio de opacidad y sonido
 */

function reproducir(){

	//(arrNumeros[pos]==1) cuando la posición es igual a 1, se enciende y se apaga la opacidad, y se reproduce el audio.

		if (arrNumeros[pos]==1){   
			document.getElementById('botonRojo').style.opacity='1';
			document.getElementById('audioBotonRojo').play();
			setTimeout(function(){
				document.getElementById('botonRojo').style.opacity='0.2';
			},500); 	

	//(arrNumeros[pos]==2) cuando la posición es igual a 2, se enciende y se apaga la opacidad, y se reproduce el audio.

		}else if (arrNumeros[pos]==2){   
			document.getElementById('botonVerde').style.opacity='1';
			document.getElementById('audioBotonVerde').play();
			setTimeout(function(){
				document.getElementById('botonVerde').style.opacity='0.2';
			},500); 
		}else if (arrNumeros[pos]==3){  
//(arrNumeros[pos]==3) cuando la posición es igual a 3, se enciende y se apaga la opacidad, y se reproduce el audio.

			document.getElementById('botonAzul').style.opacity='1';
			document.getElementById('audioBotonAzul').play();
			setTimeout(function(){
				document.getElementById('botonAzul').style.opacity='0.2';
			},500); 
			
		}else {  
//(si no) se enciende y se apaga la opacidad, y se reproduce el audio.

			document.getElementById('botonAmarillo').style.opacity='1';
			document.getElementById('audioBotonAmarillo').play();
			setTimeout(function(){
				document.getElementById('botonAmarillo').style.opacity='0.2';
			},500); 
		}
}


/**
 * La función "replay" de Javascript sirve para repetir la función reproducir, sumándole 1 posición a la combinación y espera 1 segundo.
 * 
 * @param pos, arrNumeros
 * @returns la repetición de la función "reproducir"
 */

function replay(){
	//función (replay) reproduce la función (reproducir)
		console.log(pos);
		if(pos<arrNumeros.length){
			reproducir();
			pos++;
		    setTimeout(replay,1000); 
		}else{
			pos=0;
		}
	}

