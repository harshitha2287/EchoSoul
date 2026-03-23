function saveEntry(){
const text = document.getElementById("journal").value.trim()
if(text==="") return
let entries = JSON.parse(localStorage.getItem("soulEntries")) || []
entries.push({
text:text,
date:new Date().toLocaleString()
})
localStorage.setItem("soulEntries", JSON.stringify(entries))
document.getElementById("journal").value=""
loadEntries()
}
function loadEntries(){
const container=document.getElementById("entries")
container.innerHTML=""
let entries=JSON.parse(localStorage.getItem("soulEntries")) || []
entries.reverse().forEach(entry=>{
const div=document.createElement("div")
div.className="entry"
div.innerHTML=`
<div class="entryDate">${entry.date}</div>
<div>${entry.text}</div>
`
container.appendChild(div)
})
}
window.onload=loadEntries