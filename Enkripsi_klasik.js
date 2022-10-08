enkripsi = (kata) => {
  //encryter -> nama fungsi, kata -> buat input data
  let plainText; //Plain_text -> variabel kosong, kaya int a; atau var a; , let itu variabel masih bisa diubah, const variabel tetap gabisa diubah

  const messageArr = kata.split(""); //mthod untuk memisahkan antar huruf yang diinputkan
  console.log("Plain Text : ", messageArr); //untuk menampilkan kata yang diinput, kaya system print outln

  let encryptedMessageArr = []; // array kosong untuk menampung plain text yg telah dienkripsi

  for (i = 0; i < messageArr.length; i++) {
    //fungsi jika
    let huruf; //mendaklarasikan huruf
    switch (messageArr[i]) {
      case "A":
        huruf = "D";
        break;
      case "B":
        huruf = "E";
        break;
      case "C":
        huruf = "F";
        break;
      case "D":
        huruf = "G";
        break;
      case "E":
        huruf = "H";
        break;
      case "F":
        huruf = "I";
        break;
      case "G":
        huruf = "J";
        break;
      case "H":
        huruf = "K";
        break;
      case "I":
        huruf = "L";
        break;
      case "J":
        huruf = "M";
        break;
      case "K":
        huruf = "N";
        break;
      case "L":
        huruf = "O";
        break;
      case "M":
        huruf = "P";
        break;
      case "N":
        huruf = "Q";
        break;
      case "O":
        huruf = "R";
        break;
      case "P":
        huruf = "S";
        break;
      case "Q":
        huruf = "T";
        break;
      case "R":
        huruf = "U";
        break;
      case "S":
        huruf = "V";
        break;
      case "T":
        huruf = "W";
        break;
      case "U":
        huruf = "X";
        break;
      case "V":
        huruf = "Y";
        break;
      case "W":
        huruf = "Z";
        break;
      case "X":
        huruf = "A";
        break;
      case "Y":
        huruf = "B";
        break;
      case "Z":
        huruf = "C";
        break;
      default:
        huruf = messageArr[i];
        break;
    }

    encryptedMessageArr.push(huruf); // menampung hasil looping yg dilakukan ke encryptedMessageArr
  }

  plainText = encryptedMessageArr.join(" "); //meggabungkan karakter yg teleh ditampung pada array encryptedMessageArr ke dalam encryptedMessage
  return plainText;
};

console.log("Cipher Text: ", enkripsi("MAJU BERSAMA TI"));
