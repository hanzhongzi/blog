import { CodeTabs } from "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_o4j6hyxowei3mw76242cnntl2u/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_o4j6hyxowei3mw76242cnntl2u/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_o4j6hyxowei3mw76242cnntl2u/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
