document.getElementById('getiframe').addEventListener('click', () => {
    chrome.tabs.query({
      'active': true,
      'currentWindow': true
    }, _0x57f47c => {
      chrome.scripting.executeScript({
        'target': {
          'tabId': _0x57f47c[0x0].id
        },
        'func': getIframeContent
      }, _0x1f1362 => {
        if (chrome.runtime.lastError) {
          console.error("Error executing script:", chrome.runtime.lastError);
        } else {
          console.log("The script was executed successfully.");
        }
      });
    });
  });
  function getIframeContent() {
    var _0x18d11f = document.querySelector('iframe');
    if (_0x18d11f) {
      var _0x593cbf = _0x18d11f.getAttribute('src');
      var _0x1599d9 = document.createElement('textarea');
      _0x1599d9.value = _0x593cbf;
      document.body.appendChild(_0x1599d9);
      _0x1599d9.select();
      document.execCommand('copy');
      document.body.removeChild(_0x1599d9);
      console.log("Iframe Source has been copied to Clipboard:", _0x593cbf);
      alert("Iframe Source has been copied to Clipboard");
    } else {
      alert("Error! Iframe Source not found");
    }
  }