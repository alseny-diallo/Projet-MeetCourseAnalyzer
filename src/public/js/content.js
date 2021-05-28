/*let url;
chrome.tabs.query(queryInfo, function (tabs) {
            url = tabs[0].url;
        });
*/
console.log('Bonjour');
let btn = document.getElementsByClassName('U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY M9Bg4d');
function Deconnect() {
    console.log('Bonjour');
    //alert('bonjour');
  }
//btn.addEventListener('click', Deconnect)
for (var i = 0 ; i < btn.length; i++) 
{
    btn[i].addEventListener('click' , Deconnect ) ; 
 }
setTimeout(Deconnect, 960000);
window.onbeforeunload = function() {
    // tes actions
};