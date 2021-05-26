console.log('background running');
chrome.runtime.onInstalled.addListener(function(){
    alert("Merci d'avoir  mis à jour l'extension");
    });

let backgroundPage = chrome.extension.getBackgroundPage();

chrome.runtime.onConnect.addListener(function(port) {

    if (port.name === "popup") {

        port.onDisconnect.addListener(function() {
            let contentPage = document.body.innerHTML
            localStorage.setItem('content',contentPage)
            backgroundPage.console.log(localStorage.getItem('content'))
        })
    }
})

