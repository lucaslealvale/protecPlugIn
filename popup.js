/*  A função showCookiesForTab foi extraída do repositório oficial MDN Web Docs
https://github.com/mdn/webextensions-examples/ 
*/
// function getThirdPartyRequests(tabs) {
  
//   var urls = Array.prototype.map.call(
//   document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
//   function(e) { // Loop over and return their href/src
//       console.log(e.src)
//       return e.href || e.src; 
//   });
//   let p = document.createElement("p");
//   let content = document.createTextNode(urls);
//   let parent = cookieList.parentNode;
  
//   p.appendChild(content);
//   parent.appendChild(p);

// }


// function getThirdPartyRequests(tabs){
//   browser.tabs.sendMessage(tabs[0].id, {method: "getRequests"}, function(response) {
//     if(response.method == "loadRequests"){
//       let p = document.createElement("p");
//       let content = document.createTextNode("No cookies in this tab.");
//       let parent = cookieList.parentNode;

//       p.appendChild(content);
//       parent.appendChild(p);
//       //alert(response.text); 
//     }
//   })
//   }


// function showCookiesForTab(tabs) {



//   //get the first tab object in the array
//   let tab = tabs.pop();

//   //get all cookies in the domain
//   var gettingAllCookies = browser.cookies.getAll({url: tab.url});
//   gettingAllCookies.then((cookies) => {

//     //set the header of the panel
//     var activeTabUrl = document.getElementById('header-title');
//     var text = document.createTextNode("Cookies at: "+tab.title);
//     var cookieList = document.getElementById('cookie-list');
//     activeTabUrl.appendChild(text);

//     if (cookies.length > 0) {
//       //add an <li> item with the name and value of the cookie to the list
//       for (let cookie of cookies) {
//         let li = document.createElement("li");
//         let content = document.createTextNode(cookie.name + ": "+ cookie.value);
//         li.appendChild(content);
//         cookieList.appendChild(li);
//       }
//       var urls = Array.prototype.map.call(
//         document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
//         function(e) { // Loop over and return their href/src
//             console.log(e.src)
//             return e.href || e.src; 
//         });

//     } else {
//       let p = document.createElement("p");
//       let content = document.createTextNode("No cookies in this tab.");
//       let parent = cookieList.parentNode;

//       p.appendChild(content);
//       parent.appendChild(p);
//     }
//     browser.tabs.sendMessage(tabs[0].id, {method: "getRequests"}).then(response => {
//       let p = document.createElement("p");
//       let content = document.createTextNode("fdsçkjhdsfkuhdfujykdfsyjdfsjghfdsgyjdsfgyj");
//       let parent = cookieList.parentNode;
  
//       p.appendChild(content);
//       parent.appendChild(p);});
//   });

// }



function test(tabs){
    
    let tab = tabs.pop();

     var cookieList = document.getElementById('cookie-list');
     let p = document.createElement("p");
     let parent = cookieList.parentNode;


     let content = document.createTextNode("aaaaaa");

     browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response.response);
      let content2 = document.createTextNode("jhbsfdhjfbdsbhjfdshjbfds")
      p.append(Child(content2))
    })
     p.appendChild(content);
     parent.appendChild(p);

}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(test) 
//getActiveTab().then(getThirdPartyRequests)
