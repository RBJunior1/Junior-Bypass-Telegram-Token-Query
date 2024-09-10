(function () {
    document.arrive("iframe", function (_0x1e72a9) {
      _0x275cb6();
    });
    function _0x275cb6() {
      document.querySelectorAll("iframe").forEach(_0x429f93 => {
        let _0x3c9c01 = _0x429f93.getAttribute("src");
        if (_0x3c9c01) {
          if (_0x3c9c01.includes("tgWebAppPlatform=")) {
            _0x3c9c01 = _0x3c9c01.replace(/tgWebAppPlatform=[^\&]*/g, "tgWebAppPlatform=ios");
          } else {
            _0x3c9c01 += (_0x3c9c01.includes("?") ? "&" : "?") + "tgWebAppPlatform=ios";
          }
          _0x429f93.setAttribute("src", _0x3c9c01);
        }
      });
      _0x15e35a();
      _0x5e7af5();
      _0x5245f3();
    }
    function _0x15e35a() {
      try {
        Object.defineProperty(navigator, "userAgent", {
          value: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1",
          writable: false,
          configurable: false
        });
      } catch (_0x164090) {
        console.error("Không thể thay đổi userAgent:", _0x164090);
      }
    }
    function _0x5e7af5() {
      try {
        Object.defineProperty(navigator, "platform", {
          value: "iPhone",
          writable: false,
          configurable: false
        });
        Object.defineProperty(navigator, "maxTouchPoints", {
          value: 5,
          writable: false,
          configurable: false
        });
      } catch (_0x247d4d) {
        console.error("Unable to change device information:", _0x247d4d);
      }
    }
    function _0x5245f3() {
      let _0x1936ab = document.title;
      document.title = "Bypassed by @RBJunior1";
      setTimeout(() => {
        document.title = _0x1936ab;
      }, 1e4);
    }
    const _0x49c32a = new MutationObserver(_0x30e6a3 => {
      _0x30e6a3.forEach(_0x16b4ad => {
        _0x16b4ad.addedNodes.forEach(_0x47259f => {
          if (_0x47259f.tagName === "IFRAME") {
            _0x275cb6();
          }
        });
      });
    });
    _0x49c32a.observe(document.body, {
      childList: true,
      subtree: true
    });
    _0x275cb6();
    console.log("Script content loaded");
    chrome.runtime.onMessage.addListener(function (_0x1c57bc, _0x242d62, _0x5a86de) {
      console.log("Received message content in script:", _0x1c57bc);
      if (_0x1c57bc.action === "getSessionStorage") {
        const _0x4fed1c = JSON.stringify(sessionStorage);
        _0x5a86de({
          data: _0x4fed1c
        });
      }
    });
  })();