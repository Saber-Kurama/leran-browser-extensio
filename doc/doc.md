## 

### 参考
[浏览器插件简介](https://juejin.cn/post/6996519317042888740)

### Customize extension user interface

#### chrome.action

#### 图标

```
manifest.json
{
    "action": {
        "default_icon": {              // optional
        "16": "images/icon16.png",   // optional
        "24": "images/icon24.png",   // optional
        "32": "images/icon32.png"    // optional
        },
    }
}
```

通过编程方式设置图标

``` chrome.action.setIcon() ```

```
const canvas = new OffscreenCanvas(16, 16);
const context = canvas.getContext('2d');
context.clearRect(0, 0, 16, 16);
context.fillStyle = '#00FF00';  // Green
context.fillRect(0, 0, 16, 16);
const imageData = context.getImageData(0, 0, 16, 16);
chrome.action.setIcon({imageData: imageData}, () => { /* ... */ });
```
该action.setIcon()API 旨在设置静态图像。它不应该用于模拟动画。

格式

对于打包扩展（从 .crx 文件安装），图像可以采用 Blink 渲染引擎可以显示的大多数格式，包括 PNG、JPEG、BMP、ICO 等（不支持 SVG）。解压后的扩展必须使用 PNG 格式的图像。

#### 工具提示（标题）

```
manifest.json
{
    "action": {
        "default_title": '提示',
    }
}
```

``` chrome.action.setTitle() ```

#### Badge

Note that the badge has limited space, and should typically use four characters or fewer.

`action.setBadgeBackgroundColor()` and `action.setBadgeText()`


#### Popup

```
manifest.json
{
    "action": {
        "default_popup": 'popup.html',
    }
}
```

`action.setPopup()` 动态更新指向不同相对路径

#### Per-tab state 每个标签状态

```
function getTabId() { /* ... */}
function getTabBadge() { /* ... */}

chrome.action.setBadgeText(
  {
    text: getTabBadge(tabId),
    tabId: getTabId(),
  },
  () => { ... }
);
```

#### Enabled state

`action.enable()` 和 `action.disable()`
这仅影响是否将弹出窗口（如果有）或action.onClicked事件分派到您的扩展程序；它不会影响操作在工具栏中的存在。

#### 类型

##### 标签详情

##### 标签ID tableId

#### 用户设置

isOnToolbar 扩展程序的操作图标是否在浏览器窗口的顶级工具栏上可见（即扩展程序是否已被用户“固定”）

#### 方法

chrome.action.disable

chrome.action.enable

获取徽章背景颜色

获取徽章文本

弹出窗口

获取标题

获取用户设置

设置徽章背景颜色

```
chrome.action.onClicked.addListener(
  callback: function,
)
```

<!-- TODO： -->
遗留问题

setBadgeBackgroundColor 并没有效果