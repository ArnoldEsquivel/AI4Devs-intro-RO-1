## Chatbot utilizado
=> ChatGPT GPT-4o

## Promp Utilizado
=> Necesito que te comportes como un ingeniero de software experto en HTML, CSS y JS, eres un ingeniero que procura siempre entregar sus desarrollos con una buena experiencia de usuario y con una interfaz acorde al diseño de lo que se esta desarrollando.

Ahora, como este ingeniero necesito que me ayudes a crear el siguiente componente:
Vamos a crear una pagina que contenta un input en donde podamos ingresar texto y que nos lo devuelva al reves, es decir, un ejercicio de reverse string, estos son los criterios de aceptacion:
* Debe haber un input para introducir el texto
* Debe haber un botón para ejecutar la logica del reverse (El boton debe activarse despues de haber introducido minimo 3 caracteres)
* Debe imprimir el reverse-string en un <p> cuidando la UI para que se vea bien acorde al diseño
* Debe haber un boton para poder copiar en el portapapeles la string en reversa una vez se haya imprimido
* Si hay mas de 3 caracteres deberá llamar a la funcion de reverse en automatico e imprimirla (Usar un debouncer de .5 ms)

El template me lo deberás dar en un HTML y la logica en un archivo de JS.