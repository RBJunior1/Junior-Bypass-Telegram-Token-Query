(function () {
    var _0x5a7227 = document.querySelector("iframe");
    if (_0x5a7227) {
      var _0x56ca17 = decodeURIComponent(_0x5a7227.src);
      var _0x450ac7 = _0x56ca17.split("#")[1] || "";
      var _0x12dd2a = _0x450ac7.split("tgWebAppData=")[1] || "";
      var _0xed7174 = _0x12dd2a.split("&");
      var _0x2563d3 = {};
      _0xed7174.forEach(_0x44b92f => {
        var [_0x1e8226, _0x3f6fb3] = _0x44b92f.split("=");
        if (_0x1e8226 && _0x3f6fb3) {
          _0x2563d3[_0x1e8226] = _0x3f6fb3;
        }
      });
      var _0x371ed5 = _0x2563d3.user;
      if (_0x371ed5) {
        prompt("Get format User=%7B%22.... successfully", "user=" + _0x371ed5);
        var _0x240366 = document.createElement("textarea");
        _0x240366.value = "user=" + _0x371ed5;
        document.body.appendChild(_0x240366);
        _0x240366.select();
        document.execCommand("copy");
        document.body.removeChild(_0x240366);
        console.log("Copied successfully to Clipboard.");
      } else {
        alert("User=%7B%22... format not found.");
      }
    } else {
      alert("Unable to get format User=%7B%22....");
    }
  })();