// build in method
// 1. palindrom
function palindrom(textPalindrom){
    textPalindrom = textPalindrom.toLowerCase()
    resultPalindrom = textPalindrom.split("").reverse().join("")
    if(textPalindrom == resultPalindrom){
        console.log("Palindrom");
    } else {
        console.log("Bukan Palindrom");
    }
    
}
palindrom("Malam")

// 2. reverse
function reverse1(textReverse){
    resultReverse = textReverse.split(" ").reverse().join(" ")
    console.log(resultReverse);
    
}

reverse1("Saya belajar javascript")

// manual