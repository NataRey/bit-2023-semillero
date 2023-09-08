document.addEventListener("DOMContentLoaded", function () {
    const tarjetas = document.querySelectorAll(".wrap");
    const siguienteBtn = document.querySelector(".siguiente");
    const anteriorBtn = document.querySelector(".anterior");

    let paginaActual = 0;
    const tarjetasPorPagina = 1;

    function mostrarPagina(pagina) {
        tarjetas.forEach((tarjeta, index) => {
            tarjeta.style.display = "none"; // Oculta todas las tarjetas
            if (index >= pagina * tarjetasPorPagina && index < (pagina + 1) * tarjetasPorPagina) {
                tarjeta.style.display = "flex"; // Muestra las tarjetas de la página actual
            }
        });
    }

    siguienteBtn.addEventListener("click", function () {
        paginaActual++;
        if (paginaActual >= Math.ceil(tarjetas.length / tarjetasPorPagina)) {
            paginaActual = 0;
        }
        mostrarPagina(paginaActual);
    });

    anteriorBtn.addEventListener("click", function () {
        paginaActual--;
        if (paginaActual < 0) {
            paginaActual = Math.ceil(tarjetas.length / tarjetasPorPagina) - 1;
        }
        mostrarPagina(paginaActual);
    });

    window.addEventListener("load", function () {
        mostrarPagina(paginaActual);
    });
});





