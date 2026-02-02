<script>
var myInput = document.getElementById("contrasenya");
var minuscula = document.getElementById("minuscula");
var majuscula = document.getElementById("majuscula");
var numero = document.getElementById("numero");
var llargada = document.getElementById("llargada");

myInput.onfocus = function() {
  document.getElementById("text").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("text").style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    minuscula.classList.remove("invalid");
    minuscula.classList.add("valid");
  } else {
    minuscula.classList.remove("valid");
    minuscula.classList.add("invalid");
}

  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    majuscula.classList.remove("invalid");
    majuscula.classList.add("valid");
  } else {
    majuscula.classList.remove("valid");
    majuscula.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    numero.classList.remove("invalid");
    numero.classList.add("valid");
  } else {
    numero.classList.remove("valid");
    numero.classList.add("invalid");
  }

  if(myInput.value.length >= 8) {
    llargada.classList.remove("invalid");
    llargada.classList.add("valid");
  } else {
    llargada.classList.remove("valid");
    llargada.classList.add("invalid");
  }
}
</script>