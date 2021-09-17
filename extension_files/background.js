chrome.action.onClicked.addListener(function(tab) {
    if (tab.url.includes("linkedin.com/in")){
        chrome.scripting.executeScript({
            target:{tabId:tab.id},
            files:['testScript.js']
        })
    }
    else{
        console.log("Not a LinkedIn user profile page")
        return
    }

 });