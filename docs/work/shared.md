# 共享库
包名为@lowcode512/shared，本库将被其编辑器引用（@表示引用包）
## 如何编译

进入该目录下：
```
pnpm run build
```
在dist下可见包名为@lowcode512/shared的依赖，此时，因为editor的@lowcode512/shared是通过符号链接（@）引入的，所以那边的包会同步更新。

## src/material
定义了物料的接口，物料中的属性并不直接给元素接口继承，而是用于工具栏（EditorLeft）和预览页面（pages/preview）进行异步加载（注意工具栏和预览页的异步加载并非同一个，需要分为两次加载）。


## src/project
定义了元素、页面和项目的接口和类实现。

三者都是通过xxx.create()方法创建的，可以传入参数，以复制元素、页面和项目。

其中，有id的均通过uuid生成唯一识别码（其实我觉得换成nanoid更好）。特别的，元素与其他有所区别，你会见到mId、mVersion，表明这是对应的物料id（Material ID）、物料版本（Material Version），

## src/util.ts

目前下面只有一个uuid生成器。

## test