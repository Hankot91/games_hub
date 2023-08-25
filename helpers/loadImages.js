const loadImage = (file) =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(console.log("Error reading"));
	});

const loadScreenshots = async (form) => {
	const screenshotsInput = form.querySelector('[name="screenshots"]');
	const files = [];
	const inputFiles = screenshotsInput.files;
	Array.from(inputFiles).forEach((file) => {
		files.push(file);
	});

	const screenshots = await Promise.all(
		files.map(async (file) => ({
			id: uuid.v4(),
			image: await loadImage(file)
		}))
	);

	return screenshots;
};

const loadThumbnails = async (form) => {
	const thumbnailInput = form.querySelector('[name="thumbnail"]');
	const thumbnailFile = thumbnailInput.files[0];

	const thumbnail = await loadImage(thumbnailFile);
	return thumbnail; 
};



export { loadScreenshots, loadThumbnails };
