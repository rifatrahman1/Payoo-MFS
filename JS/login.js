const button_login = document.getElementById ('button_login');
const phone_number = document.getElementById ('phone_number');
const pin_number = document.getElementById ('pin_number');


button_login.addEventListener ('click', function (event) {
    event.preventDefault();

    if (phone_number.value === '017' && pin_number.value === '1234') {                                                 
        window.location.href = '/home.html';
    }
    else {
        alert('please correct your phone number or pin number')
    }
})