let count = 0;

function increaseCount(){
    count++;
    countDisplay();
    checkCountValue();
}

function countDisplay(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count === 10){
        alert("Tus seguidores son 10, Felicitaciones!!");
    }else if( count === 20){
        alert("Tus seguidores son 20, Estupendo!!");
    }
}

function restablecerContador(){
    if(count !==0 ){
        alert("Se restablecera el contador a '0'.");
    }
    count = 0;
    document.getElementById('countDisplay').innerHTML=count;
}