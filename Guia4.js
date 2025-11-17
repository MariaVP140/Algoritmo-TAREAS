//1. Contar el número total de palabras

// Regla: una palabra termina cuando hay un espacio " " o un salto de línea.
// Ejemplo entrada: "Hola mundo desde Quito"
// Salida: "Número de palabras: 4

function ContarPalabras(){
    let palabra = "Hola mundo desde Quito"
    let contarPalabras = 1

    for (let i = 0; i<palabra.length; i++){
        if (palabra[i] ===" " || palabra[i] ==="\n"){ // Esto /n se usa para salto de linea
            contarPalabras = contarPalabras + 1 ;
         }
    }
    console.log(`Numero de palabras : ${contarPalabras}`)
}
ContarPalabras();


//2. Contar los signos de puntuación

// Contar: .,;:!?¿¡"
// Ejemplo entrada: "Hola, ¿cómo estás?"
// Salida: "Signos de puntuación: 3"

function ContarSignos(){
    let palabra = "Hola, ¿cómo estás?"
    let signos = ".,;:!?¿¡"
    let contarSignos = 0;

    for (let i = 0; i<palabra.length; i++){
        if (signos.includes(palabra[i])){
            contarSignos = contarSignos + 1;
        }
    }
    console.log(`Signos de puntuacion : ${contarSignos}`)
}
ContarSignos();


//3 Contar las vocales

// Vocales: a, e, i, o, u (mayúsculas y minúsculas).
// Ejemplo entrada: "Educación"
// Salida: "Cantidad de vocales: 5"

function contarVocales(){
    let palabra = "Educación";
    let vocales = "aeiouáéíóúAEIOU"
    let contarvocales = 0;

    for (let i = 0; i<palabra.length; i++){
        if (vocales.includes(palabra[i])){
            contarvocales = contarvocales + 1;        }
    }
    console.log(`Cantidad de Vocales : ${contarvocales}`)
}
contarVocales();


//4. Contar los consonantes

// Letras alfabéticas que no sean vocales.
// Ejemplo entrada: "Hola"
// Salida: "Cantidad de consonantes: 2"

function contarConsonantes(){
    let palabra = "Hola";
    let vocales = "aeiouáéíóúAEIOU"
    let Cconsonante = 0;

    for (let i = 0; i<palabra.length; i++){
         let letra = palabra[i].toLowerCase()

        if (letra >="a" && letra <="z" && !vocales.includes(letra)){ 
            Cconsonante = Cconsonante + 1;  
        }
    }
    console.log(`Cantidad de Consonastes : ${Cconsonante}`)
}
contarConsonantes();


//5. Contar los dígitos

// Caracteres numéricos 0–9.
// Ejemplo entrada: "Mi clave es 1234"
// Salida: "Cantidad de dígitos: 4"

function contarDigitos(){
    let contraseña = "Mi clave es 1234";
    let Cdigitos = 0;

    for (let i = 0; i<contraseña.length; i++){
        let clave = contraseña[i]

        if (clave >="0" && clave <="9"){ 
            Cdigitos = Cdigitos + 1;  
        }
    }
    console.log(`Cantidad de Digitos : ${Cdigitos}`)
}
contarDigitos();


//7. Contar palabras que empiezan en minúscula

// Igual que el anterior, pero verificando minúscula.
// Ejemplo entrada: "hola Mundo bonito"
// Salida: "Palabras con minúscula inicial: 2"

function contarMinusculas(){
    let palabra = "hola Mundo bonito";
    let Cminusculas = 0;

    for (let i = 0; i<palabra.length; i++){
        if (i === 0 || palabra[i-1] === " "){
            texto = palabra[i]  

            if (texto >="a" && texto <="z"){
                Cminusculas = Cminusculas + 1;
            }
        }
    }
    console.log(`Palabras con minuscula inicial : ${Cminusculas}`)
}
contarMinusculas();


//8. Contar párrafos

// Un párrafo termina con salto de línea \n.
// Ejemplo entrada:
// Hola mundo
// Esto es un segundo párrafo
// Salida: "Número de párrafos: 2"

function contarParrafos(){
    let palabra = "\nhola Mundo bonito\nEsto es un segundo párrafo"
    let Cparrafos = 0;

    for (let i = 0; i<palabra.length; i++){
        if (palabra[i] === "\n" ){
            Cparrafos = Cparrafos + 1;
        }
    }
    console.log(`Numero de parrafos : ${Cparrafos}`)
}
contarParrafos();


//9. Invertir el texto completo

// Construir un nuevo texto recorriendo la cadena desde el final hasta el inicio.
// Ejemplo entrada: "Hola"
// Salida: "aloH"

function Invertirtexto(){
    let palabra = "Hola"
    let inv = "";

    for (let i =palabra.length-1; i>=0; i--){
        inv = inv + palabra[i];
     }
    console.log(inv)
}
Invertirtexto();


//10. Contar todos los caracteres

// Contar absolutamente todo: letras, números, signos, espacios.
// Ejemplo entrada: "Hola 123!"
// Salida: "Total de caracteres: 9"

function ContarCaracteres(){
    let palabra = "Hola 123!"
    let Ccaracter = 0;

    for (let i = 0; i<palabra.length; i++){
         Ccaracter = Ccaracter + 1
        }
    console.log(`Total de caracteres : ${Ccaracter} `)
}
ContarCaracteres();


//11. Buscar una palabra en el texto

// Entrada: el alumno ya tiene un texto en el textarea.
// Debe pedir una palabra a buscar.
// Salida: mostrar si la palabra existe o no en el texto.
//Ejemplo:
// 1. Texto: "Me gusta programar en JavaScript"
// 2. Palabra: "programar"
// 3. Salida: "La palabra 'programar' sí se encuentra en el texto."


function BuscarPalabra(){
    let texto = "Me gusta programar en JavaScript"
    let palabra = "programar";

    if(texto.includes(palabra)){
        console.log(`La palabra '${palabra}' Sí se encuentra en el texto.`)
    }else{
         console.log(`La palabra '${palabra}' No se encuentra en el texto.`)
    }
}  
BuscarPalabra();


//12. Contar un carácter en el texto

// Entrada: texto del textarea + un carácter a contar.
// Salida: número de veces que aparece.
// Ejemplo:
// 1. Texto: "Hola mundo"
// 2. Carácter: "o"
// 3. Salida: "El carácter 'o' aparece 2 veces."

function ContarCaracteresT(){
    let texto = "Hola mundo"
    let caracter = "o";
    let veces = 0;

    for (let i = 0; i<texto.length; i++){
        if (texto[i]=== caracter){
            veces = veces +1;
        }
    }
    console.log(`El caracter "${caracter}" aparece ${veces} veces`)
}  
ContarCaracteresT();


//13. Contar caracteres en posiciones pares

// Entrada: texto del textarea.
// Recorrer la cadena y contar caracteres en índices pares (0, 2, 4, …).
// Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones pares: 2"

function ContarCaracterP(){
    let texto = "Hola"
    let Cpar = 0;

    for (let i = 0; i<texto.length; i++){
        if (i % 2 === 0){
            Cpar = Cpar + 1
        }
    }
    console.log(`Caracteres en posiciones pares: ${Cpar}`)
}  
ContarCaracterP();


//14. Contar caracteres en posiciones impares

// Entrada: texto del textarea.
// Recorrer la cadena y contar caracteres en índices impares (1, 3, 5, …).
//Ejemplo:
// 1. Texto: "Hola"
// 2. Índices: H(0), o(1), l(2), a(3)
// 3. Salida: "Caracteres en posiciones impares: 2"


function ContarCaracterI(){
    let texto = "Hola"
    let Cimpar = 0;

    for (let i = 0; i<texto.length; i++){
        if (i % 2 !== 0){
            Cimpar = Cimpar + 1
        }
    }
    console.log(`Caracteres en posiciones impares : ${Cimpar}`)
}  
ContarCaracterI();


//15. Añadir un texto al inicio o al final

// Entrada: texto del textarea + un nuevo fragmento.
// Salida: mostrar el texto original con el fragmento agregado al inicio y también
// al final.
//Ejemplo:
// 1. Texto: "Aprender programación"
// 2. Fragmento: "Hoy"
// 3. Salida:
// 1. Al inicio: "Hoy Aprender programación"
// 2. Al final: "Aprender programación Hoy"


function AñadirTexto(){
    let texto = "Aprender programación"
    let Al_inicio = "";
    let Al_final = "";
    let fragmento = "Hoy"

    Al_inicio = fragmento + " " + texto;
    Al_final = texto + " " + fragmento;

    console.log(`Al inicio: ${Al_inicio}`);
    console.log(`Al final: ${Al_final}`);

}  
AñadirTexto();