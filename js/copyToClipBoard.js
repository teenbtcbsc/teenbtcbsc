// Copy to Clipboard
(() => {
  // Obtener el input text
  const copyText = document.getElementById("copyText");
  if (!copyText) return false;
  copyText.value = "0x1282f8cec02b31cd607789ea165b7f1db5af75fa";
  copyText.readOnly = true;
  // Obtener el boton de copiar text
  const copyBtn = document.getElementById("button");

  // Escuchar el evento click del boton copyBtn
  copyBtn.addEventListener("click", () => copyToClipBoard());

  // Funcion que toma el valor del input y luego lo copia al portapapeles
  function copyToClipBoard() {
    // Seleccionar el valor del input
    copyText.select();
    // Ejecutar el comando copiar(copy)
    document.execCommand("copy");
    copyBtn.classList.add("active");
    // Quitar la seleccion del input
    window.getSelection().removeAllRanges();

    setTimeout(() => {
      copyBtn.classList.remove("active");
    }, 1000);
  }
})();
