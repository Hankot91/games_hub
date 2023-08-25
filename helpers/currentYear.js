const copyrightYear =(year) =>{
    if (year) {
        const currentYear = new Date().getFullYear();
        year.textContent = currentYear;
    }
};

export {copyrightYear};