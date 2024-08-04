const kelv = document.getElementById("kelvin");
const cels = document.getElementById("celsius");
const fahr = document.getElementById("fahrenheit");


function calcTemp(event){
    const inputTemp = +event.target.value;

    switch(event.target.name){
        case "celsius":
            kelv.value = (inputTemp + 273.15).toFixed(2);
            fahr.value = (inputTemp*(9/5)+32).toFixed(2);
            break;

        case "fahrenheit":
            cels.value = ((inputTemp - 32) / 1.8).toFixed(2);
            kelv.value = ((inputTemp - 32) / 1.8 + 273.15).toFixed(2);
            break;

        case "kelvin":
            cels.value = (inputTemp - 273.15).toFixed(2);
            fahr.value = ((inputTemp - 273.15) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;

    }
}