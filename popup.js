function popup() {
  let p = document.createElement("p");
  p.textContent = "This paragraph was added by a page script.";
  p.setAttribute("id", "page-script-para");

  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, {"message": "start"}).then(response => {

  });
 });
 document.body.appendChild(p);

}

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("button1").addEventListener("click", popup);
});