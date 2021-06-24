// Test Javascript
console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");

// Array
let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray);

// Akses isi dalam array
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);  // bernilai "undefined" karena array diakses melebihi indexnya
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Object (sama seperti dictionary pada Python)
let object = {key1: "value1", key2: "value2", key3: "value3"}
let user = {
    name: {
        firstName: "Budi",
        lastName: "Pandai"
    },
    age: 20, 
    isMuggle: false, 
    stuff: ["Mug", "Flying Car", "Owl"]
};

// Akses isi (properti) object
console.log("Halo, nama saya " + user.name.first + " " + user.name.last);
console.log("Umur saya " + user.age + " tahun");
