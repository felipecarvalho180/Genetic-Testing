function display() {
    document.getElementById("test2").style.display = "flex";
}

function display2() {
    document.getElementById("test3").style.display = "flex";
}

function display3() {
    document.getElementById("test2").style.display = "none";
    document.getElementById("test3").style.display = "none";
}

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
    //olho mãe azul
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
    //olho mãe castanho
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
    //olho mãe verde
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
    //olho mãe azul
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
    //olho mãe castanho
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
    //olho mãe verde
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
    //olho mãe azul
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
    //olho mãe castanho
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
    //olho mãe verde
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
    //pele mãe branca
    if(combolho == 1 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho azul.jpg";
    }
    if(combolho == 2 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho verde.jpg";
    }
    if(combolho == 3 && pele == 1){
        document.getElementById("baby2").src = "images/bebepadrao olho castanho.jpg";
    }
    //pele mãe morena
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
    //pele mãe negra
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
    //pele mãe morena
    if(combolho == 1 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho azul.jpg";
    }
    if(combolho == 2 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho verde.jpg";
    }
    if(combolho == 3 && pele == 2){
        document.getElementById("baby2").src = "images/bebepadraomulato olho castanho.jpg";
    }
    //pele mãe branca
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
    //pele mãe negra
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
    //pele mãe negra
    if(combolho == 1 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho azul.jpg";
    }
    if(combolho == 2 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho verde.jpg";
    }
    if(combolho == 3 && pele == 3){
        document.getElementById("baby2").src = "images/bebepadraonegro olho castanho.jpg";
    }
    //pele mãe morena
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
    //pele mãe branca
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

//Tipo sanguineo
var sangue;
/*
1 = A+
2 = A-
3 = B+
4 = B-
5 = AB+
6 = AB-
7 = O+
8 = O- 
*/

function sangueAp() {
    sangue = 1;
    return sangue;
}

function sangueAn() {
    sangue = 2;
    return sangue;
}

function sangueBp() {
    sangue = 3;
    return sangue;
}

function sangueBn() {
    sangue = 4;
    return sangue;
}

function sangueABp() {
    sangue = 5;
    return sangue;
}

function sangueABn() {
    sangue = 6;
    return sangue;
}

function sangueOp() {
    sangue = 7;
    return sangue;
}

function sangueOn() {
    sangue = 8;
    return sangue;
}

//sangue pai A+
function sangueAp2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);
    //sangue mãe A+
    if (sangue == 1 && o <= 25 && q > 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 25 && q > 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && o <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && o > 50 && q > 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 25 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 25 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 7 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 7 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 8 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 8 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 8 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
}

//sangue do pai A-
function sangueAn2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);
    //sangue mãe A+
    if (sangue == 1 && o <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 50 && q > 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && q > 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 4 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 4 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 7 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 7 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 8 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
}

//sangue pai B+
function sangueBp2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);

    //sangue mãe A+
    if (sangue == 1 && o <= 25 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 25 && q > 25) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 25 && q > 25){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && o <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && o > 50 && q > 25){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 25 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 7 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 7 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 8 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 8 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 8 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }    
}

//sangue pai B-
function sangueBn2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);

    //sangue mãe A+
    if (sangue == 1 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 50 && q > 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 75 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 100 && q > 75){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && q <= 25) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && q <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 2 && q <= 75 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 2 && q <= 100 && q > 75) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 50 && q > 25) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 50 && q > 25){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 25){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && q > 25) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && q <= 25) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 7 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 7 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 8 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
}

//sangue pai AB+
function sangueABp2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);

    //sangue mãe A+
    if (sangue == 1 && o <= 25 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 25 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 25 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 7 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 7 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 7 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 8 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 8 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 8 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
}

//sangue AB-
function sangueABn2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);

    //sangue mãe A+
    if (sangue == 1 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 2 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 4 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 4 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 50 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 33){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 66 && q > 33){
        document.getElementById("sangue").src = "images/AB+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 100 && q > 66){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && q <= 33) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && q <= 66 && q > 33) {
        document.getElementById("sangue").src = "images/AB-.jpg";
    }
    if (sangue == 6 && q <= 100 && q > 66) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    //sangue O+
    if (sangue == 7 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 7 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 7 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 7 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    //sangue O-
    if (sangue == 8 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 8 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
}

//sangue pai O+
function sangueOp2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);

    //sangue mãe A+
    if (sangue == 1 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 2 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 2 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 4 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 4 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 25 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 5 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 25 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 6 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 6 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 6 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 25 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 25 && q > 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 8 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
}

//sangue pai O-
function sangueOn2() {
    //sorteio RH+ e RH-
    o = Math.floor((Math.random() * 100) + 1);
    //sorteio tipo sanguineo
    q = Math.floor((Math.random() * 100) + 1);
    
    //sangue mãe A+
    if (sangue == 1 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 1 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    if (sangue == 1 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 1 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe A-
    if (sangue == 2 && q > 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 2 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    //sangue mãe B+
    if (sangue == 3 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 3 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 3 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 3 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe B-
    if (sangue == 4 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 4 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    //sangue mãe AB+
    if (sangue == 5 && o <= 50 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 5 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/B+.jpg";
    }
    if (sangue == 5 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    if (sangue == 5 && o > 50 && q <= 50){
        document.getElementById("sangue").src = "images/A+.jpg";
    }
    //sangue mãe AB-
    if (sangue == 6 && q > 50) {
        document.getElementById("sangue").src = "images/B-.jpg";
    }
    if (sangue == 6 && q <= 50) {
        document.getElementById("sangue").src = "images/A-.jpg";
    }
    //sangue mãe O+
    if (sangue == 7 && o <= 50 && q <= 50) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
    if (sangue == 7 && o > 50 && q > 50){
        document.getElementById("sangue").src = "images/O+.jpg";
    }
    //sangue mãe O-
    if (sangue == 8) {
        document.getElementById("sangue").src = "images/O-.jpg";
    }
}