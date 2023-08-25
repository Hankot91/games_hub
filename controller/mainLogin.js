import { copyrightYear } from "../helpers/currentYear.js";
import { manageMenu } from "../helpers/manageMenu.js";
import { searchForm } from "../helpers/searchForm.js";

searchForm();

const year = document.querySelector('#copyright-year');
copyrightYear(year);

manageMenu();

const login = document.getElementById("loginForm")
login.addEventListener("submit", (event) =>{

    const userField = document.getElementById("user");
    const passField = document.getElementById("pass");
    const credentialsField = document.getElementById("credentials");

    event.preventDefault();

    userField.classList.remove("is-invalid");
    passField.classList.remove("is-invalid");

    if (!userField.value.trim() && passField.value.trim()) {
        userField.classList.add("is-invalid");
    }

    if (!passField.value.trim() && userField.value.trim()) {
        passField.classList.add("is-invalid");
    }

    if (userField.value.trim() !== 'admin' && !passField.value.trim() !== 'admin') {
        credentialsField.style.display = 'block';
    } else{
        credentialsField.style.display = 'none';
        localStorage.setItem("isLoggedIn", "true");
        manageMenu();
        window.location.href = "./manage.html";
    }
});
