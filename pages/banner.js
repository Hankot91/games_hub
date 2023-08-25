import games from "../services/games.js";

const createButtons = async (divIndicators) => {
	try {
		const data = await games.getGiveaways();
		const cant = data.Result.length;
		if (!data || !data.Result) {
			throw new Error();
		}
		for (let i = 0; i < cant; i++) {
			const button = document.createElement("button");
			button.type = "button";
			button.dataset.bsTarget = "#carouselExampleInterval";
			button.dataset.bsSlideTo = i;
			button.setAttribute("aria-label", `Slide ${i + 1}`);

			if (i === 0) {
				button.classList.add("active");
				button.setAttribute("aria-current", "true");
			}

			divIndicators.appendChild(button);
		}
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

const giveawaysItem = (
	giveaway_url,
	keys_left,
	main_image,
	short_description,
	title,
	index
) => {
	const carouselItem = document.createElement("div");
	carouselItem.classList.add("carousel-item");
	if (index == 0) {
		carouselItem.classList.add("active");
	}

	const imageLink = document.createElement("a");
	imageLink.href = giveaway_url;
	imageLink.target = "_blank";

	const image = document.createElement("img");
	image.src = main_image;
	image.alt = title;
	image.classList.add("d-block");
	image.classList.add("w-100");
	imageLink.appendChild(image);

	const carouselCaption = document.createElement("div");
	carouselCaption.classList.add("carousel-caption");
	carouselCaption.classList.add("d-md-block");
	carouselCaption.classList.add("caption-styles");

	const link = document.createElement("a");
	link.classList.add("btn");
	link.href = giveaway_url;
	link.target = "_blank";

	const h5 = document.createElement("h5");
	h5.textContent = title;
	h5.classList.add("h5");

	link.appendChild(h5);
	carouselCaption.appendChild(link);

	const description = document.createElement("p");
	description.textContent = short_description;
	description.classList.add("description");
	carouselCaption.appendChild(description);

	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	const progressBarWrapper = document.createElement("div");
	progressBarWrapper.classList.add("progress");
	progressBarWrapper.classList.add("mt-2");
	progressBarWrapper.setAttribute("role", "progressbar");
	progressBarWrapper.setAttribute("aria-label", "Basic example");
	progressBarWrapper.setAttribute("aria-valuenow", keys_left);
	progressBarWrapper.setAttribute("aria-valuemin", "0");
	progressBarWrapper.setAttribute("aria-valuemax", "100");

	const progressBar = document.createElement("div");
	progressBar.classList.add("progress-bar");
	progressBar.style.width = keys_left;
	progressBar.textContent = "Key left: " + keys_left;
	progressBarWrapper.appendChild(progressBar);

	wrapper.appendChild(progressBarWrapper);
	carouselCaption.appendChild(wrapper);

	carouselItem.appendChild(imageLink);
	carouselItem.appendChild(carouselCaption);

	return carouselItem;
};

const giveawaysList = async (divCarousel) => {
	try {
		const data = await games.getGiveaways();
		let index = 0;
		data.Result.forEach(
			({
				giveaway_url,
				keys_left,
				main_image,
				short_description,
				title,
			}) => {
				divCarousel.appendChild(
					giveawaysItem(
						giveaway_url,
						keys_left,
						main_image,
						short_description,
						title,
						index
					)
				);
				index++;
			}
		);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

const newsItems = (article_url, thumbnail, short_description, title) => {
	// Crear el elemento de la tarjeta
	const card = document.createElement("div");
	card.classList.add("card");
	card.classList.add("mb-3");
	card.style.maxWidth = "540px";

	// Crear la fila dentro de la tarjeta
	const cardRow = document.createElement("div");
	cardRow.classList.add("row");
	cardRow.classList.add("g-0");

	// Crear la columna de la imagen
	const imageCol = document.createElement("div");
	imageCol.classList.add("col-md-4");

	// Crear la imagen
	const image = document.createElement("img");
	image.src = thumbnail;
	image.classList.add("img-fluid");
	image.classList.add("rounded-start");
	image.alt = title;
	imageCol.appendChild(image);

	// Crear la columna de contenido
	const contentCol = document.createElement("div");
	contentCol.classList.add("col-md-8");

	// Crear el cuerpo de la tarjeta
	const cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	// Crear el título de la tarjeta
	const cardTitle = document.createElement("h5");
	cardTitle.classList.add("card-title");
	cardTitle.textContent = title; // Añadir el título aquí
	cardBody.appendChild(cardTitle);

	// Crear el texto de la tarjeta
	const text = document.createElement("p");
	text.classList.add("card-text");
	text.textContent = short_description;
	cardBody.appendChild(text);

	// Crear el enlace
	const link = document.createElement("a");
	link.href = article_url;
	link.classList.add("btn");
	const linkTextParagraph = document.createElement("p");
	linkTextParagraph.classList.add("card-text");
	linkTextParagraph.classList.add("text-body-secondary");
	const linkTextSmall = document.createElement("small");
	linkTextSmall.textContent = "view article";
	linkTextParagraph.appendChild(linkTextSmall);
	link.appendChild(linkTextParagraph);
	cardBody.appendChild(link);

	// Agregar el cuerpo a la columna de contenido
	contentCol.appendChild(cardBody);

	// Agregar las columnas a la fila
	cardRow.appendChild(imageCol);
	cardRow.appendChild(contentCol);

	// Agregar la fila a la tarjeta
	card.appendChild(cardRow);

	return card;
};

const newsList = async (divNews) => {
	try {
		const data = await games.getLatestNews();
		data.Result.forEach(
			({ article_url, thumbnail, short_description, title }) => {
				divNews.appendChild(
					newsItems(article_url, thumbnail, short_description, title)
				);
			}
		);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

export default {
	createButtons,
	giveawaysList,
	newsList,
};
