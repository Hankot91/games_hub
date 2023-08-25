const scrollToTopBtn = () =>{
    window.onscroll = function () {
        scrollFunction();
    };
    
    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            document.getElementById("scrollToTopBtn").classList.add("show");
        } else {
            document.getElementById("scrollToTopBtn").classList.remove("show");
        }
    }
    
    document
        .getElementById("scrollToTopBtn")
        .addEventListener("click", function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    
}

export {scrollToTopBtn};