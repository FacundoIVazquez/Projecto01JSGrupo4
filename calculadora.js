document.addEventListener("DOMContentLoaded", function () {
    const botonCalcular = document.getElementById("calcular");
    const costoComidaInput = document.getElementById("costoComida");
    const porcentajePropinaInput = document.getElementById("porcentajePropina");
    const resultadoPropina = document.getElementById("resultadoPropina");
    const resultadoTotal = document.getElementById("resultadoTotal");

    botonCalcular.addEventListener("click", function () {
        const costoComida = parseFloat(costoComidaInput.value);
        const porcentajePropina = parseFloat(porcentajePropinaInput.value);

        if (!isNaN(costoComida) && !isNaN(porcentajePropina)) {
            const propina = (costoComida * porcentajePropina) / 100;
            const costoTotal = costoComida + propina;
            
            resultadoPropina.textContent = `Propina: $${propina.toFixed(2)}`;
            resultadoTotal.textContent = `Costo Total: $${costoTotal.toFixed(2)}`;
        } else {
            resultadoPropina.textContent = "Ingrese valores válidos.";
            resultadoTotal.textContent = "";
        }
    });
});
