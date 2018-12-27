var olho = 0;
/*olho = 1 azul
olho = 2 verde
olho = 3 castanho */
var combolho = 0;


//Olhos mãe 
function olhoAzul() {
    olho = 1;
    return olho;
}

function olhoCast() {

    var olhoCast = 3;
    olho = olhoCast;
    return olhoCast;
}

function olhoVerde() {

    var olhoVerde = 2;
    olho = olhoVerde;
    return olhoVerde;
}
//olhos do pai
function olhoAzul2() {
    o = Math.floor((Math.random() * 100) + 1);
    
    if(olho == 1 && o > 1){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 1 && o <= 1){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
    if(olho == 3 && o <= 50){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 3 && o >= 50){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
    if(olho == 2 && o <= 50){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 2 && o >= 50){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
}

function olhoCast2() {
    o = Math.floor((Math.random() * 100) + 1);
    if(olho == 1 && o > 50){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 1 && o <= 50){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
    if(olho == 3 && o <= 12){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 3 && o <= 25 && o > 12){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
    if(olho == 3 && o > 25){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
    if(olho == 2 && o <= 12){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 2 && o <= 50 && o > 12){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
    if(olho == 2 && o > 50){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
}

function olhoVerde2() {
    o = Math.floor((Math.random() * 100) + 1);
    if(olho == 1 && o >= 50){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 1 && o <= 50){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
    if(olho == 3 && o <= 12){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 3 && o <= 50 && o > 12){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
    if(olho == 3 && o > 50){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
    if(olho == 2 && o == 1){
        document.getElementById("baby").src = "images/bebepadrao olho castanho.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
        combolho = 3;
        return combolho;
    }
    if(olho == 2 && o <= 25 && o > 1){
        document.getElementById("baby").src = "images/bebepadrao olho azul.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
        combolho = 1;
        return combolho;
    }
    if(olho == 2 && o > 25){
        document.getElementById("baby").src = "images/bebepadrao olho verde.jpg";
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
        combolho = 2;
        return combolho;
    }
}
var pele = 0;
/*pele = 1 branca
pele = 2 morena
pele = 3 negra */


//Pele da mãe
function peleBranca() {
    pele = 1;
    return pele;
}

function peleMorena() {
    pele = 2;
    return pele;
}

function peleNegra() {
    pele = 3;
    return pele;
}

//Pele do Pai
function peleBranca2() {
    o = Math.floor((Math.random() * 100) + 1);
    if(combolho == 0){
        alert("Por Favor, selecione a cor dos olhos!")
    }
    if(combolho == 1 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 2 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 3 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    if(combolho == 1 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 1 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 2 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    if(combolho == 3 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 1 && o <= 33 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 1 && o > 33 && o <= 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 1 && o > 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 2 && o <= 33 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 2 && o > 33 && o <= 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 2 && o > 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 3 && o <= 33 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    if(combolho == 3 && o > 33 && o <= 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 3 && o > 66 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
}

function peleMorena2() {
    o = Math.floor((Math.random() * 100) + 1);
    if(combolho == 0){
        alert("Por Favor, selecione a cor dos olhos!")
    }
    if(combolho == 1 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 1 && o <= 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 1 && o > 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && o <= 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 2 && o > 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && o <= 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    if(combolho == 3 && o > 50 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 1 && o <= 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 1 && o > 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && o <= 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 2 && o > 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && o <= 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
    if(combolho == 3 && o > 50 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }    
}

function peleNegra2() {
    o = Math.floor((Math.random() * 100) + 1);
    if(combolho == 0){
        alert("Por Favor, selecione a cor dos olhos!")
    }
    if(combolho == 1 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 2 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 3 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
    if(combolho == 1 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 1 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 2 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && o <= 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
    if(combolho == 3 && o > 50 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 1 && o <= 33 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 1 && o > 33 && o <= 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 1 && o > 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 2 && o <= 33 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 2 && o > 33 && o <= 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 2 && o > 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 3 && o <= 33 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    if(combolho == 3 && o > 33 && o <= 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    if(combolho == 3 && o > 66 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
}