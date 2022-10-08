function isUpperCase(inputKata) {
  return inputKata === inputKata.toUpperCase();
}

function enkripsi (inputKata, key) {
    
  let hasilEnkripsi = "";

  for (let i = 0; i < inputKata.length; i++) {
    if (isUpperCase(inputKata[i])) { 
      hasilEnkripsi += String.fromCharCode( 
        ((inputKata.charCodeAt(i) + key - 65) % 26) + 65 
      );
    } else {
      hasilEnkripsi += String.fromCharCode(
        ((inputKata.charCodeAt(i) + key - 97) % 26) + 97
      );
    }
  }

  return hasilEnkripsi;
};

console.log(enkripsi('MESIR', 3))

