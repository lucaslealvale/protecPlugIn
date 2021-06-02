document.body.style.border = "5px solid pink";


document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("  ")) {
        console.log("uwu");
        alert(window.location.hostname + window.location.pathname);
        return;
    }
})

var urls = Array.prototype.map.call(
    document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
    function(e) { // Loop over and return their href/src
        console.log(e.src)
        return e.href || e.src; 
    }
);
