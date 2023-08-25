const apiKey = '47bc798df1msh660098dbc122703p11e06cjsn64cc64593f3b';
const host = 'https://mmo-games.p.rapidapi.com/games';


const api = async (props = {}) => {
	const {
		options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        },
		baseUrl = host,
		endPoint = '?category',
	} = props;
	const url = `${baseUrl}${endPoint}`;
	try {
		const response = await fetch(url, options);
		const data = await response.json();
		return await responseReader(data);
	} catch (error) {
		//console.log(error);
		return {
			status: 400,
			message: "Data error",
		};
	}
};

const responseReader = (data) => {
	if (data?.Status === undefined) {
		const result = {
			Result: data,
			Status: 200,
			Message: "ok",
		};
		//console.log(result);
		return result;
	}
	const result = {
		Status: 500,
		Message: "connection error.",
	};
	//console.log(result);
	return result;
};

export { api };
