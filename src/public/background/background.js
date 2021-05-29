<<<<<<< HEAD
//empecher le reload pendant utilisation
chrome.runtime.onUpdateAvailable.addListener(function (details) {
  chrome.runtime.reload();
});
=======
console.log('background running');
chrome.runtime.onInstalled.addListener(function(){
    alert("Merci d'avoir  mis à jour l'extension");
    });
<<<<<<< HEAD
   
//window.onbeforeunload
/*    chrome.runtime.onbeforeunload = function() {
        // tes actions
        alert("Votre fenêtre cést fermé");
    };
*/
 /*chrome.webNavigation.onCompleted.addListener(function(){
    alert("Welcome to the Google Meet! ");
    },
    {
        url: [{urlMatches:"meet.google.com"}]  
    });
    */
/*
chrome.tabs.onActivated.addListener(
    tab=>{
        chrome.tabs.get(tab.tabId, current_tab_info =>{
            if(/^https:\/\/meet\.google/.test(current_tab_info.url)){
                chrome.tabs.executeScript(null, {file:'src/public/js/content.js'}, ()=>console.log(i, injection));
            }
        });
    });
=======
>>>>>>> a8af0fea9f6a98aa5273c572e1934767ef376242

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

<<<<<<< HEAD

      //backgroundPage.console.log(sessionStorage.getItem("content"));
    });
  }
});
=======
        port.onDisconnect.addListener(function() {
            let contentPage = document.body.innerHTML
            localStorage.setItem('content',contentPage)
            backgroundPage.console.log(localStorage.getItem('content'))
        })
    }
})
>>>>>>> 4fa8b1c1a8245ef0f66ac72f680c6774fcf33283

*/
/*let url;
chrome.tabs.query(queryInfo, function (tabs) {
            url = tabs[0].url;
        });
*/
>>>>>>> a8af0fea9f6a98aa5273c572e1934767ef376242
