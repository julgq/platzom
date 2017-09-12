'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;

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

function platzom(str) {
	var translation = str;

	// Si la palabra termina en "ar", se le quitan esos dos ultimos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}

	// Si la palabra inicia con z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')) {
		translation = translation + 'pe';
	}

	// Si la palabra traducida tiene 10 o más letras,
	// se debe partir a la mitad y unir con un guión en medio.

	if (translation.length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(0, Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	// Si la palabra original es un palíndromo,
	// ninguna regla anterior cuenta y se devuelve 
	// la misma palabra intercalando mayúsculas y minúsculas.

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;

		for (var i = 0; i < length; i++) {

			// seleccionar caracter
			var char = str.charAt(i);

			translation += capitalize ? char.toUpperCase() : char.toLowerCase();

			// cambiar capitalize a false or True, lo inverso a su valor.
			capitalize = !capitalize;
		}

		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}