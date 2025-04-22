// build in method
// 1. palindrom
function palindrom(textPalindrom){
    textPalindrom = textPalindrom.toLowerCase()
    resultPalindrom = textPalindrom.split("").reverse().join("") //Chaining
    if(textPalindrom == resultPalindrom){
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}
palindrom("Malam")

const wordPalindrom = "malam"
// console.log(wordPalindrom.split("").reverse().join("") === wordPalindrom ? "Palindrom" : "Bukan Palindrom")


// 2. reverse
function reverse1(textReverse){
    resultReverse = textReverse.split(" ").reverse().join(" ") // Chaining
    console.log(resultReverse);
}
reverse1("Saya belajar javascript")

// Manual
// 1. Palindrom
function PalindromManual(textPalindrom){
    result = ""
    for (let x=0; x < textPalindrom.length; x++){
        result = textPalindrom[x] + result
    }
    if (result === textPalindrom){
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
}
PalindromManual("malan")

// 2. Reverse Word
function reverseWordsManual(textReverse){
    let result = "";
    let container = "";
    for (let i = textReverse.length - 1; i >= 0; i--) {
        if (textReverse[i] == " ") {
            result += container + " ";
            container = "";
        } else {
            container = textReverse[i] + container;
        }
    }
    result += container;
    console.log(result);
}
reverseWordsManual("Saya Belajar Golang");

