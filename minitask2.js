// Minitask2
// - Mencari 20 built-in method
// - mencari 5 built-in function
// - jelaskan fungsi dan tiap-tiap method dan function yang ditemukan dengan menggunakan komentar
// - berikan contoh penggunaannya.


// 20 BUILD-IN METHOD
// ARRAY
// 1. Concat : menggabungkan dua array atau lebih, method ini tidak merubah array lama, tapi mengembalikan array baru
const arrayConcat = ["Satu", "Dua", "Tiga"];
const arrayConcat2 = ["Enam", "Lima", "Empat"];

const resultConcat = arrayConcat.concat(arrayConcat2);
console.log(resultConcat);

// 2. Filter : membuat array baru berdasarkan kondisi yang dibuat 
const words = ["spray", "elite", "exuberant", "destruction", "present"];

// membuat array baru dengan filter data array lebih dari 6 kata
const resultFilter = words.filter((word) => word.length > 6);
console.log(resultFilter);

// 2. Find : mencari nilai array berdasarkan pencarian kondisi yang dibuat (output hanya 1 data) 
const arrayFind = [2, 9, 14, 30, 64];
// mencari nilai di array dengan kondisi nilai lebih dari 10, hanya menampilkan 1 data dengan data yang pertama ditemukan yang ditampilkan
const resultFind = arrayFind.find((element) => element > 10);
console.log(resultFind);

// 3. FindIndex : mencari index array berdasarkan pencarian kondisi yang dibuat, sama dengan method Find hanya saja ini utputnya index arraynya 
const arrayFindIndex = [5, 12, 18, 130, 44];
// mencari nilai di array dengan kondisi nilai lebih dari 15, hanya menampilkan 1 data dengan data yang pertama ditemukan yang ditampilkan
const isLargeNumber = (element) => element > 15;
console.log(arrayFindIndex.findIndex(isLargeNumber));

// 4. Join : menggabung kan nilai array dengan outputnya string, bisa diatur juga pemisahnya antar datanya
const elementJoin = ["Meja", "Kursi", "Lemari"];
console.log(elementJoin.join()); // Meja,Kursi,Lemari
console.log(elementJoin.join("")); // MejaKursiLemari
console.log(elementJoin.join("-")); // Meja-Kursi-Lemari

// 5. Pop : menghapus elemen terakhir di array dan merubah panjang arraynya
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
// menghapus data tomato
console.log(plants.pop()); // output: "tomato"
console.log(plants); //["broccoli", "cauliflower", "cabbage", "kale"]
// menghapus data kale
plants.pop();
// menampilkan hasil operasi setelah di lakukan pop
console.log(plants);// ["broccoli", "cauliflower", "cabbage"]

// 6. Reverse : merubah urutan array jadi terbalik, dimana data awal ke posisi akhir dan data akhir ke posisi awal, setiap elemen berubah posisinya
const array1 = ["one", "two", "three"];
// posisi awal
console.log("array1:", array1); // ["one", "two", "three"]

const reversed = array1.reverse();
// posisi urutan array terbalik setelah proses reverse
console.log("reversed:", reversed); // ["three", "two", "one"]

console.log("array1:", array1); // "array1:" Array ["three", "two", "one"]


// 7. Shift : menghapus data array di awal. dan merubah panjang array
const arrayShift = [7, 6, 5];
const firstElement = arrayShift.shift();
console.log(arrayShift); // hasil method shift, output [6, 5]
console.log(firstElement); // menampilkan data array yang di hapus. output: 7

// 8. Slice : menampilkan hasil array baru dengan satu parameter atau dua parameter dengan parameter pertama itu mulai dan parameter kedua akhirnya, nilai akhirnya tidar termasuk. jika satu parameter (nilai positif) berarti batas akhirnya, nilai negatif dimulai dari data terakhir
const animals = ["ant", "bison", "camel", "duck", "elephant"];
// menampilkan data array dari index 0 ke index 2
// menghasilkan output array dari index 0 sampai 2
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
// menghasilkan output array dari index 2 sampai 3, index 4 tidak termasuk
console.log(animals.slice(2, 4)); // ["camel", "duck"]
// menghasilkan output array dari index terakhir.
console.log(animals.slice(-1)); // ["duck", "elephant"]
// menghasilkan output array dari index ke 2 sampai ke 2 dari terakhir.
console.log(animals.slice(2, -1)); // ["camel", "duck"]

// 9. Sort : mensortir elemen array dan mengembalikan array yang sama hasil sortiran
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
// mensortir berdasarkan abjad
console.log(months); // ["Dec", "Feb", "Jan", "March"]

const arrSort = [1, 30, 4, 21, 100000];
arrSort.sort();
// mensortir berdasarkan angka, ini
console.log(arrSort);
// Expected output: Array [1, 100000, 21, 30, 4]

// 10. toSpliced : mirip dengan splice(), mengembalikan nilai array baru mengganti nilai array dengan beberapa kondisi,
// toSpliced(start)
// toSpliced(start, skipCount)
// toSpliced(start, skipCount, item1)
// toSpliced(start, skipCount, item1, item2)

const month = ["Jan", "Mar", "Apr", "May"];

// memasukkan sebuah element ke index 1
const months2 = month.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]in

// mengganti satu element di index 1 dengan 2 elemen baru
const months4 = month.toSpliced(1, 1, "Jun", "Jul");
console.log(months4); //[ 'Jan', 'Jun', 'Jul', 'Apr', 'May' ]

// STRING
// 11. indexOf() : mencari nilai index pada string
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);
// mencari index untuk kata dog dengan hasil ditemukan index ke 15
console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

// 12. replace : mengganti kata/nilai pada string 
const paragraphs = "I think Ruth's dog is cuter than your dog!";
// mengganti nilai Ruth's dengan my
console.log(paragraphs.replace("Ruth's", "my"));

// 33. replaceAll : mengganti semua kata yang sama dengan yang baru
const paragraph2= "I think Ruth's dog is cuter than your dog!";

// mengubah semua kata dog di string menjadi monkey
console.log(paragraph2.replaceAll("dog", "monkey"));

// 14. slice : mengambil data pada sting berdasarkan index
const str = "The quick brown fox jumps over the lazy dog.";
// mengambil data dimulai dari index ke 31
console.log(str.slice(31)); // "the lazy dog."
// mengambil data string diulai dari index ke 4 sampai ke 18
console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

// 15. trim : menghapus spasi pada awal dan akhir kata
const greeting = "   Hello world!   ";

// menghilangkan spasi di awal dan akhir string
console.log(greeting.trim());
// Expected output: "Hello world!"; 

// 16. toUpperCase : merubah string menjadi huruf besar semua
const sentence = "The quick brown fox jumps over the lazy dog.";
// merubah string meenjadi huruf besar semua
console.log(sentence.toUpperCase()); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// 17. toLowerCase : merubah string menajdi huruf kecil semua
const sentence2 = "The quick brown fox jumps over the lazy dog.";

console.log(sentence2.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."

// 18. concat : menggabungkan dua nilai string
const str1 = "Hello";
const str2 = "World";
// menggabungkan str1 dan str2
console.log(str1.concat(" ", str2)); // "Hello World"

//19. subString() : mencetak huruf yang kita ingin tampilkan menggunakan satu parameter/dua parameter

const strSubString = "Hampers";
console.log(strSubString.substring(2)); // jika parameter 1, output akan dimulai dari index 2 sampai akhir string
console.log(strSubString.substring(2, 4)); // jika parameter 2, output akan dimulai dari index 2 sampai index 3, 
// parameter ke 2 tidak tidak cetak karena itu hanya batasnya, index sebelum batasnya yang dicetak 

//20. substr() : method ini ada kemiripan dengan .subString, jika menggunakan 2 parameter, parameter ke2 ikut masuk juga tidak di skip

const strSubStr = "Hampers";
console.log(strSubStr.substr(1, 3)); // index ke 3 akan ikut tercetak


// Builtin Method Function

// 1. bind() : Method ini untuk mengembalikan fungsi baru dengan nilai this.
const person = {
    name: "Yusuf",
    greet: function () {
      console.log(`Hi, I'm ${this.name}`);
    },
  };
  
  const greetings = person.greet.bind(person);
  greetings(); // Output: Hi, I'm Yusuf

// 2. apply()
// method function ini digunakan untuk memecah supaya array numbers dapat dipecah menjadi satu persatu
const numbers = [5, 6, 2, 3, 7]; // Math.max([5, 6, 2, 3, 7])
const max = Math.max.apply(null, numbers);
// Argumen ke 1 null itu nilai untuk this, tetapi Math.max tidak menggunakan this, jadi boleh pakai null.
console.log(max);

// 3. call
// method dalam function ini berguna untuk memanggil kembali sebuah fungsi
function greeting2(name, greet) {
    console.log(`Hello ${name}, Good ${greet}`);
  }
  
greeting2.call(null, "Yusuf", "Morning");

//4. length : menghitung jumlah parameter yang ada di dalam sebuah function
function funcLength1() {}
function funcLength2(a, b, c) {}

console.log(funcLength1.length); // output : 0, karena tidak ada parameter
console.log(funcLength2.length); // output : 3, karena ada 3 parameter
  
// 5. fetch() : untuk fetch data/ mengambil data dari server (API) 
fetch("https://api.example.com/data")
.then((res) => res.json())
.then((data) => console.log(data));

