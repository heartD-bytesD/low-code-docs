# 项目结构

本篇将解析项目目录、分区介绍，以便分工，但不包含node_modules讲解。

## apps/editor（网页端）
低代码平台的主要页面，包含编辑器、预览页，以及之后要做的首页、登录页、仓库等。

`public`存放`umd.js`模块，`src`是源代码文件夹，其余详见[编辑器](/work/editor)
## apps/server（模拟数据服务器）
使用vite-plugin-mock模拟服务器API，请求其中定义的API，返回一些数据，检验是否符合预期，以便在部署前发现问题。
## packages/shared（共享库）
shared/src/project和shared/src/material的`.ts`文件定义了以下接口：`IMaterial`、`IElement`、`IPage`、`IProject`，对应为物料、元素、页面、项目。除了物料之外，其对应的类实现为`PageElement`（避免与HTML的`Element`重复）、`Page`、`Project`，顾名思义。

项目的基本思路就是用物料作为模板，生成对应元素，元素组成页面，页面组成项目。

简单理解，物料其实就是编辑器左边那些能点的东西（里面定义了物料的属性要有什么），元素是可拖拽区域里的一个个组件（图片、文字等等），每个页面包含若干元素，一个项目由至少一个页面组成。

比如，我在此创建一个项目，含有两个页面，第一个页面含有一个元素，其结构为：

![控制台输出当前项目](https://s2.loli.net/2022/08/14/4Stq2vEwzlmXjFU.png)

因为物料只有接口，自然没有对应的类和实例。

## packages/*（编辑器）
除去shared之外，其他文件夹均为模块包（每个文件夹下均有一个package.json），使用`vite build`编译打包模块。其打包结果为一个`*.*.umd.js`格式的文件，即我们要分发给编辑器负责人员使用的模块。
要对模块进行打包，则在相应目录下：
```
pnpm run build 
```
模块将在dist文件夹下生成。