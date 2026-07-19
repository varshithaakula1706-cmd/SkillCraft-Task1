

window.addEventListener("scroll", function () {

    const navbar = document.getElementById("navbar");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } 
        else {
            navbar.classList.remove("scrolled");
        }
    }

});



const button = document.getElementById("startBtn");

if (button) {
    button.addEventListener("click", function () {
        alert("Welcome to SkillCraft Technology!");
    });
}



const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetSection = document.querySelector(
            this.getAttribute("href")
        );

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});