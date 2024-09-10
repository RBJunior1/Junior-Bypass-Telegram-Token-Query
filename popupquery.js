document.getElementById("query_id").addEventListener("click", () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, _0x1c69cc => {
      chrome.scripting.executeScript({
        target: {
          tabId: _0x1c69cc[0].id
        },
        files: ["getquery.js"]
      });
    });
  });