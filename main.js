


let myStyle = `font-family:sans-serif;
                color:#fff;
                font-weight: 500;
                border-radius: 10px;
                background:#00A7AF;
                padding: 5px;`;


function suma(numero1, numero2, myStyle) {
    let resultado = numero1 + numero2;
    console.group("Funcion SUMA");
        console.log(`%cEl numero1: N° ${numero1}`, myStyle);
        console.log(`%cEl numero2: N° ${numero1}`, myStyle);
        console.log(`%cResultado de la suma: E° ${resultado}`, myStyle);
    console.groupEnd();

}

suma(98,24,myStyle);
