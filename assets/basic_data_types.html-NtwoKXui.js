import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,b as d}from"./app-CB3aEOlD.js";const n={},a=d(`<h1 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h1><p>当谈及计算机中的数据时，我们会想到文本、图片、视频、语音、3D 模型等各种形式。尽管这些数据的组织形式各异，但它们都由各种基本数据类型构成。</p><p><strong>基本数据类型是 CPU 可以直接进行运算的类型</strong>，在算法中直接被使用，主要包括以下几种。</p><ul><li>整数类型 <code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code> 。</li><li>浮点数类型 <code>float</code>、<code>double</code> ，用于表示小数。</li><li>字符类型 <code>char</code> ，用于表示各种语言的字母、标点符号甚至表情符号等。</li><li>布尔类型 <code>bool</code> ，用于表示“是”与“否”判断。</li></ul><p><strong>基本数据类型以二进制的形式存储在计算机中</strong>。一个二进制位即为 $1$ 比特。在绝大多数现代操作系统中，$1$ 字节（byte）由 $8$ 比特（bit）组成。</p><p>基本数据类型的取值范围取决于其占用的空间大小。下面以 Java 为例。</p><ul><li>整数类型 <code>byte</code> 占用 $1$ 字节 = $8$ 比特 ，可以表示 $2^{8}$ 个数字。</li><li>整数类型 <code>int</code> 占用 $4$ 字节 = $32$ 比特 ，可以表示 $2^{32}$ 个数字。</li></ul><p>下表列举了 Java 中各种基本数据类型的占用空间、取值范围和默认值。此表格无须死记硬背，大致理解即可，需要时可以通过查表来回忆。</p><p> 表   基本数据类型的占用空间和取值范围 </p><table><thead><tr><th>类型</th><th>符号</th><th>占用空间</th><th>最小值</th><th>最大值</th><th>默认值</th></tr></thead><tbody><tr><td>整数</td><td><code>byte</code></td><td>1 字节</td><td>$-2^7$ ($-128$)</td><td>$2^7 - 1$ ($127$)</td><td>$0$</td></tr><tr><td></td><td><code>short</code></td><td>2 字节</td><td>$-2^{15}$</td><td>$2^{15} - 1$</td><td>$0$</td></tr><tr><td></td><td><code>int</code></td><td>4 字节</td><td>$-2^{31}$</td><td>$2^{31} - 1$</td><td>$0$</td></tr><tr><td></td><td><code>long</code></td><td>8 字节</td><td>$-2^{63}$</td><td>$2^{63} - 1$</td><td>$0$</td></tr><tr><td>浮点数</td><td><code>float</code></td><td>4 字节</td><td>$1.175 \\times 10^{-38}$</td><td>$3.403 \\times 10^{38}$</td><td>$0.0\\text{f}$</td></tr><tr><td></td><td><code>double</code></td><td>8 字节</td><td>$2.225 \\times 10^{-308}$</td><td>$1.798 \\times 10^{308}$</td><td>$0.0$</td></tr><tr><td>字符</td><td><code>char</code></td><td>2 字节</td><td>$0$</td><td>$2^{16} - 1$</td><td>$0$</td></tr><tr><td>布尔</td><td><code>bool</code></td><td>1 字节</td><td>$\\text{false}$</td><td>$\\text{true}$</td><td>$\\text{false}$</td></tr></tbody></table><p>请注意，上表针对的是 Java 的基本数据类型的情况。每种编程语言都有各自的数据类型定义，它们的占用空间、取值范围和默认值可能会有所不同。</p><ul><li>在 Python 中，整数类型 <code>int</code> 可以是任意大小，只受限于可用内存；浮点数 <code>float</code> 是双精度 64 位；没有 <code>char</code> 类型，单个字符实际上是长度为 1 的字符串 <code>str</code> 。</li><li>C 和 C++ 未明确规定基本数据类型的大小，而因实现和平台各异。上表遵循 LP64 <a href="https://en.cppreference.com/w/cpp/language/types#Properties" target="_blank" rel="noopener noreferrer">数据模型</a>，其用于包括 Linux 和 macOS 在内的 Unix 64 位操作系统。</li><li>字符 <code>char</code> 的大小在 C 和 C++ 中为 1 字节，在大多数编程语言中取决于特定的字符编码方法，详见“字符编码”章节。</li><li>即使表示布尔量仅需 1 位（$0$ 或 $1$），它在内存中通常也存储为 1 字节。这是因为现代计算机 CPU 通常将 1 字节作为最小寻址内存单元。</li></ul><p>那么，基本数据类型与数据结构之间有什么联系呢？我们知道，数据结构是在计算机中组织与存储数据的方式。这句话的主语是“结构”而非“数据”。</p><p>如果想表示“一排数字”，我们自然会想到使用数组。这是因为数组的线性结构可以表示数字的相邻关系和顺序关系，但至于存储的内容是整数 <code>int</code>、小数 <code>float</code> 还是字符 <code>char</code> ，则与“数据结构”无关。</p><p>换句话说，<strong>基本数据类型提供了数据的“内容类型”，而数据结构提供了数据的“组织方式”</strong>。例如以下代码，我们用相同的数据结构（数组）来存储与表示不同的基本数据类型，包括 <code>int</code>、<code>float</code>、<code>char</code>、<code>bool</code> 等。</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
# 使用多种基本数据类型来初始化数组
numbers: list[int] = [0] * 5
decimals: list[float] = [0.0] * 5
# Python 的字符实际上是长度为 1 的字符串
characters: list[str] = [&#39;0&#39;] * 5
bools: list[bool] = [False] * 5
# Python 的列表可以自由存储各种基本数据类型和对象引用
data = [0, 0.0, &#39;a&#39;, False, ListNode(0)]
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
int numbers[5];
float decimals[5];
char characters[5];
bool bools[5];
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
int[] numbers = new int[5];
float[] decimals = new float[5];
char[] characters = new char[5];
boolean[] bools = new boolean[5];
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
int[] numbers = new int[5];
float[] decimals = new float[5];
char[] characters = new char[5];
bool[] bools = new bool[5];
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
var numbers = [5]int{}
var decimals = [5]float64{}
var characters = [5]byte{}
var bools = [5]bool{}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
let numbers = Array(repeating: 0, count: 5)
let decimals = Array(repeating: 0.0, count: 5)
let characters: [Character] = Array(repeating: &quot;a&quot;, count: 5)
let bools = Array(repeating: false, count: 5)
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
// JavaScript 的数组可以自由存储各种基本数据类型和对象
const array = [0, 0.0, &#39;a&#39;, false];
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
const numbers: number[] = [];
const characters: string[] = [];
const bools: boolean[] = [];
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
List&lt;int&gt; numbers = List.filled(5, 0);
List&lt;double&gt; decimals = List.filled(5, 0.0);
List&lt;String&gt; characters = List.filled(5, &#39;a&#39;);
List&lt;bool&gt; bools = List.filled(5, false);
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
let numbers: Vec&lt;i32&gt; = vec![0; 5];
let decimals: Vec&lt;f32&gt; = vec![0.0; 5];
let characters: Vec&lt;char&gt; = vec![&#39;0&#39;; 5];
let bools: Vec&lt;bool&gt; = vec![false; 5];
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
int numbers[10];
float decimals[10];
char characters[10];
bool bools[10];
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
// 使用多种基本数据类型来初始化数组
val numbers = IntArray(5)
val decinals = FloatArray(5)
val characters = CharArray(5)
val bools = BooleanArray(5)
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
# Ruby 的列表可以自由存储各种基本数据类型和对象引用
data = [0, 0.0, &#39;a&#39;, false, ListNode(0)]
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=class%20ListNode%3A%0A%20%20%20%20%22%22%22%E9%93%BE%E8%A1%A8%E8%8A%82%E7%82%B9%E7%B1%BB%22%22%22%0A%20%20%20%20def%20__init__%28self,%20val%3A%20int%29%3A%0A%20%20%20%20%20%20%20%20self.val%3A%20int%20%3D%20val%20%20%23%20%E8%8A%82%E7%82%B9%E5%80%BC%0A%20%20%20%20%20%20%20%20self.next%3A%20ListNode%20%7C%20None%20%3D%20None%20%20%23%20%E5%90%8E%E7%BB%A7%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%0A%0A%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%A7%8D%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E6%9D%A5%E5%88%9D%E5%A7%8B%E5%8C%96%E6%95%B0%E7%BB%84%0A%20%20%20%20numbers%20%3D%20%5B0%5D%20*%205%0A%20%20%20%20decimals%20%3D%20%5B0.0%5D%20*%205%0A%20%20%20%20%23%20Python%20%E7%9A%84%E5%AD%97%E7%AC%A6%E5%AE%9E%E9%99%85%E4%B8%8A%E6%98%AF%E9%95%BF%E5%BA%A6%E4%B8%BA%201%20%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%0A%20%20%20%20characters%20%3D%20%5B&#39;0&#39;%5D%20*%205%0A%20%20%20%20bools%20%3D%20%5BFalse%5D%20*%205%0A%20%20%20%20%23%20Python%20%E7%9A%84%E5%88%97%E8%A1%A8%E5%8F%AF%E4%BB%A5%E8%87%AA%E7%94%B1%E5%AD%98%E5%82%A8%E5%90%84%E7%A7%8D%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%BC%95%E7%94%A8%0A%20%20%20%20data%20%3D%20%5B0,%200.0,%20&#39;a&#39;,%20False,%20ListNode%280%29%5D&amp;cumulative=false&amp;curInstr=12&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre>`,45),r=[a];function c(l,i){return o(),e("div",null,r)}const u=t(n,[["render",c],["__file","basic_data_types.html.vue"]]),h=JSON.parse('{"path":"/notebook/other/algo/chapter_data_structure/basic_data_types.html","title":"基本数据类型","lang":"zh-CN","frontmatter":{"description":"基本数据类型 当谈及计算机中的数据时，我们会想到文本、图片、视频、语音、3D 模型等各种形式。尽管这些数据的组织形式各异，但它们都由各种基本数据类型构成。 基本数据类型是 CPU 可以直接进行运算的类型，在算法中直接被使用，主要包括以下几种。 整数类型 byte、short、int、long 。 浮点数类型 float、double ，用于表示小数。 ...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_data_structure/basic_data_types.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"基本数据类型"}],["meta",{"property":"og:description","content":"基本数据类型 当谈及计算机中的数据时，我们会想到文本、图片、视频、语音、3D 模型等各种形式。尽管这些数据的组织形式各异，但它们都由各种基本数据类型构成。 基本数据类型是 CPU 可以直接进行运算的类型，在算法中直接被使用，主要包括以下几种。 整数类型 byte、short、int、long 。 浮点数类型 float、double ，用于表示小数。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基本数据类型\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":6.31,"words":1893},"filePathRelative":"notebook/other/algo/chapter_data_structure/basic_data_types.md","localizedDate":"2025年2月13日","excerpt":"\\n<p>当谈及计算机中的数据时，我们会想到文本、图片、视频、语音、3D 模型等各种形式。尽管这些数据的组织形式各异，但它们都由各种基本数据类型构成。</p>\\n<p><strong>基本数据类型是 CPU 可以直接进行运算的类型</strong>，在算法中直接被使用，主要包括以下几种。</p>\\n<ul>\\n<li>整数类型 <code>byte</code>、<code>short</code>、<code>int</code>、<code>long</code> 。</li>\\n<li>浮点数类型 <code>float</code>、<code>double</code> ，用于表示小数。</li>\\n<li>字符类型 <code>char</code> ，用于表示各种语言的字母、标点符号甚至表情符号等。</li>\\n<li>布尔类型 <code>bool</code> ，用于表示“是”与“否”判断。</li>\\n</ul>","autoDesc":true}');export{u as comp,h as data};
