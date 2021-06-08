function popup() {
  let p = document.createElement("p");
  p.textContent = "This paragraph was added by a page script.";
  p.setAttribute("id", "page-script-para");

  browser.tabs.query({currentWindow: true, active: true}, function (tabs){
  var activeTab = tabs[0];
  const res = browser.tabs.sendMessage(activeTab.id, {"message": "start"});
  if (res){
    p.textContent = res;
    document.body.appendChild(p);
  }
});
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button1").addEventListener("click", popup);
});