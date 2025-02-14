function convertir() {
    let valor = parseFloat(document.getElementById('valor').value);
    let conversion = document.getElementById('conversion').value;
    let Resultado = document.getElementById('resultado');
    let resultadoConversion = 0;

    if (!valor || valor <= 0 || conversion === '') {
        alert('ingrese un número válido y seleccione una conversión.');
        return false;
    }

    if (conversion === 'km-m') {
        resultadoConversion = valor * 1000;
    } else if (conversion === 'm-cm') {
        resultadoConversion = valor * 100;
    } else if (conversion === 'ft-pulg') {
        resultadoConversion = valor * 12;
    } else if (conversion === 'yarda-pulg') {
        resultadoConversion = valor * 36;
    } else {
        resultadoConversion = 'Conversión no válida';
    }

    Resultado.textContent = resultadoConversion;
    return false; 
}

