//array of genre strings for the genre list
const genreStrings = [
    "Reset Genre Sort", "Action", "Platformer", "Fighting", 
    "FPS", "RPG", "Simulation", "Adventure", "Survival"
]

//array of thumbnails for the cards
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
    "Game Thumbnails\\Rust.jpg",
    "Game Thumbnails\\Shovel Knight.jpg",
    "Game Thumbnails\\Sims 4.jpg",
    "Game Thumbnails\\Skyrim.jpg",
    "Game Thumbnails\\Stardew Valley.jpg",
    "Game Thumbnails\\Street fighter.jpg",
    "Game Thumbnails\\Tekken.jpg",
    "Game Thumbnails\\War Thunder.jpg",
    "Game Thumbnails\\Witcher.jpg",
];

//array of the titles for the cards
const titles = [
    "Ark Survival Ascended", "Call of Duty", "Celeste", "Counter Strike 2",
    "Destiny 2", "Dragon Dogma II", "Elden Ring", "Fallout 4", "God of War",
    "Grand Theft Auto V", "Hollow Knight", "Horizon Forbidden West", 
    "Monster Hunter World", "Mortal Kombat 1", "Palworld",
    "Rust", "Shovel Knight", "Sims 4", "Skyrim", "Stardew Valley", "Street Fighter 6",
    "Tekken 7", "War Thunder", "The Witcher 3"
];

//2D array | each value is an array that represents all the attributes of the cards
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
    [titles[10], imgs[10], 14.99, "Platformer", "Adventure"],
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
