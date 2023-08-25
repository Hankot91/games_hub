import { loadScreenshots, loadThumbnails } from "../helpers/loadImages.js";

const createGame = async (form) => {
	form.addEventListener("submit", async(event) => {
		event.preventDefault();

		const gameData = {
			description: form.querySelector('[name="description"]').value,
			developer: form.querySelector('[name="developer"]').value,
			game_url: form.querySelector('[name="game"]').value,
			genre: form.querySelector('[name="genre"]').value,
			id: uuid.v4(), 
			minimum_system_requirements: {
				graphics: form.querySelector('[name="graphics"]').value || "Integrated graphics",
				memory: form.querySelector('[name="memory"]').value || "2 GB RAM",
				os: form.querySelector('[name="os"]').value || "Any modern web browser",
				processor: form.querySelector('[name="processor"]').value || "N/A",
				storage: form.querySelector('[name="storage"]').value || "N/A",
			},
			platform: form.querySelector('[name="platform"]').value,
			publisher: form.querySelector('[name="publisher"]').value,
			release_date: form.querySelector('[name="release"]').value,
			screenshots: await loadScreenshots(form),
			short_description: form.querySelector('[name="short"]')
				.value,
			thumbnail: await loadThumbnails(form),
			title: form.querySelector('[name="title"]').value,
		};
		
		console.log(gameData)
		
		form.reset();
	});
};

export { createGame };
