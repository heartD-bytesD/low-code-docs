# 书写规范
::: tip
规范带有建议性，旨在协成团队风格一致、代码互通可读，避免被加入代码艺术大赏。
:::
## 使用语言

本次项目使用Vue3的[setup语法糖](https://v3.cn.vuejs.org/api/sfc-script-setup.html) + TypeScript，样式则使用[Less](https://lesscss.org/)。


## 格式化
2个空格。

## Vue

三部分的顺序：

- `<script>`
- `<template>`
- `<style>`

在开发过程中，你将会频繁导入依赖、寻找函数和变量，因此script放在头部是最合适的。vue文件内不建议写style，而是单独分开一个`.css`（项目中建议使用`.less`），在`<script>`中通过`import`引入。例子如下：

```vue{6}
<script setup lang="ts">
import { computed } from "vue";
import { IMaterial } from "@lowcode512/shared";
import { getMaterialEditorProps, materialMap } from "@/data";
import { useProjectStore } from "@/store";
import "./EditorRight.less";

const projectStore = useProjectStore();

function onPropsChange(e: Event, key: string) {
    projectStore.changeElementProps({
        [key]: (e.target as HTMLInputElement).value,
    });
}
</script>
```
<br />

## TypeScript
`.ts`文件及`.vue`内`<script>`标签的内容，建议优先顺序为：
- `export * `语句
- `import`语句
    - `vue`的库，比如`import { computed } from "vue";`
    - 共享库，比如`import { IMaterial } from "@lowcode512/shared";`
    - 本地依赖
    - 样式文件