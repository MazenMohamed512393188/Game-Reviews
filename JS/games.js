"use strict";

export class Games {

    constructor(category) {

        this.url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

    }

    async fetchGames() {

        const options = {

            method: 'GET',

            headers: {

                'x-rapidapi-key': '07fa0b50bamshc8b4653bc393af0p11a898jsn008373a43a59',

                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'

            }
        };

        try {
            const response = await fetch(this.url, options);

            let games = await response.json();

            return games;

        }
        catch (error) {

            console.error('Error:', error);

            return [];
            
        }
    }
}