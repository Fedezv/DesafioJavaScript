var botonCalcular = document.getElementById('calcular')
botonCalcular.addEventListener('click', calculo)
var paseDia = document.getElementById('pase_dia')
var paseCompleto = document.getElementById('pase_completo')
var pase2Dias = document.getElementById('pase_dosdias')

function calculo() {

    var paseDia = document.getElementById('pase_dia')
    var resumenDia = document.getElementById('lista-productos')
    var totalDia = paseDia.value *30
    resumenDia.textContent = paseDia.value + ' Boletos Pase Por Día: $ ' + totalDia 


    var paseCompleto = document.getElementById('pase_completo')
    var resumenCompleto = document.getElementById('lista-productos2')
    var totalCompleto = paseCompleto.value *50   
    resumenCompleto.textContent = paseCompleto.value + ' Boletos Pase Completo: $ ' + totalCompleto

    var pase2Dias = document.getElementById('pase_dosdias')
    var resumen2Dias = document.getElementById('lista-productos3')
    var total2Dias = pase2Dias.value *45
    resumen2Dias.textContent = pase2Dias.value + ' Boletos de 2 Días: $ ' + total2Dias

    var sumaTotal = document.getElementById('suma-total')
    sumaTotal.textContent = 'Total: $ ' + (totalDia + totalCompleto + total2Dias)

}



