let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  chrome.action.setBadgeBackgroundColor(
    {color: [0, 255, 0, 0]},  // Green
    () => { /* ... */ },
  );
  chrome.action.setBadgeText('on')
  console.log('Default background color set to %cgreen', `color: ${color}`);
});