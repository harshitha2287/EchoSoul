let currentAudio = null
function playSound(type){
if(currentAudio){
currentAudio.pause()
currentAudio.currentTime = 0
}
let path = ""
switch(type){

case "rain":
path = "/sounds/rain.mp3"
break

case "flute":
path = "/sounds/flute.mp3"
break

case "guitar":
path = "/sounds/guitar.mp3"
break

case "wind":
path = "/sounds/windchime.mp3"
break

case "bowl":
path = "/sounds/tibetianbowl.mp3"
break

case "bell":
path = "/sounds/starbell.mp3"
break
}

currentAudio = new Audio(path)
currentAudio.loop = true
currentAudio.play().catch(err=>{
console.log("Audio error:",err)
})
}

function stopSound(){
if(currentAudio){
currentAudio.pause()
currentAudio.currentTime = 0
}
}