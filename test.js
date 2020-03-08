//CREATE PIN ENGINE
    
let messageAlert = document.getElementById('message-alert');

let message = document.getElementById('message');

let pin = document.getElementById('pin');

let confirmPin = document.getElementById('confirm-pin');

let link = document.getElementById('link');

let seePin = document.getElementById('see-pin');

let seeConfirm = document.getElementById('see-confirm');

let bgContainer = document.getElementById('bg-container');



//See inputed pin values
seePin.addEventListener('click', function(){

    if (seePin.classList.contains('fa-eye-slash')){

        pin.type = 'text';
    }

    else {

        pin.type = 'password';
    }

    seePin.classList.toggle('fa-eye-slash');

    seePin.classList.toggle('fa-eye');
});

seeConfirm.addEventListener('click', function(){

    if (seeConfirm.classList.contains('fa-eye-slash')){

        confirmPin.type = 'text';
    }

    else {

        confirmPin.type = 'password';
    }        

    seeConfirm.classList.toggle('fa-eye-slash');

    seeConfirm.classList.toggle('fa-eye');
});
    

//Create-pin processing for user

function hideAlert(){

    messageAlert.style.visibility = 'hidden';
}

function showAlert(){

    messageAlert.style.visibility = 'visible';

    messageAlert.style.opacity = '1';
}

function showLock (){

    bgContainer.style.visibility = 'hidden';

    container1.style.visibility = 'visible';
}


link.addEventListener("click", () => {

    function validatePin (PIN, CONFIRM_PIN){

        if (PIN === '' || CONFIRM_PIN === ''){

            message.innerText = 'Please fill up empty fields!';

            showAlert();
            
            setTimeout(() => {
                hideAlert();
            }, 2000);
        }

        else if (!Number(PIN) || !Number(CONFIRM_PIN)){

            message.innerText = 'Alphabets are not allowed!';

            showAlert();
            
            setTimeout(() => {
                hideAlert();
            }, 2000);

        } 

        else if (PIN.length < 4 || CONFIRM_PIN < 4){

            message.innerText = 'PIN must be 4 digits';

            showAlert();
            
            setTimeout(() => {
                hideAlert();
            }, 2000);                
        }

        else if (PIN !== CONFIRM_PIN){

            message.innerText = 'PIN do not match';

            showAlert();
            
            setTimeout(() => {
                hideAlert();
            }, 2000);
        }

        else {
            showLock();
            //link.setAttribute('href', 'pin.html');
        }
    }

    validatePin(pin.value, confirmPin.value);
});


//SIGN-IN ENGINE

let pinDots = document.getElementsByClassName('input_circle');

let output = document.getElementById('output');

let number = document.getElementsByClassName('number');

let container1 = document.getElementById('container1');

let del = document.getElementById('del');

let success = document.getElementById('success');


for (i = 0; i < number.length; i++){

    result = '';

    count = 0;

    let num = number[i];

    num.addEventListener('click', () => {
        
        result += num.innerText;
        
        if (count > 4){

            count --; 

            //console.log(count);
        }

        //fill dots when a number is clicked
        for (j = 0; j <= count; j++){
            
            pinDots[j].style.backgroundColor = 'white';
        }

        count++;

        if (result.length >= 4){

            result = result.replace(result[4], '');
        }
        
        console.log(result);
        console.log(pin.value);
        
        //shake if PIN is wrong
        if (count == 4){

            if (result == pin.value){

                success.style.visibility = 'visible';
            }

            else {  //shake
                //console.log('shake effect');

                output.classList.add('shake-effect');

                setTimeout(() => {
                    
                    for(k = 0; k < 4; k++){

                        pinDots[k].style.backgroundColor = '';

                        count = 0;

                        result = '';
                    }
                    output.classList.remove('shake-effect');

                }, 500);
                                
            }
        }
    })
}



del.addEventListener('click', () => {

    if (count > 0){

        count--;

        pinDots[count].style.backgroundColor = '';
    }
        
    result = result.substr(0, result.length - 1);

    //alert(pin.value);
})