/*
*
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



function displayGenres() {
    const genreContainer = document.getElementById("genre-container");
    genreContainer.textContent = ""; // sets text to nothing
    const templateGenre = document.querySelector(".genre");

    for(let i=0; i<genreStrings.length; i++)
    {
        let name = genreStrings[i];
        const nextGenre = templateGenre.cloneNode(true);

        nextGenre.style.display = "list-item";
        nextGenre.textContent = name;

        genreContainer.appendChild(nextGenre);
    }
}

document.getElementById('searchInput').addEventListener('input', 
function(event){

    const searchTerm = event.target.value.toLowerCase();
    const cardsList = document.querySelectorAll('#card-container div');

    cardsList.forEach(
        function(card){
        const cardTitle = card.querySelector(".gameTitle").textContent.toLowerCase();
        
        if (cardTitle.includes(searchTerm)){
            card.style.display = 'block';
        }
        else {
            card.style.display = 'none';
        }
        });
    });

function sortByGenre(genre) {

    const cardsList = document.querySelectorAll('#card-container .card');
    cardsList.forEach(
        function(card){
        let cardGenre1 = card.querySelector("#genre1").textContent;
        let cardGenre2 = card.querySelector("#genre2").textContent;

    if(genre == "Reset Genre Sort"){
        card.style.display = 'block';
    }
    else if(cardGenre1 == genre || cardGenre2 == genre){
        card.style.display = 'block';
    }
    else {
        card.style.display = 'none';
    }
    });

}

function setCardDisplay(card)
{
    let cardGenre1 = card.querySelector("#genre1");
    let cardGenre2 = card.querySelector("#genre2");

    if(cardGenre1 == genre || cardGenre2 == genre){
        card.style.display = 'block';
    }
    else {
        card.style.display = 'none';
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
        editCardContent(nextCard, title, imageURL, price, genre1, genre2); // Edit attributes
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, price, genre1, genre2) {
    card.style.display = "block";

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
    cardGenre2.textContent = genre2;

}

// This calls the showCards() and displayGenres functions when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", displayGenres);

// function quoteAlert() {
//     console.log("Button Clicked!");
//     // alert("ye");
//     switch(getRandomInt(3))
//     {
//         case 0:
//             alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
//             break;
//         case 1:
//             alert("When in doubt, look intelligent.");
//             break;
//         case 2:
//             alert("Spread love wherever you go.");
//             break;
//         default:
//             alert("nah");
//     }
// }

// function removeLastCard() {
//     games.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
// function addCard()
// {
//     showCards();
// }
// function sendToWiki(){
//     console.log("Image Clicked");
// }
