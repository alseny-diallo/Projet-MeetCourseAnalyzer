console.log('background running');
chrome.runtime.onInstalled.addListener(function(){
    alert("Merci d'avoir  mis à jour l'extension");
    });

 chrome.webNavigation.onCompleted.addListener(function(){
    alert("Welcome to the Google Meet! ");
    },
    {
        url: [{urlMatches:"meet.google.com"}]  
    });

    /*chrome.browserAction.onClicked.addListener(buttonClicked());
    function buttonClicked(tab){
        //console.log("button clicked!!!");
        let msg ={
            txt: "Hello"
        }
        chrome.tabs.sendMessage(tab.id, msg);
    }
    */

