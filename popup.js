function showCookiesForTab(tabs) {

//   //get the first tab object in the array
   let tab = tabs.pop();

//   //get all cookies in the domain
   var gettingAllCookies = browser.cookies.getAll({url: tab.url});
   gettingAllCookies.then((cookies) => {

//     //set the header of the panel
     var activeTabUrl = document.getElementById('header-title');
     var text = document.createTextNode(tab.title);
     var cookieList = document.getElementById('cookie-list');
     activeTabUrl.appendChild(text);

     if (cookies.length > 0) {
//       //add an <li> item with the name and value of the cookie to the list
       for (let cookie of cookies) {
         let li = document.createElement("li");
         let content = document.createTextNode(cookie.name + ": "+ cookie.value);
         li.appendChild(content);
         cookieList.appendChild(li);
       }
       var urls = Array.prototype.map.call(
         document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
         function(e) { // Loop over and return their href/src
             console.log(e.src)
             return e.href || e.src; 
         });

     } else {
       let p = document.createElement("p");
       let content = document.createTextNode("No cookies in this tab.");
       let parent = cookieList.parentNode;

       p.appendChild(content);
       parent.appendChild(p);
     }
     browser.tabs.sendMessage(tabs[0].id, {method: "getRequests"}).then(response => {
       let p = document.createElement("p");
       let content = document.createTextNode("fdsçkjhdsfkuhdfujykdfsyjdfsjghfdsgyjdsfgyj");
       let parent = cookieList.parentNode;
  
       p.appendChild(content);
       parent.appendChild(p);});
   });

 }



async function showLocalStorage(tabs){
    
    let tab = tabs.pop();

     var itemList = document.getElementById('localstorage');


     const itens = await browser.tabs.sendMessage(
      tab.id,
      {method: "localstorage"}
    )

    if (itens.data.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let item of itens.data) {
        if (item != undefined) {
          let li = document.createElement("li");
          let content = document.createTextNode(item);
          li.appendChild(content);
          itemList.appendChild(li);}
      }
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No storage connections in this tab.");
      let parent = itemList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }

}

async function showSessionStorage(tabs){
    
  let tab = tabs.pop();

   var itemList = document.getElementById('sessionstorage');


   const itens = await browser.tabs.sendMessage(
    tab.id,
    {method: "sessionstorage"}
  )

  if (itens.data.length > 0) {
    //add an <li> item with the name and value of the cookie to the list
    for (let item of itens.data) {
      if (item != undefined) {
        let li = document.createElement("li");
        let content = document.createTextNode(item);
        li.appendChild(content);
        itemList.appendChild(li);}
    }
  } else {
    let p = document.createElement("p");
    let content = document.createTextNode("No storage connections in this tab.");
    let parent = itemList.parentNode;

    p.appendChild(content);
    parent.appendChild(p);
  }

}


async function showExternalConnections(tabs){
    
  let tab = tabs.pop();

   var itemList = document.getElementById('3rd');


   const itens = await browser.tabs.sendMessage(
    tab.id,
    {method: "external"}
  )

  if (itens.data.length > 0) {
    //add an <li> item with the name and value of the cookie to the list
    for (let item of itens.data) {
      if (item != "") {
        let li = document.createElement("li");
        let content = document.createTextNode(item);
        li.appendChild(content);
        itemList.appendChild(li);}
    }
  } else {
    let p = document.createElement("p");
    let content = document.createTextNode("No storage in this tab.");
    let parent = itemList.parentNode;

    p.appendChild(content);
    parent.appendChild(p);
  }

}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showCookiesForTab) 
getActiveTab().then(showExternalConnections)
getActiveTab().then(showLocalStorage) 
getActiveTab().then(showSessionStorage) 