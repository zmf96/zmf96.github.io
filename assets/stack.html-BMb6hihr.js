import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as s,b as e}from"./app-CB3aEOlD.js";const a="/assets/stack_operations-DRz9Nz59.png",p="/assets/linkedlist_stack_step1-DrubuIke.png",c="/assets/linkedlist_stack_step2_push-BGXu2qiO.png",o="/assets/linkedlist_stack_step3_pop-C1iRXdPa.png",i="/assets/array_stack_step1-CW8Clb23.png",r="/assets/array_stack_step2_push-TmSrl3vs.png",k="/assets/array_stack_step3_pop-CaD91xxg.png",l={},d=e('<h1 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h1><p><u>栈（stack）</u>是一种遵循先入后出逻辑的线性数据结构。</p><p>我们可以将栈类比为桌面上的一摞盘子，如果想取出底部的盘子，则需要先将上面的盘子依次移走。我们将盘子替换为各种类型的元素（如整数、字符、对象等），就得到了栈这种数据结构。</p><p>如下图所示，我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈”。</p><figure><img src="'+a+`" alt="栈的先入后出规则" tabindex="0" loading="lazy"><figcaption>栈的先入后出规则</figcaption></figure><h2 id="栈的常用操作" tabindex="-1"><a class="header-anchor" href="#栈的常用操作"><span>栈的常用操作</span></a></h2><p>栈的常用操作如下表所示，具体的方法名需要根据所使用的编程语言来确定。在此，我们以常见的 <code>push()</code>、<code>pop()</code>、<code>peek()</code> 命名为例。</p><p> 表   栈的操作效率 </p><table><thead><tr><th>方法</th><th>描述</th><th>时间复杂度</th></tr></thead><tbody><tr><td><code>push()</code></td><td>元素入栈（添加至栈顶）</td><td>$O(1)$</td></tr><tr><td><code>pop()</code></td><td>栈顶元素出栈</td><td>$O(1)$</td></tr><tr><td><code>peek()</code></td><td>访问栈顶元素</td><td>$O(1)$</td></tr></tbody></table><p>通常情况下，我们可以直接使用编程语言内置的栈类。然而，某些语言可能没有专门提供栈类，这时我们可以将该语言的“数组”或“链表”当作栈来使用，并在程序逻辑上忽略与栈无关的操作。</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;stack.py&quot;
# 初始化栈
# Python 没有内置的栈类，可以把 list 当作栈来使用
stack: list[int] = []

# 元素入栈
stack.append(1)
stack.append(3)
stack.append(2)
stack.append(5)
stack.append(4)

# 访问栈顶元素
peek: int = stack[-1]

# 元素出栈
pop: int = stack.pop()

# 获取栈的长度
size: int = len(stack)

# 判断是否为空
is_empty: bool = len(stack) == 0
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;stack.cpp&quot;
/* 初始化栈 */
stack&lt;int&gt; stack;

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
int top = stack.top();

/* 元素出栈 */
stack.pop(); // 无返回值

/* 获取栈的长度 */
int size = stack.size();

/* 判断是否为空 */
bool empty = stack.empty();
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;stack.java&quot;
/* 初始化栈 */
Stack&lt;Integer&gt; stack = new Stack&lt;&gt;();

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
int peek = stack.peek();

/* 元素出栈 */
int pop = stack.pop();

/* 获取栈的长度 */
int size = stack.size();

/* 判断是否为空 */
boolean isEmpty = stack.isEmpty();
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;stack.cs&quot;
/* 初始化栈 */
Stack&lt;int&gt; stack = new();

/* 元素入栈 */
stack.Push(1);
stack.Push(3);
stack.Push(2);
stack.Push(5);
stack.Push(4);

/* 访问栈顶元素 */
int peek = stack.Peek();

/* 元素出栈 */
int pop = stack.Pop();

/* 获取栈的长度 */
int size = stack.Count;

/* 判断是否为空 */
bool isEmpty = stack.Count == 0;
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;stack_test.go&quot;
/* 初始化栈 */
// 在 Go 中，推荐将 Slice 当作栈来使用
var stack []int

/* 元素入栈 */
stack = append(stack, 1)
stack = append(stack, 3)
stack = append(stack, 2)
stack = append(stack, 5)
stack = append(stack, 4)

/* 访问栈顶元素 */
peek := stack[len(stack)-1]

/* 元素出栈 */
pop := stack[len(stack)-1]
stack = stack[:len(stack)-1]

/* 获取栈的长度 */
size := len(stack)

/* 判断是否为空 */
isEmpty := len(stack) == 0
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;stack.swift&quot;
/* 初始化栈 */
// Swift 没有内置的栈类，可以把 Array 当作栈来使用
var stack: [Int] = []

/* 元素入栈 */
stack.append(1)
stack.append(3)
stack.append(2)
stack.append(5)
stack.append(4)

/* 访问栈顶元素 */
let peek = stack.last!

/* 元素出栈 */
let pop = stack.removeLast()

/* 获取栈的长度 */
let size = stack.count

/* 判断是否为空 */
let isEmpty = stack.isEmpty
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;stack.js&quot;
/* 初始化栈 */
// JavaScript 没有内置的栈类，可以把 Array 当作栈来使用
const stack = [];

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
const peek = stack[stack.length-1];

/* 元素出栈 */
const pop = stack.pop();

/* 获取栈的长度 */
const size = stack.length;

/* 判断是否为空 */
const is_empty = stack.length === 0;
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;stack.ts&quot;
/* 初始化栈 */
// TypeScript 没有内置的栈类，可以把 Array 当作栈来使用
const stack: number[] = [];

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
const peek = stack[stack.length - 1];

/* 元素出栈 */
const pop = stack.pop();

/* 获取栈的长度 */
const size = stack.length;

/* 判断是否为空 */
const is_empty = stack.length === 0;
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;stack.dart&quot;
/* 初始化栈 */
// Dart 没有内置的栈类，可以把 List 当作栈来使用
List&lt;int&gt; stack = [];

/* 元素入栈 */
stack.add(1);
stack.add(3);
stack.add(2);
stack.add(5);
stack.add(4);

/* 访问栈顶元素 */
int peek = stack.last;

/* 元素出栈 */
int pop = stack.removeLast();

/* 获取栈的长度 */
int size = stack.length;

/* 判断是否为空 */
bool isEmpty = stack.isEmpty;
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;stack.rs&quot;
/* 初始化栈 */
// 把 Vec 当作栈来使用
let mut stack: Vec&lt;i32&gt; = Vec::new();

/* 元素入栈 */
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(5);
stack.push(4);

/* 访问栈顶元素 */
let top = stack.last().unwrap();

/* 元素出栈 */
let pop = stack.pop().unwrap();

/* 获取栈的长度 */
let size = stack.len();

/* 判断是否为空 */
let is_empty = stack.is_empty();
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;stack.c&quot;
// C 未提供内置栈
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;stack.kt&quot;
/* 初始化栈 */
val stack = Stack&lt;Int&gt;()

/* 元素入栈 */
stack.push(1)
stack.push(3)
stack.push(2)
stack.push(5)
stack.push(4)

/* 访问栈顶元素 */
val peek = stack.peek()

/* 元素出栈 */
val pop = stack.pop()

/* 获取栈的长度 */
val size = stack.size

/* 判断是否为空 */
val isEmpty = stack.isEmpty()
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;stack.rb&quot;
# 初始化栈
# Ruby 没有内置的栈类，可以把 Array 当作栈来使用
stack = []

# 元素入栈
stack &lt;&lt; 1
stack &lt;&lt; 3
stack &lt;&lt; 2
stack &lt;&lt; 5
stack &lt;&lt; 4

# 访问栈顶元素
peek = stack.last

# 元素出栈
pop = stack.pop

# 获取栈的长度
size = stack.length

# 判断是否为空
is_empty = stack.empty?
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;stack.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E6%A0%88%0A%20%20%20%20%23%20Python%20%E6%B2%A1%E6%9C%89%E5%86%85%E7%BD%AE%E7%9A%84%E6%A0%88%E7%B1%BB%EF%BC%8C%E5%8F%AF%E4%BB%A5%E6%8A%8A%20list%20%E5%BD%93%E4%BD%9C%E6%A0%88%E6%9D%A5%E4%BD%BF%E7%94%A8%0A%20%20%20%20stack%20%3D%20%5B%5D%0A%0A%20%20%20%20%23%20%E5%85%83%E7%B4%A0%E5%85%A5%E6%A0%88%0A%20%20%20%20stack.append%281%29%0A%20%20%20%20stack.append%283%29%0A%20%20%20%20stack.append%282%29%0A%20%20%20%20stack.append%285%29%0A%20%20%20%20stack.append%284%29%0A%20%20%20%20print%28%22%E6%A0%88%20stack%20%3D%22,%20stack%29%0A%0A%20%20%20%20%23%20%E8%AE%BF%E9%97%AE%E6%A0%88%E9%A1%B6%E5%85%83%E7%B4%A0%0A%20%20%20%20peek%20%3D%20stack%5B-1%5D%0A%20%20%20%20print%28%22%E6%A0%88%E9%A1%B6%E5%85%83%E7%B4%A0%20peek%20%3D%22,%20peek%29%0A%0A%20%20%20%20%23%20%E5%85%83%E7%B4%A0%E5%87%BA%E6%A0%88%0A%20%20%20%20pop%20%3D%20stack.pop%28%29%0A%20%20%20%20print%28%22%E5%87%BA%E6%A0%88%E5%85%83%E7%B4%A0%20pop%20%3D%22,%20pop%29%0A%20%20%20%20print%28%22%E5%87%BA%E6%A0%88%E5%90%8E%20stack%20%3D%22,%20stack%29%0A%0A%20%20%20%20%23%20%E8%8E%B7%E5%8F%96%E6%A0%88%E7%9A%84%E9%95%BF%E5%BA%A6%0A%20%20%20%20size%20%3D%20len%28stack%29%0A%20%20%20%20print%28%22%E6%A0%88%E7%9A%84%E9%95%BF%E5%BA%A6%20size%20%3D%22,%20size%29%0A%0A%20%20%20%20%23%20%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%0A%20%20%20%20is_empty%20%3D%20len%28stack%29%20%3D%3D%200%0A%20%20%20%20print%28%22%E6%A0%88%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%20%3D%22,%20is_empty%29&amp;cumulative=false&amp;curInstr=2&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><h2 id="栈的实现" tabindex="-1"><a class="header-anchor" href="#栈的实现"><span>栈的实现</span></a></h2><p>为了深入了解栈的运行机制，我们来尝试自己实现一个栈类。</p><p>栈遵循先入后出的原则，因此我们只能在栈顶添加或删除元素。然而，数组和链表都可以在任意位置添加和删除元素，<strong>因此栈可以视为一种受限制的数组或链表</strong>。换句话说，我们可以“屏蔽”数组或链表的部分无关操作，使其对外表现的逻辑符合栈的特性。</p><h3 id="基于链表的实现" tabindex="-1"><a class="header-anchor" href="#基于链表的实现"><span>基于链表的实现</span></a></h3><p>使用链表实现栈时，我们可以将链表的头节点视为栈顶，尾节点视为栈底。</p><p>如下图所示，对于入栈操作，我们只需将元素插入链表头部，这种节点插入方法被称为“头插法”。而对于出栈操作，只需将头节点从链表中删除即可。</p><p>=== &quot;LinkedListStack&quot; <img src="`+p+'" alt="基于链表实现栈的入栈出栈操作" loading="lazy"></p><p>=== &quot;push()&quot; <img src="'+c+'" alt="linkedlist_stack_push" loading="lazy"></p><p>=== &quot;pop()&quot; <img src="'+o+'" alt="linkedlist_stack_pop" loading="lazy"></p><p>以下是基于链表实现栈的示例代码：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{linkedlist_stack}-[class]{linked_list_stack}-[func]{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="基于数组的实现" tabindex="-1"><a class="header-anchor" href="#基于数组的实现"><span>基于数组的实现</span></a></h3><p>使用数组实现栈时，我们可以将数组的尾部作为栈顶。如下图所示，入栈与出栈操作分别对应在数组尾部添加元素与删除元素，时间复杂度都为 $O(1)$ 。</p><p>=== &quot;ArrayStack&quot; <img src="'+i+'" alt="基于数组实现栈的入栈出栈操作" loading="lazy"></p><p>=== &quot;push()&quot; <img src="'+r+'" alt="array_stack_push" loading="lazy"></p><p>=== &quot;pop()&quot; <img src="'+k+'" alt="array_stack_pop" loading="lazy"></p><p>由于入栈的元素可能会源源不断地增加，因此我们可以使用动态数组，这样就无须自行处理数组扩容问题。以下为示例代码：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{array_stack}-[class]{array_stack}-[func]{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="两种实现对比" tabindex="-1"><a class="header-anchor" href="#两种实现对比"><span>两种实现对比</span></a></h2><p><strong>支持操作</strong></p><p>两种实现都支持栈定义中的各项操作。数组实现额外支持随机访问，但这已超出了栈的定义范畴，因此一般不会用到。</p><p><strong>时间效率</strong></p><p>在基于数组的实现中，入栈和出栈操作都在预先分配好的连续内存中进行，具有很好的缓存本地性，因此效率较高。然而，如果入栈时超出数组容量，会触发扩容机制，导致该次入栈操作的时间复杂度变为 $O(n)$ 。</p><p>在基于链表的实现中，链表的扩容非常灵活，不存在上述数组扩容时效率降低的问题。但是，入栈操作需要初始化节点对象并修改指针，因此效率相对较低。不过，如果入栈元素本身就是节点对象，那么可以省去初始化步骤，从而提高效率。</p><p>综上所述，当入栈与出栈操作的元素是基本数据类型时，例如 <code>int</code> 或 <code>double</code> ，我们可以得出以下结论。</p><ul><li>基于数组实现的栈在触发扩容时效率会降低，但由于扩容是低频操作，因此平均效率更高。</li><li>基于链表实现的栈可以提供更加稳定的效率表现。</li></ul><p><strong>空间效率</strong></p><p>在初始化列表时，系统会为列表分配“初始容量”，该容量可能超出实际需求；并且，扩容机制通常是按照特定倍率（例如 2 倍）进行扩容的，扩容后的容量也可能超出实际需求。因此，<strong>基于数组实现的栈可能造成一定的空间浪费</strong>。</p><p>然而，由于链表节点需要额外存储指针，<strong>因此链表节点占用的空间相对较大</strong>。</p><p>综上，我们不能简单地确定哪种实现更加节省内存，需要针对具体情况进行分析。</p><h2 id="栈的典型应用" tabindex="-1"><a class="header-anchor" href="#栈的典型应用"><span>栈的典型应用</span></a></h2><ul><li><strong>浏览器中的后退与前进、软件中的撤销与反撤销</strong>。每当我们打开新的网页，浏览器就会对上一个网页执行入栈，这样我们就可以通过后退操作回到上一个网页。后退操作实际上是在执行出栈。如果要同时支持后退和前进，那么需要两个栈来配合实现。</li><li><strong>程序内存管理</strong>。每次调用函数时，系统都会在栈顶添加一个栈帧，用于记录函数的上下文信息。在递归函数中，向下递推阶段会不断执行入栈操作，而向上回溯阶段则会不断执行出栈操作。</li></ul>',72),u=[d];function h(m,g){return s(),n("div",null,u)}const E=t(l,[["render",h],["__file","stack.html.vue"]]),q=JSON.parse('{"path":"/notebook/other/algo/chapter_stack_and_queue/stack.html","title":"栈","lang":"zh-CN","frontmatter":{"description":"栈 栈（stack）是一种遵循先入后出逻辑的线性数据结构。 我们可以将栈类比为桌面上的一摞盘子，如果想取出底部的盘子，则需要先将上面的盘子依次移走。我们将盘子替换为各种类型的元素（如整数、字符、对象等），就得到了栈这种数据结构。 如下图所示，我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_stack_and_queue/stack.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"栈"}],["meta",{"property":"og:description","content":"栈 栈（stack）是一种遵循先入后出逻辑的线性数据结构。 我们可以将栈类比为桌面上的一摞盘子，如果想取出底部的盘子，则需要先将上面的盘子依次移走。我们将盘子替换为各种类型的元素（如整数、字符、对象等），就得到了栈这种数据结构。 如下图所示，我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"栈\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"栈的常用操作","slug":"栈的常用操作","link":"#栈的常用操作","children":[]},{"level":2,"title":"栈的实现","slug":"栈的实现","link":"#栈的实现","children":[{"level":3,"title":"基于链表的实现","slug":"基于链表的实现","link":"#基于链表的实现","children":[]},{"level":3,"title":"基于数组的实现","slug":"基于数组的实现","link":"#基于数组的实现","children":[]}]},{"level":2,"title":"两种实现对比","slug":"两种实现对比","link":"#两种实现对比","children":[]},{"level":2,"title":"栈的典型应用","slug":"栈的典型应用","link":"#栈的典型应用","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":9.75,"words":2925},"filePathRelative":"notebook/other/algo/chapter_stack_and_queue/stack.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>栈（stack）</u>是一种遵循先入后出逻辑的线性数据结构。</p>\\n<p>我们可以将栈类比为桌面上的一摞盘子，如果想取出底部的盘子，则需要先将上面的盘子依次移走。我们将盘子替换为各种类型的元素（如整数、字符、对象等），就得到了栈这种数据结构。</p>\\n<p>如下图所示，我们把堆叠元素的顶部称为“栈顶”，底部称为“栈底”。将把元素添加到栈顶的操作叫作“入栈”，删除栈顶元素的操作叫作“出栈”。</p>\\n<figure><figcaption>栈的先入后出规则</figcaption></figure>\\n<h2>栈的常用操作</h2>\\n<p>栈的常用操作如下表所示，具体的方法名需要根据所使用的编程语言来确定。在此，我们以常见的 <code>push()</code>、<code>pop()</code>、<code>peek()</code> 命名为例。</p>","autoDesc":true}');export{E as comp,q as data};
