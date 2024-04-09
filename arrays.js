//array of genre strings for the genre list
const genreStrings = [
    "Reset Genre Sort", "Action", "Platformer", "Fighting", 
    "FPS", "RPG", "Simulation", "Adventure", "Survival"
]

const games = {
    cards: [
        {
            title: "Ark Survival Ascended",
            imgPath: "Game Thumbnails\\Ark Survival Ascended.jpg",
            price: 44.99,
            genre1: "Survival",
            genre2: "Adventure",
            developer: "Studio Wildcard, Grove Street Games, Instinct Games",
            desc: "ARK is reimagined from the ground-up into the next-generation of video game technology with Unreal Engine 5! Form a tribe, tame and breed hundreds of unique dinosaurs and primeval creatures, explore, craft, build, and fight your way to the top of the food-chain. Your new world awaits!"
        },
        {
            title: "Call of Duty",
            imgPath: "Game Thumbnails\\Call of Duty.jpg",
            price: 69.99,
            genre1: "FPS",
            genre2: "Action",
            developer: "Sledgehammer Games, Treyarch, Infinity Ward, Beenox, Raven Software, High Moon Studios, Demonware",
            desc: "Welcome to Call of Duty® HQ, the home of Call of Duty®: Modern Warfare® III, Call of Duty®: Modern Warfare® II and Warzone™."
        },
        {
            title: "Celeste",
            imgPath: "Game Thumbnails\\Celeste.jpg",
            price: 19.99,
            genre1: "Platformer",
            genre2: "Adventure",
            developer: "Maddy Makes Games Inc., Extremely OK Games, Ltd.",
            desc: "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain, in this super-tight platformer from the creators of TowerFall. Brave hundreds of hand-crafted challenges, uncover devious secrets, and piece together the mystery of the mountain."
        },
        {
            title: "Counter Strike 2",
            imgPath: "Game Thumbnails\\Counter Strike.jpg",
            price: "FREE",
            genre1: "FPS",
            genre2: "Action",
            developer: "Valve",
            desc: "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2."
        },
        {
            title: "Destiny 2",
            imgPath: "Game Thumbnails\\Destiny 2.jpg",
            price: "FREE",
            genre1: "FPS",
            genre2: "RPG",
            developer: "Bungie",
            desc: "Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free."
        },
        {
            title: "Dragon's Dogma II",
            imgPath: "Game Thumbnails\\Dragons Dogma.jpg",
            price: 69.99,
            genre1: "Action",
            genre2: "RPG",
            developer: "CAPCOM Co., Ltd.",
            desc:"Dragon\'s Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience - from the appearance of their Arisen, their vocation, their party, how to approach different situations and more - in a truly immersive fantasy world."
        },
        {
            title: "Elden Ring",
            imgPath: "Game Thumbnails\\Elden Ring.jpg",
            price: 59.99,
            genre1: "Action",
            genre2: "RPG",
            developer: "FromSoftware Inc.",
            desc: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between."
        },
        {
            title: "Fallout 4",
            imgPath: "Game Thumbnails\\Fallout 4.jpg",
            price: 19.99,
            genre1: "RPG",
            genre2: "FPS",
            developer: "Bethesda Game Studios",
            desc: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4 – their most ambitious game ever, and the next generation of open-world gaming."
        },
        {
            title: "God of War",
            imgPath: "Game Thumbnails\\God of War.jpg",
            price: 49.99,
            genre1: "Action",
            genre2: "Adventure",
            developer: "Santa Monica Studio",
            desc: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same."
        },
        {
            title: "Grand Theft Auto V",
            imgPath: "Game Thumbnails\\GTAV.jpg",
            price: 39.99,
            genre1: "Action",
            genre2: "Adventure",
            developer: "Rockstar North",
            desc: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second."
        },
        {
            title: "Hollow Knight",
            imgPath: "Game Thumbnails\\Hollow Knight.jpg",
            price: 14.99,
            genre1: "Platformer",
            genre2: "Adventure",
            developer: "Team Cherry",
            desc: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style."
        },
        {
            title: "Horizon Forbidden West",
            imgPath: "Game Thumbnails\\Horizon Forbidden West.jpg",
            price: 59.99,
            genre1: "Action",
            genre2: "RPG",
            developer: "Guerrilla, Nixxes Software",
            desc: "Experience the epic Horizon Forbidden West™ in its entirety with bonus content and the Burning Shores expansion included. The Burning Shores add-on contains additional content for Aloy's adventure, including new storylines, characters, and experiences in a stunning yet hazardous new area."
        },
        {
            title: "Monster Hunter World",
            imgPath: "Game Thumbnails\\Monster Hunter World.jpg",
            price: 29.99,
            genre1: "Action",
            genre2: "RPG",
            developer: "CAPCOM Co., Ltd.",
            desc: "Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement."
        },
        {
            title: "Mortal Kombat 1",
            imgPath: "Game Thumbnails\\Mortal Kombat.jpg",
            price: 69.99,
            genre1: "Action",
            genre2: "Fighting",
            developer: "NetherRealm Studios, QLOC",
            desc: "Discover a reborn Mortal Kombat™ Universe created by the Fire God Liu Kang. Mortal Kombat™ 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and fatalities!"
        },
        {
            title: "Palworld",
            imgPath: "Game Thumbnails\\Palworld.jpg",
            price: 29.99,
            genre1: "Survival",
            genre2: "Adventure",
            developer: "Pocketpair",
            desc: "Fight, farm, build and work alongside mysterious creatures called \"Pals\" in this completely new multiplayer, open world survival and crafting game"
        },
        {
            title: "Rust",
            imgPath: "Game Thumbnails\\Rust.jpg",
            price: 39.99,
            genre1: "Survival",
            genre2: "Adventure",
            developer: "Facepunch Studios",
            desc: "The only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night."
        },
        {
            title: "Shovel Knight",
            imgPath: "Game Thumbnails\\Shovel Knight.jpg",
            price: 39.99,
            genre1: "Platformer",
            genre2: "Adventure",
            developer: "Yacht Club Games",
            desc: "Shovel Knight: Treasure Trove is the complete Shovel Knight collection, containing all 5 games in the epic saga! Dig, blast, slash, and bash your way through a fantastical, 8-bit inspired world of pixel-perfect platforming, memorable characters, and world-class action-adventure gameplay."
        },
        {
            title: "Sims 4",
            imgPath: "Game Thumbnails\\Sims 4.jpg",
            price: "FREE",
            genre1: "Simulation",
            genre2: "Adventure",
            developer: "Maxis",
            desc: "Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes-and much more."
        },
        {
            title: "Skyrim",
            imgPath: "Game Thumbnails\\Skyrim.jpg",
            price: 39.99,
            genre1: "Adventure",
            genre2: "RPG",
            developer: "Bethesda Game Studios",
            desc: "Winner of more than 200 Game of the Year Awards, The Elder Scrolls V: Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features."
        },
        {
            title: "Stardew Valley",
            imgPath: "Game Thumbnails\\Stardew Valley.jpg",
            price: 14.99,
            genre1: "Simulation",
            genre2: "RPG",
            developer: "ConcernedApe",
            desc: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?"
        },
        {
            title: "Street Fighter 6",
            imgPath: "Game Thumbnails\\Street fighter.jpg",
            price: 59.99,
            genre1: "Fighting",
            genre2: "Action",
            developer: "CAPCOM Co., Ltd.",
            desc: "Here comes Capcom's newest challenger! Street Fighter™ 6 launches worldwide on June 2nd, 2023 and represents the next evolution of the Street Fighter™ series! Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub."
        },
        {
            title: "Tekken 7",
            imgPath: "Game Thumbnails\\Tekken.jpg",
            price: 39.99,
            genre1: "Fighting",
            genre2: "Action",
            developer: "BANDAI NAMCO Studios Inc.",
            desc: "Discover the epic conclusion of the long-time clan warfare between members of the Mishima family. Powered by Unreal Engine 4, the legendary fighting game franchise fights back with stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals."
        },
        {
            title: "War Thunder",
            imgPath: "Game Thumbnails\\War Thunder.jpg",
            price: "FREE",
            genre1: "Simulation",
            genre2: "Action",
            developer: "Gaijin Entertainment",
            desc: "War Thunder is the most comprehensive free-to-play, cross-platform, MMO military game dedicated to aviation, armoured vehicles, and naval craft, from the early 20th century to the most advanced modern combat units. Join now and take part in major battles on land, in the air, and at sea."
        },
        {
            title: "The Witcher 3",
            imgPath: "Game Thumbnails\\Witcher.jpg",
            price: 39.99,
            genre1: "Adventure",
            genre2: "RPG",
            developer: "CD PROJEKT RED",
            desc: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world."
        }
    ]
}