/*olho = 1 azul
olho = 2 verde
olho = 3 castanho */

var olho = 0;

//Olhos mãe 
function olhoAzul() {

    var olhoAzul = 1;
    olho = olhoAzul;
    return x;
}

function olhoCast() {

    var olhoAzul = 3;
    olho = olhoAzul;
    return x;
}

function olhoVerde() {

    var olhoAzul = 2;
    olho = olhoAzul;
    return x;
}
//olhos do pai
function olhoAzul2() {
    x = olho;
    o = Math.floor((Math.random() * 100) + 1);
    
    if(olho == 1 && o > 1){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 1 && o == 1){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
    if(olho == 3 && o <= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 3 && o >= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
    if(olho == 2 && o <= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 2 && o >= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
}

function olhoCast2() {
    x = olho;
    o = Math.floor((Math.random() * 100) + 1);
    if(olho == 1 && o > 50){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 1 && o <= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
    if(olho == 3 && o <= 12){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 3 && o <= 25 && o > 12){
        document.getElementById("baby").src = "../images/bebepadra olho verde.jpg";
    }
    if(olho == 3 && o > 25){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
    if(olho == 2 && o <= 12){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 2 && o <= 50 && o > 12){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
    if(olho == 2 && o > 50){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
}

function olhoVerde2() {
    x = olho;
    o = Math.floor((Math.random() * 100) + 1);
    if(olho == 1 && o >= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 1 && o <= 50){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
    if(olho == 3 && o <= 12){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 3 && o <= 50 && o > 12){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
    if(olho == 3 && o > 50){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
    if(olho == 2 && o == 1){
        document.getElementById("baby").src = "../images/bebepadrao olho castanho.jpg";
    }
    if(olho == 2 && o <= 25 && o > 1){
        document.getElementById("baby").src = "../images/bebepadrao olho azul.jpg";
    }
    if(olho == 2 && o > 25){
        document.getElementById("baby").src = "../images/bebepadrao olho verde.jpg";
    }
}





