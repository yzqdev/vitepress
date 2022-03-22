import{_ as n,c as s,o as a,a as t}from"./app.10326f86.js";const g='{"title":"\u8FD9\u662Fguide\u7684side1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"}],"relativePath":"guide/side1.md"}',p={},o=t(`<h1 id="\u8FD9\u662Fguide\u7684side1" tabindex="-1">\u8FD9\u662Fguide\u7684side1 <a class="header-anchor" href="#\u8FD9\u662Fguide\u7684side1" aria-hidden="true">#</a></h1><blockquote><p>\u6D4B\u8BD5</p></blockquote><h2 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> DefaultThemeOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> SidebarConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NavbarConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vuepress/theme-default&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token literal-property property">sidebar</span><span class="token operator">:</span> SidebarConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;/guide&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4FA7\u8FB9\u680F2&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/guide/side1.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/guide/side2.md&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4FA7\u8FB9\u680F1&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/guide/guide1.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/guide/guide2.md&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/plugin&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u63D2\u4EF6&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/plugin/side1.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/plugin/side2.md&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;/side&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4FA7\u8FB9&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/side/side1.md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/side/side2.md&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token literal-property property">navbar</span><span class="token operator">:</span> NavbarConfig <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4E3B\u9875&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/guide/side1&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u63D2\u4EF6&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/plugin/side1&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;\u4FA7\u8FB9&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/side/side1&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> defineUserConfig<span class="token operator">&lt;</span>DefaultThemeOptions<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/vuepress/&quot;</span><span class="token punctuation">,</span>

    <span class="token comment">// site-level locales config</span>

    <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;VuePress&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Vue \u9A71\u52A8\u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668&quot;</span><span class="token punctuation">,</span>

    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;/images/logo.png&quot;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&quot;vuepress/vuepress-next&quot;</span><span class="token punctuation">,</span>

        <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// theme-level locales config</span>

        <span class="token comment">// navbar</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> navbar<span class="token punctuation">,</span>
        <span class="token literal-property property">selectLanguageName</span><span class="token operator">:</span> <span class="token string">&quot;\u7B80\u4F53\u4E2D\u6587&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectLanguageText</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u62E9\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">selectLanguageAriaLabel</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u62E9\u8BED\u8A00&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// sidebar</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> sidebar<span class="token punctuation">,</span>

        <span class="token comment">// page meta</span>
        <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&quot;\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lastUpdatedText</span><span class="token operator">:</span> <span class="token string">&quot;\u4E0A\u6B21\u66F4\u65B0&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">contributorsText</span><span class="token operator">:</span> <span class="token string">&quot;\u8D21\u732E\u8005&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// custom containers</span>
        <span class="token literal-property property">tip</span><span class="token operator">:</span> <span class="token string">&quot;\u63D0\u793A&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">&quot;\u6CE8\u610F&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">danger</span><span class="token operator">:</span> <span class="token string">&quot;\u8B66\u544A&quot;</span><span class="token punctuation">,</span>

        <span class="token comment">// 404 page</span>
        <span class="token literal-property property">notFound</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;\u8FD9\u91CC\u4EC0\u4E48\u90FD\u6CA1\u6709&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6211\u4EEC\u600E\u4E48\u5230\u8FD9\u6765\u4E86\uFF1F&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u8FD9\u662F\u4E00\u4E2A 404 \u9875\u9762&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u770B\u8D77\u6765\u6211\u4EEC\u8FDB\u5165\u4E86\u9519\u8BEF\u7684\u94FE\u63A5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backToHome</span><span class="token operator">:</span> <span class="token string">&quot;\u8FD4\u56DE\u9996\u9875&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">darkMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// a11y</span>
        <span class="token literal-property property">openInNewWindow</span><span class="token operator">:</span> <span class="token string">&quot;\u5728\u65B0\u7A97\u53E3\u6253\u5F00&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toggleDarkMode</span><span class="token operator">:</span> <span class="token string">&quot;\u5207\u6362\u591C\u95F4\u6A21\u5F0F&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">toggleSidebar</span><span class="token operator">:</span> <span class="token string">&quot;\u5207\u6362\u4FA7\u8FB9\u680F&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;@vuepress/plugin-search&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22\u6587\u6863&quot;</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22\u6587\u6863&quot;</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">buttonAriaLabel</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22\u6587\u6863&quot;</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token literal-property property">modal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                <span class="token literal-property property">searchBox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">resetButtonTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">resetButtonAriaLabel</span><span class="token operator">:</span> <span class="token string">&quot;\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&quot;\u53D6\u6D88&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">cancelButtonAriaLabel</span><span class="token operator">:</span> <span class="token string">&quot;\u53D6\u6D88&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">startScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">recentSearchesTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22\u5386\u53F2&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">noRecentSearchesText</span><span class="token operator">:</span> <span class="token string">&quot;\u6CA1\u6709\u641C\u7D22\u5386\u53F2&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">saveRecentSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">removeRecentSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">favoriteSearchesTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u6536\u85CF&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">removeFavoriteSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&quot;\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">errorScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">titleText</span><span class="token operator">:</span> <span class="token string">&quot;\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">helpText</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">selectText</span><span class="token operator">:</span> <span class="token string">&quot;\u9009\u62E9&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">navigateText</span><span class="token operator">:</span> <span class="token string">&quot;\u5207\u6362&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">closeText</span><span class="token operator">:</span> <span class="token string">&quot;\u5173\u95ED&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">searchByText</span><span class="token operator">:</span> <span class="token string">&quot;\u641C\u7D22\u63D0\u4F9B\u8005&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                                <span class="token literal-property property">noResultsScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                                    <span class="token literal-property property">noResultsText</span><span class="token operator">:</span> <span class="token string">&quot;\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">suggestedQueryText</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">openIssueText</span><span class="token operator">:</span> <span class="token string">&quot;\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F&quot;</span><span class="token punctuation">,</span>
                                    <span class="token literal-property property">openIssueLinkText</span><span class="token operator">:</span> <span class="token string">&quot;\u70B9\u51FB\u53CD\u9988&quot;</span><span class="token punctuation">,</span>
                                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token punctuation">[</span>
            <span class="token string">&quot;vuepress-plugin-clipboard&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">align</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div>`,4),e=[o];function r(c,l,u,k,i,y){return a(),s("div",null,e)}var d=n(p,[["render",r]]);export{g as __pageData,d as default};
