function isUpperCase(inputKata) {
  return inputKata === inputKata.toUpperCase();
}

function dekripsi(inputKata, key) {
  let hasilDekripsi = "";

  for (let i = 0; i < inputKata.length; i++) {
    if (isUpperCase(inputKata[i])) {
      hasilDekripsi += String.fromCharCode(
        ((inputKata.charCodeAt(i) - key - 65) % 26) + 65);
    } else {
      hasilDekripsi += String.fromCharCode(
        ((inputKata.charCodeAt(i) - key - 97) % 26) + 97);
    }
  }

  return hasilDekripsi;
}

console.log(dekripsi("PHVLU", 3));

