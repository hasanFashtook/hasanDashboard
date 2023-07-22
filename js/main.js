let modeBtn = document.getElementById("mode");
let iconsMode = document.querySelectorAll("input.toggle-on-off + label .circle i");
let mode;

modeBtn.addEventListener("click",()=>{
  iconsMode.forEach((icon)=>{
    icon.classList.toggle("hidden")
    if(!icon.classList.contains("hidden")){
      mode = icon.classList.item(1).slice(3); // start with 3 index to hide fa- form classes
    } 
  })
  toggleMode(mode);
})

function toggleMode(mode){
  if(mode == "moon"){
    document.documentElement.style.setProperty('--primary-color', '#1f1f1f');
    document.documentElement.style.setProperty('--secondary-color', '#282828');
    document.documentElement.style.setProperty('--tertiary-color', '#424242');
    document.documentElement.style.setProperty('--primary-font-color', '#fff');
    document.body.style.color = 'white'
  }else{
    document.documentElement.style.setProperty('--primary-color', '#f5f9ff');
    document.documentElement.style.setProperty('--secondary-color', '#fff');
    document.documentElement.style.setProperty('--tertiary-color', '#edecff');
    document.documentElement.style.setProperty('--primary-font-color', '#000');
    document.body.style.color = 'black'
  }
}