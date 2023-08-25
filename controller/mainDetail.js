import { copyrightYear } from "../helpers/currentYear.js";
import { scrollToTopBtn } from "../helpers/backToTop.js";
import gameDetail from "../pages/gameDetail.js";
import { manageMenu } from "../helpers/manageMenu.js";
import { searchForm } from "../helpers/searchForm.js";

const year = document.querySelector('#copyright-year');
copyrightYear(year);

searchForm();
scrollToTopBtn();
manageMenu();

const id = new URL(window.location).searchParams.get('id');
const catalog = document.querySelector('#catalog-items');
const details = document.querySelector('#details');
gameDetail.showDetails(id, catalog, details);
