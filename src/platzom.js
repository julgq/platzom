
/*
- Si se declara la siguiente funció:
export default platzom(str){

-- La importación sería:
import platzom from 'platzom'

- En cambio si se declara, sin el default:
export platzom(str){

-- La importación seria:
import { platzom } from 'platzom'


*/



export default function platzom(str){
	let translation = str

	// Si la palabra termina en "ar", se le quitan esos dos ultimos caracteres
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)

	}

	// Si la palabra inicia con z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation = translation + 'pe'
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión en medio.

	if(translation.length>=10){
		const firstHalf = translation.slice(0, Math.round(length / 2));
		const secondHalf = translation.slice(0, Math.round(length / 2));
		translation = `${firstHalf}-${secondHalf}`;
	}

	// Si la palabra original es un palíndromo,
	// ninguna regla anterior cuenta y se devuelve 
	// la misma palabra intercalando mayúsculas y minúsculas.

	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true

		for(let i = 0; i < length; i++){
			
			// seleccionar caracter
			const char = str.charAt(i)

			
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			
			// cambiar capitalize a false or True, lo inverso a su valor.
			capitalize = !capitalize

	  

		}

		return translation
	}


	if (str == reverse(str)){
		return minMay(str)

	}

	return translation;
}
