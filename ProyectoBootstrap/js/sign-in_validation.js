
  //CON JAVASCRIPT, ABAJO EN COMMENTS CON VALIDATOR JQUERY

  /**********************LOGIN VARIABLES*************************/
 var email, password, emailExpression, idEmailLogin, idPswLogin;
 email = document.querySelector("#validationCustom01");
 password = document.querySelector("#validationCustom02");
 emailExpression = /\w+@\w+\.+[a-z]/; //letras o numeros mas @ + carácteres + punto + letras
 idEmailLogin = "#validationCustom01"
 idPswLogin = "#validationCustom02"

 //var for error content
 var email_login_error = document.querySelector(".email-login-error")
 var psw_login_error = document.querySelector(".psw-login-error")



 /**********************REGISTER VARIABLES*************************/
 var registerEmail, registerPassword, registerState, idEmailRegister, idPswRegister;
 registerEmail = document.querySelector("#registerEmail");
 registerState = document.querySelector('#registration-state')
 registerPassword = document.querySelector("#registerPassword");
 registerRepeatedPassword = document.querySelector("#registerRepeatedPassword");
 idEmailRegister = "#registerEmail"
 idPswRegister = "#registerPassword"

 //var for error content
 var register_email_error = document.querySelector(".register-email-error")
 var register_state_error = document.querySelector(".register-state-error")
 var register_psw_error = document.querySelector(".register-psw-error")
 var register_repeated_psw_error = document.querySelector(".register-repeated-psw-error")


 /**********************LOGIN EVENT LISTENERS*************************/
 
 email.addEventListener('keyup', function (){
  checkMail(email,idEmailLogin)
 });
 password.addEventListener('keyup', function (){
  checkPassword(password.value,idPswLogin)
 });
 
 /**********************REGISTER EVENT LISTENERS*************************/
registerEmail.addEventListener('keyup', function (){
  checkMail(registerEmail,idEmailRegister)
 });
 registerPassword.addEventListener('keyup', function (){
  checkPassword(registerPassword.value,idPswRegister)
 });
 //registerPassword.addEventListener('keyup', checkPasswordRegister);
 registerState.addEventListener('change', checkStateRegister);
 registerRepeatedPassword.addEventListener('keyup', checkRepeatedPasswordRegister);



 /**************************** FUNCTIONS*****************************/
function checkMail(mailToCheck,changeThisId) {
  var errorDisplayed
  if(changeThisId==idEmailLogin){
    errorDisplayed = email_login_error
  } else if (changeThisId=="#registerEmail"){
    errorDisplayed = register_email_error
  }

  if(mailToCheck.value.length==0){
    document.querySelector(changeThisId).classList.add("is-invalid")
    errorDisplayed.innerHTML = "Poner un email es obligatorio";
    
  } else if (!emailExpression.test(mailToCheck.value)){
    document.querySelector(changeThisId).classList.add("is-invalid")
    errorDisplayed.innerHTML = "Tienes que poner un mail que sea válido";
    
  } else {
    document.querySelector(changeThisId).classList.remove("is-invalid")
    document.querySelector(changeThisId).classList.add("is-valid")
    errorDisplayed.innerHTML = ""
    return true
  }
  return false;
}//fin check mail

function checkPassword(pswToCheck,changeThisId) {
  var errorDisplayed
  if(changeThisId==idPswLogin){
    errorDisplayed = psw_login_error
  } else if (changeThisId==idPswRegister){
    errorDisplayed = register_psw_error
  }

  if(pswToCheck.length==0){
    document.querySelector(changeThisId).classList.add("is-invalid")
    errorDisplayed.textContent = "Poner una contraseña es obligatorio";
    
  } else {
    document.querySelector(changeThisId).classList.remove("is-invalid")
    document.querySelector(changeThisId).classList.add("is-valid")
    errorDisplayed.innerHTML = ""
    return true
  }
  return false;
}//fin check mail

 

function checkStateRegister() {
  if(registerState.value.length==0){
    document.querySelector("#registration-state").classList.add("is-invalid")
    register_state_error.textContent = "escoger una provincia es obligatorio";
    return false;
  } else {
    document.querySelector("#registration-state").classList.remove("is-invalid")
    document.querySelector("#registration-state").classList.add("is-valid")
    register_state_error.innerHTML = ""
    return true;
  }
  
}//fin check state

function checkRepeatedPasswordRegister() {
  if(registerRepeatedPassword.value != registerPassword.value){
    document.querySelector("#registerRepeatedPassword").classList.add("is-invalid")
    register_repeated_psw_error.textContent  = "Las contraseñas deben coincidir";
    return false;
  } else {
    document.querySelector("#registerRepeatedPassword").classList.remove("is-invalid")
    document.querySelector("#registerRepeatedPassword").classList.add("is-valid")
    register_repeated_psw_error.innerHTML  = ""
    return true;
  }
  
}//fin check psw register repeated

//SUBMIT VALIDATION
function validateSignIn(){
 
  var checking;
  checkMail(email,"#validationCustom01")
  checkPassword(password.value,idPswLogin)


   var checking = (checkMail(email,"#validationCustom01") && checkPassword(password.value,idPswLogin)) ? true : false;
  return checking
}

function validateRegister(){
  checkMail(registerEmail,idEmailRegister); 
  checkPassword(registerPassword.value,idPswRegister);
  checkStateRegister();
  checkRepeatedPasswordRegister();

  var checkingRegister = (checkMail(registerEmail,idEmailRegister) && (checkPassword(registerPassword.value,idPswRegister) && (checkStateRegister() && checkRepeatedPasswordRegister() ))) ? true : false;
  return checkingRegister;
}
 



/*
******************Con jquery validator********************
$(function() {

    $.validator.setDefaults({
      errorClass: 'invalid-feedback',
      highlight: function(element) {
        $(element)
  
          .addClass('is-invalid');
      },
      unhighlight: function(element) {
        $(element)
  
          .removeClass('is-invalid');
      },
      errorPlacement: function (error, element) {
        if (element.prop('type') === 'checkbox') {
          error.insertAfter(element.parent());
        } else {
          error.insertAfter(element);
        }
      }
    });
  
    
    $("#login-form").validate({
      rules: {
        loginEmail: {
          required: true,
          email: true,
          minlength: 3
        },
        loginPassword: {
          required: true,
        }
      },
      messages: {
        "loginEmail": {
              required: "Este campo es obligatorio.",
              email: "Por favor, escribe una dirección de correo válida"
          },
          "loginPassword": {
              required: "Este campo es obligatorio.",
          }
      }
    });
  
      $("#login-form").on('submit', function() {
          if ($('#login-form').valid()) {
              alert("formulario válido");
          } else {
              alert("formulario no válido");
          }
      });
  
 
  
  $("#register-form").validate({
    rules: {
        registerEmail: {
        required: true,
        email: true,
        minlength: 3
      },
      registerPassword: {
        required: true,
      },
      registerRepeatedPassword: {
        required: true,
        equalTo: '#inputRegisterPassword'
      },
      registrationstate: {
        required: true,
      }
    },
    messages: {
      "registerEmail": {
            required: "Este campo es obligatorio.",
            email: "Por favor, escribe una dirección de correo válida"
        },
        "registerPassword": {
            required: "Este campo es obligatorio.",
            minlength: "Por favor, no escribas menos de {0} caracteres."
        },
        "registerRepeatedPassword": {
            required: "Este campo es obligatorio.",
            minlength: "Por favor, no escribas menos de {0} caracteres.",
            equalTo: "La contraseña no coincide. "
        },
        "registrationstate":{
            required: "Selecciona una provincia."
        }
    }
  });

    $("#register-form").on('submit', function() {
        if ($('#register-form').valid()) {
            alert("formulario válido");
        } else {
            alert("formulario no válido");
        }
    });

});

  */