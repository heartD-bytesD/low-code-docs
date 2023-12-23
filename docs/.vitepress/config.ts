export default {
    title: "Low Code Doc",
    description: "Round round round.",
    base: '/low-code-docs/',
    themeConfig: {
        siteTitle: "HeartD-BytesD",
        sidebar: [
            {
                text: '引言',
                items: [
                    { text: "项目大纲", link: "/intro/teze" },
                    { text: "ToDos", link: "/todos" },
                    { text: "规范", link: "/guide" },
                ],
            },
            
            {
                text: '工作原理',
                items: [
                    { text: "项目结构", link: "/work/struct" },
                    { text: "编辑器", link: "/work/editor" },
                    { text: "共享库（@lowcode512）", link: "/work/shared" },
                    { text: "模块", link: "/work/module" },
                    { text: "模拟API", link: "/work/server" },
                    
                ],
            },

            {
                text: '示例',
                items: [
                    { text: "如何创建模块", link: "/example/module" },
                    // { text: "项目结构", link: "/struct" },
                    // { text: "ToDos", link: "/todos" },
                    // { text: "规范", link: "/guide" },
                    
                ],
            }
        ],

    },
};
