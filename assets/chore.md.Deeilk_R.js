import{_ as s,o as i,c as a,R as t}from"./chunks/framework.V_Zt3J1u.js";const n="/low-code-docs/assets/lc-image.-OyUenb7.png",e="/low-code-docs/assets/lc-button.8NC2Xibc.png",p="/low-code-docs/assets/lc-core.kNqzjGFW.png",m=JSON.parse('{"title":"重构思路","description":"","frontmatter":{},"headers":[],"relativePath":"chore.md","filePath":"chore.md"}'),h={name:"chore.md"},l=t('<h1 id="重构思路" tabindex="-1">重构思路 <a class="header-anchor" href="#重构思路" aria-label="Permalink to &quot;重构思路&quot;">​</a></h1><h2 id="editor" tabindex="-1">editor <a class="header-anchor" href="#editor" aria-label="Permalink to &quot;editor&quot;">​</a></h2><h2 id="组件-插件包第三方化" tabindex="-1">组件/插件包第三方化 <a class="header-anchor" href="#组件-插件包第三方化" aria-label="Permalink to &quot;组件/插件包第三方化&quot;">​</a></h2><h3 id="单组件仓库-改为-多组件仓库" tabindex="-1">单组件仓库 改为 多组件仓库 <a class="header-anchor" href="#单组件仓库-改为-多组件仓库" aria-label="Permalink to &quot;单组件仓库 改为 多组件仓库&quot;">​</a></h3><p>开发环境仍要手动导<code>umd.js</code>，因为前端项目只能指定路径而不能全部导入或者正则匹配。</p><p>一个简单的思路是做成接口，需要后端返回对应脚本url数组，但这样对第三方开发并不友好。不过这种形式以后一定会用到，可以留意。</p><p>另一个简单的思路就是将<strong>每个仓库只能有一个组件</strong>改为<strong>每个仓管可以有多个组件</strong>，当组件增删时，不需要自己手动添加或删除。</p><p>加之创建仓库其实是很麻烦的操作，与高效开发背道而驰。于是采用了上面的方案二。</p><p>这样做的好处还有大幅减少体积。以下是image、button和包含以上两个组件的core打包后的大小：</p><p><img src="'+n+'" alt="lc-image.umd.js"></p><p><img src="'+e+'" alt="lc-button.umd.js"></p><p><img src="'+p+`" alt="core.umd.js"></p><p>不过限制也有，那就是插件包信息必须是全量导入的。幸好导入的只是信息（包含了脚本地址），而不是组件，所以注意不要全量挂载即可。</p><h3 id="配置外置化" tabindex="-1">配置外置化 <a class="header-anchor" href="#配置外置化" aria-label="Permalink to &quot;配置外置化&quot;">​</a></h3><p>编辑器不应有任何关于组件、package的配置，目前编辑器和packages是耦合在一起的，编辑器内置了组件的类型、ID、历史版本，这些信息后续都会放到packages配置组件的地方，确保一个组件的ID、版本号等唯一信息不要出现在两个地方。</p><p>其实观察/editor/src/data下的文件，其中都是配置，合理的获取方式要么是后端传过来，要么是在组件仓库里，而不能与编辑器藕合在一块。</p><p>由于source属性完全由id和version加上文件后缀组成，因此不需要这个属性了。</p><p>整合后，插件包的核心属性如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 唯一id，支持同id的包对此进行扩展</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    version: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.0.3&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 版本号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;基础组件&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 分类名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;core&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 分类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    components: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;lc-button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./lc-button&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &#39;lc-image&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./lc-image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,19),k=[l];function r(o,d,c,E,g,y){return i(),a("div",null,k)}const _=s(h,[["render",r]]);export{m as __pageData,_ as default};
