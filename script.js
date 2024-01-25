// Función para desplazar hacia la sección indicada y restarle los pixeles que tiene la barra de navegación
// al ser la navbar "sticky" el elemento quedaria tapado por la navbar al desplazarse con un simple "href"

function scrollToSection(id) {
  const element = document.getElementById(id);
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const elementPosition = element.getBoundingClientRect().top;
  const scroll = elementPosition - navbarHeight;

  window.scrollTo({
    top: scroll,
  });
}

// Función para validar texto sin caracteres especiales o acentos
function validarTexto(inputText) {
  var regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(inputText);
}

// Se crea una función adicional para verificar si el textarea que contiene el resultado está vacio o no
// en caso de no estar vacio, se cambia su display: none a display: flex

function checkResult() {
  const container = document.getElementById("secondTextareaContainer");

  if (container.style.display == "none") {
    container.style.display = "block";
  }
}

// Se crean funciones para encriptar y desencriptar

function encrypt() {
  const inputValue = document.getElementById("message").value.toLowerCase();
  let encryptedMessage = document.getElementById("result");
  encryptedMessage.value = "";

  if (!validarTexto(inputValue)) {
    alert(
      "El texto contiene caracteres especiales o acentos. Por favor, ingresa un texto válido."
    );
    return;
  }

  checkResult();

  // se crea un for que itera el valor del input para cambiar la letra "a" por "ai", la letra "e" por "enter"
  // la letra "i" por "imes", la letra "o" por "ober" y la letra "u" por "ufar"

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue.charAt(i) == "a") {
      encryptedMessage.value += "ai";
    } else if (inputValue.charAt(i) == "e") {
      encryptedMessage.value += "enter";
    } else if (inputValue.charAt(i) == "i") {
      encryptedMessage.value += "imes";
    } else if (inputValue.charAt(i) == "o") {
      encryptedMessage.value += "ober";
    } else if (inputValue.charAt(i) == "u") {
      encryptedMessage.value += "ufar";
    } else {
      encryptedMessage.value += inputValue.charAt(i);
    }
  }
}

function decrypt() {
  const inputValue = document.getElementById("message").value.toLowerCase();
  let decryptedMessage = document.getElementById("result");
  decryptedMessage.value = "";

  if (!validarTexto(inputValue)) {
    alert(
      "El texto contiene caracteres especiales o acentos. Por favor, ingresa un texto válido."
    );
    return;
  }

  checkResult();

  // se crea un for que itera el valor del input para cambiar la letra "ai" por "a", la letra "enter" por "e"
  // la letra "imes" por "i", la letra "ober" por "o" y la letra "ufar" por "u"

  for (let i = 0; i < inputValue.length; i++) {
    if (inputValue.substr(i, 2) === "ai") {
      decryptedMessage.value += "a";
      i++;
    } else if (inputValue.substr(i, 5) === "enter") {
      decryptedMessage.value += "e";
      i += 4;
    } else if (inputValue.substr(i, 4) === "imes") {
      decryptedMessage.value += "i";
      i += 3;
    } else if (inputValue.substr(i, 4) === "ober") {
      decryptedMessage.value += "o";
      i += 3;
    } else if (inputValue.substr(i, 4) === "ufar") {
      decryptedMessage.value += "u";
      i += 3;
    } else {
      decryptedMessage.value += inputValue.charAt(i);
    }
  }
}

// se crea una función para copiar en el portapapeles el texto que se encuentra en el segundo textarea

function copyToClipboard() {
  let copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyText.setSelectionRange(0, 0);
}
