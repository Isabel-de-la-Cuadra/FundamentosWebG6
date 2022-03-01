jQuery.fn.datosFinancieros = function() {
    var element = this;
    $.ajax({
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json",
        success: function(data) {
            element.append(
                `<span>${data.uf.valor}</span>`
            )
        }
    });
    return this;
};