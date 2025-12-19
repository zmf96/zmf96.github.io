import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as n,b as d}from"./app-CB3aEOlD.js";const p="/assets/deque_operations-CeFydqFE.png",s="/assets/linkedlist_deque_step1-DijnPaKT.png",o="/assets/linkedlist_deque_step2_push_last-CORzDP5H.png",i="/assets/linkedlist_deque_step3_push_first-D1U3zYiP.png",r="/assets/linkedlist_deque_step4_pop_last-DC3t0sDZ.png",u="/assets/linkedlist_deque_step5_pop_first-D7EKPoDs.png",a="/assets/array_deque_step1-B_3opPg7.png",q="/assets/array_deque_step2_push_last-C4m_FEu3.png",l="/assets/array_deque_step3_push_first-D9PmZRmT.png",c="/assets/array_deque_step4_pop_last-wnGSSWu1.png",_="/assets/array_deque_step5_pop_first-CFYZTQvx.png",h={},m=d('<h1 id="双向队列" tabindex="-1"><a class="header-anchor" href="#双向队列"><span>双向队列</span></a></h1><p>在队列中，我们仅能删除头部元素或在尾部添加元素。如下图所示，<u>双向队列（double-ended queue）</u>提供了更高的灵活性，允许在头部和尾部执行元素的添加或删除操作。</p><figure><img src="'+p+`" alt="双向队列的操作" tabindex="0" loading="lazy"><figcaption>双向队列的操作</figcaption></figure><h2 id="双向队列常用操作" tabindex="-1"><a class="header-anchor" href="#双向队列常用操作"><span>双向队列常用操作</span></a></h2><p>双向队列的常用操作如下表所示，具体的方法名称需要根据所使用的编程语言来确定。</p><p> 表   双向队列操作效率 </p><table><thead><tr><th>方法名</th><th>描述</th><th>时间复杂度</th></tr></thead><tbody><tr><td><code>push_first()</code></td><td>将元素添加至队首</td><td>$O(1)$</td></tr><tr><td><code>push_last()</code></td><td>将元素添加至队尾</td><td>$O(1)$</td></tr><tr><td><code>pop_first()</code></td><td>删除队首元素</td><td>$O(1)$</td></tr><tr><td><code>pop_last()</code></td><td>删除队尾元素</td><td>$O(1)$</td></tr><tr><td><code>peek_first()</code></td><td>访问队首元素</td><td>$O(1)$</td></tr><tr><td><code>peek_last()</code></td><td>访问队尾元素</td><td>$O(1)$</td></tr></tbody></table><p>同样地，我们可以直接使用编程语言中已实现的双向队列类：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;deque.py&quot;
from collections import deque

# 初始化双向队列
deq: deque[int] = deque()

# 元素入队
deq.append(2)      # 添加至队尾
deq.append(5)
deq.append(4)
deq.appendleft(3)  # 添加至队首
deq.appendleft(1)

# 访问元素
front: int = deq[0]  # 队首元素
rear: int = deq[-1]  # 队尾元素

# 元素出队
pop_front: int = deq.popleft()  # 队首元素出队
pop_rear: int = deq.pop()       # 队尾元素出队

# 获取双向队列的长度
size: int = len(deq)

# 判断双向队列是否为空
is_empty: bool = len(deq) == 0
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;deque.cpp&quot;
/* 初始化双向队列 */
deque&lt;int&gt; deque;

/* 元素入队 */
deque.push_back(2);   // 添加至队尾
deque.push_back(5);
deque.push_back(4);
deque.push_front(3);  // 添加至队首
deque.push_front(1);

/* 访问元素 */
int front = deque.front(); // 队首元素
int back = deque.back();   // 队尾元素

/* 元素出队 */
deque.pop_front();  // 队首元素出队
deque.pop_back();   // 队尾元素出队

/* 获取双向队列的长度 */
int size = deque.size();

/* 判断双向队列是否为空 */
bool empty = deque.empty();
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;deque.java&quot;
/* 初始化双向队列 */
Deque&lt;Integer&gt; deque = new LinkedList&lt;&gt;();

/* 元素入队 */
deque.offerLast(2);   // 添加至队尾
deque.offerLast(5);
deque.offerLast(4);
deque.offerFirst(3);  // 添加至队首
deque.offerFirst(1);

/* 访问元素 */
int peekFirst = deque.peekFirst();  // 队首元素
int peekLast = deque.peekLast();    // 队尾元素

/* 元素出队 */
int popFirst = deque.pollFirst();  // 队首元素出队
int popLast = deque.pollLast();    // 队尾元素出队

/* 获取双向队列的长度 */
int size = deque.size();

/* 判断双向队列是否为空 */
boolean isEmpty = deque.isEmpty();
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;deque.cs&quot;
/* 初始化双向队列 */
// 在 C# 中，将链表 LinkedList 看作双向队列来使用
LinkedList&lt;int&gt; deque = new();

/* 元素入队 */
deque.AddLast(2);   // 添加至队尾
deque.AddLast(5);
deque.AddLast(4);
deque.AddFirst(3);  // 添加至队首
deque.AddFirst(1);

/* 访问元素 */
int peekFirst = deque.First.Value;  // 队首元素
int peekLast = deque.Last.Value;    // 队尾元素

/* 元素出队 */
deque.RemoveFirst();  // 队首元素出队
deque.RemoveLast();   // 队尾元素出队

/* 获取双向队列的长度 */
int size = deque.Count;

/* 判断双向队列是否为空 */
bool isEmpty = deque.Count == 0;
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;deque_test.go&quot;
/* 初始化双向队列 */
// 在 Go 中，将 list 作为双向队列使用
deque := list.New()

/* 元素入队 */
deque.PushBack(2)      // 添加至队尾
deque.PushBack(5)
deque.PushBack(4)
deque.PushFront(3)     // 添加至队首
deque.PushFront(1)

/* 访问元素 */
front := deque.Front() // 队首元素
rear := deque.Back()   // 队尾元素

/* 元素出队 */
deque.Remove(front)    // 队首元素出队
deque.Remove(rear)     // 队尾元素出队

/* 获取双向队列的长度 */
size := deque.Len()

/* 判断双向队列是否为空 */
isEmpty := deque.Len() == 0
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;deque.swift&quot;
/* 初始化双向队列 */
// Swift 没有内置的双向队列类，可以把 Array 当作双向队列来使用
var deque: [Int] = []

/* 元素入队 */
deque.append(2) // 添加至队尾
deque.append(5)
deque.append(4)
deque.insert(3, at: 0) // 添加至队首
deque.insert(1, at: 0)

/* 访问元素 */
let peekFirst = deque.first! // 队首元素
let peekLast = deque.last! // 队尾元素

/* 元素出队 */
// 使用 Array 模拟时 popFirst 的复杂度为 O(n)
let popFirst = deque.removeFirst() // 队首元素出队
let popLast = deque.removeLast() // 队尾元素出队

/* 获取双向队列的长度 */
let size = deque.count

/* 判断双向队列是否为空 */
let isEmpty = deque.isEmpty
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;deque.js&quot;
/* 初始化双向队列 */
// JavaScript 没有内置的双端队列，只能把 Array 当作双端队列来使用
const deque = [];

/* 元素入队 */
deque.push(2);
deque.push(5);
deque.push(4);
// 请注意，由于是数组，unshift() 方法的时间复杂度为 O(n)
deque.unshift(3);
deque.unshift(1);

/* 访问元素 */
const peekFirst = deque[0];
const peekLast = deque[deque.length - 1];

/* 元素出队 */
// 请注意，由于是数组，shift() 方法的时间复杂度为 O(n)
const popFront = deque.shift();
const popBack = deque.pop();

/* 获取双向队列的长度 */
const size = deque.length;

/* 判断双向队列是否为空 */
const isEmpty = size === 0;
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;deque.ts&quot;
/* 初始化双向队列 */
// TypeScript 没有内置的双端队列，只能把 Array 当作双端队列来使用
const deque: number[] = [];

/* 元素入队 */
deque.push(2);
deque.push(5);
deque.push(4);
// 请注意，由于是数组，unshift() 方法的时间复杂度为 O(n)
deque.unshift(3);
deque.unshift(1);

/* 访问元素 */
const peekFirst: number = deque[0];
const peekLast: number = deque[deque.length - 1];

/* 元素出队 */
// 请注意，由于是数组，shift() 方法的时间复杂度为 O(n)
const popFront: number = deque.shift() as number;
const popBack: number = deque.pop() as number;

/* 获取双向队列的长度 */
const size: number = deque.length;

/* 判断双向队列是否为空 */
const isEmpty: boolean = size === 0;
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;deque.dart&quot;
/* 初始化双向队列 */
// 在 Dart 中，Queue 被定义为双向队列
Queue&lt;int&gt; deque = Queue&lt;int&gt;();

/* 元素入队 */
deque.addLast(2);  // 添加至队尾
deque.addLast(5);
deque.addLast(4);
deque.addFirst(3); // 添加至队首
deque.addFirst(1);

/* 访问元素 */
int peekFirst = deque.first; // 队首元素
int peekLast = deque.last;   // 队尾元素

/* 元素出队 */
int popFirst = deque.removeFirst(); // 队首元素出队
int popLast = deque.removeLast();   // 队尾元素出队

/* 获取双向队列的长度 */
int size = deque.length;

/* 判断双向队列是否为空 */
bool isEmpty = deque.isEmpty;
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;deque.rs&quot;
/* 初始化双向队列 */
let mut deque: VecDeque&lt;u32&gt; = VecDeque::new();

/* 元素入队 */
deque.push_back(2);  // 添加至队尾
deque.push_back(5);
deque.push_back(4);
deque.push_front(3); // 添加至队首
deque.push_front(1);

/* 访问元素 */
if let Some(front) = deque.front() { // 队首元素
}
if let Some(rear) = deque.back() {   // 队尾元素
}

/* 元素出队 */
if let Some(pop_front) = deque.pop_front() { // 队首元素出队
}
if let Some(pop_rear) = deque.pop_back() {   // 队尾元素出队
}

/* 获取双向队列的长度 */
let size = deque.len();

/* 判断双向队列是否为空 */
let is_empty = deque.is_empty();
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;deque.c&quot;
// C 未提供内置双向队列
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;deque.kt&quot;
/* 初始化双向队列 */
val deque = LinkedList&lt;Int&gt;()

/* 元素入队 */
deque.offerLast(2)  // 添加至队尾
deque.offerLast(5)
deque.offerLast(4)
deque.offerFirst(3) // 添加至队首
deque.offerFirst(1)

/* 访问元素 */
val peekFirst = deque.peekFirst() // 队首元素
val peekLast = deque.peekLast()   // 队尾元素

/* 元素出队 */
val popFirst = deque.pollFirst() // 队首元素出队
val popLast = deque.pollLast()   // 队尾元素出队

/* 获取双向队列的长度 */
val size = deque.size

/* 判断双向队列是否为空 */
val isEmpty = deque.isEmpty()
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;deque.rb&quot;
# 初始化双向队列
# Ruby 没有内直的双端队列，只能把 Array 当作双端队列来使用
deque = []

# 元素如队
deque &lt;&lt; 2
deque &lt;&lt; 5
deque &lt;&lt; 4
# 请注意，由于是数组，Array#unshift 方法的时间复杂度为 O(n)
deque.unshift(3)
deque.unshift(1)

# 访问元素
peek_first = deque.first
peek_last = deque.last

# 元素出队
# 请注意，由于是数组， Array#shift 方法的时间复杂度为 O(n)
pop_front = deque.shift
pop_back = deque.pop

# 获取双向队列的长度
size = deque.length

# 判断双向队列是否为空
is_empty = size.zero?
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;deque.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=from%20collections%20import%20deque%0A%0A%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%0A%20%20%20%20deq%20%3D%20deque%28%29%0A%0A%20%20%20%20%23%20%E5%85%83%E7%B4%A0%E5%85%A5%E9%98%9F%0A%20%20%20%20deq.append%282%29%20%20%23%20%E6%B7%BB%E5%8A%A0%E8%87%B3%E9%98%9F%E5%B0%BE%0A%20%20%20%20deq.append%285%29%0A%20%20%20%20deq.append%284%29%0A%20%20%20%20deq.appendleft%283%29%20%20%23%20%E6%B7%BB%E5%8A%A0%E8%87%B3%E9%98%9F%E9%A6%96%0A%20%20%20%20deq.appendleft%281%29%0A%20%20%20%20print%28%22%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%20deque%20%3D%22,%20deq%29%0A%0A%20%20%20%20%23%20%E8%AE%BF%E9%97%AE%E5%85%83%E7%B4%A0%0A%20%20%20%20front%20%3D%20deq%5B0%5D%20%20%23%20%E9%98%9F%E9%A6%96%E5%85%83%E7%B4%A0%0A%20%20%20%20print%28%22%E9%98%9F%E9%A6%96%E5%85%83%E7%B4%A0%20front%20%3D%22,%20front%29%0A%20%20%20%20rear%20%3D%20deq%5B-1%5D%20%20%23%20%E9%98%9F%E5%B0%BE%E5%85%83%E7%B4%A0%0A%20%20%20%20print%28%22%E9%98%9F%E5%B0%BE%E5%85%83%E7%B4%A0%20rear%20%3D%22,%20rear%29%0A%0A%20%20%20%20%23%20%E5%85%83%E7%B4%A0%E5%87%BA%E9%98%9F%0A%20%20%20%20pop_front%20%3D%20deq.popleft%28%29%20%20%23%20%E9%98%9F%E9%A6%96%E5%85%83%E7%B4%A0%E5%87%BA%E9%98%9F%0A%20%20%20%20print%28%22%E9%98%9F%E9%A6%96%E5%87%BA%E9%98%9F%E5%85%83%E7%B4%A0%20%20pop_front%20%3D%22,%20pop_front%29%0A%20%20%20%20print%28%22%E9%98%9F%E9%A6%96%E5%87%BA%E9%98%9F%E5%90%8E%20deque%20%3D%22,%20deq%29%0A%20%20%20%20pop_rear%20%3D%20deq.pop%28%29%20%20%23%20%E9%98%9F%E5%B0%BE%E5%85%83%E7%B4%A0%E5%87%BA%E9%98%9F%0A%20%20%20%20print%28%22%E9%98%9F%E5%B0%BE%E5%87%BA%E9%98%9F%E5%85%83%E7%B4%A0%20%20pop_rear%20%3D%22,%20pop_rear%29%0A%20%20%20%20print%28%22%E9%98%9F%E5%B0%BE%E5%87%BA%E9%98%9F%E5%90%8E%20deque%20%3D%22,%20deq%29%0A%0A%20%20%20%20%23%20%E8%8E%B7%E5%8F%96%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E7%9A%84%E9%95%BF%E5%BA%A6%0A%20%20%20%20size%20%3D%20len%28deq%29%0A%20%20%20%20print%28%22%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E9%95%BF%E5%BA%A6%20size%20%3D%22,%20size%29%0A%0A%20%20%20%20%23%20%E5%88%A4%E6%96%AD%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%0A%20%20%20%20is_empty%20%3D%20len%28deq%29%20%3D%3D%200%0A%20%20%20%20print%28%22%E5%8F%8C%E5%90%91%E9%98%9F%E5%88%97%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%20%3D%22,%20is_empty%29&amp;cumulative=false&amp;curInstr=3&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><h2 id="双向队列实现" tabindex="-1"><a class="header-anchor" href="#双向队列实现"><span>双向队列实现 *</span></a></h2><p>双向队列的实现与队列类似，可以选择链表或数组作为底层数据结构。</p><h3 id="基于双向链表的实现" tabindex="-1"><a class="header-anchor" href="#基于双向链表的实现"><span>基于双向链表的实现</span></a></h3><p>回顾上一节内容，我们使用普通单向链表来实现队列，因为它可以方便地删除头节点（对应出队操作）和在尾节点后添加新节点（对应入队操作）。</p><p>对于双向队列而言，头部和尾部都可以执行入队和出队操作。换句话说，双向队列需要实现另一个对称方向的操作。为此，我们采用“双向链表”作为双向队列的底层数据结构。</p><p>如下图所示，我们将双向链表的头节点和尾节点视为双向队列的队首和队尾，同时实现在两端添加和删除节点的功能。</p><p>=== &quot;LinkedListDeque&quot; <img src="`+s+'" alt="基于链表实现双向队列的入队出队操作" loading="lazy"></p><p>=== &quot;push_last()&quot; <img src="'+o+'" alt="linkedlist_deque_push_last" loading="lazy"></p><p>=== &quot;push_first()&quot; <img src="'+i+'" alt="linkedlist_deque_push_first" loading="lazy"></p><p>=== &quot;pop_last()&quot; <img src="'+r+'" alt="linkedlist_deque_pop_last" loading="lazy"></p><p>=== &quot;pop_first()&quot; <img src="'+u+'" alt="linkedlist_deque_pop_first" loading="lazy"></p><p>实现代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{linkedlist_deque}-[class]{linked_list_deque}-[func]{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="基于数组的实现" tabindex="-1"><a class="header-anchor" href="#基于数组的实现"><span>基于数组的实现</span></a></h3><p>如下图所示，与基于数组实现队列类似，我们也可以使用环形数组来实现双向队列。</p><p>=== &quot;ArrayDeque&quot; <img src="'+a+'" alt="基于数组实现双向队列的入队出队操作" loading="lazy"></p><p>=== &quot;push_last()&quot; <img src="'+q+'" alt="array_deque_push_last" loading="lazy"></p><p>=== &quot;push_first()&quot; <img src="'+l+'" alt="array_deque_push_first" loading="lazy"></p><p>=== &quot;pop_last()&quot; <img src="'+c+'" alt="array_deque_pop_last" loading="lazy"></p><p>=== &quot;pop_first()&quot; <img src="'+_+'" alt="array_deque_pop_first" loading="lazy"></p><p>在队列的实现基础上，仅需增加“队首入队”和“队尾出队”的方法：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{array_deque}-[class]{array_deque}-[func]{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="双向队列应用" tabindex="-1"><a class="header-anchor" href="#双向队列应用"><span>双向队列应用</span></a></h2><p>双向队列兼具栈与队列的逻辑，<strong>因此它可以实现这两者的所有应用场景，同时提供更高的自由度</strong>。</p><p>我们知道，软件的“撤销”功能通常使用栈来实现：系统将每次更改操作 <code>push</code> 到栈中，然后通过 <code>pop</code> 实现撤销。然而，考虑到系统资源的限制，软件通常会限制撤销的步数（例如仅允许保存 $50$ 步）。当栈的长度超过 $50$ 时，软件需要在栈底（队首）执行删除操作。<strong>但栈无法实现该功能，此时就需要使用双向队列来替代栈</strong>。请注意，“撤销”的核心逻辑仍然遵循栈的先入后出原则，只是双向队列能够更加灵活地实现一些额外逻辑。</p>',63),E=[m];function f(g,A){return n(),t("div",null,E)}const F=e(h,[["render",f],["__file","deque.html.vue"]]),b=JSON.parse('{"path":"/notebook/other/algo/chapter_stack_and_queue/deque.html","title":"双向队列","lang":"zh-CN","frontmatter":{"description":"双向队列 在队列中，我们仅能删除头部元素或在尾部添加元素。如下图所示，双向队列（double-ended queue）提供了更高的灵活性，允许在头部和尾部执行元素的添加或删除操作。 双向队列的操作双向队列的操作 双向队列常用操作 双向队列的常用操作如下表所示，具体的方法名称需要根据所使用的编程语言来确定。 表 双向队列操作效率 同样地，我们可以直接使用...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_stack_and_queue/deque.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"双向队列"}],["meta",{"property":"og:description","content":"双向队列 在队列中，我们仅能删除头部元素或在尾部添加元素。如下图所示，双向队列（double-ended queue）提供了更高的灵活性，允许在头部和尾部执行元素的添加或删除操作。 双向队列的操作双向队列的操作 双向队列常用操作 双向队列的常用操作如下表所示，具体的方法名称需要根据所使用的编程语言来确定。 表 双向队列操作效率 同样地，我们可以直接使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双向队列\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"双向队列常用操作","slug":"双向队列常用操作","link":"#双向队列常用操作","children":[]},{"level":2,"title":"双向队列实现 *","slug":"双向队列实现","link":"#双向队列实现","children":[{"level":3,"title":"基于双向链表的实现","slug":"基于双向链表的实现","link":"#基于双向链表的实现","children":[]},{"level":3,"title":"基于数组的实现","slug":"基于数组的实现","link":"#基于数组的实现","children":[]}]},{"level":2,"title":"双向队列应用","slug":"双向队列应用","link":"#双向队列应用","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":10.48,"words":3144},"filePathRelative":"notebook/other/algo/chapter_stack_and_queue/deque.md","localizedDate":"2025年2月13日","excerpt":"\\n<p>在队列中，我们仅能删除头部元素或在尾部添加元素。如下图所示，<u>双向队列（double-ended queue）</u>提供了更高的灵活性，允许在头部和尾部执行元素的添加或删除操作。</p>\\n<figure><figcaption>双向队列的操作</figcaption></figure>\\n<h2>双向队列常用操作</h2>\\n<p>双向队列的常用操作如下表所示，具体的方法名称需要根据所使用的编程语言来确定。</p>\\n<p> 表 &nbsp; 双向队列操作效率 </p>\\n<table>\\n<thead>\\n<tr>\\n<th>方法名</th>\\n<th>描述</th>\\n<th>时间复杂度</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>push_first()</code></td>\\n<td>将元素添加至队首</td>\\n<td>$O(1)$</td>\\n</tr>\\n<tr>\\n<td><code>push_last()</code></td>\\n<td>将元素添加至队尾</td>\\n<td>$O(1)$</td>\\n</tr>\\n<tr>\\n<td><code>pop_first()</code></td>\\n<td>删除队首元素</td>\\n<td>$O(1)$</td>\\n</tr>\\n<tr>\\n<td><code>pop_last()</code></td>\\n<td>删除队尾元素</td>\\n<td>$O(1)$</td>\\n</tr>\\n<tr>\\n<td><code>peek_first()</code></td>\\n<td>访问队首元素</td>\\n<td>$O(1)$</td>\\n</tr>\\n<tr>\\n<td><code>peek_last()</code></td>\\n<td>访问队尾元素</td>\\n<td>$O(1)$</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{F as comp,b as data};
