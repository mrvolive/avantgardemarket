document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("dropdown-button");
    const menu = document.querySelector(".dropdown-menu");

    button.addEventListener("click", function() {
        this.classList.toggle("active");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
            // Vérifiez si le menu dépasse la largeur de l'écran
            const menuRight = button.getBoundingClientRect().right + menu.offsetWidth;
            const windowWidth = window.innerWidth;
            if (menuRight > windowWidth) {
                // Si le menu dépasse, ajustez sa position
                menu.style.right = "0";
            } else {
                menu.style.right = "auto";
            }
        }
    });

    // Fermer le menu si l'utilisateur clique en dehors du menu
    document.addEventListener("click", function(event) {
        if (event.target !== button && event.target !== menu) {
            menu.style.display = "none";
        }
    });
});