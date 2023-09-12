import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.67729bda.js";const h=JSON.parse('{"title":"使用vue","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sidebar.md","filePath":"guide/sidebar.md"}'),p={name:"guide/sidebar.md"},e=l(`<h1 id="使用vue" tabindex="-1">使用vue <a class="header-anchor" href="#使用vue" aria-label="Permalink to &quot;使用vue&quot;">​</a></h1><h1 id="sidebar" tabindex="-1">Sidebar <a class="header-anchor" href="#sidebar" aria-label="Permalink to &quot;Sidebar&quot;">​</a></h1><p>The sidebar is the main navigation block for your documentation. You can configure the sidebar menu in <code>themeConfig.sidebar</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Introduction&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/introduction&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Getting Started&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Introduction&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/introduction&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Getting Started&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="the-basics" tabindex="-1">The Basics <a class="header-anchor" href="#the-basics" aria-label="Permalink to &quot;The Basics&quot;">​</a></h2><p>The simplest form of the sidebar menu is passing in a single array of links. The first level item defines the &quot;section&quot; for the sidebar. It should contain <code>text</code>, which is the title of the section, and <code>items</code> which are the actual navigation links.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item A&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-a&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item B&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-b&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title B&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item C&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-c&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Item D&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/item-d&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item A&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-a&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item B&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-b&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title B&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item C&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-c&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Item D&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/item-d&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Each <code>link</code> should specify the path to the actual file starting with <code>/</code>. If you add trailing slash to the end of link, it will show <code>index.md</code> of the corresponding directory.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// This shows \`/guide/index.md\` page.</span></span>
<span class="line"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Introduction&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// This shows \`/guide/index.md\` page.</span></span>
<span class="line"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Introduction&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="multiple-sidebars" tabindex="-1">Multiple Sidebars <a class="header-anchor" href="#multiple-sidebars" aria-label="Permalink to &quot;Multiple Sidebars&quot;">​</a></h2><p>You may show different sidebar depending on the page path. For example, as shown on this site, you might want to create a separate sections of content in your documentation like &quot;Guide&quot; page and &quot;Config&quot; page.</p><p>To do so, first organize your pages into directories for each desired section:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ guide/</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ two.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ config/</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ three.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   └─ four.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ guide/</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ two.md</span></span>
<span class="line"><span style="color:#24292e;">└─ config/</span></span>
<span class="line"><span style="color:#24292e;">   ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">   ├─ three.md</span></span>
<span class="line"><span style="color:#24292e;">   └─ four.md</span></span></code></pre></div><p>Then, update your configuration to define your sidebar for each section. This time, you should pass an object instead of an array.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// This sidebar gets displayed when user is</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// under \`guide\` directory.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// This shows \`/guide/index.md\` page.</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Index&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// /guide/index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;One&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/one&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// /guide/one.md</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Two&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/two&#39;</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// /guide/two.md</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// This sidebar gets displayed when user is</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// under \`config\` directory.</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;Config&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// This shows \`/config/index.md\` page.</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Index&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// /config/index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Three&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/three&#39;</span><span style="color:#E1E4E8;"> }, </span><span style="color:#6A737D;">// /config/three.md</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Four&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/four&#39;</span><span style="color:#E1E4E8;"> } </span><span style="color:#6A737D;">// /config/four.md</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// This sidebar gets displayed when user is</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// under \`guide\` directory.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          items: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// This shows \`/guide/index.md\` page.</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Index&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">// /guide/index.md</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;One&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/one&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">// /guide/one.md</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Two&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/two&#39;</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">// /guide/two.md</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// This sidebar gets displayed when user is</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// under \`config\` directory.</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/config/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;Config&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          items: [</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// This shows \`/config/index.md\` page.</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Index&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">// /config/index.md</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Three&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/three&#39;</span><span style="color:#24292E;"> }, </span><span style="color:#6A737D;">// /config/three.md</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Four&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/four&#39;</span><span style="color:#24292E;"> } </span><span style="color:#6A737D;">// /config/four.md</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="collapsible-sidebar-groups" tabindex="-1">Collapsible Sidebar Groups <a class="header-anchor" href="#collapsible-sidebar-groups" aria-label="Permalink to &quot;Collapsible Sidebar Groups&quot;">​</a></h2><p>By adding <code>collapsible</code> option to the sidebar group, it shows a toggle button to hide/show each section.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title B&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title B&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>All sections are &quot;open&quot; by default. If you would like them to be &quot;closed&quot; on initial page load, set <code>collapsed</code> option to <code>true</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        collapsible: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        collapsed: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        collapsible: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        collapsed: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        items: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,20),o=[e];function t(c,r,i,E,y,d){return n(),a("div",null,o)}const g=s(p,[["render",t]]);export{h as __pageData,g as default};
