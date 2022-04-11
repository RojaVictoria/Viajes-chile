$(function () {
    /*Activación de tooltips*/    
    $('[data-toggle="tooltip"]').tooltip()

    /*Cambio de color a títulos con doble clic*/    
    $("h3").on("dblclick", function(){
        $(this).css({
        "color": "#229eaa",
        });
    });

    /*Toggle de tarjetas*/    
    $(".title h5").click(function() {
        $(".title p").toggle();
    });

    /*Alerta de mensaje enviado*/    
    $("#enviarMensaje").click(function(){
        alert("El mensaje fue enviado correctamente...");
    });

})