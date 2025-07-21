console.log("hiihi")

async function fetchData(){
    
   console.log("start")

    const response= await fetch("https://dog.ceo/api/breeds/image/random");//1 sec
   
    const data = await response.json();
    console.log(data)

    console.log("end")

}
fetchData()

console.log("byee")




