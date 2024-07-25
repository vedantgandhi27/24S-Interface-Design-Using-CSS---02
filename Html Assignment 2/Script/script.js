// Method for hamburger menu
function toggleMenu(){
    console.log("working");
    const menu = document.querySelector("div.ham-menu");
    menu.classList.toggle("show_class");
    document.body.classList.toggle("no-scroll");
}
