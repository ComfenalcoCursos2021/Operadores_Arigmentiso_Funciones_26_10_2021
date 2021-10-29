let myStyle = `font-family:monospace;
                color:#fff;
                font-weight: 500;
                border-radius: 10px;
                background:#00A7AF;
                padding: 5px;`;
function Suma(numero1, numero2, myStyle) {
    let resultado = numero1 + numero2;
    console.group("Funcion SUMA");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cResultado de la suma: E° ${resultado}`, myStyle);
    console.groupEnd();

}
function Elevar(numero1, numero2, myStyle) {
    let resultado = numero1 ** numero2;
    console.group("Funcion ELEVEAR");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cResultado al elevar el numero: E° ${resultado}`, myStyle);
    console.groupEnd();
}
function Modulo(numero1, numero2, myStyle) {
    let resultado = numero1 % numero2;
    console.group("Funcion MODULO");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero2}`, myStyle);
        console.log(`%cEl sobrante de la division : E° ${resultado}`, myStyle);
    console.groupEnd();
}




Suma(98,24,myStyle);
Elevar(2,4,myStyle);
Modulo(11,3,myStyle);
