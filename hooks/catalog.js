import games from "../services/games.js";
import { shuffleArray } from "../helpers/shufleeArray.js";

const createItem = (
    game_url,
    id,
    platform,
    short_description,
    thumbnail,
    title,
    flag = false
) => {
    const cardCatalog = document.createElement('div');
    cardCatalog.classList.add('card-catalog');

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = title;
    figure.appendChild(img);
    cardCatalog.appendChild(figure);

    const content = document.createElement('div');
    content.classList.add('card-catalog__content');

    const titleElement = document.createElement('p');
    titleElement.classList.add('card-catalog__title');
    titleElement.textContent = title;
    content.appendChild(titleElement);

    const description = document.createElement('p');
    description.classList.add('card-catalog__description');
    description.textContent = short_description;
    content.appendChild(description);

    const info = document.createElement('div');
    info.classList.add('card-catalog__info');

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    btnGroup.setAttribute('role', 'group');
    btnGroup.setAttribute('aria-label', 'Basic mixed styles example');

    const playButton = document.createElement('a');
    playButton.href = game_url;
    playButton.target = '_blank';
    playButton.classList.add('btn', 'btn-success');
    playButton.textContent = 'play';
    btnGroup.appendChild(playButton);

    const infoButton = document.createElement('a');
    if(flag == false){
        infoButton.href = `./screens/game_detail.html?id=${id}`;
    }else{
        infoButton.href = `./game_detail.html?id=${id}`;
    }
    infoButton.classList.add('btn', 'btn-info', 'text-white');
    infoButton.id = id;
    infoButton.textContent = 'info';
    btnGroup.appendChild(infoButton);

    info.appendChild(btnGroup);

    const lead = document.createElement('p');
    lead.classList.add('lead');
    if (platform.includes('PC (Windows)')) {
        const windowsIcon = document.createElement('i');
        windowsIcon.classList.add('bi', 'bi-windows');
        lead.appendChild(windowsIcon);
    }
    if (platform.includes('Web Browser')) {
        const browserIcon = document.createElement('i');
        browserIcon.classList.add('bi', 'bi-browser-chrome');
        lead.appendChild(browserIcon);
    }

    info.appendChild(lead);

    content.appendChild(info);
    cardCatalog.appendChild(content);

    return cardCatalog;
};

const carouselItems = async (id1, carouselItems, flag, viewAlls = false) => {
    try {
        const category = await games.getGamesByCategories(id1);
        const shuffledCategory = shuffleArray(category.Result); 
        let randomItems = shuffledCategory; 
        if (viewAlls == false){
            randomItems = shuffledCategory.slice(0, 10); 
        }
        
        randomItems.forEach(
            ({ game_url, id, platform, short_description, thumbnail, title }) => {
                carouselItems.appendChild(
                    createItem(
                        game_url,
                        id,
                        platform,
                        short_description,
                        thumbnail,
                        title,
                        flag
                    )
                );
            }
        );
        
    } catch (error) {
        console.log(error);
    }
};

export default {
    carouselItems,
};
