# editor
apps/editor，编辑器以及其他页面的存放位置。实际上编辑器页面在src/pages/editor下。

## src/components
存放着通用的组件，如BasicLayout和BasicHeader，编辑器以外的其他地方也用到

## src/data
`event.ts`下有事件派发相关的内容，用于对元素进行事件绑定。

`editorEvents`为事件的定义样例，因为在EditorRight中v-for时没有对其type进行任何限制（过滤），故所有的组件都会有common:link这个事件（不管是图片还是标题），并且Editor对应的select的位置有问题，有多少个input框就重复多少次（如标题就重复了3次），得改。

`materials.ts`十分重要。在接收新的模块后，你需要在此注册模块的相关信息，包括：

- 独一无二的id
- 所属栏目（category）
- 缩略图（thumbnail）
- 挂在window实例上的名称（name，如image就是LcImage，可以尝试在控制台中输入window.LcImage，看看是否有这个）
- 工具栏显示名称（title）

等等。

至于data，是用来存放该组件的所有历史版本。如果当前缺少所需版本的组件，可以根据data里的，找到对应source，加载其他版本（功能尚未实现）。
## src/pages
类似VueRouter里使用的routes，但相比vite-plugin-page更为一体化，其下的editor所对应页面就是编辑器页面，preview就是预览页面。

### src/pages/editor
components下定义了编辑器的左中右各部分的布局和逻辑：
- EditorLayout。上面我们提到BasicLayout，其中除了BasicHeader之外，剩下的部分就是EditorLayout了，它包括下面三个部分。
- EditorLeft。左边栏，可以叫做工具栏、物料槽，点击、拖拽到画布即可生成物料对应的元素。其中每个按钮都由MaterialBlocks组成（在同级目录下）
- EditorContent，包括页面栏、元素栏和画布（从左到右）。`class="editor-body-pages"`对应div为页面栏（pages是复数可以看出），元素栏（`class="editor-body-elements"`），还有画布（`class="editor-body-page"`，单数page，显示当前页）。
- EditorRight，点击元素时出现的属性编辑栏。当未选中元素时，则显示当前页面的名称等信息。

注意，布局和逻辑是分开的，为了防止`.vue`文件的内容过长，影响查找效率，我们选择在`.vue`中`import`引入`.less`文件，而非在`.vue`中写`<style>`标签。

## src/store

状态管理，包含了ProjectStore和EventStore。

因为每个元素、页面和项目之间都要通信，且要用到一些共用的功能（如更新当前选中的元素`setCurrentElementId()`、更新项目的json`project.value = p.getJson();`），因此这些都存放在`project.ts`的`useProjectStore`中。

绑定自定义事件，则在`event.ts`的useEventStore中定义相关的参数和逻辑。比如，EditorRight的面板就根据该文件的`currentType`、`currentEvents`计算属性渲染对应标签（如下拉框），切换选项时EditorRight调用`onTypeChange`更新对应计算属性`currentType`等等。

## public
模块（`.umd.js`）存放位置，同时也用于放置静态文件，