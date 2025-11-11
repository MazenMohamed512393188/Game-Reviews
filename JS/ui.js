"use strict";

let mmorpg = document.getElementById("mmorpg");

let shooter = document.getElementById("shooter");

let sailing = document.getElementById("sailing");

let permadeath = document.getElementById("permadeath");

let superhero = document.getElementById("superhero");

let pixel = document.getElementById("pixel");

let loading = document.querySelector(".loading");

export class Display {

    constructor() {

    }

    async displayCategories(category = "mmorpg") {

        const { Games } = await import('./games.js');

        const gamesInstance = new Games(category);

        const games = await gamesInstance.fetchGames();

        let cartona = ``;

        for (let i = 0; i < games.length; i++) {

            cartona += `<div class="col">
                <div data-id="${games[i].id}" class="card h-100 bg-transparent" role="button">
                    <div class="card-body">
                        <figure class="position-relative">
                            <img class="card-img-top object-fit-cover h-100"
                                src="${games[i].thumbnail}">
                        </figure>
                        <figcaption>
                            <div class="hstack justify-content-between">
                                <h3 class="h6 small">${games[i].title}</h3>
                                <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                            <p class="card-text small text-center opacity-50">
                                ${games[i].short_description}
                            </p>
                        </figcaption>
                    </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${games[i].genre}</span>
                        <span class="badge badge-color">${games[i].platform}</span>
                    </footer>
                </div>
            </div>`;
        }

        document.getElementById("gameData").innerHTML = cartona;

        this.attachCardClickEvents();
    }

    attachCardClickEvents() {

        const cards = document.querySelectorAll("#gameData .card");

        cards.forEach(card => {

            card.addEventListener("click", () => {

                const gameId = card.getAttribute("data-id");

                this.displayDetails(gameId);

            });
        });
    }

    setupEventListeners() {

        mmorpg.addEventListener("click", () => {

            this.displayCategories("mmorpg");

            this.loadingShow();

            this.closeDetails();

        });

        shooter.addEventListener("click", () => {

            this.displayCategories("shooter");

            this.loadingShow();

            this.closeDetails();

        });

        sailing.addEventListener("click", () => {

            this.displayCategories("sailing");

             this.loadingShow();

            this.closeDetails();

        });

        permadeath.addEventListener("click", () => {

            this.displayCategories("permadeath");

            this.loadingShow();

            this.closeDetails();

        });

        superhero.addEventListener("click", () => {

            this.displayCategories("superhero");

            this.loadingShow();

            this.closeDetails();

        });

        pixel.addEventListener("click", () => {

            this.displayCategories("pixel");

            this.loadingShow();

            this.closeDetails();

        });

        const closeBtn = document.getElementById("btnClose");

        if (closeBtn) {

            closeBtn.addEventListener("click", () => this.closeDetails());

        }
    }

    async displayDetails(id) {

        const { Details } = await import('./details.js');

        const detailsInstance = new Details(id);

        const details = await detailsInstance.fetchDetails();

        let cartona = `<div class="col-md-4">
            <img src="${details.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
            <h3>Title: ${details.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${details.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${details.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${details.status}</span> </p>
            <p class="small">${details.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${details.game_url}">Show Game</a>
        </div>`;

        document.getElementById("detailsContent").innerHTML = cartona;

        document.querySelector(".games").classList.add("d-none");

        document.querySelector(".details").classList.remove("d-none");

    }

    closeDetails() {

        document.querySelector(".details").classList.add("d-none");

        document.querySelector(".games").classList.remove("d-none");

    }

    loadingShow() {

        loading.classList.remove("d-none");

        setTimeout(() => {

            loading.classList.add("d-none");
        }, 1000);

    }
}