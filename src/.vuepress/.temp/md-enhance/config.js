import CodeDemo from "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.1_sass-loader@16_5f4lui3gfndoruex4gfulqkwx4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.1_sass-loader@16_5f4lui3gfndoruex4gfulqkwx4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "/Users/zhanghanzhong/Downloads/vuepress_good_nice/blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.1_sass-loader@16_5f4lui3gfndoruex4gfulqkwx4/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
