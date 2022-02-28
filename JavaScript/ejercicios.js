/*Seleccionar por:
$('#texto'); id
$('.texto'); clase
$('p'); etiqueta
*/


$(document).ready(function() {
    let texto = $('#texto');
    let entrada = $('#entrada');
    let btn = $('#btn');
    console.log(texto);
    console.log(entrada);
    console.log(btn);
});

$(document).ready(function() {
    let texto = $('.texto');
    console.log(texto);
});

$(document).ready(function() {
    let titulos = $('.titulos');
    console.log(titulos);
});

$(document).ready(function() {
    let titulos = $('h1.titulos');
    console.log(titulos);
});

$(document).ready(function() {
    let varios = $('p, h1');
    console.log(varios);
});

$(document).ready(function() {
    $('ul.my-list > li > a').css('background', 'red');
    console.log($('ul.my-list > li > a'));
});

/* 
<​ ul​ class=​ "todos"​ >
<​ li​ >Item 1</​ li​ >
<​ li​ >Item 2
<​ ul​ >
<​ li​ >Nested item 1</​ li​ >
<​ li​ >Nested item 2</​ li​ >
<​ li​ >Nested item 3</​ li​ >
</​ ul​ >
</​ li​ >
<​ li​ >Item 3</​ li​ >
</​ ul​ >

cuando se quiere seleccionar la etiqueta <li> dentro de una <ul> dentro de una <li> que está en una <ul>
$(document).ready(function() {
    $('ul.todos> li> ul> li').css('color', 'red');
});
*/

$(document).ready(function() {
    $('td:gt(5)').css('backgroundColor', 'blue');
    $('td:lt(3)').css('backgroundColor', 'yellow');
    $('tr:first').css('color', 'red');
    $('td:eq(5)').css('color', 'red');
});


/*
devuelve el último elemento hijo que está situado en una lista, mostrando, específicamente el texto que posee el elemento
$(document).ready(function() {
    $('ul li:last-child').html();
});
*/

$(document).ready(function() {
    $('div span:last-child').css('backgroundColor', 'blue');
});

/* 
Filtro hijo selecciona el segundo elemento de la lista agregando un color de fondo rojo
$(document).ready(function() {
    $('ul li:nth-child(2)').css('background-color','red');
});
*/

$(document).ready(function() {
    let valorDeLaOpcion = $('select > option:selected').val();
    console.log(valorDeLaOpcion)
});