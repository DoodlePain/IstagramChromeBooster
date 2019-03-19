console.log("Running");
chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
    let msg = {
        txt: 'hello'
    }
    console.log(msg.txt);
    chrome.tabs.sendMessage(tab.id, msg)
}