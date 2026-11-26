// ==========================================
// SIMULADOR DE AHORRO - Pre-Entrega 3
// ==========================================

console.log("Simulador de ahorro iniciado");

// ---------- FUNCIONES ----------

// 1) Función DECLARADA: pide un número por prompt y lo valida.
//    Entrada: mensaje (parámetro) -> Salida: número válido (return)
function ingresarValor(mensaje) {
    let monto = parseFloat(prompt(mensaje));

    // Ciclo: se repite mientras el dato no sea un número mayor a 0
    while (isNaN(monto) || monto <= 0) {
        alert("Dato inválido. Ingresá un número mayor a 0.");
        monto = parseFloat(prompt(mensaje));
    }

    return monto;
}

// 2) Función FLECHA: calcula el total ahorrado (proceso simple)
const calcularTotal = (ahorro, meses) => ahorro * meses;

// 3) Función EXPRESADA: calcula cuántos meses hacen falta para llegar al objetivo
const calcularMesesNecesarios = function (objetivo, ahorro) {
    return Math.ceil(objetivo / ahorro);
};

// 4) Función DECLARADA: muestra en consola el ahorro acumulado mes a mes
function mostrarDetalleMensual(ahorro, meses) {
    console.log("---- Detalle mes a mes ----");
    for (let mes = 1; mes <= meses; mes++) {
        console.log("Mes " + mes + ": $" + calcularTotal(ahorro, mes));
    }
}

// 5) Función DECLARADA: compara el total con el objetivo y muestra el resultado
function mostrarResultado(total, objetivo, ahorro) {
    let mensaje;

    if (total >= objetivo) {
        let sobrante = total - objetivo;
        mensaje = "¡Lo lográs! Vas a juntar $" + total +
                  " y te sobran $" + sobrante + ".";
    } else {
        let falta = objetivo - total;
        let mesesNecesarios = calcularMesesNecesarios(objetivo, ahorro);
        mensaje = "No llegás. Vas a juntar $" + total + " y te faltan $" + falta +
                  ". Necesitarías " + mesesNecesarios + " meses ahorrando $" + ahorro + ".";
    }

    console.log(mensaje);
    alert(mensaje);
}

// ---------- PROGRAMA PRINCIPAL ----------

let seguir;

do {
    // Entrada de datos
    let ahorroMensual = ingresarValor("¿Cuánto podés ahorrar por mes?");
    console.log("Ahorro mensual: $" + ahorroMensual);

    let cantidadMeses = ingresarValor("¿Cuántos meses vas a ahorrar?");
    console.log("Cantidad de meses: " + cantidadMeses);

    let precioObjetivo = ingresarValor("¿Cuánto dinero necesitás juntar?");
    console.log("Objetivo: $" + precioObjetivo);

    // Procesamiento
    let totalAhorrado = calcularTotal(ahorroMensual, cantidadMeses);
    console.log("Total ahorrado: $" + totalAhorrado);

    // Salida
    mostrarDetalleMensual(ahorroMensual, cantidadMeses);
    mostrarResultado(totalAhorrado, precioObjetivo, ahorroMensual);

    seguir = prompt("¿Querés hacer otra simulación? (si / no)");
} while (seguir !== null && seguir.toLowerCase() === "si");

console.log("Simulador finalizado. ¡Gracias!");
alert("¡Gracias por usar el simulador de ahorro!");
