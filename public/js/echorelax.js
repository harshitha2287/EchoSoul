const text=document.getElementById("breathText")
const circle=document.getElementById("breathCircle")
let breathing=false
function startBreathing(){
if(breathing) return
breathing=true
cycle()
}

function cycle(){
text.innerText="Breathe In"
circle.style.transform="scale(1.5)"
speak("Breathe in")
setTimeout(()=>{
text.innerText="Breathe Out"
circle.style.transform="scale(1)"
speak("Breathe out")
},4000)
setTimeout(()=>{
cycle()
},8000)
}

function speak(words){

const speech=new SpeechSynthesisUtterance(words)
speech.rate=0.8
speech.pitch=1.2
speechSynthesis.speak(speech)
}