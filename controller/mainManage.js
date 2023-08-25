import { copyrightYear } from "../helpers/currentYear.js";
import { manageMenu } from "../helpers/manageMenu.js";
import { createGame } from "../pages/createGames.js";
import { searchForm } from "../helpers/searchForm.js";

searchForm();

const year = document.querySelector('#copyright-year');
copyrightYear(year);

manageMenu();

const platformSelect = document.getElementById("platform");
const pcFieldsContainer = document.querySelector(".pc-fields");

platformSelect.addEventListener("change", function () {
	if (this.value === "PC (Windows)") {
        pcFieldsContainer.classList.add("active");
	} else {
        pcFieldsContainer.classList.remove("active");
	}
});

const form = document.getElementById("gameForm");
createGame(form);