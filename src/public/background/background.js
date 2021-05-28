console.log('background running');
chrome.runtime.onInstalled.addListener(function(){
    alert("Merci d'avoir  mis à jour l'extension");
    });
   
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

*/
/*let url;
chrome.tabs.query(queryInfo, function (tabs) {
            url = tabs[0].url;
        });
*/