
type Game = {
    cost: number
    game_id: string
    hidden?: boolean
}


export default [
    { // Idle Orbs: Remastered
        cost: 0,
        game_id: "2728348",
        hidden: true,
    },
    { // Idle Orbs: 4
        cost: 3.00,
        game_id: "2727813",
    },
    { // Idle Orbs: 3
        cost: 3.00,
        game_id: "1721657",
    },
    { // Idle Orbs: 2
        cost: 0,
        game_id: "1472697",
    },
    { // Idle Orbs
        cost: 0,
        game_id: "1337518",
    },
    { // Idle Orbs: Tycoon
        cost: 0,
        game_id: "1489781",
    },
    { // Idle Orbs: Factory
        cost: 0,
        game_id: "1356225",
    },
    { // 7 Minute Idle Game
        cost: 0,
        game_id: "1815576",
    },
    { // Click and Rage 2
        cost: 0,
        game_id: "1807743",
    },
    { // Click and Rage
        cost: 0,
        game_id: "1710622",
    },
    { // Wizardry and Ichor
        cost: 0,
        game_id: "1451350",
    },
    { // Idle Walkin'
        cost: 0,
        game_id: "1365246",
    },
    { // Atomize The Earth
        cost: 0,
        game_id: "1364328",
    },
    { // Pen Factori 2
        cost: 0,
        game_id: "1321315",
    },
    { // Oneirophobia
        cost: 0,
        game_id: "1015327",
    },
] as Game[];

export function buildIFrameSrc(game: Game) {
    return `https://itch.io/embed/${game.game_id}?border_width=0&
        bg_color=${'202020'}&
        fg_color=${'eeeeee'}&
        link_color=${'FA5C5C'}&
        border_color=${'444444'}
    `.split("\n").map(str => str.trim()).join("");
}
