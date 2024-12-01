const btn_add_money = document.getElementById('btn_add_money');
const input_amount_number = document.getElementById ('input_amount_number');
const input_pin_number = document.getElementById ('input_pin_number');


btn_add_money.addEventListener('click', function (event) {
    event.preventDefault(); 
    console.log(input_amount_number.value);
    console.log(input_pin_number.value);
})