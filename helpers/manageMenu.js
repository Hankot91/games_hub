const manageMenu = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    const adminMenuItem = document.getElementById("admin");
    const loginMenuItem = document.getElementById("login");
    const logOffMenuItem = document.getElementById("logOff");

    if (isLoggedIn === "true") {
        adminMenuItem.style.display = "block";
        loginMenuItem.style.display = "none";
        logOffMenuItem.style.display = "block";
    } else {
        adminMenuItem.style.display = "none";
        loginMenuItem.style.display = "block";
        logOffMenuItem.style.display = "none";
    }

    logOffMenuItem.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        manageMenu();
    });
};


export {manageMenu};