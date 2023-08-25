import games from "../services/games.js";
import catalog from "../hooks/catalog.js";
import { formattedReleaseDate } from "../helpers/formatedReleaseDate.js";

const createCarousel = (screenshots) => {
	const carouselContainer = document.createElement("div");
	carouselContainer.id = "carouselExampleControls";
	carouselContainer.classList.add("carousel", "slide");
	carouselContainer.setAttribute("data-bs-ride", "carousel");

	const carouselInner = document.createElement("div");
	carouselInner.classList.add("carousel-inner");

	const defaultScreenshot = {
		id: 4,
		image: "../public/screen.avif",
	};

	const carouselItem = document.createElement("div");
	carouselItem.classList.add("carousel-item", "active" );
	const carouselItem1 = document.createElement("div");
	carouselItem1.classList.add("carousel-item");

	const dFlexDiv = document.createElement("div");
	dFlexDiv.classList.add("d-flex", "justify-content-center");
	const dFlexDiv1 = document.createElement("div");
	dFlexDiv1.classList.add("d-flex", "justify-content-center");

    if (screenshots.length > 1) {
        dFlexDiv.innerHTML = ` 
            <div class="card-screen">
                <img class="img-fluid img-card"
                    src=" ${screenshots[0]["image"]}" alt="${screenshots[0]["id"]}">
            </div>
            <div class="card-screen">
                <img class="img-fluid img-card"
                    src="${screenshots[1]["image"]}" alt="${screenshots[1]["id"]}">
            </div>`;
        
    }else{
        dFlexDiv.innerHTML = ` 
        <div class="card-screen">
            <img class="img-fluid img-card"
                src=" ${screenshots[0]["image"]}" alt="${screenshots[0]["id"]}">
        </div>
        <div class="card-screen">
            <img class="img-fluid img-card"
            src="${defaultScreenshot.image}" alt="${defaultScreenshot.id}">
        </div>`;
    
    }

	if (screenshots.length == 4) {
		dFlexDiv1.innerHTML = ` 
        <div class="card-screen">
            <img class="img-fluid img-card"
                src=" ${screenshots[2]["image"]}" alt="${screenshots[2]["id"]}">
        </div>
        <div class="card-screen">
            <img class="img-fluid img-card"
                src="${screenshots[3]["image"]}" alt="${screenshots[3]["id"]}">
        </div>`;
	} else if(screenshots.length == 3) {
		dFlexDiv1.innerHTML = ` 
            <div class="card-screen">
                <img class="img-fluid img-card"
                    src=" ${screenshots[2]["image"]}" alt="${screenshots[2]["id"]}">
            </div>
            <div class="card-screen">
                <img class="img-fluid img-card"
                    src="${defaultScreenshot.image}" alt="${defaultScreenshot.id}">
            </div>`;
	}

	carouselItem.appendChild(dFlexDiv);
	carouselItem1.appendChild(dFlexDiv1);

	carouselInner.appendChild(carouselItem);
	carouselInner.appendChild(carouselItem1);

	carouselContainer.appendChild(carouselInner);

	const prevButton = document.createElement("a");
	prevButton.classList.add("carousel-control-prev");
	prevButton.href = "#carouselExampleControls";
	prevButton.role = "button";
	prevButton.setAttribute("data-bs-slide", "prev");

	const prevIcon = document.createElement("span");
	prevIcon.classList.add("carousel-control-prev-icon");
	prevIcon.setAttribute("aria-hidden", "true");

	const prevText = document.createElement("span");
	prevText.classList.add("visually-hidden");
	prevText.textContent = "Anterior";

	prevButton.appendChild(prevIcon);
	prevButton.appendChild(prevText);

	const nextButton = document.createElement("a");
	nextButton.classList.add("carousel-control-next");
	nextButton.href = "#carouselExampleControls";
	nextButton.role = "button";
	nextButton.setAttribute("data-bs-slide", "next");

	const nextIcon = document.createElement("span");
	nextIcon.classList.add("carousel-control-next-icon");
	nextIcon.setAttribute("aria-hidden", "true");

	const nextText = document.createElement("span");
	nextText.classList.add("visually-hidden");
	nextText.textContent = "Siguiente";

	nextButton.appendChild(nextIcon);
	nextButton.appendChild(nextText);

	carouselContainer.appendChild(prevButton);
	carouselContainer.appendChild(nextButton);

	return carouselContainer;
};

const createAnotherDetailsContent = (
    developer,
    genre,
    minimum_system_requirements,
    publisher,
    release_date,
    platform
) =>{
    release_date = formattedReleaseDate(release_date);
    return  ` 
    <div class="accordion" id="accordionDetails">
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Minimum System Requirements
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                data-bs-parent="#accordionDetails">
                <div class="accordion-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-light">
                            <p>
                                <strong>OS: </strong> ${minimum_system_requirements.os}
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p>
                                <strong>Memory:</strong> ${minimum_system_requirements.memory}
                            </p>
                        </li>
                        <li class="list-group-item list-group-item-light">
                            <p>
                                <strong> Storage:</strong> ${minimum_system_requirements.storage}
                            </p>
                        </li>
                        <li class="list-group-item">
                            <p>
                                <strong>Processor:</strong> ${minimum_system_requirements.processor}
                        </li>
                        <li class="list-group-item list-group-item-light">
                            <p>
                                <strong>Graphics:</strong> ${minimum_system_requirements.graphics}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Additional Information
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionDetails">
                <div class="accordion-body">
                    <div class="container text-center">
                        <div class="row  mb-2 gap-3">
                            <div class="col bg-gray  p-3 br-2">
                                <strong>Developer:</strong> ${developer}
                            </div>
                            <div class="col bg-gray  p-3 br-2">
                                <strong>Publisher:</strong> ${publisher}
                            </div>
                        </div>
                        <div class="row gap-2">
                            <div class="col bg-secondary  p-3 br-2">
                                <strong>Release Date:</strong> ${release_date}
                            </div>
                            <div class="col bg-gray p-3 br-2">
                                <strong>Genre:</strong> ${genre}
                            </div>
                            <div class="col bg-secondary  p-3 br-2">
                                <strong>Platform:</strong> ${platform}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

const createDetails = (
	description,
	developer,
	game_url,
	genre,
	minimum_system_requirements,
	publisher,
	release_date,
	screenshots,
	platform,
	thumbnail,
	title
) => {
	const mainDescriptionDiv = document.createElement("div");
	mainDescriptionDiv.classList.add(
		"row",
		"flex-lg-row-reverse",
		"align-items-center",
		"justify-content-center",
		"py-3"
	);

	const firstDiv = document.createElement("div");
	firstDiv.classList.add("col-sm-8", "col-lg-6", "mb-3");

	const img = document.createElement("img");
	img.src = thumbnail;
	img.className = "d-block mx-lg-auto img-fluid mb-3";
	img.alt = title;
	img.width = "700";
	img.height = "500";
	img.loading = "lazy";
	firstDiv.appendChild(img);

	const carouselDiv = document.createElement("div");
	carouselDiv.className = "container mt-5";
	carouselDiv.appendChild(createCarousel(screenshots));
	firstDiv.appendChild(carouselDiv);

	const secondDiv = document.createElement("div");
	secondDiv.classList.add("col-lg-6");

	secondDiv.innerHTML = `  
    <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">${title}</h1>
    <div class="lead-text" id="description">
        ${description}
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <a href="${game_url}" target="_blank"
            class="btn btn-primary btn-lg px-4 w-100">play now!</a>
    </div>`;

	mainDescriptionDiv.appendChild(firstDiv);
	mainDescriptionDiv.appendChild(secondDiv);

	const anotherDetailsdiv = document.createElement("div");
	anotherDetailsdiv.classList.add("container", "my-3");
	anotherDetailsdiv.innerHTML = createAnotherDetailsContent(
		developer,
		genre,
		minimum_system_requirements,
		publisher,
		release_date,
        platform
	);

    const mainDiv = document.createElement('div');
    mainDiv.appendChild(mainDescriptionDiv);
    mainDiv.appendChild(anotherDetailsdiv);

    return mainDiv;
};

const showDetails = async (id, catalogItems, details) => {
	const data = await games.getGameDetails(id);
	const gameDetail = data.Result;
	const {
		description,
		developer,
		game_url,
		genre,
        minimum_system_requirements = {
            os: "Any modern web browser",
            processor: "N/A",
            memory: "2 GB RAM",
            graphics: "Integrated graphics",
            storage: "N/A"
        },
		publisher,
		release_date,
		screenshots,
		platform,
		thumbnail,
		title,
	} = gameDetail;
	if (genre == "Card Game") {
		catalog.carouselItems("card", catalogItems, true);
	} else if(genre == "Action RPG"){
        catalog.carouselItems("mmorpg", catalogItems, true);
    }
    else {
		catalog.carouselItems(genre, catalogItems, true);
	}
    document.title = title + ' Details';
    details.appendChild(createDetails(description,
        developer,
        game_url,
        genre,
        minimum_system_requirements,
        publisher,
        release_date,
        screenshots,
        platform,
        thumbnail,
        title));
};

export default {
	showDetails,
};
