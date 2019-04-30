/*
Con jquery validator
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
  

 
 var email, password, emailExpression;
 email = document.querySelector("#validationCustom01").value;
 password = document.querySelector("#validationCustom02").value;
 emailExpression = /\w+@\w+\.+[a-z]/; //letras o numeros mas @ + carácteres + punto + letras

 var email_login_error = document.querySelector(".email-login-error")
 var psw_login_error = document.querySelector(".psw-login-error")

 //email.addEventListener('blur', mailVerify, true);
 //password.addEventListener('blur', passwordVerify, true);

 function validateSignIn(){
  
  if(email === ""){
    document.querySelector("#validationCustom01").classList.add("is-invalid")
    email_login_error.innerHTML = "Este campo es obligatorio"
    return false;
  } else if (!emailExpression.test(email)){
    document.querySelector("#validationCustom01").classList.add("is-invalid")
    email_login_error.innerHTML = "Tienes que poner un mail válido"
    return false;
  } else {
    document.querySelector("#validationCustom01").classList.remove("is-invalid")
    document.querySelector("#validationCustom01").classList.add("is-valid")
    email_login_error.innerHTML = ""
    return true;
  }
  
  if( password ===""){
    document.querySelector("#validationCustom02").classList.add("is-invalid")
    psw_login_error.innerHTML = "Este campo es obligatorio"
    return false;
  } 
  
  

}//fin validateSignIn





