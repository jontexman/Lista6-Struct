let answer = prompt("Entre a unidade de medida: ").toLocaleLowerCase();
let number = Number(prompt("Entre o numero da temperatura: "));

switch(answer) {
    case 'celsius':
        console.log(number + " graus celsius são " + celsiusTofahrenheit(number) + " fahrenheit e " + celsiusTokelvin(number)    + " graus kelvin") 
        break;
    case 'fahrenheit':
        console.log(number + " graus fahrenheit são " + fahrenheitTocelsius(number) + " celsius e " + fahrenheitTokelvin(number)    + " graus kelvin")
        break;
    case 'kelvin':
        console.log(number + " graus kelvin são " + kelvinTofahrenheit(number) + " fahrenheit e " + kelvinTocelsius(number)    + " graus celsius")
        break;
    default: 
        console.log("Não é possivel fazer a conversão")
    

}

function celsiusTofahrenheit(celsius) {
    return celsius * 9/5 + 32
}

function fahrenheitTocelsius (fahrenheit) {
    return (fahrenheit-32)*5/9 ;
}
function celsiusTokelvin (celsius) {
    return celsius + 273.15;
}

function kelvinTocelsius (kelvin) {
    return kelvin - 273.15;
}

function fahrenheitTokelvin(fahrenheit) {
    return (fahrenheit-32)*5/9 + 273.15 ; 
}

function kelvinTofahrenheit (kelvin) {
    return (kelvin-273.15) *9/5 + 32;
}