# 模仿微信的小程序（实训）- Imitate WeChat small program

#### 介绍
基于uni-app开发的模仿微信的小程序

#### 软件架构
1.使用node js的koa2、fs、path、koa-static、koa-bodyparser、koa、koa-bodyparser@2、squelize、pg、pg-hstore、mysql2

2.使用uniapp中的默认框架：pages.json、mainfest.json、vue.config.js、uni.scss、App.vue、main.js、env等

3.使用的uniapp中的组件有：vue组件使用了：component、template, 视图容器使用了：view、scroll-view、swiper, 表单组件使用了：button、input、form、textarea等

4.使用了h5的基础语法跟javascript的语法。

微信文件夹为前端文件夹、微信后端文件夹为后端文件夹

**注意** : 运行后端server文件的前需要先下载mysql和启动mysql服务，并在mysql数据库中创建数据库名为wx的数据库，运行server后端文件夹之后会自动在wx数据库中创建Users表、Publisheds表、Retroactions表。三张表是用来存储内容的如通信录、朋友圈信息等。

#### 安装教程

1.  安装mysql（简便安装方法-->服务器运维面板 **宝塔** ）

官网链接：https://www.bt.cn/

![选择你的操作系统](https://images.gitee.com/uploads/images/2021/0629/210656_27b5e8b8_8450609.png "屏幕截图.png")

![自行选择路径安装](https://images.gitee.com/uploads/images/2021/0629/211035_d29e2c06_8450609.png "屏幕截图.png")

![获取面板地址](https://images.gitee.com/uploads/images/2021/0629/213833_35742fdd_8450609.png "屏幕截图.png")

![打开面板](https://images.gitee.com/uploads/images/2021/0629/213928_b968fa7a_8450609.png "屏幕截图.png")

![暂不安装服务](https://images.gitee.com/uploads/images/2021/0629/214024_d213cab5_8450609.png "屏幕截图.png")

![安装mysql](https://images.gitee.com/uploads/images/2021/0629/214127_0ca32f2d_8450609.png "屏幕截图.png")

初始化mysql(设置密码)

![重置密码](https://images.gitee.com/uploads/images/2021/0629/221830_0f8b43cf_8450609.png "屏幕截图.png")

![创建数据库wx](https://images.gitee.com/uploads/images/2021/0629/221954_b3de7867_8450609.png "屏幕截图.png")

2.  安装node（常规安装）

node官网链接：http://nodejs.cn/

3.  安装HBuilder X（常规安装）

HBuilder官网链接：https://www.dcloud.io/hbuilderx.html

请安装开发板

#### 使用说明

1.  下载源码并在微信后端下载插件
```
cd 微信后端
npm install
npm i koa -s
node server.js
```
2.  在HBulider X将前端代码（微信）运行到浏览器

![](https://images.gitee.com/uploads/images/2021/0629/205002_27f03426_8450609.png "屏幕截图.png")

3.  打开效果（按f12打开控制台）
- 消息

![](https://images.gitee.com/uploads/images/2021/0629/205810_fe0fcebe_8450609.png "屏幕截图.png")

- 通讯录

![](https://images.gitee.com/uploads/images/2021/0629/223312_b6bb2dc2_8450609.png "屏幕截图.png")

- 发现

![](https://images.gitee.com/uploads/images/2021/0629/222700_d5cbbcf6_8450609.png "屏幕截图.png")

    -朋友圈

![](https://images.gitee.com/uploads/images/2021/0629/223040_f8ad8732_8450609.png "屏幕截图.png")

    -发布

![](https://images.gitee.com/uploads/images/2021/0629/222938_c8dff27c_8450609.png "屏幕截图.png")

- 我的

![](https://images.gitee.com/uploads/images/2021/0629/213241_2001620e_8450609.png "屏幕截图.png")

- 添加好友

![](https://images.gitee.com/uploads/images/2021/0629/223253_4fb37701_8450609.png "屏幕截图.png")

#### 参与贡献

1.  李梓键

#### License

Copyright (c) 2020-present lzj01231