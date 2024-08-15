// Mensaje encriptado
let mensajeEncriptado = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Manejar el evento del botón "Encriptar"
document.getElementById("encryptBtn").addEventListener("click", function() {
    const texto = inputText.value;
    const textoEncriptado = encriptarTexto(texto);
    outputText.value = textoEncriptado;
    mensajeFinal.value = textoEncriptado;

    // Ocultar imagen y placeholder si hay texto en el output
    if (textoEncriptado.trim() !== "") {
        document.getElementById("imagenDecorativa").style.display = "none";
        mensajeFinal.placeholder = "";
    }
});

// Manejar el evento del botón "Desencriptar"
document.getElementById("decryptBtn").addEventListener("click", function() {
    const texto = inputText.value;
    const textoDesencriptado = desencriptarTexto(texto);
    outputText.value = textoDesencriptado;
    mensajeFinal.value = textoDesencriptado;

    }
);

function btncopiar() {
    mensajeFinal.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}



function btncopiar() {
    const mensajeFinal = document.getElementById("mensajeFinal"); 
    mensajeFinal.select();
    document.execCommand("copy"); 
    alert("Texto copiado al portapapeles");
}


// Llamada a la función y mostrar el resultado
let mensajeDesencriptado = desencriptarMensaje(mensajeEncriptado);
console.log(mensajeDesencriptado);