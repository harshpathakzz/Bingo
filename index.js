window.onload=abc;

function abc() {
document.getElementById("reload").onclick=newCard;
var bol=new Array(26);
for(var i=0;i<25;i++) {
var n;
do {
n=(Math.floor(Math.random()*25)+1);
}
while(bol[n]);
bol[n]=true;
document.getElementById("square"+i).innerHTML=n;
document.getElementById("square"+i).className="";
document.getElementById("square"+i).onclick=toggleColor;
}
}

function newCard() {
document.getElementById("head").innerHTML="Bingo Card";
document.getElementById("b").className="";
document.getElementById("i").className="";
document.getElementById("n").className="";
document.getElementById("g").className="";
document.getElementById("o").className="";
abc();
return false;
}

function toggleColor() {
if(this.className=="") {
this.className="pickedBG";
}
else {
this.className="";
}
checkB();
checkWin();
}

function checkB() {
var bo=-1;
var ss=0;
var b=[31,992,31744,1015808,32505856,1082401,2164802,4329604,8659208,17318416,17043521,1118480];
for(var j=0;j<25;j++) {
if(document.getElementById("square"+j).className!="") {
document.getElementById("square"+j).className="pickedBG";
ss=ss|Math.pow(2,j);
}
}
for(var j=0;j<12;j++) {
if((b[j]&ss)==b[j]) {
bo=j;
}
}
if(bo>-1) {
document.getElementById("b").className="bingo";
checkI(bo,ss,b);
}
else {
document.getElementById("b").className="";
document.getElementById("i").className="";
document.getElementById("n").className="";
document.getElementById("g").className="";
document.getElementById("o").className="";
}
}

function checkI(bo,ss,i) {
var io=-1;
i[bo]=Math.pow(2,25);
for(var j=0;j<12;j++) {
if((i[j]&ss)==i[j]) {
io=j;
}
}
if(io>-1) {
document.getElementById("i").className="bingo";
checkN(io,ss,i);
}
else {
document.getElementById("i").className="";
document.getElementById("n").className="";
document.getElementById("g").className="";
document.getElementById("o").className="";
}
}

function checkN(io,ss,n) {
var no=-1;
n[io]=Math.pow(2,25);
for(var j=0;j<12;j++) {
if((n[j]&ss)==n[j]) {
no=j;
}
}
if(no>-1) {
document.getElementById("n").className="bingo";
checkG(no,ss,n);
}
else {
document.getElementById("n").className="";
document.getElementById("g").className="";
document.getElementById("o").className="";
}
}

function checkG(no,ss,g) {
var go=-1;
g[no]=Math.pow(2,25);
for(var j=0;j<12;j++) {
if((g[j]&ss)==g[j]) {
go=j;
}
}
if(go>-1) {
document.getElementById("g").className="bingo";
checkO(go,ss,g);
}
else {
document.getElementById("g").className="";
document.getElementById("o").className="";
}
}

function checkO(go,ss,o) {
var oo=-1;
o[go]=Math.pow(2,25);
for(var j=0;j<12;j++) {
if((o[j]&ss)==o[j]) {
oo=j;
}
}
if(oo>-1) {
document.getElementById("o").className="bingo";
}
else {
document.getElementById("o").className="";
}
}

function checkWin() {
if(document.getElementById("o").className=="bingo") {
document.getElementById("head").innerHTML="BINGO! You won";
}
else {
document.getElementById("head").innerHTML="Bingo Card";
}
}