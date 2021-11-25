/*
 * @Author: saber
 * @Date: 2021-11-25 10:05:18
 * @LastEditTime: 2021-11-25 10:26:10
 * @LastEditors: saber
 * @Description: 
 */
let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  // chrome.action.setBadgeBackgroundColor(
  //   {color: [0, 255, 0, 0]},  // Green
  //   () => { /* ... */ },
  // );
  // chrome.action.setBadgeText({text: 'on'})
  console.log('Default background color set to %cgreen', `color: ${color}`);
  

});

// 单击的时候 注入 内容脚本
// 如果有popup 就不会执行这个了
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content.js']
  });
});