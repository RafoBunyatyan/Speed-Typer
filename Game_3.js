const word = document.getElementById("word");     
const text = document.getElementById("text");     
const scoreEl = document.getElementById("score");  
const timeEl = document.getElementById("time");   
const settings = document.getElementById("settings");         
const settingsForm = document.getElementById("settings-form");  
const difficultySelect = document.getElementById("difficulty"); 
const message = document.getElementById("message");          
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");   

const words = [
  "sigh",      
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "loving",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
];

let randombar; 

function getRandom() { 
  randombar = words[Math.floor(Math.random() * words.length)] 
  word.innerHTML = randombar; 
}

getRandom();

text.addEventListener("input", () => {   
  if (text.value === randombar) {  
    if (difficultySelect.value === "hard") {  
      timeEl.innerText = +timeEl.innerText + 2
    } else if (difficultySelect.value === "medium") { 
      timeEl.innerText = +timeEl.innerText + 4
    } else if (difficultySelect.value === "easy") { 
		 timeEl.innerText = +timeEl.innerText + 6;
    } 
    getRandom();  
    scoreEl.innerText++; 
    text.value = ""; 
  }    
});

let timeEnd = setInterval(() => {
  if (timeEl.innerText > 0) { 
    timeEl.innerText--;   
  } else if (timeEl.innerText === "0") {  
    clearInterval(timeEl);         
    endgameEl.style.display = "block"   
    endgameEl.innerHTML = `<p>score:${scoreEl.innerHTML}</p>    
    <button onclick="location.reload()">Try Again</button>`
  } 
}, 1000);

difficultySelect.addEventListener("change", (e) => { 
  localStorage.setItem("difficulty", e.target.value) 
})

let difficulty = localStorage.getItem("difficulty") 

if (difficulty === "easy") { 
  difficultySelect.value = "easy" ;
} else if (difficulty === "medium") { 
  difficultySelect.value = "medium" ;
} else if (difficulty === "hard") { 
  difficultySelect.value = "hard"; 
};