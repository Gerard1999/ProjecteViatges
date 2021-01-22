var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var radi = canvas.height / 2;
context.translate(radi, radi);
radi = radi * 0.90
setInterval(dibuixaRellotge, 1000);

function dibuixaRellotge() {
    dibuixaCara(context, radi);
    dibuixaNombres(context, radi);
    dibuixaTemps(context, radi);
    
}

function dibuixaCara(context, radi) {
    var gradient;
    context.beginPath();
    context.arc(0, 0, radi, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();
    gradient = context.createRadialGradient(0, 0, radi * 0.95, 0, 0, radi * 1.05);
    gradient.addColorStop(0, '#00f');
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, '#f00');
    context.strokeStyle = gradient;
    context.lineWidth = radi * 0.1;
    context.stroke();
    context.beginPath();
    context.arc(0, 0, radi * 0.1, 0, 2 * Math.PI);
    context.fillStyle = '#333';
    context.fill();
}

function dibuixaNombres(context, radi) {
    var ang;
    var num;
    context.font = radi * 0.15 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        context.rotate(ang);
        context.translate(0, -radi * 0.85);
        context.rotate(-ang);
        context.fillText(num.toString(), 0, 0);
        context.rotate(ang);
        context.translate(0, radi * 0.85);
        context.rotate(-ang);
    }
}

function dibuixaTemps(context, radi) {
    var ara = new Date();
    var hora = ara.getHours();
    var minut = ara.getMinutes();
    var segons = ara.getSeconds();
    //hour
    hora = hora % 12;
    hora = (hora * Math.PI / 6) +
        (minut * Math.PI / (6 * 60)) +
        (segons * Math.PI / (360 * 60));
    dibuixa(context, hora, radi * 0.5, radi * 0.07);
    //minut
    minut = (minut * Math.PI / 30) + (segons * Math.PI / (30 * 60));
    dibuixa(context, minut, radi * 0.8, radi * 0.07);
    // segons
    segons = (segons * Math.PI / 30);
    dibuixa(context, segons, radi * 0.9, radi * 0.02);
}

function dibuixa(context, pos, longitud, amplada) {
    context.beginPath();
    context.lineWidth = amplada;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.rotate(pos);
    context.lineTo(0, -longitud);
    context.stroke();
    context.rotate(-pos);
}

function fullDate() {
    var ara = new Date();
    var dia = ara.getDate();
    var mes = ara.getMonth() + 1;
    var any = ara.getFullYear();

    document.getElementById("data").innerHTML = dia + " / " + mes + " / " + any;
}

function dataReserva() {
    var ara = new Date();
    var dia = ara.getDate().toString();
    var mes = ara.getMonth() + 1;
    var any = ara.getFullYear().toString();

    if (mes < 10) {
        mes = "0" + mes.toString();
    } else {
        mes = mes.toString();
    }

    document.getElementById("dataReserva").value = any + "-" + mes + "-" + dia;
}   