/* where does changeColor come from? changeColor works even though it's not defined, 
* but paletteText is undefined regardless of what I try. 
*/
// let changeColor = document.getElementById( 'changeColor' );
// let paletteText = document.getElementById( 'paletteText' );

chrome.storage.sync.get("color", ({ color }) => {
  // set button color, overrides css styling.
  // changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
    // document is the actual webpage, not the popup.html page
  });
}

