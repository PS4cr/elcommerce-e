const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

document.addEventListener("click", (event) => {
    const isClickInside = menu.contains(event.target) || menuButton.contains(event.target);
    if (!isClickInside) {
        menu.style.display = "none";
    }
});