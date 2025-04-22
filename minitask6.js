const url = "https://jsonplaceholder.typicode.com/users"

// then-catch
fetch(url)
.then(res=>{
    return res.json()    
}).then(data=>{
    console.log(data.map(item => item.email.toLowerCase()))
})
.catch(err => {
    console.log("Parsing data gagal");  
})

//async-await
const retrieveData = async()=>{
    try{ //jika ada gagal bisa gunakan try-catch
        const fetchData = await fetch(url)
        const data = await fetchData.json()
        // console.log(data) // test tampilkan data
        const emailUsers = data.map(item=>item.email.toLowerCase())
        console.log(emailUsers);
    } catch(err) {
        console.log(err);
    }
}
retrieveData()
