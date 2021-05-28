//empecher le reload pendant utilisation
chrome.runtime.onUpdateAvailable.addListener(function (details) {
  chrome.runtime.reload();
});

let backgroundPage = chrome.extension.getBackgroundPage();

chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === "popup") {
    port.onDisconnect.addListener(function () {
      let contentPage = document.body.innerHTML;
      chrome.storage.sync.setItem({
        content: contentPage
      });

      //chrome.runtime.sendMessage()
      alert(contentPage);


      //backgroundPage.console.log(sessionStorage.getItem("content"));
    });
  }
});