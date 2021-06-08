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

console.log(Object.entries(sessionStorage))




// // content.js
// browser.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if(request.method == "getRequests"){
//             console.log("recebi a request")
//             document.body.innerText = "aaaa";
//             return Promise.resolve({response: "Hi from content script"});
//             //sendResponse({text: "Aaaaaa", method: "loadRequests"}); //same as innerText
//             //console.log({text: "Aaaaaa", method: "loadRequests"});
//         }
//     }
// );

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start") {
            start();
        }
        sendResponse({response: "answer uwu"});
        console.log(`res = ${}`);
        return true;
    }
);

function start(){
    alert("started");
}

/*function handleResponse(request, sender , sendResponse){
    console.log("Message from the popup script:")
    console.log(request.greeting)
    sendResponse({data:"kill myself"})
}


browser.runtime.onMessage.addListener(handleResponse)*/
