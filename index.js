fetch("https://dog.ceo/api/breeds/image/random").then((data)=>{
    console.log("Data",data);
    return data.json()
}).then((data)=>{
    console.log(data)
})



