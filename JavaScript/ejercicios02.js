$(document).ready(function() {
    $("#btn").on("click", function() {
        console.log("ocurrió un clic sobre el botón");
        $("li").filter(":even").css("background-color", "red");
    });
});

/*
se seleccionan todos los input y se genera una iteración entre ellos. Esta función definida por each
retorna una función callback con un índice y el elemento sobre el cual se está iterando, luego se
crea una variable jQuery con dicho elemento y a cada uno de ellos se les añade con la función attr
al atributo HTML "value" el elemento presente en el atributo placeholder.

$(document).ready(function() {
    $('input').each(function(index, element) {
        var $element = $(element);
        $element.attr('value', $element.attr('placeholder'));
    });
});
*/

$(document).ready(function() {
    let contador = 0;
    $('#ejemplo').on('click', function() {
        contador++;
        console.log('---> Clic' + contador + ' vez!');
    });
});

$(document).ready(function() {
    function formatDate(date) {
        return (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' +
            (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' +
            (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + '.' +
            (date.getMilliseconds() < 10 ? '00' : (date.getMilliseconds() < 100 ? '0' : '')) +
            date.getMilliseconds();
    };

    let contador = 0;
    $('#ejemplo').on('click', function() {
        contador++;
        console.log('--->' + formatDate(new Date()) + 'Clic' + contador + ' vez!');
    });
});

$(document).ready(function() {
    $('button').on('click', function() {
        $('p').toggle();
    });
});