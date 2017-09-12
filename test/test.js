/*

El testing puede resultar algo confuso en un inicio: ¿Para qué quisiéramos probar algo que nosotros hicimos?. Es justo eso, los humanos no somos perfectos y necesitamos tener una serie de validaciones adicionales para asegurarnos que todo saldrá como lo esperamos.
Para hacer test se utilizan 2 herramientas muy populares: Mocha y Chai.
npm install --save-dev mocha chai 
Los test prácticamente funcionan mediante resultado que esperamos, en la primer parte podemos describir que hace el test y lo segundo el valor esperado.
por ejemplo:

it(“Si la palabra termina con ar, se le quitan esas 2 letras.”,
  const tanslation = platzom(“Programar”)
  expect(translation).to.equal(“Program")
)

Y así con cada valor que esperamos.

*/

const expect = require('chai').expect
const platzom = require('..').default // Los dos puntos va un anivel arriba a buscar en el file .json, se le pone el default por que usamos la propiedad default

describe('#platzom', function () {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
    const translation = platzom("Zorro")
    const translation2 = platzom("Zarpar")

    expect(translation).to.equal("Zorrope")
    expect(translation2).to.equal("Zarppe")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })

  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })

})