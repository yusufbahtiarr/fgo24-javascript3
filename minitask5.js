// Minitask Promise
// - Membuat program antrian (queue) dengan memanfaatkan Promise dan setTimeout
// - Tampilkan nama "John" setelah 1500ms
// - Tampilkan nama "Ed" setelah 2000ms
// - Tampilkan nama "Jane" setelah 500ms
// - Gunakan sintaks chaining then-catch dan juga async-await untuk implementasi dan handlingnya

function testPromise(name, time){
    return new Promise((resolve, reject) => {
        if(name == "" || time < 0){
            reject("gagal")
        } else {
            setTimeout(() => {
                resolve(name)
            },time)
        }
    })
}
testPromise("John", 1500).then((result) => {
    console.log(result);
    testPromise("Ed", 2000).then((result) => {
        console.log(result);
        testPromise("Jane", 500).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})

data = [
    { name: "John", time: 1500 },
    { name: "Ed", time: 2000 },
    { name: "Jane", time: 1500 }
]

const testAsyncAwait = async () => {
    for(let i= 0; i < data.length; i++){
        const result = await testPromise(data[i].name, data[i].time)
        console.log(result);
    }
}

testAsyncAwait()
