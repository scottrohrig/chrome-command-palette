/**
 * This code grabs the button from popup.html and requests the color value from storage. It then applies the color as the background of the button. Include a script tag to popup.js in popup.html.
 * NOTE: => chrome://extensions to load unpacked extensions from their directory. 
 * */

// let color = '#b7e1e4'; 
let color = '#ff6347'; // tomato

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    // logs to the console that opens when clicking the 'inspect views' in the extension's card on the chrome://extensions page
    console.log('Default background color set to %ctomato', `color: ${color}`);
});

chrome.runtime.onMessage.addListener( data => {
    if ( data.type === 'notification' ) {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: 'Notify!',
                message: data.message || 'Notify!',
                iconUrl: './images/get_started128.png'
            }
        )
    }
})

function togglePalette() {
    console.log('togglePalette hotkey pressed');
}

chrome.commands.onCommand.addListener((command) => {
    // console.log('command palette toggled', command);
    togglePalette();
})

