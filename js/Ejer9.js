let frase = prompt('Ingrese una Frase Cualquiera y Te Diremos que Vocales Tiene');
const longitud = frase.length;
let letra;

for(let i=0; i<longitud; i++){
    letra = frase.charAt(i)
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        document.write(letra);

    }
}