//parses urls from parameters passed from within index.html href
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameTitle = urlParams.get('title');
const gameImgURL = urlParams.get('imgURL');
const gamePrice = urlParams.get('price');
const gameGenre1 = urlParams.get('genre1');
const gameGenre2 = urlParams.get('genre2');

function parseURLS(){
    document.querySelector("#gameTitle").textContent = gameTitle;
    document.querySelector("#gameImg").src = gameImgURL;
}

document.addEventListener("DOMContentLoaded", parseURLS());

//make look professional, treat like clients, commercial use, don't make personal
//use fancy-ish transitions
