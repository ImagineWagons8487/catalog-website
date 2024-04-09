//parses urls from parameters passed from within index.html href
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameTitle = urlParams.get('title');
const gameImgURL = urlParams.get('imgURL');
const gamePrice = urlParams.get('price');
const gameGenre1 = urlParams.get('genre1');
const gameGenre2 = urlParams.get('genre2');
const gameDev = urlParams.get('dev');
const gameDesc = urlParams.get('desc');

document.querySelector(".titleBox").addEventListener('click', ()=>{
    window.location.href = `index.html`;
})

function parseURLS(){
    document.querySelector("#tabTitle").textContent += gameTitle;

    document.querySelector("#gameTitle").textContent = gameTitle;
    document.querySelector("#gameImg").src = gameImgURL;
    document.querySelector("#genre1").textContent = gameGenre1;
    document.querySelector("#genre2").textContent = gameGenre2;
    document.querySelector("#developer").textContent = gameDev;
    document.querySelector("#description").textContent = gameDesc;

    if(gamePrice == "FREE")
        document.querySelector("#price").textContent = "Free to Play";
    else
        document.querySelector("#price").textContent = "$" + gamePrice;
}

document.addEventListener("DOMContentLoaded", parseURLS());

//make look professional, treat like clients, commercial use, don't make personal
//use fancy-ish transitions
