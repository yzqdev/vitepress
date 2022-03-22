import{_ as e,c as n,o as s,a}from"./app.10326f86.js";const _='{"title":"\u9996\u9875","description":"","frontmatter":{"home":true,"title":"\u9996\u9875","heroImage":"/img/hero.png","heroAlt":"Logo image","heroText":"Hero Title","tagline":"Hero subtitle","actionText":"Get Started","actionLink":"/guide/side1","actions":[{"text":"\u5FEB\u901F\u4E0A\u624B","link":"/guide/side1","type":"primary"},{"text":"\u9879\u76EE\u7B80\u4ECB","link":"/guide/side2","type":"secondary"}],"features":[{"title":"\u7B80\u6D01\u81F3\u4E0A","details":"\u4EE5 Markdown \u4E3A\u4E2D\u5FC3\u7684\u9879\u76EE\u7ED3\u6784\uFF0C\u4EE5\u6700\u5C11\u7684\u914D\u7F6E\u5E2E\u52A9\u4F60\u4E13\u6CE8\u4E8E\u5199\u4F5C\u3002"},{"title":"Vue \u9A71\u52A8","details":"\u4EAB\u53D7 Vue \u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u53EF\u4EE5\u5728 Markdown \u4E2D\u4F7F\u7528 Vue \u7EC4\u4EF6\uFF0C\u53C8\u53EF\u4EE5\u4F7F\u7528 Vue \u6765\u5F00\u53D1\u81EA\u5B9A\u4E49\u4E3B\u9898\u3002"},{"title":"\u9AD8\u6027\u80FD","details":"VuePress \u4F1A\u4E3A\u6BCF\u4E2A\u9875\u9762\u9884\u6E32\u67D3\u751F\u6210\u9759\u6001\u7684 HTML\uFF0C\u540C\u65F6\uFF0C\u6BCF\u4E2A\u9875\u9762\u88AB\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u5C06\u4F5C\u4E3A SPA \u8FD0\u884C\u3002"},{"title":"\u4E3B\u9898","details":"\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F00\u7BB1\u5373\u7528\u7684\u9ED8\u8BA4\u4E3B\u9898\u3002\u4F60\u4E5F\u53EF\u4EE5\u6311\u9009\u4E00\u4E2A\u793E\u533A\u4E3B\u9898\uFF0C\u6216\u8005\u521B\u5EFA\u4E00\u4E2A\u4F60\u81EA\u5DF1\u7684\u4E3B\u9898\u3002"},{"title":"\u63D2\u4EF6","details":"\u7075\u6D3B\u7684\u63D2\u4EF6API\uFF0C\u4F7F\u5F97\u63D2\u4EF6\u53EF\u4EE5\u4E3A\u4F60\u7684\u7AD9\u70B9\u63D0\u4F9B\u8BB8\u591A\u5373\u63D2\u5373\u7528\u7684\u529F\u80FD\u3002"},{"title":"\u6253\u5305\u5DE5\u5177","details":"\u9ED8\u8BA4\u7684\u6253\u5305\u5DE5\u5177\u662F Vite \uFF0C\u4E5F\u540C\u6837\u652F\u6301 Webpack \u3002\u9009\u4E00\u4E2A\u4F60\u559C\u6B22\u7684\u6765\u4F7F\u7528\u5427\uFF01"}],"footer":"MIT Licensed | Copyright \xA9 2018-present Evan You"},"headers":[{"level":3,"title":"\u50CF\u6570 1, 2, 3 \u4E00\u6837\u5BB9\u6613","slug":"\u50CF\u6570-1-2-3-\u4E00\u6837\u5BB9\u6613"}],"relativePath":"index.md"}',t={},o=a(`<h3 id="\u50CF\u6570-1-2-3-\u4E00\u6837\u5BB9\u6613" tabindex="-1">\u50CF\u6570 1, 2, 3 \u4E00\u6837\u5BB9\u6613 <a class="header-anchor" href="#\u50CF\u6570-1-2-3-\u4E00\u6837\u5BB9\u6613" aria-hidden="true">#</a></h3><div class="language-bash"><pre><code><span class="token comment"># \u5728\u4F60\u7684\u9879\u76EE\u4E2D\u5B89\u88C5</span>
<span class="token function">yarn</span> <span class="token function">add</span> -D vuepress@next

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A markdown \u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># \u5F00\u59CB\u5199\u4F5C</span>
<span class="token function">yarn</span> vuepress dev

<span class="token comment"># \u6784\u5EFA\u9759\u6001\u6587\u4EF6</span>
<span class="token function">yarn</span> vuepress build
</code></pre></div><div class="language-bash"><pre><code><span class="token comment"># \u5728\u4F60\u7684\u9879\u76EE\u4E2D\u5B89\u88C5</span>
<span class="token function">npm</span> <span class="token function">install</span> -D vuepress@next

<span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A markdown \u6587\u4EF6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> README.md

<span class="token comment"># \u5F00\u59CB\u5199\u4F5C</span>
npx vuepress dev

<span class="token comment"># \u6784\u5EFA\u9759\u6001\u6587\u4EF6</span>
npx vuepress build
</code></pre></div>`,3),i=[o];function p(c,l,r,d,u,m){return s(),n("div",null,i)}var h=e(t,[["render",p]]);export{_ as __pageData,h as default};
