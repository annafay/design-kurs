// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
    stickyFunction()
    // scrollFunction()
};

var navbar = document.getElementsByClassName("outer-wrap-header");
var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

console.log("navbar loaded");
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("outer-wrap-header").style.padding = "0px 0px 0px 0px"; //top right bottom left
        document.getElementsByClassName("site-logo").width = "101";
        document.getElementsByClassName("site-logo").height = "55";
        document.getElementsByClassName("site-logo-link").style.marginLeft = "30px"; 
    } else {
        document.getElementsByClassName("outer-wrap-header").padding = "0px 0px 0px 0px";
        document.getElementsByClassName("site-logo").width = "203"; // Orginal 203
        document.getElementsByClassName("site-logo").height = "110"; // Orginal 203
        document.getElementsByClassName("site-logo-link").style.marginLeft = "30px"; 
    }
}
