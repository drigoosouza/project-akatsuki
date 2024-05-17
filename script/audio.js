
export function pausePlay (){
  const btnAudio = document.getElementById("btn-audio-play")
  const audio = document.querySelector("audio")
  let c =-999
  let i = 0


  document.addEventListener("mousedown", function (){
    console.log("oi")
    if (c!=0){
      audio.play()
      c=0
    }
    
  })

  btnAudio.addEventListener("click",()=>{
    if(i===0){
      audio.pause();
      const icon = document.querySelector("ion-icon").remove()
      btnAudio.innerHTML="<ion-icon name='volume-mute-outline'></ion-icon>"
      i=1
    }else{
      audio.play();
      const icon = document.querySelector("ion-icon").remove()
      btnAudio.innerHTML="<ion-icon name='volume-high-outline'></ion-icon>"
      i=0
    }
  })
}

//<img width="50" height="50" src="https://img.icons8.com/ios/50/no-audio--v1.png" alt="no-audio--v1"/>