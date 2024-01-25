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

// Función que se ejecuta al cargar el DOM y lo que busca es comparar distintas alturas de elementos y verificar si el footer
// debe estar con una posición absoluta o no

function footerPosition() {
  // A continuación genero variables que almacenaran la altura de la navbar, la altura del footer, la altura del main de la página,
  // la altura del header y la altura del viewport, en caso de que la suma de todas las variables anteriores no supera la altura del viewport
  // el footer será de posición absoluta con bottom 0.
  const navHeight = document.getElementById("navbar").offsetHeight;
  const footerHeight = document.getElementById("footer").offsetHeight;
  let mainHeight = document.getElementById("main").offsetHeight;
  const headerHeight = document.getElementById("header").offsetHeight;
  const viewportHeight = window.innerHeight;

  // En caso de que la suma de todas las variables anteriores no supera la altura del viewport
  // el footer será de posición absoluta con bottom 0.
  if (
    navHeight + footerHeight + mainHeight + headerHeight <
    viewportHeight
  ) {
    document.getElementById("footer").style.position = "absolute";
    document.getElementById("footer").style.bottom = "0";
  } else {
    document.getElementById("footer").style.position = "unset";
    document.getElementById("footer").style.bottom = "unset";
  }
};

// Cuando carga el DOM, se llama al a función "footerPosition"

document.addEventListener("DOMContentLoaded", footerPosition);

// Se inicia un observer para detectar cambios en las alturas de los elementos de la página

const observer = new MutationObserver(footerPosition);

// Se configura el observer para detectar cambios en las alturas de los elementos de la página

const config = { attributes: true, childList: true, subtree: true };

// Se le pide al observer que observe los cambios en el body de la página y se le pasa la configuración
 
observer.observe(document.body, config);

// Función para validar texto sin caracteres especiales o acentos
function validarTexto(inputText) {
  var regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(inputText) && !/[A-Z]/.test(inputText);
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
  const inputValue = document.getElementById("message").value;
  let encryptedMessage = document.getElementById("result");
  encryptedMessage.value = "";

  if (!validarTexto(inputValue)) {
    alert(
      "El texto contiene caracteres especiales, acentos o mayúsculas. Por favor, ingresa un texto válido."
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
  const inputValue = document.getElementById("message").value;
  let decryptedMessage = document.getElementById("result");
  decryptedMessage.value = "";

  if (!validarTexto(inputValue)) {
    alert(
      "El texto contiene caracteres especiales, acentos o mayúsculas. Por favor, ingresa un texto válido."
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
