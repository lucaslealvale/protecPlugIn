/* Detectar as conexões a domínios de terceira parte em uma navegação web; */
var urls = Array.prototype.map.call(
    document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
    function(e) { // Loop over and return their href/src
        return e.href || e.src; 
    }
);


/* Detectar o armazenamento de dados (storage local – html5) no dispositivo
do usuário */
console.log(Object.entries(localStorage))

console.log(Object.entries(sessionStorage))


browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method === "external"){
        console.log(urls);
        sendResponse({data: urls});}
    else if (request.method === "localstorage"){
        sendResponse({data: Object.entries(localStorage)})
    }
    else if (request.method === "sessionstorage"){
        sendResponse({data: Object.entries(sessionStorage)})
    }
    else 
        sendResponse({data: undefined})
    return true
  });
