
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

