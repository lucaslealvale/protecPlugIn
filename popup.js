/*  A função showCookiesForTab foi extraída do repositório oficial MDN Web Docs
https://github.com/mdn/webextensions-examples/ 
*/
var urls = Array.prototype.map.call(
  document.querySelectorAll("link, img, script, iframe"), // Elements which request external resources
  function(e) { // Loop over and return their href/src
      console.log(e.src)
      return e.href || e.src; 
  }
);


function getThirdPartyRequests(){
  console.log("IUhfsdkuiygdfbjkuyhfdgbvjuyhkf")
  console.log(window.location.href)
  document.addEventListener('DOMContentLoaded', function() {
    var checkButton = document.getElementById('check');
    checkButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {method: "getRequests"}, function(response) {
            if(response.method == "changePage"){
              alert(response.text);
            }
          });
        });
    }, false);
  }, false);
}


function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    //set the header of the panel
    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Cookies at: "+tab.title);
    var cookieList = document.getElementById('cookie-list');
    activeTabUrl.appendChild(text);

    if (cookies.length > 0) {
      //add an <li> item with the name and value of the cookie to the list
      for (let cookie of cookies) {
        let li = document.createElement("li");
        let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        li.appendChild(content);
        cookieList.appendChild(li);
      }
    } else {
      let p = document.createElement("p");
      let content = document.createTextNode("No cookies in this tab.");
      let parent = cookieList.parentNode;

      p.appendChild(content);
      parent.appendChild(p);
    }
  });
}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}
getActiveTab().then(showCookiesForTab);
