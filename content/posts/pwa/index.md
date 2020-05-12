---
title: 浅谈PWA
date: "2020-04-15T00:45:59.079Z"
description: "水平有限，个人理解"
---

PWA 即 Progressive web apps（渐进式 Web 应用）

1. PWA 出现的意义(目的):
   使 Web 应用具有与原生应用相同的用户体验优势

2. 如何是应用成为一个 PWA:
   这里有一些关键的原则来辨别一个 web 应用是否是一个 PWA 应用。它应该具有以下特点:

   - Discoverable, 内容可以通过搜索引擎发现。
   - Installable, 可以出现在设备的主屏幕。
   - Linkable, 你可以简单地通过一个 URL 来分享它。
   - Network independent, 它可以在离线状态或者是在网速很差的情况下运行。
   - Progressive, 它在老版本的浏览器仍旧可以使用，在新版本的浏览器上可以使用全部功能。
   - Re-engageable, 无论何时有新的内容它都可以发送通知。
   - Responsive, 它在任何具有屏幕和浏览器的设备上可以正常使用——包括手机，平板电脑，笔记本，电视，冰箱，等。
   - Safe, 在你和应用之间的连接是安全的，可以阻止第三方访问你的敏感数据。

   那么我们可以简单总结出来,一个 PWA 至少要有一下功能:

   - 可离线工作
   - 可安装
   - 可以发送推送通知。

3. 通过 Service workers 让 PWA 离线工作
4. 让 PWA 易于安装
5. 通过通知推送让 PWA 可重用
