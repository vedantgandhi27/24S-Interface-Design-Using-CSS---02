header_footer();//Calls the function

// Gets the code from header and foother html
function header_footer()
{
    $("header").load("header.html");
    $("footer").load("footer.html");
}


// Method for hamburger menu
function toggleMenu(){
    console.log("working");
    const menu = document.querySelector("div.ham-menu");
    menu.classList.toggle("show_class");
    document.body.classList.toggle("no-scroll");
}    

// Code for product details page for showing different view of the product images
let var1 = document.querySelectorAll(".contact_topic")[0];
let var2 = document.querySelectorAll(".contact_topic")[1];
let var3 = document.querySelectorAll(".contact_topic")[2];


//Grabs the Ipad images and enlarges it
let picture = document.querySelectorAll(".preview_angles>img");
picture.forEach(pic => {
    pic.addEventListener("click",function(){
        let mnimg = document.querySelector(".ipad-assests>img");
        // shows the image
        mnimg.setAttribute("src",pic.getAttribute("src"));
    });    
});     

