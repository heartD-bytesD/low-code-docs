import{_ as e,c as a,o as s,b as d}from"./app.33913a91.js";const g=JSON.parse('{"title":"\u9879\u76EE\u7ED3\u6784","description":"","frontmatter":{},"headers":[{"level":2,"title":"apps/editor\uFF08\u7F51\u9875\u7AEF\uFF09","slug":"apps-editor\uFF08\u7F51\u9875\u7AEF\uFF09"},{"level":2,"title":"apps/server\uFF08\u6A21\u62DF\u6570\u636E\u670D\u52A1\u5668\uFF09","slug":"apps-server\uFF08\u6A21\u62DF\u6570\u636E\u670D\u52A1\u5668\uFF09"},{"level":2,"title":"packages/shared\uFF08\u5171\u4EAB\u5E93\uFF09","slug":"packages-shared\uFF08\u5171\u4EAB\u5E93\uFF09"},{"level":2,"title":"packages/*\uFF08\u7F16\u8F91\u5668\uFF09","slug":"packages-\uFF08\u7F16\u8F91\u5668\uFF09"}],"relativePath":"work/struct.md"}'),c={name:"work/struct.md"},r=d(`<h1 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1">\u9879\u76EE\u7ED3\u6784 <a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a></h1><p>\u672C\u7BC7\u5C06\u89E3\u6790\u9879\u76EE\u76EE\u5F55\u3001\u5206\u533A\u4ECB\u7ECD\uFF0C\u4EE5\u4FBF\u5206\u5DE5\uFF0C\u4F46\u4E0D\u5305\u542Bnode_modules\u8BB2\u89E3\u3002</p><h2 id="apps-editor\uFF08\u7F51\u9875\u7AEF\uFF09" tabindex="-1">apps/editor\uFF08\u7F51\u9875\u7AEF\uFF09 <a class="header-anchor" href="#apps-editor\uFF08\u7F51\u9875\u7AEF\uFF09" aria-hidden="true">#</a></h2><p>\u4F4E\u4EE3\u7801\u5E73\u53F0\u7684\u4E3B\u8981\u9875\u9762\uFF0C\u5305\u542B\u7F16\u8F91\u5668\u3001\u9884\u89C8\u9875\uFF0C\u4EE5\u53CA\u4E4B\u540E\u8981\u505A\u7684\u9996\u9875\u3001\u767B\u5F55\u9875\u3001\u4ED3\u5E93\u7B49\u3002</p><p><code>public</code>\u5B58\u653E<code>umd.js</code>\u6A21\u5757\uFF0C<code>src</code>\u662F\u6E90\u4EE3\u7801\u6587\u4EF6\u5939\uFF0C\u5176\u4F59\u8BE6\u89C1<a href="/low-code-docs/work/editor.html">\u7F16\u8F91\u5668</a></p><h2 id="apps-server\uFF08\u6A21\u62DF\u6570\u636E\u670D\u52A1\u5668\uFF09" tabindex="-1">apps/server\uFF08\u6A21\u62DF\u6570\u636E\u670D\u52A1\u5668\uFF09 <a class="header-anchor" href="#apps-server\uFF08\u6A21\u62DF\u6570\u636E\u670D\u52A1\u5668\uFF09" aria-hidden="true">#</a></h2><p>\u4F7F\u7528vite-plugin-mock\u6A21\u62DF\u670D\u52A1\u5668API\uFF0C\u8BF7\u6C42\u5176\u4E2D\u5B9A\u4E49\u7684API\uFF0C\u8FD4\u56DE\u4E00\u4E9B\u6570\u636E\uFF0C\u68C0\u9A8C\u662F\u5426\u7B26\u5408\u9884\u671F\uFF0C\u4EE5\u4FBF\u5728\u90E8\u7F72\u524D\u53D1\u73B0\u95EE\u9898\u3002</p><h2 id="packages-shared\uFF08\u5171\u4EAB\u5E93\uFF09" tabindex="-1">packages/shared\uFF08\u5171\u4EAB\u5E93\uFF09 <a class="header-anchor" href="#packages-shared\uFF08\u5171\u4EAB\u5E93\uFF09" aria-hidden="true">#</a></h2><p>shared/src/project\u548Cshared/src/material\u7684<code>.ts</code>\u6587\u4EF6\u5B9A\u4E49\u4E86\u4EE5\u4E0B\u63A5\u53E3\uFF1A<code>IMaterial</code>\u3001<code>IElement</code>\u3001<code>IPage</code>\u3001<code>IProject</code>\uFF0C\u5BF9\u5E94\u4E3A\u7269\u6599\u3001\u5143\u7D20\u3001\u9875\u9762\u3001\u9879\u76EE\u3002\u9664\u4E86\u7269\u6599\u4E4B\u5916\uFF0C\u5176\u5BF9\u5E94\u7684\u7C7B\u5B9E\u73B0\u4E3A<code>PageElement</code>\uFF08\u907F\u514D\u4E0EHTML\u7684<code>Element</code>\u91CD\u590D\uFF09\u3001<code>Page</code>\u3001<code>Project</code>\uFF0C\u987E\u540D\u601D\u4E49\u3002</p><p>\u9879\u76EE\u7684\u57FA\u672C\u601D\u8DEF\u5C31\u662F\u7528\u7269\u6599\u4F5C\u4E3A\u6A21\u677F\uFF0C\u751F\u6210\u5BF9\u5E94\u5143\u7D20\uFF0C\u5143\u7D20\u7EC4\u6210\u9875\u9762\uFF0C\u9875\u9762\u7EC4\u6210\u9879\u76EE\u3002</p><p>\u7B80\u5355\u7406\u89E3\uFF0C\u7269\u6599\u5176\u5B9E\u5C31\u662F\u7F16\u8F91\u5668\u5DE6\u8FB9\u90A3\u4E9B\u80FD\u70B9\u7684\u4E1C\u897F\uFF08\u91CC\u9762\u5B9A\u4E49\u4E86\u7269\u6599\u7684\u5C5E\u6027\u8981\u6709\u4EC0\u4E48\uFF09\uFF0C\u5143\u7D20\u662F\u53EF\u62D6\u62FD\u533A\u57DF\u91CC\u7684\u4E00\u4E2A\u4E2A\u7EC4\u4EF6\uFF08\u56FE\u7247\u3001\u6587\u5B57\u7B49\u7B49\uFF09\uFF0C\u6BCF\u4E2A\u9875\u9762\u5305\u542B\u82E5\u5E72\u5143\u7D20\uFF0C\u4E00\u4E2A\u9879\u76EE\u7531\u81F3\u5C11\u4E00\u4E2A\u9875\u9762\u7EC4\u6210\u3002</p><p>\u6BD4\u5982\uFF0C\u6211\u5728\u6B64\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\uFF0C\u542B\u6709\u4E24\u4E2A\u9875\u9762\uFF0C\u7B2C\u4E00\u4E2A\u9875\u9762\u542B\u6709\u4E00\u4E2A\u5143\u7D20\uFF0C\u5176\u7ED3\u6784\u4E3A\uFF1A</p><p><img src="https://s2.loli.net/2022/08/14/4Stq2vEwzlmXjFU.png" alt="\u63A7\u5236\u53F0\u8F93\u51FA\u5F53\u524D\u9879\u76EE"></p><p>\u56E0\u4E3A\u7269\u6599\u53EA\u6709\u63A5\u53E3\uFF0C\u81EA\u7136\u6CA1\u6709\u5BF9\u5E94\u7684\u7C7B\u548C\u5B9E\u4F8B\u3002</p><h2 id="packages-\uFF08\u7F16\u8F91\u5668\uFF09" tabindex="-1">packages/*\uFF08\u7F16\u8F91\u5668\uFF09 <a class="header-anchor" href="#packages-\uFF08\u7F16\u8F91\u5668\uFF09" aria-hidden="true">#</a></h2><p>\u9664\u53BBshared\u4E4B\u5916\uFF0C\u5176\u4ED6\u6587\u4EF6\u5939\u5747\u4E3A\u6A21\u5757\u5305\uFF08\u6BCF\u4E2A\u6587\u4EF6\u5939\u4E0B\u5747\u6709\u4E00\u4E2Apackage.json\uFF09\uFF0C\u4F7F\u7528<code>vite build</code>\u7F16\u8BD1\u6253\u5305\u6A21\u5757\u3002\u5176\u6253\u5305\u7ED3\u679C\u4E3A\u4E00\u4E2A<code>*.*.umd.js</code>\u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u5373\u6211\u4EEC\u8981\u5206\u53D1\u7ED9\u7F16\u8F91\u5668\u8D1F\u8D23\u4EBA\u5458\u4F7F\u7528\u7684\u6A21\u5757\u3002 \u8981\u5BF9\u6A21\u5757\u8FDB\u884C\u6253\u5305\uFF0C\u5219\u5728\u76F8\u5E94\u76EE\u5F55\u4E0B\uFF1A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">pnpm run build </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6A21\u5757\u5C06\u5728dist\u6587\u4EF6\u5939\u4E0B\u751F\u6210\u3002</p>`,18),p=[r];function o(t,i,l,n,h,_){return s(),a("div",null,p)}var m=e(c,[["render",o]]);export{g as __pageData,m as default};