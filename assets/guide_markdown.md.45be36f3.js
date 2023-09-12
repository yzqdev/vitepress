import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.67729bda.js";const u=JSON.parse('{"title":"关于markdown","description":"","frontmatter":{},"headers":[],"relativePath":"guide/markdown.md","filePath":"guide/markdown.md"}'),p={name:"guide/markdown.md"},e=l(`<h1 id="关于markdown" tabindex="-1">关于markdown <a class="header-anchor" href="#关于markdown" aria-label="Permalink to &quot;关于markdown&quot;">​</a></h1><p>VitePress comes with built in Markdown Extensions.</p><h2 id="header-anchors" tabindex="-1">Header Anchors <a class="header-anchor" href="#header-anchors" aria-label="Permalink to &quot;Header Anchors&quot;">​</a></h2><p>Headers automatically get anchor links applied. Rendering of anchors can be configured using the <code>markdown.anchor</code> option.</p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><p>Both internal and external links gets special treatments.</p><h3 id="internal-links" tabindex="-1">Internal Links <a class="header-anchor" href="#internal-links" aria-label="Permalink to &quot;Internal Links&quot;">​</a></h3><p>Internal links are converted to router link for SPA navigation. Also, every <code>index.md</code> contained in each sub-directory will automatically be converted to <code>index.html</code>, with corresponding URL <code>/</code>.</p><p>For example, given the following directory structure:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ foo</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ two.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ bar</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ three.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   └─ four.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">├─ foo</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ two.md</span></span>
<span class="line"><span style="color:#24292e;">└─ bar</span></span>
<span class="line"><span style="color:#24292e;">   ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">   ├─ three.md</span></span>
<span class="line"><span style="color:#24292e;">   └─ four.md</span></span></code></pre></div><p>And providing you are in <code>foo/one.md</code>:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">Home</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/</span><span style="color:#E1E4E8;">) &lt;!-- sends the user to the root index.md --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">/foo/</span><span style="color:#E1E4E8;">) &lt;!-- sends the user to index.html of directory foo --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">foo heading</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">./#heading</span><span style="color:#E1E4E8;">) &lt;!-- anchors user to a heading in the foo index file --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three</span><span style="color:#E1E4E8;">) &lt;!-- you can omit extention --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - three</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/three.md</span><span style="color:#E1E4E8;">) &lt;!-- you can append .md --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">bar - four</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">../bar/four.html</span><span style="color:#E1E4E8;">) &lt;!-- or you can append .html --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">Home</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/</span><span style="color:#24292E;">) &lt;!-- sends the user to the root index.md --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">/foo/</span><span style="color:#24292E;">) &lt;!-- sends the user to index.html of directory foo --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">foo heading</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">./#heading</span><span style="color:#24292E;">) &lt;!-- anchors user to a heading in the foo index file --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three</span><span style="color:#24292E;">) &lt;!-- you can omit extention --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - three</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/three.md</span><span style="color:#24292E;">) &lt;!-- you can append .md --&gt;</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">bar - four</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">../bar/four.html</span><span style="color:#24292E;">) &lt;!-- or you can append .html --&gt;</span></span></code></pre></div><h3 id="page-suffix" tabindex="-1">Page Suffix <a class="header-anchor" href="#page-suffix" aria-label="Permalink to &quot;Page Suffix&quot;">​</a></h3><p>Pages and internal links get generated with the <code>.html</code> suffix by default.</p><h3 id="external-links" tabindex="-1">External Links <a class="header-anchor" href="#external-links" aria-label="Permalink to &quot;External Links&quot;">​</a></h3><p>Outbound links automatically get <code>target=&quot;_blank&quot; rel=&quot;noreferrer&quot;</code>:</p><ul><li><a href="https://vuejs.org" target="_blank" rel="noreferrer">vuejs.org</a></li><li><a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">VitePress on GitHub</a></li></ul><h2 id="frontmatter" tabindex="-1">Frontmatter <a class="header-anchor" href="#frontmatter" aria-label="Permalink to &quot;Frontmatter&quot;">​</a></h2><p><a href="https://jekyllrb.com/docs/front-matter/" target="_blank" rel="noreferrer">YAML frontmatter</a> is supported out of the box:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">---</span></span>
<span class="line"><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Blogging Like a Hacker</span></span>
<span class="line"><span style="color:#85E89D;">lang</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">en-US</span></span>
<span class="line"><span style="color:#B392F0;">---</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">---</span></span>
<span class="line"><span style="color:#22863A;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Blogging Like a Hacker</span></span>
<span class="line"><span style="color:#22863A;">lang</span><span style="color:#24292E;">: </span><span style="color:#032F62;">en-US</span></span>
<span class="line"><span style="color:#6F42C1;">---</span></span></code></pre></div><p>This data will be available to the rest of the page, along with all custom and theming components.</p><h2 id="github-style-tables" tabindex="-1">GitHub-Style Tables <a class="header-anchor" href="#github-style-tables" aria-label="Permalink to &quot;GitHub-Style Tables&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| Tables        | Are           | Cool  |</span></span>
<span class="line"><span style="color:#e1e4e8;">| ------------- |:-------------:| -----:|</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 2 is      | centered      |   $12 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| zebra stripes | are neat      |    $1 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| Tables        | Are           | Cool  |</span></span>
<span class="line"><span style="color:#24292e;">| ------------- |:-------------:| -----:|</span></span>
<span class="line"><span style="color:#24292e;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#24292e;">| col 2 is      | centered      |   $12 |</span></span>
<span class="line"><span style="color:#24292e;">| zebra stripes | are neat      |    $1 |</span></span></code></pre></div><p><strong>Output</strong></p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><h2 id="emoji-tada" tabindex="-1">Emoji :tada <a class="header-anchor" href="#emoji-tada" aria-label="Permalink to &quot;Emoji :tada&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">:tada: :100:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">:tada: :100:</span></span></code></pre></div><p><strong>Output</strong></p><p>🎉 💯</p><p>A <a href="https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json" target="_blank" rel="noreferrer">list of all emojis</a> is available.</p><h2 id="table-of-contents" tabindex="-1">Table of Contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of Contents&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[[toc]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[[toc]]</span></span></code></pre></div><p><strong>Output</strong></p><nav class="table-of-contents"><ul><li><a href="#header-anchors">Header Anchors</a></li><li><a href="#links">Links</a><ul><li><a href="#internal-links">Internal Links</a></li><li><a href="#page-suffix">Page Suffix</a></li><li><a href="#external-links">External Links</a></li></ul></li><li><a href="#frontmatter">Frontmatter</a></li><li><a href="#github-style-tables">GitHub-Style Tables</a></li><li><a href="#emoji-tada">Emoji :tada</a></li><li><a href="#table-of-contents">Table of Contents</a></li><li><a href="#custom-containers">Custom Containers</a><ul><li><a href="#default-title">Default Title</a></li><li><a href="#custom-title">Custom Title</a></li></ul></li><li><a href="#syntax-highlighting-in-code-blocks">Syntax Highlighting in Code Blocks</a></li><li><a href="#line-highlighting-in-code-blocks">Line Highlighting in Code Blocks</a></li><li><a href="#line-numbers">Line Numbers</a></li><li><a href="#import-code-snippets">Import Code Snippets</a></li><li><a href="#markdown-file-inclusion">Markdown File Inclusion</a></li><li><a href="#advanced-configuration">Advanced Configuration</a></li></ul></nav><p>Rendering of the TOC can be configured using the <code>markdown.toc</code> option.</p><h2 id="custom-containers" tabindex="-1">Custom Containers <a class="header-anchor" href="#custom-containers" aria-label="Permalink to &quot;Custom Containers&quot;">​</a></h2><p>Custom containers can be defined by their types, titles, and contents.</p><h3 id="default-title" tabindex="-1">Default Title <a class="header-anchor" href="#default-title" aria-label="Permalink to &quot;Default Title&quot;">​</a></h3><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: info</span></span>
<span class="line"><span style="color:#E1E4E8;">This is an info box.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a tip.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details</span></span>
<span class="line"><span style="color:#E1E4E8;">This is a details block.</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: info</span></span>
<span class="line"><span style="color:#24292E;">This is an info box.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: tip</span></span>
<span class="line"><span style="color:#24292E;">This is a tip.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: warning</span></span>
<span class="line"><span style="color:#24292E;">This is a warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: danger</span></span>
<span class="line"><span style="color:#24292E;">This is a dangerous warning.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details</span></span>
<span class="line"><span style="color:#24292E;">This is a details block.</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is an info box.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This is a tip.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This is a dangerous warning.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>This is a dangerous warning.</p></div><details class="details custom-block"><summary>Details</summary><p>This is a details block.</p></details><h3 id="custom-title" tabindex="-1">Custom Title <a class="header-anchor" href="#custom-title" aria-label="Permalink to &quot;Custom Title&quot;">​</a></h3><p>You may set custom title by appending the text right after the &quot;type&quot; of the container.</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: danger STOP</span></span>
<span class="line"><span style="color:#E1E4E8;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`js</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello, VitePress!&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: danger STOP</span></span>
<span class="line"><span style="color:#24292E;">Danger zone, do not proceed</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details Click me to view the code</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello, VitePress!&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre></div><p><strong>Output</strong></p><div class="danger custom-block"><p class="custom-block-title">STOP</p><p>Danger zone, do not proceed</p></div><details class="details custom-block"><summary>Click me to view the code</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Hello, VitePress!&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Hello, VitePress!&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div></details><h2 id="syntax-highlighting-in-code-blocks" tabindex="-1">Syntax Highlighting in Code Blocks <a class="header-anchor" href="#syntax-highlighting-in-code-blocks" aria-label="Permalink to &quot;Syntax Highlighting in Code Blocks&quot;">​</a></h2><p>VitePress uses <a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a> to highlight language syntax in Markdown code blocks, using coloured text. Shiki supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:</p><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  name: &#39;MyComponent&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // ...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  name: &#39;MyComponent&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  // ...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`html</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`html</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;MyComponent&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>A <a href="https://github.com/shikijs/shiki/blob/main/docs/languages.md" target="_blank" rel="noreferrer">list of valid languages</a> is available on Shiki’s repository.</p><h2 id="line-highlighting-in-code-blocks" tabindex="-1">Line Highlighting in Code Blocks <a class="header-anchor" href="#line-highlighting-in-code-blocks" aria-label="Permalink to &quot;Line Highlighting in Code Blocks&quot;">​</a></h2><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js{4}</span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: &#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">&#39;Highlighted!&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>In addition to a single line, you can also specify multiple single lines, ranges, or both:</p><ul><li>Line ranges: for example <code>{5-8}</code>, <code>{3-10}</code>, <code>{10-17}</code></li><li>Multiple single lines: for example <code>{4,7,9}</code></li><li>Line ranges and single lines: for example <code>{4,7-13,16,23-27,40}</code></li></ul><p><strong>Input</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default { // Highlighted</span></span>
<span class="line"><span style="color:#e1e4e8;">  data () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      msg: \`Highlighted!</span></span>
<span class="line"><span style="color:#e1e4e8;">      This line isn&#39;t highlighted,</span></span>
<span class="line"><span style="color:#e1e4e8;">      but this and the next 2 are.\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">      motd: &#39;VitePress is awesome&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      lorem: &#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`js{1,4,6-8}</span></span>
<span class="line"><span style="color:#24292e;">export default { // Highlighted</span></span>
<span class="line"><span style="color:#24292e;">  data () {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">      msg: \`Highlighted!</span></span>
<span class="line"><span style="color:#24292e;">      This line isn&#39;t highlighted,</span></span>
<span class="line"><span style="color:#24292e;">      but this and the next 2 are.\`,</span></span>
<span class="line"><span style="color:#24292e;">      motd: &#39;VitePress is awesome&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      lorem: &#39;ipsum&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      msg: </span><span style="color:#9ECBFF;">\`Highlighted!</span></span>
<span class="line"><span style="color:#9ECBFF;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#9ECBFF;">      but this and the next 2 are.\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      motd: </span><span style="color:#9ECBFF;">&#39;VitePress is awesome&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      lorem: </span><span style="color:#9ECBFF;">&#39;ipsum&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> { </span><span style="color:#6A737D;">// Highlighted</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      msg: </span><span style="color:#032F62;">\`Highlighted!</span></span>
<span class="line"><span style="color:#032F62;">      This line isn&#39;t highlighted,</span></span>
<span class="line highlighted"><span style="color:#032F62;">      but this and the next 2 are.\`</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      motd: </span><span style="color:#032F62;">&#39;VitePress is awesome&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      lorem: </span><span style="color:#032F62;">&#39;ipsum&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="line-numbers" tabindex="-1">Line Numbers <a class="header-anchor" href="#line-numbers" aria-label="Permalink to &quot;Line Numbers&quot;">​</a></h2><p>You can enable line numbers for each code blocks via config:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    lineNumbers: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="import-code-snippets" tabindex="-1">Import Code Snippets <a class="header-anchor" href="#import-code-snippets" aria-label="Permalink to &quot;Import Code Snippets&quot;">​</a></h2><p>You can import code snippets from existing files via following syntax:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath</span></span></code></pre></div><p>It also supports <a href="#line-highlighting-in-code-blocks">line highlighting</a>:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/filepath{highlightLines}</span></span></code></pre></div><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snip.ts{2}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snip.ts{2}</span></span></code></pre></div><p><strong>Code file</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vitepress&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { navbar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./nav&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { sidebar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./sidebar&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&quot;/vitepress-starter/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// site-level locales config</span></span>
<span class="line"><span style="color:#E1E4E8;">    outDir: </span><span style="color:#9ECBFF;">&quot;../dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    head: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&quot;link&quot;</span><span style="color:#E1E4E8;">, { rel: </span><span style="color:#9ECBFF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;image/svg+xml&quot;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&quot;/vue.svg&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    lang: </span><span style="color:#9ECBFF;">&quot;zh-CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&quot;Vue 驱动的静态网站生成器&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    vue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reactivityTransform: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&quot;/vue.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// theme-level locales config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// navbar</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: navbar,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: sidebar,</span></span>
<span class="line"><span style="color:#E1E4E8;">        socialLinks: [{ icon: </span><span style="color:#9ECBFF;">&quot;github&quot;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&quot;https://github.com/yzqtpl/vitepress-starter&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pattern: </span><span style="color:#9ECBFF;">&quot;https://github.com/yzqtpl/vitepress-starter/edit/main/docs/:path&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&quot;Edit this page on GitHub&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">&quot;Released under the MIT License.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            copyright: </span><span style="color:#9ECBFF;">&quot;Copyright © 2019-present yzqdev&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vitepress&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { navbar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./nav&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { sidebar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./sidebar&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&quot;/vitepress-starter/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// site-level locales config</span></span>
<span class="line"><span style="color:#24292E;">    outDir: </span><span style="color:#032F62;">&quot;../dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    head: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#032F62;">&quot;link&quot;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&quot;icon&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;image/svg+xml&quot;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&quot;/vue.svg&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    lang: </span><span style="color:#032F62;">&quot;zh-CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&quot;Vue 驱动的静态网站生成器&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    vue: {</span></span>
<span class="line"><span style="color:#24292E;">        reactivityTransform: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&quot;/vue.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// theme-level locales config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// navbar</span></span>
<span class="line"><span style="color:#24292E;">        nav: navbar,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        sidebar: sidebar,</span></span>
<span class="line"><span style="color:#24292E;">        socialLinks: [{ icon: </span><span style="color:#032F62;">&quot;github&quot;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&quot;https://github.com/yzqtpl/vitepress-starter&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        editLink: {</span></span>
<span class="line"><span style="color:#24292E;">            pattern: </span><span style="color:#032F62;">&quot;https://github.com/yzqtpl/vitepress-starter/edit/main/docs/:path&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&quot;Edit this page on GitHub&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        footer: {</span></span>
<span class="line"><span style="color:#24292E;">            message: </span><span style="color:#032F62;">&quot;Released under the MIT License.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            copyright: </span><span style="color:#032F62;">&quot;Copyright © 2019-present yzqdev&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vitepress&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line highlighted"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { navbar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./nav&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { sidebar } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./sidebar&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&quot;/vitepress-starter/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// site-level locales config</span></span>
<span class="line"><span style="color:#E1E4E8;">    outDir: </span><span style="color:#9ECBFF;">&quot;../dist&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    head: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span><span style="color:#9ECBFF;">&quot;link&quot;</span><span style="color:#E1E4E8;">, { rel: </span><span style="color:#9ECBFF;">&quot;icon&quot;</span><span style="color:#E1E4E8;">, type: </span><span style="color:#9ECBFF;">&quot;image/svg+xml&quot;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&quot;/vue.svg&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    lang: </span><span style="color:#9ECBFF;">&quot;zh-CN&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&quot;Vue 驱动的静态网站生成器&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    vue: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        reactivityTransform: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&quot;/vue.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// theme-level locales config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// navbar</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: navbar,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: sidebar,</span></span>
<span class="line"><span style="color:#E1E4E8;">        socialLinks: [{ icon: </span><span style="color:#9ECBFF;">&quot;github&quot;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&quot;https://github.com/yzqtpl/vitepress-starter&quot;</span><span style="color:#E1E4E8;"> }],</span></span>
<span class="line"><span style="color:#E1E4E8;">        editLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            pattern: </span><span style="color:#9ECBFF;">&quot;https://github.com/yzqtpl/vitepress-starter/edit/main/docs/:path&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&quot;Edit this page on GitHub&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            message: </span><span style="color:#9ECBFF;">&quot;Released under the MIT License.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            copyright: </span><span style="color:#9ECBFF;">&quot;Copyright © 2019-present yzqdev&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vitepress&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line highlighted"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { navbar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./nav&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { sidebar } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./sidebar&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&quot;/vitepress-starter/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// site-level locales config</span></span>
<span class="line"><span style="color:#24292E;">    outDir: </span><span style="color:#032F62;">&quot;../dist&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    head: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// [&#39;link&#39;, { rel: &#39;shortcut icon&#39;, type: &#39;image/png&#39;, href: &#39;/hero.png&#39; }],</span></span>
<span class="line"><span style="color:#24292E;">        [</span><span style="color:#032F62;">&quot;link&quot;</span><span style="color:#24292E;">, { rel: </span><span style="color:#032F62;">&quot;icon&quot;</span><span style="color:#24292E;">, type: </span><span style="color:#032F62;">&quot;image/svg+xml&quot;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&quot;/vue.svg&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    lang: </span><span style="color:#032F62;">&quot;zh-CN&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&quot;Vue 驱动的静态网站生成器&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    vue: {</span></span>
<span class="line"><span style="color:#24292E;">        reactivityTransform: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&quot;/vue.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// theme-level locales config</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// navbar</span></span>
<span class="line"><span style="color:#24292E;">        nav: navbar,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        sidebar: sidebar,</span></span>
<span class="line"><span style="color:#24292E;">        socialLinks: [{ icon: </span><span style="color:#032F62;">&quot;github&quot;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&quot;https://github.com/yzqtpl/vitepress-starter&quot;</span><span style="color:#24292E;"> }],</span></span>
<span class="line"><span style="color:#24292E;">        editLink: {</span></span>
<span class="line"><span style="color:#24292E;">            pattern: </span><span style="color:#032F62;">&quot;https://github.com/yzqtpl/vitepress-starter/edit/main/docs/:path&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&quot;Edit this page on GitHub&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        footer: {</span></span>
<span class="line"><span style="color:#24292E;">            message: </span><span style="color:#032F62;">&quot;Released under the MIT License.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            copyright: </span><span style="color:#032F62;">&quot;Copyright © 2019-present yzqdev&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The value of <code>@</code> corresponds to the source root. By default it&#39;s the VitePress project root, unless <code>srcDir</code> is configured.</p></div><p>You can also use a <a href="https://code.visualstudio.com/docs/editor/codebasics#_folding" target="_blank" rel="noreferrer">VS Code region</a> to only include the corresponding part of the code file. You can provide a custom region name after a <code>#</code> following the filepath:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet-with-region.js#snippet{1}</span></span></code></pre></div><p><strong>Code file</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> foo;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// #region snippet</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6A737D;">// #endregion snippet</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> foo;</span></span></code></pre></div><p><strong>Output</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line highlighted"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line highlighted"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// ..</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>You can also specify the language inside the braces (<code>{}</code>) like this:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line highlighting: --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.cs{c#}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- with line highlighting: --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/snippets/snippet.cs{1,2,4-6 c#}</span></span></code></pre></div><p>This is helpful if source language cannot be inferred from your file extension.</p><h2 id="markdown-file-inclusion" tabindex="-1">Markdown File Inclusion <a class="header-anchor" href="#markdown-file-inclusion" aria-label="Permalink to &quot;Markdown File Inclusion&quot;">​</a></h2><p>You can include a markdown file in another markdown file like this:</p><p><strong>Input</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!--@include: ./parts/basics.md--&gt;</span></span></code></pre></div><p><strong>Part file</strong> (<code>parts/basics.md</code>)</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Can be created using </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Can be created using </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;">.</span></span></code></pre></div><p><strong>Equivalent code</strong></p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Can be created using </span><span style="color:#79B8FF;">\`.foorc.json\`</span><span style="color:#E1E4E8;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;font-weight:bold;"># Docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Basics</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Some getting started stuff.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Configuration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Can be created using </span><span style="color:#005CC5;">\`.foorc.json\`</span><span style="color:#24292E;">.</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Note that this does not throw errors if your file is not present. Hence, when using this feature make sure that the contents are being rendered as expected.</p></div><h2 id="advanced-configuration" tabindex="-1">Advanced Configuration <a class="header-anchor" href="#advanced-configuration" aria-label="Permalink to &quot;Advanced Configuration&quot;">​</a></h2><p>VitePress uses <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a> as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the <code>markdown-it</code> instance using the <code>markdown</code> option in <code>.vitepress/config.js</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">anchor</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown-it-anchor&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// options for markdown-it-anchor</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#permalinks</span></span>
<span class="line"><span style="color:#E1E4E8;">    anchor: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      permalink: anchor.permalink.</span><span style="color:#B392F0;">headerLink</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// options for markdown-it-toc-done-right</span></span>
<span class="line"><span style="color:#E1E4E8;">    toc: { level: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">md</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// use more markdown-it plugins!</span></span>
<span class="line"><span style="color:#E1E4E8;">      md.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;markdown-it-xxx&#39;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">anchor</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown-it-anchor&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// options for markdown-it-anchor</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// https://github.com/valeriangalliat/markdown-it-anchor#permalinks</span></span>
<span class="line"><span style="color:#24292E;">    anchor: {</span></span>
<span class="line"><span style="color:#24292E;">      permalink: anchor.permalink.</span><span style="color:#6F42C1;">headerLink</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// options for markdown-it-toc-done-right</span></span>
<span class="line"><span style="color:#24292E;">    toc: { level: [</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">md</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// use more markdown-it plugins!</span></span>
<span class="line"><span style="color:#24292E;">      md.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;markdown-it-xxx&#39;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,113),o=[e];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{u as __pageData,g as default};
