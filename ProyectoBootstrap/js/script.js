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
  
  function validateSearch(){
    var searchedInput;
    searchedInput = document.querySelector("#searchThisInput").value;

    if(searchedInput === ""){
      alert("el campo esta vacío");
      return false;
    } else if (searchedInput.length < 3){
      alert("el campo debe tener 3 o más carácteres");
      return false;
    }
  }
  