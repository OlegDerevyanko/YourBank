const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('active');
    });
}