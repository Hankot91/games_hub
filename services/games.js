import { api } from "./api.js";

const getGamesByCategories = async (query = 'mmorpg') => {
    query = `?category=${query}`;
    return await api({endPoint: query});
} 

const getGameDetails = async (query = '452') => {
    const url = 'https://mmo-games.p.rapidapi.com/game';
    query = `?id=${query}`;
    return await api({baseUrl: url, endPoint: query});
}

const getGiveaways = async () => {
    const url = 'https://mmo-games.p.rapidapi.com/giveaways';
    return await api({baseUrl: url, endPoint: ''});
}

const getLatestNews = async () => {
    const url = 'https://mmo-games.p.rapidapi.com/latestnews';
    return await api({baseUrl: url, endPoint: ''});
}

export default{
    getGamesByCategories,
    getGameDetails,
    getGiveaways,
    getLatestNews
}