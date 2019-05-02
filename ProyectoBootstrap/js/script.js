//VALIDACIÓN CON JAVASCRIPT, ABAJO EN COMMENTS CON VALIDATOR JQUERY
var searchedInput, errorDisplayed;
searchedInput = document.querySelector("#searchThisInput");
errorDisplayed = document.querySelector(".search-error");
  
 
  function validateSearch(){ 
    if(searchedInput.value.length === 0){
      document.querySelector("#searchThisInput").classList.add("is-invalid")
      errorDisplayed.textContent = "Este campo es obligatorio";
      errorDisplayed.style.display = "block";
      return false;
    } else if (searchedInput.value.length < 3){
      errorDisplayed.textContent = "El campo debe tener 3 o más carácteres";
      errorDisplayed.style.display = "block";

      return false;
    } else {
      document.querySelector("#searchThisInput").classList.remove("is-invalid")
      document.querySelector("#searchThisInput").classList.add("is-valid")
      errorDisplayed.textContent = "";
      return true
    }
  }

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
  
    $("#search-form").validate({
      rules: {
        searchedWord: {
          required: true,
          minlength: 3
        }
      },
      messages: {
        "searchedWord": {
              required: "Este campo es obligatorio, escribe lo que quieras buscar, al menos 3 carácteres.",
              minlength: "Por favor, escribe más de 3 carácteres"
          }
      }
    });
  
      $("#search-form").on('submit', function() {
          if ($('#search-form').valid()) {
              alert("formulario válido");
          } else {
              alert("formulario no válido");
          }
      });
  
  });
  
  */
  
  