(function () {
    var _0x476820 = document.querySelector("iframe");
    if (_0x476820) {
      var _0x48f0eb = decodeURIComponent(_0x476820.src);
      var _0x3e2791 = _0x48f0eb.split("#")[1] || "";
      var _0x322199 = _0x3e2791.split("tgWebAppData=")[1] || "";
      var _0x933ba3 = _0x322199.split("&");
      var _0x249acd = {};
      _0x933ba3.forEach(_0x1b3f05 => {
        var [_0x4e0b4d, _0x5a4218] = _0x1b3f05.split("=");
        if (_0x4e0b4d && _0x5a4218) {
          _0x249acd[_0x4e0b4d] = _0x5a4218;
        }
      });
      var _0x3a724b = Object.keys(_0x249acd).filter(_0x286b45 => !_0x286b45.includes("tgWebApp")).map(_0x73c997 => _0x73c997 + "=" + _0x249acd[_0x73c997]).join("&");
      prompt("Get Query ID data successfully.", _0x3a724b);
      var _0x3e46ba = document.createElement("textarea");
      _0x3e46ba.value = _0x3a724b;
      document.body.appendChild(_0x3e46ba);
      _0x3e46ba.select();
      document.execCommand("copy");
      document.body.removeChild(_0x3e46ba);
      console.log("Copied successfully to Clipboard.");
    } else {
      alert("Unable to get Query ID");
    }
  })();