console.log("hiihi");

const fetchData=async()=> {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random"); //1 sec

    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
fetchData();

console.log("byee");
