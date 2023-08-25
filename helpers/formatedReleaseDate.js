const formattedReleaseDate = (releaseDate) => {
    const rawReleaseDate = releaseDate;
    const date = new Date(rawReleaseDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedReleaseDate = date.toLocaleDateString('en-US', options);
    
    return formattedReleaseDate;
    
};

export {formattedReleaseDate};