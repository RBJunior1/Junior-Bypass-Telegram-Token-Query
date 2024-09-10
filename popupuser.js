document.getElementById("user=").addEventListener("click", () => {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, _0x3134fe => {
      chrome.scripting.executeScript({
        target: {
          tabId: _0x3134fe[0].id
        },
        files: ["getuser.js"]
      });
    });
  });