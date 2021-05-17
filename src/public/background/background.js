
/*extension comportement*/
console.log('background running');

chrome.runtime.onInstalled.addListener( () => {
    alert("Merci d'avoir  mis à jour l'extension");
});
