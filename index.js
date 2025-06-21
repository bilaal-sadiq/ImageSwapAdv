let playerName = document.getElementById("player-name")
let imgOne = document.getElementById("img-1")
let imgTwo = document.getElementById("img-2")

const players = [
    {
        name: "James Rodríguez",
        images: ["james_1.jpg", "james_2.jpg"]
    },
    {
        name: "Granit Xhaka",
        images: ["xhaka_1.jpg", "xhaka_2.jpg"]
    },
    {
        name: "Theo Walcott",
        images: ["Walcott_1.jpg", "walcott_2.jpg"]
    },
    {
        name: "Mesut Özil",
        images: ["ozil_1.jpg", "Ozil_2.jpg"]
    }
]

// let currentIndex = 0; 
// let player =  players[currentIndex];



// function playerChange() {
//     playerName.textContent = player.name
//     imgOne.src = player.images[0]
//     imgTwo.src = player.images[1]
//     currentIndex += 1;
// }

let currentIndex = 0;

function playerChange() {
    // Wrap index so it cycles through players
    if (currentIndex >= players.length) {
        currentIndex = 0;
    }

    let player = players[currentIndex];

    playerName.textContent = player.name;
    imgOne.src = player.images[0];
    imgTwo.src = player.images[1];

    currentIndex++;
}

// Set initial display
playerChange();

// Example: change player on clicking playerName element (or any other)
playerName.addEventListener("click", playerChange);

