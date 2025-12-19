import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as p,b as t}from"./app-CB3aEOlD.js";const n="/assets/min_heap_and_max_heap-BcE_ccuZ.png",i="/assets/representation_of_heap-D87BSrBp.png",o="/assets/heap_push_step1-Ds1O2G_Z.png",s="/assets/heap_push_step2-Bji1EfpW.png",l="/assets/heap_push_step3-Dasalt0T.png",h="/assets/heap_push_step4-Bm9VGgZt.png",r="/assets/heap_push_step5-DUMVRFNH.png",u="/assets/heap_push_step6-D22RQzXf.png",m="/assets/heap_push_step7-COgy7p6H.png",c="/assets/heap_push_step8-2eQ1V49j.png",g="/assets/heap_push_step9-C2FDBBK0.png",d="/assets/heap_pop_step1-DO7S5QEu.png",_="/assets/heap_pop_step2-hfzz8Hx7.png",E="/assets/heap_pop_step3-DnG7UU48.png",x="/assets/heap_pop_step4-Ceeq_OI2.png",q="/assets/heap_pop_step5-DzpYIJfi.png",f="/assets/heap_pop_step6-CI_SZrLA.png",A="/assets/heap_pop_step7-CvQk-MI_.png",y="/assets/heap_pop_step8-CT-cd2vO.png",H="/assets/heap_pop_step9-B_KsrUsl.png",k="/assets/heap_pop_step10-D4StTuMh.png",B={},v=t('<h1 id="堆" tabindex="-1"><a class="header-anchor" href="#堆"><span>堆</span></a></h1><p><u>堆（heap）</u>是一种满足特定条件的完全二叉树，主要可分为两种类型，如下图所示。</p><ul><li><u>小顶堆（min heap）</u>：任意节点的值 $\\leq$ 其子节点的值。</li><li><u>大顶堆（max heap）</u>：任意节点的值 $\\geq$ 其子节点的值。</li></ul><figure><img src="'+n+`" alt="小顶堆与大顶堆" tabindex="0" loading="lazy"><figcaption>小顶堆与大顶堆</figcaption></figure><p>堆作为完全二叉树的一个特例，具有以下特性。</p><ul><li>最底层节点靠左填充，其他层的节点都被填满。</li><li>我们将二叉树的根节点称为“堆顶”，将底层最靠右的节点称为“堆底”。</li><li>对于大顶堆（小顶堆），堆顶元素（根节点）的值是最大（最小）的。</li></ul><h2 id="堆的常用操作" tabindex="-1"><a class="header-anchor" href="#堆的常用操作"><span>堆的常用操作</span></a></h2><p>需要指出的是，许多编程语言提供的是<u>优先队列（priority queue）</u>，这是一种抽象的数据结构，定义为具有优先级排序的队列。</p><p>实际上，<strong>堆通常用于实现优先队列，大顶堆相当于元素按从大到小的顺序出队的优先队列</strong>。从使用角度来看，我们可以将“优先队列”和“堆”看作等价的数据结构。因此，本书对两者不做特别区分，统一称作“堆”。</p><p>堆的常用操作见下表，方法名需要根据编程语言来确定。</p><p> 表   堆的操作效率 </p><table><thead><tr><th>方法名</th><th>描述</th><th>时间复杂度</th></tr></thead><tbody><tr><td><code>push()</code></td><td>元素入堆</td><td>$O(\\log n)$</td></tr><tr><td><code>pop()</code></td><td>堆顶元素出堆</td><td>$O(\\log n)$</td></tr><tr><td><code>peek()</code></td><td>访问堆顶元素（对于大 / 小顶堆分别为最大 / 小值）</td><td>$O(1)$</td></tr><tr><td><code>size()</code></td><td>获取堆的元素数量</td><td>$O(1)$</td></tr><tr><td><code>isEmpty()</code></td><td>判断堆是否为空</td><td>$O(1)$</td></tr></tbody></table><p>在实际应用中，我们可以直接使用编程语言提供的堆类（或优先队列类）。</p><p>类似于排序算法中的“从小到大排列”和“从大到小排列”，我们可以通过设置一个 <code>flag</code> 或修改 <code>Comparator</code> 实现“小顶堆”与“大顶堆”之间的转换。代码如下所示：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;heap.py&quot;
# 初始化小顶堆
min_heap, flag = [], 1
# 初始化大顶堆
max_heap, flag = [], -1

# Python 的 heapq 模块默认实现小顶堆
# 考虑将“元素取负”后再入堆，这样就可以将大小关系颠倒，从而实现大顶堆
# 在本示例中，flag = 1 时对应小顶堆，flag = -1 时对应大顶堆

# 元素入堆
heapq.heappush(max_heap, flag * 1)
heapq.heappush(max_heap, flag * 3)
heapq.heappush(max_heap, flag * 2)
heapq.heappush(max_heap, flag * 5)
heapq.heappush(max_heap, flag * 4)

# 获取堆顶元素
peek: int = flag * max_heap[0] # 5

# 堆顶元素出堆
# 出堆元素会形成一个从大到小的序列
val = flag * heapq.heappop(max_heap) # 5
val = flag * heapq.heappop(max_heap) # 4
val = flag * heapq.heappop(max_heap) # 3
val = flag * heapq.heappop(max_heap) # 2
val = flag * heapq.heappop(max_heap) # 1

# 获取堆大小
size: int = len(max_heap)

# 判断堆是否为空
is_empty: bool = not max_heap

# 输入列表并建堆
min_heap: list[int] = [1, 3, 2, 5, 4]
heapq.heapify(min_heap)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;heap.cpp&quot;
/* 初始化堆 */
// 初始化小顶堆
priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minHeap;
// 初始化大顶堆
priority_queue&lt;int, vector&lt;int&gt;, less&lt;int&gt;&gt; maxHeap;

/* 元素入堆 */
maxHeap.push(1);
maxHeap.push(3);
maxHeap.push(2);
maxHeap.push(5);
maxHeap.push(4);

/* 获取堆顶元素 */
int peek = maxHeap.top(); // 5

/* 堆顶元素出堆 */
// 出堆元素会形成一个从大到小的序列
maxHeap.pop(); // 5
maxHeap.pop(); // 4
maxHeap.pop(); // 3
maxHeap.pop(); // 2
maxHeap.pop(); // 1

/* 获取堆大小 */
int size = maxHeap.size();

/* 判断堆是否为空 */
bool isEmpty = maxHeap.empty();

/* 输入列表并建堆 */
vector&lt;int&gt; input{1, 3, 2, 5, 4};
priority_queue&lt;int, vector&lt;int&gt;, greater&lt;int&gt;&gt; minHeap(input.begin(), input.end());
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;heap.java&quot;
/* 初始化堆 */
// 初始化小顶堆
Queue&lt;Integer&gt; minHeap = new PriorityQueue&lt;&gt;();
// 初始化大顶堆（使用 lambda 表达式修改 Comparator 即可）
Queue&lt;Integer&gt; maxHeap = new PriorityQueue&lt;&gt;((a, b) -&gt; b - a);

/* 元素入堆 */
maxHeap.offer(1);
maxHeap.offer(3);
maxHeap.offer(2);
maxHeap.offer(5);
maxHeap.offer(4);

/* 获取堆顶元素 */
int peek = maxHeap.peek(); // 5

/* 堆顶元素出堆 */
// 出堆元素会形成一个从大到小的序列
peek = maxHeap.poll(); // 5
peek = maxHeap.poll(); // 4
peek = maxHeap.poll(); // 3
peek = maxHeap.poll(); // 2
peek = maxHeap.poll(); // 1

/* 获取堆大小 */
int size = maxHeap.size();

/* 判断堆是否为空 */
boolean isEmpty = maxHeap.isEmpty();

/* 输入列表并建堆 */
minHeap = new PriorityQueue&lt;&gt;(Arrays.asList(1, 3, 2, 5, 4));
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;heap.cs&quot;
/* 初始化堆 */
// 初始化小顶堆
PriorityQueue&lt;int, int&gt; minHeap = new();
// 初始化大顶堆（使用 lambda 表达式修改 Comparer 即可）
PriorityQueue&lt;int, int&gt; maxHeap = new(Comparer&lt;int&gt;.Create((x, y) =&gt; y.CompareTo(x)));

/* 元素入堆 */
maxHeap.Enqueue(1, 1);
maxHeap.Enqueue(3, 3);
maxHeap.Enqueue(2, 2);
maxHeap.Enqueue(5, 5);
maxHeap.Enqueue(4, 4);

/* 获取堆顶元素 */
int peek = maxHeap.Peek();//5

/* 堆顶元素出堆 */
// 出堆元素会形成一个从大到小的序列
peek = maxHeap.Dequeue();  // 5
peek = maxHeap.Dequeue();  // 4
peek = maxHeap.Dequeue();  // 3
peek = maxHeap.Dequeue();  // 2
peek = maxHeap.Dequeue();  // 1

/* 获取堆大小 */
int size = maxHeap.Count;

/* 判断堆是否为空 */
bool isEmpty = maxHeap.Count == 0;

/* 输入列表并建堆 */
minHeap = new PriorityQueue&lt;int, int&gt;([(1, 1), (3, 3), (2, 2), (5, 5), (4, 4)]);
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;heap.go&quot;
// Go 语言中可以通过实现 heap.Interface 来构建整数大顶堆
// 实现 heap.Interface 需要同时实现 sort.Interface
type intHeap []any

// Push heap.Interface 的方法，实现推入元素到堆
func (h *intHeap) Push(x any) {
    // Push 和 Pop 使用 pointer receiver 作为参数
    // 因为它们不仅会对切片的内容进行调整，还会修改切片的长度。
    *h = append(*h, x.(int))
}

// Pop heap.Interface 的方法，实现弹出堆顶元素
func (h *intHeap) Pop() any {
    // 待出堆元素存放在最后
    last := (*h)[len(*h)-1]
    *h = (*h)[:len(*h)-1]
    return last
}

// Len sort.Interface 的方法
func (h *intHeap) Len() int {
    return len(*h)
}

// Less sort.Interface 的方法
func (h *intHeap) Less(i, j int) bool {
    // 如果实现小顶堆，则需要调整为小于号
    return (*h)[i].(int) &gt; (*h)[j].(int)
}

// Swap sort.Interface 的方法
func (h *intHeap) Swap(i, j int) {
    (*h)[i], (*h)[j] = (*h)[j], (*h)[i]
}

// Top 获取堆顶元素
func (h *intHeap) Top() any {
    return (*h)[0]
}

/* Driver Code */
func TestHeap(t *testing.T) {
    /* 初始化堆 */
    // 初始化大顶堆
    maxHeap := &amp;intHeap{}
    heap.Init(maxHeap)
    /* 元素入堆 */
    // 调用 heap.Interface 的方法，来添加元素
    heap.Push(maxHeap, 1)
    heap.Push(maxHeap, 3)
    heap.Push(maxHeap, 2)
    heap.Push(maxHeap, 4)
    heap.Push(maxHeap, 5)

    /* 获取堆顶元素 */
    top := maxHeap.Top()
    fmt.Printf(&quot;堆顶元素为 %d\\n&quot;, top)

    /* 堆顶元素出堆 */
    // 调用 heap.Interface 的方法，来移除元素
    heap.Pop(maxHeap) // 5
    heap.Pop(maxHeap) // 4
    heap.Pop(maxHeap) // 3
    heap.Pop(maxHeap) // 2
    heap.Pop(maxHeap) // 1

    /* 获取堆大小 */
    size := len(*maxHeap)
    fmt.Printf(&quot;堆元素数量为 %d\\n&quot;, size)

    /* 判断堆是否为空 */
    isEmpty := len(*maxHeap) == 0
    fmt.Printf(&quot;堆是否为空 %t\\n&quot;, isEmpty)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;heap.swift&quot;
/* 初始化堆 */
// Swift 的 Heap 类型同时支持最大堆和最小堆，且需要引入 swift-collections
var heap = Heap&lt;Int&gt;()

/* 元素入堆 */
heap.insert(1)
heap.insert(3)
heap.insert(2)
heap.insert(5)
heap.insert(4)

/* 获取堆顶元素 */
var peek = heap.max()!

/* 堆顶元素出堆 */
peek = heap.removeMax() // 5
peek = heap.removeMax() // 4
peek = heap.removeMax() // 3
peek = heap.removeMax() // 2
peek = heap.removeMax() // 1

/* 获取堆大小 */
let size = heap.count

/* 判断堆是否为空 */
let isEmpty = heap.isEmpty

/* 输入列表并建堆 */
let heap2 = Heap([1, 3, 2, 5, 4])
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;heap.js&quot;
// JavaScript 未提供内置 Heap 类
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;heap.ts&quot;
// TypeScript 未提供内置 Heap 类
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;heap.dart&quot;
// Dart 未提供内置 Heap 类
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;heap.rs&quot;
use std::collections::BinaryHeap;
use std::cmp::Reverse;

/* 初始化堆 */
// 初始化小顶堆
let mut min_heap = BinaryHeap::&lt;Reverse&lt;i32&gt;&gt;::new();
// 初始化大顶堆
let mut max_heap = BinaryHeap::new();

/* 元素入堆 */
max_heap.push(1);
max_heap.push(3);
max_heap.push(2);
max_heap.push(5);
max_heap.push(4);

/* 获取堆顶元素 */
let peek = max_heap.peek().unwrap();  // 5

/* 堆顶元素出堆 */
// 出堆元素会形成一个从大到小的序列
let peek = max_heap.pop().unwrap();   // 5
let peek = max_heap.pop().unwrap();   // 4
let peek = max_heap.pop().unwrap();   // 3
let peek = max_heap.pop().unwrap();   // 2
let peek = max_heap.pop().unwrap();   // 1

/* 获取堆大小 */
let size = max_heap.len();

/* 判断堆是否为空 */
let is_empty = max_heap.is_empty();

/* 输入列表并建堆 */
let min_heap = BinaryHeap::from(vec![Reverse(1), Reverse(3), Reverse(2), Reverse(5), Reverse(4)]);
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;heap.c&quot;
// C 未提供内置 Heap 类
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;heap.kt&quot;
/* 初始化堆 */
// 初始化小顶堆
var minHeap = PriorityQueue&lt;Int&gt;()
// 初始化大顶堆（使用 lambda 表达式修改 Comparator 即可）
val maxHeap = PriorityQueue { a: Int, b: Int -&gt; b - a }

/* 元素入堆 */
maxHeap.offer(1)
maxHeap.offer(3)
maxHeap.offer(2)
maxHeap.offer(5)
maxHeap.offer(4)

/* 获取堆顶元素 */
var peek = maxHeap.peek() // 5

/* 堆顶元素出堆 */
// 出堆元素会形成一个从大到小的序列
peek = maxHeap.poll() // 5
peek = maxHeap.poll() // 4
peek = maxHeap.poll() // 3
peek = maxHeap.poll() // 2
peek = maxHeap.poll() // 1

/* 获取堆大小 */
val size = maxHeap.size

/* 判断堆是否为空 */
val isEmpty = maxHeap.isEmpty()

/* 输入列表并建堆 */
minHeap = PriorityQueue(mutableListOf(1, 3, 2, 5, 4))
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;heap.rb&quot;
# Ruby 未提供内置 Heap 类
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;heap.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=import%20heapq%0A%0A%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E5%B0%8F%E9%A1%B6%E5%A0%86%0A%20%20%20%20min_heap,%20flag%20%3D%20%5B%5D,%201%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E5%A4%A7%E9%A1%B6%E5%A0%86%0A%20%20%20%20max_heap,%20flag%20%3D%20%5B%5D,%20-1%0A%20%20%20%20%0A%20%20%20%20%23%20Python%20%E7%9A%84%20heapq%20%E6%A8%A1%E5%9D%97%E9%BB%98%E8%AE%A4%E5%AE%9E%E7%8E%B0%E5%B0%8F%E9%A1%B6%E5%A0%86%0A%20%20%20%20%23%20%E8%80%83%E8%99%91%E5%B0%86%E2%80%9C%E5%85%83%E7%B4%A0%E5%8F%96%E8%B4%9F%E2%80%9D%E5%90%8E%E5%86%8D%E5%85%A5%E5%A0%86%EF%BC%8C%E8%BF%99%E6%A0%B7%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%B0%86%E5%A4%A7%E5%B0%8F%E5%85%B3%E7%B3%BB%E9%A2%A0%E5%80%92%EF%BC%8C%E4%BB%8E%E8%80%8C%E5%AE%9E%E7%8E%B0%E5%A4%A7%E9%A1%B6%E5%A0%86%0A%20%20%20%20%23%20%E5%9C%A8%E6%9C%AC%E7%A4%BA%E4%BE%8B%E4%B8%AD%EF%BC%8Cflag%20%3D%201%20%E6%97%B6%E5%AF%B9%E5%BA%94%E5%B0%8F%E9%A1%B6%E5%A0%86%EF%BC%8Cflag%20%3D%20-1%20%E6%97%B6%E5%AF%B9%E5%BA%94%E5%A4%A7%E9%A1%B6%E5%A0%86%0A%20%20%20%20%0A%20%20%20%20%23%20%E5%85%83%E7%B4%A0%E5%85%A5%E5%A0%86%0A%20%20%20%20heapq.heappush%28max_heap,%20flag%20*%201%29%0A%20%20%20%20heapq.heappush%28max_heap,%20flag%20*%203%29%0A%20%20%20%20heapq.heappush%28max_heap,%20flag%20*%202%29%0A%20%20%20%20heapq.heappush%28max_heap,%20flag%20*%205%29%0A%20%20%20%20heapq.heappush%28max_heap,%20flag%20*%204%29%0A%20%20%20%20%0A%20%20%20%20%23%20%E8%8E%B7%E5%8F%96%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A0%0A%20%20%20%20peek%20%3D%20flag%20*%20max_heap%5B0%5D%20%23%205%0A%20%20%20%20%0A%20%20%20%20%23%20%E5%A0%86%E9%A1%B6%E5%85%83%E7%B4%A0%E5%87%BA%E5%A0%86%0A%20%20%20%20%23%20%E5%87%BA%E5%A0%86%E5%85%83%E7%B4%A0%E4%BC%9A%E5%BD%A2%E6%88%90%E4%B8%80%E4%B8%AA%E4%BB%8E%E5%A4%A7%E5%88%B0%E5%B0%8F%E7%9A%84%E5%BA%8F%E5%88%97%0A%20%20%20%20val%20%3D%20flag%20*%20heapq.heappop%28max_heap%29%20%23%205%0A%20%20%20%20val%20%3D%20flag%20*%20heapq.heappop%28max_heap%29%20%23%204%0A%20%20%20%20val%20%3D%20flag%20*%20heapq.heappop%28max_heap%29%20%23%203%0A%20%20%20%20val%20%3D%20flag%20*%20heapq.heappop%28max_heap%29%20%23%202%0A%20%20%20%20val%20%3D%20flag%20*%20heapq.heappop%28max_heap%29%20%23%201%0A%20%20%20%20%0A%20%20%20%20%23%20%E8%8E%B7%E5%8F%96%E5%A0%86%E5%A4%A7%E5%B0%8F%0A%20%20%20%20size%20%3D%20len%28max_heap%29%0A%20%20%20%20%0A%20%20%20%20%23%20%E5%88%A4%E6%96%AD%E5%A0%86%E6%98%AF%E5%90%A6%E4%B8%BA%E7%A9%BA%0A%20%20%20%20is_empty%20%3D%20not%20max_heap%0A%20%20%20%20%0A%20%20%20%20%23%20%E8%BE%93%E5%85%A5%E5%88%97%E8%A1%A8%E5%B9%B6%E5%BB%BA%E5%A0%86%0A%20%20%20%20min_heap%20%3D%20%5B1,%203,%202,%205,%204%5D%0A%20%20%20%20heapq.heapify%28min_heap%29&amp;cumulative=false&amp;curInstr=3&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><h2 id="堆的实现" tabindex="-1"><a class="header-anchor" href="#堆的实现"><span>堆的实现</span></a></h2><p>下文实现的是大顶堆。若要将其转换为小顶堆，只需将所有大小逻辑判断进行逆转（例如，将 $\\geq$ 替换为 $\\leq$ ）。感兴趣的读者可以自行实现。</p><h3 id="堆的存储与表示" tabindex="-1"><a class="header-anchor" href="#堆的存储与表示"><span>堆的存储与表示</span></a></h3><p>“二叉树”章节讲过，完全二叉树非常适合用数组来表示。由于堆正是一种完全二叉树，<strong>因此我们将采用数组来存储堆</strong>。</p><p>当使用数组表示二叉树时，元素代表节点值，索引代表节点在二叉树中的位置。<strong>节点指针通过索引映射公式来实现</strong>。</p><p>如下图所示，给定索引 $i$ ，其左子节点的索引为 $2i + 1$ ，右子节点的索引为 $2i + 2$ ，父节点的索引为 $(i - 1) / 2$（向下整除）。当索引越界时，表示空节点或节点不存在。</p><figure><img src="`+i+'" alt="堆的表示与存储" tabindex="0" loading="lazy"><figcaption>堆的表示与存储</figcaption></figure><p>我们可以将索引映射公式封装成函数，方便后续使用：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{my_heap}-[class]{max_heap}-[func]{parent}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="访问堆顶元素" tabindex="-1"><a class="header-anchor" href="#访问堆顶元素"><span>访问堆顶元素</span></a></h3><p>堆顶元素即为二叉树的根节点，也就是列表的首个元素：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{my_heap}-[class]{max_heap}-[func]{peek}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="元素入堆" tabindex="-1"><a class="header-anchor" href="#元素入堆"><span>元素入堆</span></a></h3><p>给定元素 <code>val</code> ，我们首先将其添加到堆底。添加之后，由于 <code>val</code> 可能大于堆中其他元素，堆的成立条件可能已被破坏，<strong>因此需要修复从插入节点到根节点的路径上的各个节点</strong>，这个操作被称为<u>堆化（heapify）</u>。</p><p>考虑从入堆节点开始，<strong>从底至顶执行堆化</strong>。如下图所示，我们比较插入节点与其父节点的值，如果插入节点更大，则将它们交换。然后继续执行此操作，从底至顶修复堆中的各个节点，直至越过根节点或遇到无须交换的节点时结束。</p><p>=== &quot;&lt;1&gt;&quot; <img src="'+o+'" alt="元素入堆步骤" loading="lazy"></p><p>=== &quot;&lt;2&gt;&quot; <img src="'+s+'" alt="heap_push_step2" loading="lazy"></p><p>=== &quot;&lt;3&gt;&quot; <img src="'+l+'" alt="heap_push_step3" loading="lazy"></p><p>=== &quot;&lt;4&gt;&quot; <img src="'+h+'" alt="heap_push_step4" loading="lazy"></p><p>=== &quot;&lt;5&gt;&quot; <img src="'+r+'" alt="heap_push_step5" loading="lazy"></p><p>=== &quot;&lt;6&gt;&quot; <img src="'+u+'" alt="heap_push_step6" loading="lazy"></p><p>=== &quot;&lt;7&gt;&quot; <img src="'+m+'" alt="heap_push_step7" loading="lazy"></p><p>=== &quot;&lt;8&gt;&quot; <img src="'+c+'" alt="heap_push_step8" loading="lazy"></p><p>=== &quot;&lt;9&gt;&quot; <img src="'+g+'" alt="heap_push_step9" loading="lazy"></p><p>设节点总数为 $n$ ，则树的高度为 $O(\\log n)$ 。由此可知，堆化操作的循环轮数最多为 $O(\\log n)$ ，<strong>元素入堆操作的时间复杂度为 $O(\\log n)$</strong> 。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{my_heap}-[class]{max_heap}-[func]{sift_up}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="堆顶元素出堆" tabindex="-1"><a class="header-anchor" href="#堆顶元素出堆"><span>堆顶元素出堆</span></a></h3><p>堆顶元素是二叉树的根节点，即列表首元素。如果我们直接从列表中删除首元素，那么二叉树中所有节点的索引都会发生变化，这将使得后续使用堆化进行修复变得困难。为了尽量减少元素索引的变动，我们采用以下操作步骤。</p><ol><li>交换堆顶元素与堆底元素（交换根节点与最右叶节点）。</li><li>交换完成后，将堆底从列表中删除（注意，由于已经交换，因此实际上删除的是原来的堆顶元素）。</li><li>从根节点开始，<strong>从顶至底执行堆化</strong>。</li></ol><p>如下图所示，<strong>“从顶至底堆化”的操作方向与“从底至顶堆化”相反</strong>，我们将根节点的值与其两个子节点的值进行比较，将最大的子节点与根节点交换。然后循环执行此操作，直到越过叶节点或遇到无须交换的节点时结束。</p><p>=== &quot;&lt;1&gt;&quot; <img src="'+d+'" alt="堆顶元素出堆步骤" loading="lazy"></p><p>=== &quot;&lt;2&gt;&quot; <img src="'+_+'" alt="heap_pop_step2" loading="lazy"></p><p>=== &quot;&lt;3&gt;&quot; <img src="'+E+'" alt="heap_pop_step3" loading="lazy"></p><p>=== &quot;&lt;4&gt;&quot; <img src="'+x+'" alt="heap_pop_step4" loading="lazy"></p><p>=== &quot;&lt;5&gt;&quot; <img src="'+q+'" alt="heap_pop_step5" loading="lazy"></p><p>=== &quot;&lt;6&gt;&quot; <img src="'+f+'" alt="heap_pop_step6" loading="lazy"></p><p>=== &quot;&lt;7&gt;&quot; <img src="'+A+'" alt="heap_pop_step7" loading="lazy"></p><p>=== &quot;&lt;8&gt;&quot; <img src="'+y+'" alt="heap_pop_step8" loading="lazy"></p><p>=== &quot;&lt;9&gt;&quot; <img src="'+H+'" alt="heap_pop_step9" loading="lazy"></p><p>=== &quot;&lt;10&gt;&quot; <img src="'+k+'" alt="heap_pop_step10" loading="lazy"></p><p>与元素入堆操作相似，堆顶元素出堆操作的时间复杂度也为 $O(\\log n)$ 。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{my_heap}-[class]{max_heap}-[func]{sift_down}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="堆的常见应用" tabindex="-1"><a class="header-anchor" href="#堆的常见应用"><span>堆的常见应用</span></a></h2><ul><li><strong>优先队列</strong>：堆通常作为实现优先队列的首选数据结构，其入队和出队操作的时间复杂度均为 $O(\\log n)$ ，而建堆操作为 $O(n)$ ，这些操作都非常高效。</li><li><strong>堆排序</strong>：给定一组数据，我们可以用它们建立一个堆，然后不断地执行元素出堆操作，从而得到有序数据。然而，我们通常会使用一种更优雅的方式实现堆排序，详见“堆排序”章节。</li><li><strong>获取最大的 $k$ 个元素</strong>：这是一个经典的算法问题，同时也是一种典型应用，例如选择热度前 10 的新闻作为微博热搜，选取销量前 10 的商品等。</li></ul>',88),b=[v];function $(D,z){return p(),a("div",null,b)}const P=e(B,[["render",$],["__file","heap.html.vue"]]),w=JSON.parse('{"path":"/notebook/other/algo/chapter_heap/heap.html","title":"堆","lang":"zh-CN","frontmatter":{"description":"堆 堆（heap）是一种满足特定条件的完全二叉树，主要可分为两种类型，如下图所示。 小顶堆（min heap）：任意节点的值 $\\\\leq$ 其子节点的值。 大顶堆（max heap）：任意节点的值 $\\\\geq$ 其子节点的值。 小顶堆与大顶堆小顶堆与大顶堆 堆作为完全二叉树的一个特例，具有以下特性。 最底层节点靠左填充，其他层的节点都被填满。 我们将二...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_heap/heap.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"堆"}],["meta",{"property":"og:description","content":"堆 堆（heap）是一种满足特定条件的完全二叉树，主要可分为两种类型，如下图所示。 小顶堆（min heap）：任意节点的值 $\\\\leq$ 其子节点的值。 大顶堆（max heap）：任意节点的值 $\\\\geq$ 其子节点的值。 小顶堆与大顶堆小顶堆与大顶堆 堆作为完全二叉树的一个特例，具有以下特性。 最底层节点靠左填充，其他层的节点都被填满。 我们将二..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"堆\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"堆的常用操作","slug":"堆的常用操作","link":"#堆的常用操作","children":[]},{"level":2,"title":"堆的实现","slug":"堆的实现","link":"#堆的实现","children":[{"level":3,"title":"堆的存储与表示","slug":"堆的存储与表示","link":"#堆的存储与表示","children":[]},{"level":3,"title":"访问堆顶元素","slug":"访问堆顶元素","link":"#访问堆顶元素","children":[]},{"level":3,"title":"元素入堆","slug":"元素入堆","link":"#元素入堆","children":[]},{"level":3,"title":"堆顶元素出堆","slug":"堆顶元素出堆","link":"#堆顶元素出堆","children":[]}]},{"level":2,"title":"堆的常见应用","slug":"堆的常见应用","link":"#堆的常见应用","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":13.31,"words":3992},"filePathRelative":"notebook/other/algo/chapter_heap/heap.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>堆（heap）</u>是一种满足特定条件的完全二叉树，主要可分为两种类型，如下图所示。</p>\\n<ul>\\n<li><u>小顶堆（min heap）</u>：任意节点的值 $\\\\leq$ 其子节点的值。</li>\\n<li><u>大顶堆（max heap）</u>：任意节点的值 $\\\\geq$ 其子节点的值。</li>\\n</ul>\\n<figure><figcaption>小顶堆与大顶堆</figcaption></figure>\\n<p>堆作为完全二叉树的一个特例，具有以下特性。</p>\\n<ul>\\n<li>最底层节点靠左填充，其他层的节点都被填满。</li>\\n<li>我们将二叉树的根节点称为“堆顶”，将底层最靠右的节点称为“堆底”。</li>\\n<li>对于大顶堆（小顶堆），堆顶元素（根节点）的值是最大（最小）的。</li>\\n</ul>","autoDesc":true}');export{P as comp,w as data};
