import { copyrightYear } from "../helpers/currentYear.js";
import { scrollToTopBtn } from "../helpers/backToTop.js";
import { manageMenu } from "../helpers/manageMenu.js";
import catalog from "../hooks/catalog.js";
import { searchForm } from "../helpers/searchForm.js";

searchForm();

const year = document.querySelector('#copyright-year');
copyrightYear(year);
scrollToTopBtn();
manageMenu();
const genre = new URLSearchParams(window.location.search).get("genre");
const category = document.querySelector('#itemsCatalog');

catalog.carouselItems(genre, category, true, true);
