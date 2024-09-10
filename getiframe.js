(function () {
    var _0x4e2fd8 = document.querySelectorAll("iframe");
    if (_0x4e2fd8.length > 0) {
      var _0x51b146 = [];
      _0x4e2fd8.forEach(_0x11e95c => {
        try {
          var _0x55afa6 = _0x11e95c.contentDocument || _0x11e95c.contentWindow.document;
          var _0x258abf = _0x55afa6.documentElement.innerHTML;
          _0x51b146.push({
            src: _0x11e95c.src,
            content: _0x258abf
          });
        } catch (_0x59fae9) {
          console.error("Unable to access iframe contents:", _0x59fae9);
          _0x51b146.push({
            src: _0x11e95c.src,
            content: "Content not accessible"
          });
        }
      });
      chrome.runtime.sendMessage({
        action: "sendIframeContents",
        data: _0x51b146
      });
    } else {
      chrome.runtime.sendMessage({
        action: "sendIframeContents",
        data: "iframe not found."
      });
    }
  })();