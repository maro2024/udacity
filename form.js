const menu =document.getElementById("menu");
const action =document.getElementById("actions");
menu.addEventListener("click", ()=>{
    hundelMenu();
})
function hundelMenu(){
    
   menu.classList.toggle("is-active");
   action.classList.toggle("is-active");
}

var iconaia= document.getElementById("iconaia");
iconaia.onclick =  function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconaia.src = "image/sun1.png";
    }else{
        iconaia.src = "image/moon2.png";
    }
  
  
}