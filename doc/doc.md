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