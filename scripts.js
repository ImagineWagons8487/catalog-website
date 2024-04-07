/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "Game Thumbnails\\Ark Survival Ascended.jpg";
const CURB_POSTER_URL = "Game Thumbnails\\Call of Duty.jpg";
const EAST_LOS_HIGH_POSTER_URL = "Game Thumbnails\\Celeste.jpg";
// const genres = Object.freeze({

//     Action: 0,
//     Platformer: 1,
//     Fighting: 2,
//     FPS: 3,
//     RPG: 4,
//     Simulation: 5,
//     Adventure: 6,
//     Survival: 7

// });
const genreStrings = [
    "Action", "Platformer", "Fighting", 
    "FPS", "RPG", "Simulation", "Adventure", "Survival"
]
const imgs = [
    "Game Thumbnails\\Ark Survival Ascended.jpg", 
    "Game Thumbnails\\Call of Duty.jpg", 
    "Game Thumbnails\\Celeste.jpg",
    "Game Thumbnails\\Counter Strike.jpg",
    "Game Thumbnails\\Destiny 2.jpg",
    "Game Thumbnails\\Dragons Dogma.jpg",
    "Game Thumbnails\\Elden Ring.jpg",
    "Game Thumbnails\\Fallout 4.jpg",
    "Game Thumbnails\\God of War.jpg",
    "Game Thumbnails\\GTAV.jpg",
    "Game Thumbnails\\Hollow Knight.jpg",
    "Game Thumbnails\\Horizon Forbidden West.jpg",
    "Game Thumbnails\\Monster Hunter World.jpg",
    "Game Thumbnails\\Mortal Kombat.jpg",
    "Game Thumbnails\\Palworld.jpg",
    "Game Thumbnails\\War Thunder.jpg",
    "Game Thumbnails\\Rust.jpg",
    "Game Thumbnails\\Shovel Knight.jpg",
    "Game Thumbnails\\Sims 4.jpg",
    "Game Thumbnails\\Skyrim.jpg",
    "Game Thumbnails\\Stardew Valley.jpg",
    "Game Thumbnails\\Street fighter.jpg",
    "Game Thumbnails\\Tekken.jpg",
    "Game Thumbnails\\Witcher.jpg",
];
const titles = [
    "Ark Survival Ascended", "Call of Duty", "Celeste", "Counter Strike 2",
    "Destiny 2", "Dragon Dogma II", "Elden Ring", "Fallout 4", "God of War",
    "Grand Theft Auto V", "Hollow Knight", "Horizon Forbidden West", 
    "Monster Hunter World", "Mortal Kombat 1", "Palworld",
    "Rust", "Shovel Knight", "Sims 4", "Skyrim", "Stardew Valley", "Street Figher 6",
    "Tekken 7", "War Thunder", "The Witcher 3"
];

let games = [
    [titles[0], imgs[0], 44.99, "Survival", "Adventure"],
    [titles[1], imgs[1], 69.99, "FPS", "Action"],
    [titles[2], imgs[2], 19.99, "Platformer", "Adventure"],
    [titles[3], imgs[3], "FREE", "FPS", "Action"],
    [titles[4], imgs[4], "FREE", "FPS", "RPG"],
    [titles[5], imgs[5], 69.99, "Action", "RPG"],
    [titles[6], imgs[6], 59.99, "Action", "RPG"],
    [titles[7], imgs[7], 19.99, "RPG", "FPS"],
    [titles[8], imgs[8], 49.99, "Action", "Adventure"],
    [titles[9], imgs[9], 39.99, "Action", "Adventure"],
    [titles[10], imgs[9], 14.99, "Platformer", "Adventure"],
    [titles[11], imgs[11], 59.99, "Action", "RPG"],
    [titles[12], imgs[12], 29.99, "Action", "RPG"],
    [titles[13], imgs[13], 69.99, "Action", "Fighting"],
    [titles[14], imgs[14], 29.99, "Survival", "Adventure"],
    [titles[15], imgs[15], 39.99, "Survival", "Adventure"],
    [titles[16], imgs[16], 39.99, "Platformer", "Adventure"],
    [titles[17], imgs[17], "FREE", "Simulation", "Adventure"],
    [titles[18], imgs[18], 39.99, "Adventure", "RPG"],
    [titles[19], imgs[19], 14.99, "Simulation", "RPG"],
    [titles[20], imgs[20], 59.99, "Fighting", "Action"],
    [titles[21], imgs[21], 39.99, "Fighting", "Action"],
    [titles[22], imgs[22], "FREE", "Simulation", "Action"],
    [titles[23], imgs[23], 39.99, "Adventure", "RPG"] 
];
const totalGames = games;
function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}

// This is an array of strings (TV show titles)

// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

function displayGenres() {
    const genreContainer = document.getElementById("genre-container");
    genreContainer.textContent = "";
    const templateGenre = document.querySelector(".genre");

    for(let i=0; i<genreStrings.length; i++)
    {
        let name = genreStrings[i];
        const nextGenre = templateGenre.cloneNode(true);

        nextGenre.style.display = "list-item";
        nextGenre.textContent = name;

        genreContainer.appendChild(nextGenre);
        // genreContainer.appendChild(document.createElement('br'));
    }
}

function editGenreInfo(){

}
// document.getElementById('searchInput').addEventListener('input', function(event){
//     const searchTerm = event.target.value.toLowerCase();
//     const listItems = document.querySelectorAll('#genre-container li');

//     listItems.forEach(function(item){
//         const itemText = item.textContent.toLowerCase();

//         if (itemText.includes(searchTerm)){
//             item.style.display = 'list-item';
//         } else {
//             item.style.display = 'none';
//         }

//         });
//     });
function sortByGenre(genre) {
    switch(genre){
        case "Action":
            break;
        case "Platformer":
            break;
        default:
            break;
    }
}
// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < games.length; i++) {
        let title = games[i][0];
        let imageURL = games[i][1];
        let price = games[i][2];
        let genre1 = games[i][3];
        let genre2 = games[i][4];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, price, genre1, genre2); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, price, genre1, genre2) {
    card.style.display = "block";


    // const cardHeader = card.querySelector("h2");
    const cardHeader = card.querySelector(".gameTitle");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Thumbnail";

    const cardPrice = card.querySelector("#price");
    if(price == "FREE")
        cardPrice.textContent = "Free to Play";
    else
        cardPrice.textContent = "$" + price;

    const cardGenre1 = card.querySelector("#genre1");
    cardGenre1.textContent = genre1;

    const cardGenre2 = card.querySelector("#genre2");
    cardGenre2.textContent = ", " + genre2;


    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    // console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", displayGenres);

function quoteAlert() {
    console.log("Button Clicked!");
    // alert("ye");
    switch(getRandomInt(3))
    {
        case 0:
            alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
            break;
        case 1:
            alert("When in doubt, look intelligent.");
            break;
        case 2:
            alert("Spread love wherever you go.");
            break;
        default:
            alert("nah");
    }
}

function removeLastCard() {
    games.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
function addCard()
{
    showCards();
}
function sendToWiki(){
    console.log("Image Clicked");
}
