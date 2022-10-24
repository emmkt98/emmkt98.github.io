//game 
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector("#score")
const start = document.querySelector(".start")

//scrolling animation
const html = document.documentElement;
const canvas = document.getElementById("wamInstructions");
const context = canvas.getContext("2d");
const frameCount = 81;

//index of each frame of animation housed in s3 bucket
const currentFrame = index => (
  `https://emtuwamheaderani.s3.amazonaws.com/${index.toString().padStart(4, '0')}.jpg`
)
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=953;
canvas.height=679;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

//image updates inside canvas
const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

//timmer and scoring
let result = 0
let hitPosition 
let currentTime = 45
let timerId = null

// animation progresses (new frame from index loaded) as scroll down 
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()


//no mole at first then generate random square and place mole in it (the random square is the hit position) 
function randomSquare() {
	squares.forEach(square => {
	square.classList.remove("mole")
})

	let randomSquare = squares[Math.floor(Math.random()*9)]
	randomSquare.classList.add("mole")
	hitPosition = randomSquare.id
}


//when correct square is clicked 1 is added to score
squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if (square.id == hitPosition) { 
			result++
			score.textContent = result
			hitPosition = null
		}
	})
})


//random mole position starts
function moveMole() {
	timerId = setInterval(randomSquare,800)  
}

//countdown starts at current time and stops at 0 to give final score
function countDown (){
	currentTime--
	timeLeft.textContent = currentTime

	//final score alert
	if (currentTime == 0){
    	clearInterval(timerId)
		alert("GAME OVER your final score is " + result + " Refresh the page to play again")
	}
		
}

//start works to start time and randomization but countdowncontinues after alert
start.addEventListener('mousedown', function(){
	moveMole(), setInterval(countDown, 1000)


})

