deskripsi = (message) => {
  //encryter -> nama fungsi, message -> buat input data
  let cipherText; //cipherText -> variabel kosong, kaya int a; atau var a; , let itu variabel masih bisa diubah, const variabel tetap gabisa diubah

  const messageArr = message.split(""); //mthod untuk memisahkan antar huruf yang diinputkan
  console.log("Plain Text : ", messageArr); //untuk menampilkan message yang diinput, kaya system print outln

  let decryptedMessageArr = []; // array kosong untuk menampung plain text yg telah dienkripsi

  for (i = 0; i < messageArr.length; i++) {
    //fungsi jika
    let letter; //mendaklarasikan letter
    switch (messageArr[i]) {
      case "D":
        letter = "A";
        break;
      case "E":
        letter = "B";
        break;
      case "F":
        letter = "C";
        break;
      case "G":
        letter = "D";
        break;
      case "H":
        letter = "E";
        break;
      case "I":
        letter = "F";
        break;
      case "J":
        letter = "G";
        break;
      case "K":
        letter = "H";
        break;
      case "L":
        letter = "I";
        break;
      case "M":
        letter = "J";
        break;
      case "N":
        letter = "K";
        break;
      case "O":
        letter = "L";
        break;
      case "P":
        letter = "M";
        break;
      case "Q":
        letter = "N";
        break;
      case "R":
        letter = "O";
        break;
      case "S":
        letter = "P";
        break;
      case "T":
        letter = "Q";
        break;
      case "U":
        letter = "R";
        break;
      case "V":
        letter = "S";
        break;
      case "W":
        letter = "T";
        break;
      case "X":
        letter = "U";
        break;
      case "Y":
        letter = "V";
        break;
      case "Z":
        letter = "W";
        break;
      case "A":
        letter = "X";
        break;
      case "B":
        letter = "Y";
        break;
      case "C":
        letter = "Z";
        break;
      default:
        letter = messageArr[i];
        break;
    }

    decryptedMessageArr.push(letter); // menampung hasil looping yg dilakukan ke decryptedMessageArr
  }

  decryptedMessage = decryptedMessageArr.join(" "); //meggabungkan karakter yg teleh ditampung pada array decryptedMessageArr ke dalam decryptedMessage
  return decryptedMessage;
};

console.log("Cipher Text: ", deskripsi("P D M X   E H U V D P D   W L"));
