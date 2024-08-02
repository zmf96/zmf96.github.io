import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,e as t}from"./app-CXiloG2g.js";const l={},n=t(`<h1 id="接口" tabindex="-1"><a class="header-anchor" href="#接口"><span>接口</span></a></h1><ul><li><p>延迟绑定，可以实现类似虚函数的多态功能</p></li><li><p>接口类型转换</p><ul><li><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    a</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ReadCloser</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;">*</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">os</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 隐式转换, *os.File 满足 io.ReadCloser 接口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    b</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reader</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">     =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">             // 隐式转换, io.ReadCloser 满足 io.Reader 接口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    c</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Closer</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">     =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">             // 隐式转换, io.ReadCloser 满足 io.Closer 接口</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    d</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reader</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">     =</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Reader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 显式转换, io.Closer 不满足 io.Reader 接口</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    )</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul>`,2),e=[n];function h(k,p){return a(),s("div",null,e)}const o=i(l,[["render",h],["__file","7_接口.html.vue"]]),g=JSON.parse('{"path":"/notebook/go/1_%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/7_%E6%8E%A5%E5%8F%A3.html","title":"接口","lang":"zh-CN","frontmatter":{"description":"接口 延迟绑定，可以实现类似虚函数的多态功能 接口类型转换","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/go/1_%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80/7_%E6%8E%A5%E5%8F%A3.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"接口"}],["meta",{"property":"og:description","content":"接口 延迟绑定，可以实现类似虚函数的多态功能 接口类型转换"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T04:05:12.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2024-08-02T04:05:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-02T04:05:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[],"git":{"createdTime":1722571512000,"updatedTime":1722571512000,"contributors":[{"name":"one","email":"one@one.com","commits":1}]},"readingTime":{"minutes":0.29,"words":87},"filePathRelative":"notebook/go/1_语言基础/7_接口.md","localizedDate":"2024年8月2日","excerpt":"\\n<ul>\\n<li>\\n<p>延迟绑定，可以实现类似虚函数的多态功能</p>\\n</li>\\n<li>\\n<p>接口类型转换</p>\\n<ul>\\n<li>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">var</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    a</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> io</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ReadCloser</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> (</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#C678DD\\">*</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">os</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">File</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)(</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">f</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// 隐式转换, *os.File 满足 io.ReadCloser 接口</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    b</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> io</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Reader</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">     =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">             // 隐式转换, io.ReadCloser 满足 io.Reader 接口</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    c</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> io</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Closer</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">     =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">             // 隐式转换, io.ReadCloser 满足 io.Closer 接口</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\">    d</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\"> io</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Reader</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">     =</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> c</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.(</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">io</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">Reader</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\">// 显式转换, io.Closer 不满足 io.Reader 接口</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    )</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{o as comp,g as data};
