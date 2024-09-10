function handleButtonClick() {
    chrome.runtime.sendMessage({
      action: "getTokenFromLocalStorage"
    }, _0x46ec6d => {
      const _0x546d4d = document.getElementById("tokenDisplay");
      if (_0x46ec6d) {
        let _0x4d34a3 = "";
        if (_0x46ec6d.accessToken) {
          _0x4d34a3 += "<span style=\"color: red; font-size: 15px;\">accessToken:</span> <span style=\"color: green;\">" + _0x46ec6d.accessToken + "</span><br>";
        }
        for (const [_0x479d70, _0x4f9351] of Object.entries(_0x46ec6d)) {
          if (_0x479d70 !== "accessToken") {
            _0x4d34a3 += "<span style=\"color: red; font-size: 15px;\">" + _0x479d70 + ":</span> <span style=\"color: green;\">" + _0x4f9351 + "</span><br>";
          }
        }
        _0x546d4d.innerHTML = _0x4d34a3 || "Token data not found";
      } else {
        _0x546d4d.innerHTML = "Token data not found";
      }
    });
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, _0xace8b9 => {
      chrome.runtime.sendMessage({
        action: "getRecordedRequests"
      }, _0x2fda65 => {
        const _0x2e08a7 = document.getElementById("requestList");
        if (_0x2fda65 && _0x2fda65.length) {
          let _0x143034 = "";
          _0x2fda65.forEach(_0x50325a => {
            _0x143034 += "<span style=\"color: red; font-size: 15px;\">URL:</span> <span style=\"color: blue;\">" + _0x50325a.topLevelUrl + "</span> - <span style=\"color: red; font-size: 15px;\">Auth:</span> <span style=\"color: green;\">" + _0x50325a.authorization + "</span><br>";
          });
          _0x2e08a7.innerHTML = _0x143034 || "Token data not found";
        } else {
          _0x2e08a7.innerHTML = "Token data not found";
        }
      });
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getAuth").addEventListener("click", handleButtonClick);
  });