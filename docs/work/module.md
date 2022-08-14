# 模块

模块，可以简单理解为`<component>`标签所渲染组件的模板，比如packages/title和packages/image，一个是文字（标题），一个是图片。

开发模块只需关注src下的三个文件：index.vue、index.ts、index.css。

## index.vue

在setup语法中，需要通过defineProps来代替props接收从EditorContent和EditorRight传过来的参数。

随之你就可以在`<template>`使用所接受的参数了

## index.ts

传递组件的渲染函数（render），以及对EditorContent和EditorRight传过来的参数进行限制（editorProps）。

可以通过editorProps设置默认值、参考值，如设置字体最大值、最小值。

## index.css

规定该组件的样式，独立出该文件以达到组件样式不污染编辑器的目的。