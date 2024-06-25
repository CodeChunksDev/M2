// Declaramos variable y asignamos Valor
var html1 = parseFloat(prompt("Ingrese Nota 1 [HTML]"));
var html2 = parseFloat(prompt("Ingrese Nota 2 [HTML]"));
var html3 = parseFloat(prompt("Ingrese Nota 3 [HTML]"));
var promHTML = (html1 + html2 + html3)/3;

var css1 = parseFloat(prompt("Ingrese Nota 1 [CSS]"));
var css2 = parseFloat(prompt("Ingrese Nota 2 [CSS]"));
var css3 = parseFloat(prompt("Ingrese Nota 3 [CSS]"));
var promCSS = (css1 + css2 + css3)/3;

var script1 = parseFloat(prompt("Ingrese Nota 1 [JavaScript]"));
var script2 = parseFloat(prompt("Ingrese Nota 2 [JavaScript]"));
var script3 = parseFloat(prompt("Ingrese Nota 3 [JavaScript]"));
var promJS = (script1 + script2 + script3)/3;

// Seleccionamos ID de HTML
// se convierte un elemento de Document
var notaHTML1, notaHTML2, notaHTML3, promedioHTML;
var notaCSS1, notaCSS2, notaCSS3, promedioCSS;
var notaJS1, notaJS2, notaJS3, promedioJS;

notaHTML1 = document.getElementById("html1");
notaHTML2 = document.getElementById("html2");
notaHTML3 = document.getElementById("html3");
promedioHTML = document.getElementById("PromedioHTML");
 
notaCSS1 = document.getElementById("ccs1");
notaCSS2 = document.getElementById("ccs2");
notaCSS3 = document.getElementById("ccs3");
promedioCSS = document.getElementById("PromedioCCS");

notaJS1 = document.getElementById("script1");
notaJS2 = document.getElementById("script2");
notaJS3 = document.getElementById("script3");
promedioJS = document.getElementById("PromedioJS");

// Escribir en HTML con innerHTML
notaHTML1.innerHTML = html1.toString();
notaHTML2.innerHTML = html2.toString();
notaHTML3.innerHTML = html3.toString();
promedioHTML.innerHTML = promHTML.toFixed(2).toString();

notaCSS1.innerHTML = css1.toString();
notaCSS2.innerHTML = css2.toString();
notaCSS3.innerHTML = css3.toString();
promedioCSS.innerHTML = promCSS.toFixed(2).toString();

notaJS1.innerHTML = script1.toString();
notaJS2.innerHTML = script2.toString();
notaJS3.innerHTML = script3.toString();
promedioJS.innerHTML = promJS.toFixed(2).toString();


