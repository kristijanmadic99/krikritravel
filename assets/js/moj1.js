
document.addEventListener("DOMContentLoaded", function() {
    var vremeDo = new Date("March 20, 2026 15:37:25").getTime();
    var x = setInterval(function() {
        var sada = new Date().getTime();
        var pravoVreme = vremeDo - sada;
        var dani = Math.floor(pravoVreme / (1000 * 60 * 60 * 24));
        var sati = Math.floor((pravoVreme % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minuti = Math.floor((pravoVreme % (1000 * 60 * 60)) / (1000 * 60));
        var sekunde = Math.floor((pravoVreme % (1000 * 60)) / 1000);

        var ispis = document.getElementById("timer");
        ispis.innerHTML = dani + "d " + sati + "h " + minuti + "m " + sekunde + "s ";

        if (pravoVreme < 0) {
            clearInterval(x);
            ispis.innerHTML = "EXPIRED";
        }
    }, 1000);
});


