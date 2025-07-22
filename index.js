const image=document.querySelector("#ben10");



const btn= document.querySelector(".btn");
console.log(btn);


btn.onclick=()=>{

  if(image.src=="https://i.pinimg.com/736x/cf/35/91/cf3591df9bfec3802311fbf497c6ba84.jpg"){

    image.src="https://media.istockphoto.com/id/1560833158/photo/game-controller-with-purple-lit-keyboard-amidst-various-wireless-devices.jpg?s=612x612&w=0&k=20&c=eOYotPVhXSiFkrSLHsDjpUENG3ev7bnbt-iK6RS6KAM="
  } else{

      image.src="https://i.pinimg.com/736x/cf/35/91/cf3591df9bfec3802311fbf497c6ba84.jpg"
  }

    
}



const nameInput=document.querySelector("#name-input");

nameInput.addEventListener("input",(event)=>{

    console.log("event triggered");
    console.log(event)
    console.log(event.target.value)
})