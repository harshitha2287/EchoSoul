async function send(){
const input=document.getElementById("msg")
const chat=document.getElementById("chat")
const message=input.value.trim()
if(!message) return
chat.innerHTML+=`<div class="user">${message}</div>`
input.value=""
try{
const res=await fetch("/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({message})
})
const data=await res.json()
chat.innerHTML+=`<div class="bot">${data.reply}</div>`
speak(data.reply)
}catch{
chat.innerHTML+=`<div class="bot">Nova: I'm here with you 🌸</div>`
}

chat.scrollTop=chat.scrollHeight
}

/* voice */

function voice(){
const recog=new webkitSpeechRecognition()
recog.lang="en-IN"
recog.onresult=(e)=>{
document.getElementById("msg").value=
e.results[0][0].transcript
}

recog.start()
}

/* voice reply */

function speak(text){
const speech=new SpeechSynthesisUtterance(text)
speech.rate=0.9
speech.pitch=1.3
speechSynthesis.speak(speech)
}