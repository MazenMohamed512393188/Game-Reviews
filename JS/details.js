"use strict";

export class Details {

    constructor(id) {

        this.url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

    }

    async fetchDetails() {

        const options = {

            method: 'GET',

            headers: {

                'x-rapidapi-key': '07fa0b50bamshc8b4653bc393af0p11a898jsn008373a43a59',

                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'

            }
        };

        try {
            const response = await fetch(this.url, options);
            
            const result = await response.text();

            return JSON.parse(result);

        } 
        
        catch (error) {

            console.error(error);

            return null;
        }
    }
}