var texto = document.getElementById("textolineas");
var botonsote = document.getElementById("boton");
botonsote.addEventListener("click", dibujoporClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarlinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoporClick()
{
     var hoja = paeseInt(texto.value);
     var lineas = 30;
     var l = 0;
     var xi, xf, yi, yf;
     var rxf, ryf;
     var colorcito = "orange";

 for(l = 0; l < lineas; l++)
 {
    var co, fa;
    co = 10 * l;
    fa = 10 * (l + 1);
    xi = 10 * l;
    xf = 10 + l;
    yi = 10 * (l + 1);
    yf = 10 * (l + 1);
    rxf = 300 - xf;
    ryf = 300 - yf;
    dibujarlinea(colorcito, xi, 0, 300, yf);
    dibujarlinea(colorcito, xi, 299, 299, ryf);
    dibujarlinea(colorcito, xi, 0, 0, ryf);
    dibujarlinea(colorcito, 0, co, fa, 300);
 }

 dibujarlinea("red", 1, 1, 1, 299);
 dibujarlinea("red", 1, 299, 299, 299);
 dibujarlinea("red", 1, 1, 300, 1);
}