let grocery1;
let grocery2;
let grocery3;

function comestibletracket(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    let result = grocery1 + grocery2 + grocery3;
    document.getElementById('result').innerText = `El monto a cancelar es: ${result}`;
    console.log(result)
}