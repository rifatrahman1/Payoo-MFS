const btn_add_money = document.getElementById ('btn_add_money');
const input_amount_number = document.getElementById ('input_amount_number');
const input_pin_number = document.getElementById ('input_pin_number');
const account_balance = document.getElementById ('account_balance').innerText;


btn_add_money.addEventListener ('click', function (event) {
    event.preventDefault();
    // console.log(account_balance);
    // console.log(input_amount_number.value);
    // console.log(input_pin_number.value);
    if (input_pin_number.value === '1234') {
        const real_amount = parseFloat (input_amount_number.value);
        console.log(real_amount);
        const real_balance = parseFloat (account_balance);
        console.log(real_balance)
        const new_amount = real_balance + real_amount;
        console.log(new_amount);
        document.getElementById ('account_balance').innerText = new_amount;
    }
    else {
        alert ('wrong your pin number ! please try again')
    }

})