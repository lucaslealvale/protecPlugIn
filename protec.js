document.body.style.border = "5px solid pink";


/*document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("  ")) {
        console.log("uwu");
        alert(window.location.hostname + window.location.pathname);
        return;
    }
})*/

/* Detectar as conexões a domínios de terceira parte em uma navegação web; */
var urls = Array.prototype.map.call(
    document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
    function(e) { // Loop over and return their href/src
        console.log(e.src)
        return e.href || e.src; 
    }
);


/* Detectar o armazenamento de dados (storage local – html5) no dispositivo
do usuário */
console.log(Object.entries(localStorage))

// content.js
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getRequests"){
            document.body.innerText = "aaaa";
            document.getElementById("one").innerHTML = "uwu";
            sendResponse({text: document.body.innerText, method: "changePage"}); //same as innerText
        }
    }
);