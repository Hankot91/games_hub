const searchForm = () => {
    const search = document.querySelector('#searchForm');

    search.addEventListener('submit', (event) => {
        event.preventDefault();
    });
};

export {searchForm}