/**
 * the script1.js file is that handing the form validation
 * it contains the following functions:
 * 1- showError() function: it is used to show error message in the input element
 * 2- showSuccess() function: it is used to show success outLine in the input element
 * 3- checkEmail() function: it is used to check email validation
 * 4- getFieldName() function: it is used to get the field name
 * 5- checkRequied() function: it is used to check if all required fields are filled
 * 6- checkLength() function: it is used to check the length of the input value
 * 7- checkPasswordMatch() function: it is used to check if the password and password2 values are equal
 * 
 * usedScopes: example2.html
 * author: ao chen
 * date: 2025-01-15
 */

// get 'form' element by id
const form=document.getElementById('form');
// get 'input' element by id
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

// function: show error message 
function showError(input,message){
    // get inptu parent element
    const formControl=input.parentElement;

    // modify style of form-control class to error
    formControl.className='form-control error';

    // get small element and set error message
    const small=formControl.querySelector('small');
    small.innerHTML =message;
}

// function: show success outLine
function showSuccess(input){
    // get inptu parent element
    const formControl=input.parentElement;

    // modify tyle of form-control class to success
    formControl.className='form-control success';
}

// function: Cheack email validation
function checkEmail(input){
    // regular expression for email validation
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // trim input value
    const value=input.value.trim();
    if(re.test(value)){
        showSuccess(input);
    }else{
        showError(input,'Invalid email');
    }

}

// function: get FiledName
function getFieldName(input){
    
    return input.id;
}
// function: check requied fields
function checkRequied(inputs){
    let isRequied=false;
    // loop through inputs
    for(let i=0;i<inputs.length;i++){
        // if input value is empty, show error message and return true
        if(inputs[i].value.trim()===''){
            showError(inputs[i],`${getFieldName(inputs[i])} is required`);
            isRequied=true;
        }else{
            // else show success outLine
            showSuccess(inputs[i]);
        }
    }
    // return isRequied value
    return isRequied;
}

// function: check length validation
function checkLength(input,min,max){
    // check input length
    if(input.value.length<min || input.value.length>max) {
        showError(input,`Length should be between ${min} and ${max} characters`);
    }else{
        showSuccess(input);
    }   
}

// function: check password match
function checkPasswordMatch(password,password2){
    // if password and password2 values are not equal, show error message
    if(password.value!==password2.value){
        showError(password2,'Passwords do not match');
    }else{
        showSuccess(password2);
    }
}


// add event listener to form submit
form.addEventListener('submit',function(e){
    // prevent default form submit
    e.preventDefault();
    // check ! if checkRequied() return true
    if(!checkRequied([username,email,password,password2])){
        // check username length
        checkLength(username,3,15);
        // check password length
        checkLength(password,6,25);
        // check email validation
        checkEmail(email);
        // check password match
        checkPasswordMatch(password,password2);
    }
});

