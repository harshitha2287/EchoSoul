const quotes=[
"You are stronger than your storms 🌧️",
"Your heart deserves peace 💛",
"You survived 100% of your hardest days 🌸",
"Even the night sky shines with hope ✨",
"Your story isn't over 🌈",
"You matter more than you know 💫",
"Take life one breath at a time 🌿",
"The stars believe in you ⭐",
"Kindness to yourself is powerful 💕",
"You deserve calm and happiness 🌻",
"You matter more than you know 💛",
"You survived every hard day so far 🌸",
"The stars believe in you ⭐",
"Your story is still unfolding ✨",
"You deserve peace and kindness 🌿",
"You matter more than you know 🌸",
"You survived every hard day ⭐",
"Be gentle with yourself 💛",
"Your story is still unfolding ✨",
"The stars believe in you 🌙",
"You deserve peace and happiness 🌿",
"Even small steps move you forward 🌱",
"Kindness to yourself is powerful 💫",
"You are stronger than your storms 🌧️",
"Keep shining even in dark times ⭐",
"You matter more than you know 🌸",
"You survived every hard day ⭐",
"Be gentle with yourself 💛",
"The stars believe in you 🌙",
"You deserve peace and happiness 🌿",
"Even small steps move you forward 🌱",
"Kindness to yourself is powerful 💫",
"You are stronger than your storms 🌧️"
]

const twinkle = new Audio("/sounds/twinkle.mp3")
function createStar(){
const star=document.createElement("img")
star.src="/images/star.png"
star.className="star"
star.style.left=Math.random()*window.innerWidth+"px"
star.onclick=()=>{
playTwinkle()
star.style.transform="scale(1.5)"
star.style.filter="drop-shadow(0 0 12px yellow)"
setTimeout(()=>{
explodeStar(star)
},200)
}
document.body.appendChild(star)
setTimeout(()=>{
star.remove()
},6000)
}
function playTwinkle(){
twinkle.currentTime = 0
twinkle.play().catch(err=>{
console.log("twinkle blocked:",err)
})
}
function explodeStar(star){
const rect=star.getBoundingClientRect()
star.remove()
const quote=document.createElement("div")
quote.className="quote"
quote.style.left=rect.left+"px"
quote.style.top=rect.top+"px"
quote.innerText=quotes[Math.floor(Math.random()*quotes.length)]
document.body.appendChild(quote)
setTimeout(()=>{
quote.remove()
},4000)
}
setInterval(createStar,1200)