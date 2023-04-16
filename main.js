
let encriptar = document.getElementById('encriptar'),
    desencriptar = document.getElementById('desencriptar'),
    copy = document.getElementById('copy');
let textoDeDisplayUno = document.getElementById('textareaUno');
let btnHomeroSleep = document.getElementById('btn');


///FUNCIONES

function prueba() {
    alert('funciono')
};

function encriptado() {
    let textoDeDisplayUno = document.getElementById('textareaUno').value;
    let textoDeDisplayDos = document.getElementById('textareaDos');

    let textoEncriptado = textoDeDisplayUno
        .replace(/e/gim, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    if (textoDeDisplayDos != 0) {
        document.getElementById('textareaDos').value = textoEncriptado;
    }

    let agrega= document.querySelector('.textarea')
     agrega.style.fontSize='0'

     let imgEncriptadoexito = document.getElementById('img-encriptadoexito')
    //  let textoDeDisplayUno = document.getElementById('textareaUno').value;
 
     if (textoDeDisplayUno != 0) {
         imgEncriptadoexito.style.visibility = 'visible';
     }

}

function desencriptado() {
    let textoDeDisplayUno = document.getElementById('textareaUno').value;
    let textoDeDisplayDos = document.getElementById('textareaDos');

    let textoEncriptado = textoDeDisplayUno
        .replace(/enter/gim, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');

    if (textoDeDisplayDos != 0) {
        document.getElementById('textareaDos').value = textoEncriptado;
    }

    let agrega= document.querySelector('.textarea')
    agrega.style.fontSize='0'

    let imgDesencriptadoexito = document.getElementById('img-desencriptadoexito');

        // let textoDeDisplayUno = document.getElementById('textareaUno').value;

    if (textoDeDisplayUno != 0) {
        imgDesencriptadoexito.style.visibility = 'visible';
    }
}
function copiar() {
    let textoDeDisplayDos = document.getElementById('textareaDos');
    textoDeDisplayDos.select();
    document.execCommand('copy');
}
function desaparecerHomeroSleep() {
    let imgHomero = document.getElementById('homero');

    imgHomero.style.visibility = 'collapse';

}
function aparecerHomeroSleep() {
    let imgHomero = document.getElementById('homero');
    let imgEncriptadoexito = document.getElementById('img-encriptadoexito')
    let imgDesencriptadoexito = document.getElementById('img-desencriptadoexito');

    imgHomero.style.visibility = 'visible';
    imgEncriptadoexito.style.visibility = 'collapse';
    imgDesencriptadoexito.style.visibility = 'collapse';

    let agrega= document.querySelector('.textarea')
     agrega.style.fontSize='3rem'
}
// function encriptadoConExito() {
//     let imgEncriptadoexito = document.getElementById('img-encriptadoexito')
//     let textoDeDisplayUno = document.getElementById('textareaUno').value;

//     if (textoDeDisplayUno != 0) {
//         imgEncriptadoexito.style.visibility = 'visible';
//     }
// }
// function desencriptadoExito() {
//     let imgDesencriptadoexito = document.getElementById('img-desencriptadoexito');

//         let textoDeDisplayUno = document.getElementById('textareaUno').value;

//     if (textoDeDisplayUno != 0) {
//         imgDesencriptadoexito.style.visibility = 'visible';
//     }
// }



////

// function agregar(){
//     let agrega= document.querySelector('.textarea')
//      agrega.style.fontSize='0'
// }

// EVENTOS

encriptar.addEventListener('click', encriptado);
desencriptar.addEventListener('click', desencriptado);
copy.addEventListener('click', copiar);
textoDeDisplayUno.addEventListener('click', desaparecerHomeroSleep)
btnHomeroSleep.addEventListener('click', aparecerHomeroSleep);
encriptar.addEventListener('click',encriptadoConExito)
encriptar.addEventListener('click',agregar)
desencriptar.addEventListener('click',desencriptadoExito)
desencriptar.addEventListener('click',agregar)