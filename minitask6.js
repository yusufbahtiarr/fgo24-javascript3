const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(res=>{
    return res.json()    
}).then(data=>{
    result = []
    lower = ""
    data.forEach(item => {
        lower = item.email
        result.push(lower.toLowerCase())
    })
    console.log(result);
    

})
.catch(err => {
    console.log("Parsing data gagal");
    
})