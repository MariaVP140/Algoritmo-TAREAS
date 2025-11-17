// ========================================================
//                  FUNCIÓN PRINCIPAL
// ========================================================

function analizar() {
    let texto = document.getElementById("entrada").value;

    // Ejecutar tus 15 funciones
    let palabras = contarPalabras(texto);
    let signos = contarSignos(texto);
    let vocales = contarVocales(texto);
    let consonantes = contarConsonantes(texto);
    let digitos = contarDigitos(texto);
    let mayusculas = contarMayusculasInicial(texto);
    let minusculas = contarMinusculasInicial(texto);
    let parrafos = contarParrafos(texto);
    let invertido = invertirTexto(texto);
    let totalCaracteres = contarTodosCaracteres(texto);
    let pares = contarPosicionesPares(texto);
    let impares = contarPosicionesImpares(texto);

    // Mostrar resultados en HTML
    document.getElementById("resultados").innerHTML = `
        <strong>RESULTADOS</strong><br><br>
        Palabras: ${palabras} <br>
        Signos de puntuación: ${signos} <br>
        Vocales: ${vocales} <br>
        Consonantes: ${consonantes} <br>
        Dígitos: ${digitos} <br>
        Palabras con mayúscula inicial: ${mayusculas} <br>
        Palabras con minúscula inicial: ${minusculas} <br>
        Párrafos: ${parrafos} <br>
        Texto invertido: ${invertido} <br>
        Total de caracteres: ${totalCaracteres} <br>
        Caracteres en posiciones pares: ${pares} <br>
        Caracteres en posiciones impares: ${impares} <br>
    `;
}



// ========================================================
//                       FUNCIONES
// ========================================================

// 1. Contar palabras
function contarPalabras(texto){
    if(texto.length === 0) return 0;

    let contar = 1;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] === " " || texto[i] === "\n"){
            contar++;
        }
    }
    return contar;
}

// 2. Contar signos de puntuación
function contarSignos(texto){
    let signos = ".,;:!?¿¡\"";
    let contar = 0;

    for (let i = 0; i < texto.length; i++){
        if (signos.includes(texto[i])){
            contar++;
        }
    }
    return contar;
}

// 3. Contar vocales
function contarVocales(texto){
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contar = 0;

    for (let i = 0; i < texto.length; i++){
        if (vocales.includes(texto[i])){
            contar++;
        }
    }
    return contar;
}

// 4. Contar consonantes
function contarConsonantes(texto){
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
    let contar = 0;

    for (let i = 0; i < texto.length; i++){
        let letra = texto[i].toLowerCase();
        if (letra >= "a" && letra <= "z" && !vocales.includes(letra)){
            contar++;
        }
    }
    return contar;
}

// 5. Contar dígitos
function contarDigitos(texto){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] >= "0" && texto[i] <= "9"){
            contar++;
        }
    }
    return contar;
}

// 6. Palabras que empiezan con mayúscula
function contarMayusculasInicial(texto){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (i === 0 || texto[i-1] === " " || texto[i-1] === "\n"){
            if (texto[i] >= "A" && texto[i] <= "Z"){
                contar++;
            }
        }
    }
    return contar;
}

// 7. Palabras que empiezan en minúscula
function contarMinusculasInicial(texto){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (i === 0 || texto[i-1] === " " || texto[i-1] === "\n"){
            if (texto[i] >= "a" && texto[i] <= "z"){
                contar++;
            }
        }
    }
    return contar;
}

// 8. Contar párrafos
function contarParrafos(texto){
    if(texto.length === 0) return 0;

    let contar = 1;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] === "\n"){
            contar++;
        }
    }
    return contar;
}

// 9. Invertir texto
function invertirTexto(texto){
    let inv = "";
    for (let i = texto.length - 1; i >= 0; i--){
        inv += texto[i];
    }
    return inv;
}

// 10. Contar todos los caracteres
function contarTodosCaracteres(texto){
    return texto.length;
}

// 11. Buscar una palabra (requiere palabra como parámetro)
function buscarPalabra(texto, palabra){
    let actual = "";
    for (let i=0; i<texto.length; i++){
        if (texto[i] !== " " && texto[i] !== "\n"){
            actual += texto[i];
        } else {
            if (actual === palabra) return true;
            actual = "";
        }
    }
    return actual === palabra;
}

// 12. Contar un carácter
function contarCaracter(texto, caracter){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (texto[i] === caracter){
            contar++;
        }
    }
    return contar;
}

// 13. Posiciones pares
function contarPosicionesPares(texto){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (i % 2 === 0){
            contar++;
        }
    }
    return contar;
}

// 14. Posiciones impares
function contarPosicionesImpares(texto){
    let contar = 0;
    for (let i = 0; i < texto.length; i++){
        if (i % 2 !== 0){
            contar++;
        }
    }
    return contar;
}

// 15. Añadir texto al inicio y final
function agregarTexto(texto, fragmento){
    let inicio = fragmento + " " + texto;
    let final = texto + " " + fragmento;
    return {inicio, final};
}
