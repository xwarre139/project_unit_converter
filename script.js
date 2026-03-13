let num = document.getElementById('number');
let from = document.getElementById('from');
let to  = document.getElementById('to');
let display = document.getElementById('result')
let html = "";

function convert(){
number = num.value;
fromVlaue = from.value;
toValue = to.value;

    if (fromVlaue === "Meters" && toValue === "Centimeters") {
        number = number * 100;
        html = `
        <h3 id="result"> ${number} CM </h3>
        `;
    } else if (fromVlaue === "Centimeters" && toValue === "Meters") {
        number = number / 100;
        html = `
        <h3 id="result"> ${number} meters</h3>
        `;
    }else{
        html =`
        <h3 id="result"> ${number} ${toValue} </h3>
        `;
    }
    display.innerHTML = html;
}