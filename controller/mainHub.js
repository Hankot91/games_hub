import banner from "../pages/banner.js";
import catalog from "../hooks/catalog.js";
import { copyrightYear } from "../helpers/currentYear.js";
import { scrollToTopBtn } from "../helpers/backToTop.js";
import { manageMenu } from "../helpers/manageMenu.js";
import {searchForm } from "../helpers/searchForm.js";

searchForm();

const divIndicators = document.querySelector("#indicators");
banner.createButtons(divIndicators);

const divCarousel = document.querySelector("#carousel");
banner.giveawaysList(divCarousel);

const divNews = document.querySelector("#news");
banner.newsList(divNews);

const carouselCatalogs = document.querySelectorAll(".carousel-catalog");
carouselCatalogs.forEach((carouselCatalog) => {
    const catalogId = carouselCatalog.getAttribute("id");
    const carouselItemsElement =
        carouselCatalog.querySelector(".carousel-items");
    catalog.carouselItems(catalogId, carouselItemsElement, false);
});

const year = document.querySelector('#copyright-year');
copyrightYear(year);

scrollToTopBtn();
manageMenu();