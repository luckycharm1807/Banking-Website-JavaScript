
// Step-1: add click event handler with the submit button. 

document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit btn clicked');
    // step-3: get the email address inside the email input field
    // always remember to use .value to get text form an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // step-3: get Password
    // 3.a: set id on the html element
    // 3.b: get the element 
    // 3.c: get the value form the element 

    const PasswordField = document.getElementById('user-password');
    const password = PasswordField.value;
    // console.log(password);

    // DANGER:  DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // STEP-4: VERIFY EMAIL AND PASSWORD

    if(email === 'prosenjitroy1807@gmail.com' && password == '1807tuton'){
        window.location.href = 'Bank.html';
    }

    else{
        alert('Your didnt entry password plese enter a password');
    }
})