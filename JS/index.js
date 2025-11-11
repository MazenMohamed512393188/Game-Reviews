"use strict";

import { Display } from "./ui.js";

let ui = new Display();

ui.setupEventListeners();

ui.displayCategories("mmorpg");

ui.loadingShow();