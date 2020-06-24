## 小词导航

修改自 [WebStack](https://github.com/WebStackPage/WebStackPage.github.io)
===
### 在线地址: [➡️ www.xclinks.com](www.xclinks.com)

### 修改说明?
---

原项目是纯静态网页，添加导航需要手动去更改html。

简单的修改了下，用nodejs读json文件生成网页。

使用前请确保安装了node，然后执行npm i，安装EJS。

json文件在`scripts/data.json`。请参展该格式添加。

修改完json，请运行`npm run build`。

### 部署
---

部署可参考原项目，一堆部署方法。该项目最终也只会生成一个Html文件。你可随意部署。

或者参考我的部署方法。使用[vercel](https://vercel.com/)导入项目就行。
