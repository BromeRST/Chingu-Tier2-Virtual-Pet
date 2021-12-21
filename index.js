const ageEl = document.getElementById("age-el");
const healthEl = document.getElementById("health-el");
const hungerEl = document.getElementById("hunger-el");
const happinessEl = document.getElementById("happiness-el");
const cleanEl = document.getElementById("clean-el");
const feedEl = document.getElementById("feed-el");
const playEl = document.getElementById("play-el");
const settingsEl = document.getElementById("settings");
const overlayEl = document.getElementById("overlay");
const goBackBtn = document.getElementById("goBack");
const subButtonEl = document.getElementById("subButton");
const gameOverEl = document.getElementById("game-over");
const newGameBtnEl = document.getElementById("new-game-btn");
const eventContainer = document.getElementById("event-container");
const spikeGif = document.getElementById("spike-gif");

const healthBar = document.getElementById("health-bar");
const hungerBar = document.getElementById("hunger-bar");
const happinessBar = document.getElementById("happiness-bar")

const speedX1El = document.getElementById("speedX1");
const speedX2El = document.getElementById("speedX2");
const speedX3El = document.getElementById("speedX3");


let petNameEl = document.getElementById("pet-name");
let eventTitle;
let eventDescription;
let eventType;
let eventImpact;

let age = 1;
let health = 100;
let hunger = 0;
let happiness = 100;
let N = 2000;
let timesClicked = 0;

ageEl.textContent = `${age} days old`;
healthEl.textContent = `Health: ${health}`; 
hungerEl.textContent = `Hunger: ${hunger}`;
happinessEl.textContent = `Happiness: ${happiness}`

let interval = setInterval(petLife, N);
setInterval(interval);

function gameSpeed() {
    if (speedX1El.checked) {
        clearInterval(interval);
        N = 2000
        interval = setInterval(petLife, N);
        setInterval(interval);
    } else if (speedX2El.checked) {
        clearInterval(interval)
        N = 1000;
        interval = setInterval(petLife, N);
        setInterval(interval)
    } else if (speedX3El.checked) {
        clearInterval(interval)
        N = 750;
        interval = setInterval(petLife, N);
        setInterval(interval)
    }
}

speedX1El.addEventListener("click", gameSpeed);
speedX2El.addEventListener("click", gameSpeed);
speedX3El.addEventListener("click", gameSpeed);


settingsEl.addEventListener("click", () => {
    timesClicked++

    if (timesClicked % 2 === 0) {
        overlayEl.style.display = "none";    
    } else {
        overlayEl.style.display = "block";
    } 
});


function getPetName() {
    let newPetName = document.getElementById("nameField").value;
    petNameEl.innerText = newPetName
}

function petLife() {
        age ++;
        ageEl.textContent = `${age} days old`;
        
        if (age === 5) {
            setTimeout(eventFetch, 0)
        }

        hungerCheck();

        happinessCheck();

        if (hunger > 50 || happiness < 50) {
            spikeGif.src = "../Virtual Pet/images/hungry-spike.gif";
        } else {
            spikeGif.src = "../Virtual Pet/images/happy-spike.gif";
        }

        healthCheck();
}


cleanEl.addEventListener("click", () => {
    if (health < 100 && health > 0 &&
        healthBar.value < 100 &&
        happiness >= 50 || hunger < 50) {
            health += 5;
            healthBar.value += 5
            healthEl.textContent = `Health: ${health}`; 
    } else if (health < 100 && health > 0 &&
        healthBar.value < 100 &&
        happiness < 50 &&
        hunger >= 50) {
            health += 2;
            healthBar.value += 2;
            healthEl.textContent = `Health: ${health}`;
    }
});

feedEl.addEventListener("click", () => {
    if (
        hunger > 0 && health > 0 &&
        hungerBar.value > 0 && 
        happiness >= 50
        ) {
            hunger -= 5;
            hungerBar.value -= 5;
            hungerEl.textContent = `Hunger: ${hunger}`;
    } else if (
        hunger > 0 && health > 0 &&
        hungerBar.value > 0 && 
        happiness < 50
        ) {
            hunger -= 2;
            hungerBar.value -= 2;
            hungerEl.textContent = `Hunger: ${hunger}`;
        }
});

playEl.addEventListener("click", () => {
    if (happiness < 100  && health > 0 &&
        happinessBar.value < 100 &&
        hunger < 50) {
            happiness += 5;
            happinessBar.value += 5;
            happinessEl.textContent = `Happiness: ${happiness}`;
    } else if (
        happiness < 100  && health > 0 &&
        happinessBar.value < 100 &&
        hunger >= 50) {
            happiness += 2;
            happinessBar.value += 2;
            happinessEl.textContent = `Happiness: ${happiness}`;
        }   
});



function healthCheck() {
    if (health > 0 && hunger < 50 || happiness >= 50) {
        health -= 5;
        healthBar.value -= 5;
        healthEl.textContent = `Health: ${health}`;
    } else if (health > 0 && hunger >= 50 && happiness < 50) {
        health -= 10;
        healthBar.value -= 10;
        healthEl.textContent = `Health: ${health}`;
    } else if (health <= 0) {
        ageEl.textContent = `Spike is dead`;
        gameOverEl.style.display = "block";
        spikeGif.src = "../Virtual Pet/images/dead-spike.gif";
        clearInterval(interval);
    }
    console.log("health", health);
}

function hungerCheck() {
    if (hunger < 100 && happiness >= 50) {
        hunger += 5;
        hungerBar.value += 5;
        hungerEl.textContent = `Hunger: ${hunger}`;

    } else if (hunger < 100 && happiness <= 50) {
        hunger += 8;
        hungerBar.value += 8;
        hungerEl.textContent = `Hunger: ${hunger}`;
    }
}

function happinessCheck() {
    let random = Math.floor(Math.random() * 10);
    if (happiness > 0 && hunger < 50) {
        happiness -= random;
        happinessBar.value -= random;
        happinessEl.textContent = `Happiness: ${happiness}`;
    } else if (happiness > 0 && hunger >= 50) {
        happiness -= random + 3;
        happinessBar.value -= random + 3;
        happinessEl.textContent = `Happiness: ${happiness}`;
    }
}



newGameBtnEl.addEventListener("click", newGame);

function newGame() {
    age = 1;
    health = 100;
    hunger = 0;
    happiness = 100;
    healthBar.value = 100;
    hungerBar.value = 0;
    happinessBar.value = 100;

    gameOverEl.style.display = "none";
    interval = setInterval(petLife, N);
    setInterval(interval);

    ageEl.textContent = `${age} days old`
    healthEl.textContent = `Health: ${health}`;
    hungerEl.textContent = `Hunger: ${hunger}`;
    happinessEl.textContent = `Happiness: ${happiness}`;



    spikeGif.src = "../Virtual Pet/images/happy-spike.gif";
}



function eventFetch() {
    let eventTimeOut;
    if (health > 0) {
        fetch("http://www.virtual-pet.uk/v1/event")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                eventContainer.style.display = "block";
                eventContainer.innerHTML = `
                    <h4>${data.title}</h4>
                    <p>${data.description}</p>
                    <p>${data.type}</p>
                    <p>Health: ${data.impact.health}</p>
                    <p>Hunger: ${data.impact.hunger}</p>
                    <p>Happiness: ${data.impact.happiness}</p>
                    <button id="goBack" onclick="goBack(eventContainer)">Return to the Game</button>
                `;
                
                health += data.impact.health;
                healthBar.value += data.impact.health;
                healthEl.textContent = `Health: ${health}`;

                hunger += data.impact.hunger;
                hungerBar.value += data.impact.hunger;
                hungerEl.textContent = `Hunger: ${hunger}`;

                happiness += data.impact.happiness
                happinessBar.value += data.impact.happiness;
                happinessEl.textContent = `Happiness: ${happiness}`;

                eventTimeOut = setTimeout(eventFetch, data.nextEvent * N);
        })
    }
    if (health <= 0 || healthBar.value <= 0) {
        clearTimeout(eventTimeOut);
        console.log("ciao");
    }
}

function goBack(element) {
    element.style.display = "none";
}

function parametersToMinMax () {
    
    if (health <= 0) {
        health = 0;
        healthEl.textContent = `Health: ${health}`
    } else if (health >= 100) {
        health = 100;
        healthEl.textContent = `Health: ${health}`
    }

    if (happiness <= 0) {
        happiness = 0;
        happinessEl.textContent = `Happiness: 0`;
    } else if (happiness >= 100) {
        happiness = 100;
        happinessEl.textContent = `Happiness: ${happiness}`;
    }

    if (hunger >= 100) {
        hunger = 100;
        hungerEl.textContent = `Hunger: ${hunger}`;
    } else if (hunger <= 0) {
        hunger = 0;
        hungerEl.textContent = `Hunger: ${hunger}`;
    }

}

setInterval(parametersToMinMax, 5);