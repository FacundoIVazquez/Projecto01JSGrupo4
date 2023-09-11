document.addEventListener("DOMContentLoaded", function () {
    let botonCalcular = document.getElementById("calcular");
    let costoComidaInput = document.getElementById("costoComida");
    let porcentajePropinaInput = document.getElementById("porcentajePropina");
    let resultadoPropina = document.getElementById("resultadoPropina");
    let resultadoTotal = document.getElementById("resultadoTotal");

    botonCalcular.addEventListener("click", function () {
        let costoComida = parseFloat(costoComidaInput.value);
        let porcentajePropina = parseFloat(porcentajePropinaInput.value);

        if (!isNaN(costoComida) && !isNaN(porcentajePropina)) {
            let propina = (costoComida * porcentajePropina) / 100;
            let costoTotal = costoComida + propina;
            
            resultadoPropina.textContent = `$${propina.toFixed(2)}`;
            resultadoTotal.textContent = `$${costoTotal.toFixed(2)}`;
        } else {
            resultadoPropina.textContent = "Ingrese valores válidos.";
            resultadoTotal.textContent = "";
        }
    });

    function limpiar() {
        document.getElementById("costoComida").value = 0;
        document.getElementById("porcentajePropina").value = 0;
    }
});
