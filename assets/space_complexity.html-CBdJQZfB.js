import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as e,b as o}from"./app-CB3aEOlD.js";const i="/assets/space_types-D6QhStTE.png",r="/assets/space_complexity_common_types-DWCDQr5E.png",c="/assets/space_complexity_recursive_linear-CpfCgYE2.png",u="/assets/space_complexity_recursive_quadratic-DH0SKVn7.png",a="/assets/space_complexity_exponential-DJCmQdrb.png",l={},s=o('<h1 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度"><span>空间复杂度</span></a></h1><p><u>空间复杂度（space complexity）</u>用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p><h2 id="算法相关空间" tabindex="-1"><a class="header-anchor" href="#算法相关空间"><span>算法相关空间</span></a></h2><p>算法在运行过程中使用的内存空间主要包括以下几种。</p><ul><li><strong>输入空间</strong>：用于存储算法的输入数据。</li><li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li><li><strong>输出空间</strong>：用于存储算法的输出数据。</li></ul><p>一般情况下，空间复杂度的统计范围是“暂存空间”加上“输出空间”。</p><p>暂存空间可以进一步划分为三个部分。</p><ul><li><strong>暂存数据</strong>：用于保存算法运行过程中的各种常量、变量、对象等。</li><li><strong>栈帧空间</strong>：用于保存调用函数的上下文数据。系统在每次调用函数时都会在栈顶部创建一个栈帧，函数返回后，栈帧空间会被释放。</li><li><strong>指令空间</strong>：用于保存编译后的程序指令，在实际统计中通常忽略不计。</li></ul><p>在分析一段程序的空间复杂度时，<strong>我们通常统计暂存数据、栈帧空间和输出数据三部分</strong>，如下图所示。</p><figure><img src="'+i+`" alt="算法使用的相关空间" tabindex="0" loading="lazy"><figcaption>算法使用的相关空间</figcaption></figure><p>相关代码如下：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
class Node:
    &quot;&quot;&quot;类&quot;&quot;&quot;
    def __init__(self, x: int):
        self.val: int = x              # 节点值
        self.next: Node | None = None  # 指向下一节点的引用

def function() -&gt; int:
    &quot;&quot;&quot;函数&quot;&quot;&quot;
    # 执行某些操作...
    return 0

def algorithm(n) -&gt; int:  # 输入数据
    A = 0                 # 暂存数据（常量，一般用大写字母表示）
    b = 0                 # 暂存数据（变量）
    node = Node(0)        # 暂存数据（对象）
    c = function()        # 栈帧空间（调用函数）
    return A + b + c      # 输出数据
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
/* 结构体 */
struct Node {
    int val;
    Node *next;
    Node(int x) : val(x), next(nullptr) {}
};

/* 函数 */
int func() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) {        // 输入数据
    const int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node* node = new Node(0); // 暂存数据（对象）
    int c = func();           // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
/* 类 */
class Node {
    int val;
    Node next;
    Node(int x) { val = x; }
}

/* 函数 */
int function() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) {        // 输入数据
    final int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node node = new Node(0);  // 暂存数据（对象）
    int c = function();       // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
/* 类 */
class Node(int x) {
    int val = x;
    Node next;
}

/* 函数 */
int Function() {
    // 执行某些操作...
    return 0;
}

int Algorithm(int n) {        // 输入数据
    const int a = 0;          // 暂存数据（常量）
    int b = 0;                // 暂存数据（变量）
    Node node = new(0);       // 暂存数据（对象）
    int c = Function();       // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
/* 结构体 */
type node struct {
    val  int
    next *node
}

/* 创建 node 结构体  */
func newNode(val int) *node {
    return &amp;node{val: val}
}

/* 函数 */
func function() int {
    // 执行某些操作...
    return 0
}

func algorithm(n int) int { // 输入数据
    const a = 0             // 暂存数据（常量）
    b := 0                  // 暂存数据（变量）
    newNode(0)              // 暂存数据（对象）
    c := function()         // 栈帧空间（调用函数）
    return a + b + c        // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
/* 类 */
class Node {
    var val: Int
    var next: Node?

    init(x: Int) {
        val = x
    }
}

/* 函数 */
func function() -&gt; Int {
    // 执行某些操作...
    return 0
}

func algorithm(n: Int) -&gt; Int { // 输入数据
    let a = 0             // 暂存数据（常量）
    var b = 0             // 暂存数据（变量）
    let node = Node(x: 0) // 暂存数据（对象）
    let c = function()    // 栈帧空间（调用函数）
    return a + b + c      // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
/* 类 */
class Node {
    val;
    next;
    constructor(val) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.next = null;                       // 指向下一节点的引用
    }
}

/* 函数 */
function constFunc() {
    // 执行某些操作
    return 0;
}

function algorithm(n) {       // 输入数据
    const a = 0;              // 暂存数据（常量）
    let b = 0;                // 暂存数据（变量）
    const node = new Node(0); // 暂存数据（对象）
    const c = constFunc();    // 栈帧空间（调用函数）
    return a + b + c;         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
/* 类 */
class Node {
    val: number;
    next: Node | null;
    constructor(val?: number) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.next = null;                       // 指向下一节点的引用
    }
}

/* 函数 */
function constFunc(): number {
    // 执行某些操作
    return 0;
}

function algorithm(n: number): number { // 输入数据
    const a = 0;                        // 暂存数据（常量）
    let b = 0;                          // 暂存数据（变量）
    const node = new Node(0);           // 暂存数据（对象）
    const c = constFunc();              // 栈帧空间（调用函数）
    return a + b + c;                   // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
/* 类 */
class Node {
  int val;
  Node next;
  Node(this.val, [this.next]);
}

/* 函数 */
int function() {
  // 执行某些操作...
  return 0;
}

int algorithm(int n) {  // 输入数据
  const int a = 0;      // 暂存数据（常量）
  int b = 0;            // 暂存数据（变量）
  Node node = Node(0);  // 暂存数据（对象）
  int c = function();   // 栈帧空间（调用函数）
  return a + b + c;     // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
use std::rc::Rc;
use std::cell::RefCell;

/* 结构体 */
struct Node {
    val: i32,
    next: Option&lt;Rc&lt;RefCell&lt;Node&gt;&gt;&gt;,
}

/* 创建 Node 结构体 */
impl Node {
    fn new(val: i32) -&gt; Self {
        Self { val: val, next: None }
    }
}

/* 函数 */
fn function() -&gt; i32 {      
    // 执行某些操作...
    return 0;
}

fn algorithm(n: i32) -&gt; i32 {       // 输入数据
    const a: i32 = 0;               // 暂存数据（常量）
    let mut b = 0;                  // 暂存数据（变量）
    let node = Node::new(0);        // 暂存数据（对象）
    let c = function();             // 栈帧空间（调用函数）
    return a + b + c;               // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
/* 函数 */
int func() {
    // 执行某些操作...
    return 0;
}

int algorithm(int n) { // 输入数据
    const int a = 0;   // 暂存数据（常量）
    int b = 0;         // 暂存数据（变量）
    int c = func();    // 栈帧空间（调用函数）
    return a + b + c;  // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
/* 类 */
class Node(var _val: Int) {
    var next: Node? = null
}

/* 函数 */
fun function(): Int {
    // 执行某些操作...
    return 0
}

fun algorithm(n: Int): Int { // 输入数据
    val a = 0                // 暂存数据（常量）
    var b = 0                // 暂存数据（变量）
    val node = Node(0)       // 暂存数据（对象）
    val c = function()       // 栈帧空间（调用函数）
    return a + b + c         // 输出数据
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
### 类 ###
class Node
    attr_accessor :val      # 节点值
    attr_accessor :next     # 指向下一节点的引用

    def initialize(x)
        @val = x
    end
end

### 函数 ###
def function
    # 执行某些操作...
    0
end

### 算法 ###
def algorithm(n)        # 输入数据
    a = 0               # 暂存数据（常量）
    b = 0               # 暂存数据（变量）
    node = Node.new(0)  # 暂存数据（对象）
    c = function        # 栈帧空间（调用函数）
    a + b + c           # 输出数据
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><h2 id="推算方法" tabindex="-1"><a class="header-anchor" href="#推算方法"><span>推算方法</span></a></h2><p>空间复杂度的推算方法与时间复杂度大致相同，只需将统计对象从“操作数量”转为“使用空间大小”。</p><p>而与时间复杂度不同的是，<strong>我们通常只关注最差空间复杂度</strong>。这是因为内存空间是一项硬性要求，我们必须确保在所有输入数据下都有足够的内存空间预留。</p><p>观察以下代码，最差空间复杂度中的“最差”有两层含义。</p><ol><li><strong>以最差输入数据为准</strong>：当 $n &lt; 10$ 时，空间复杂度为 $O(1)$ ；但当 $n &gt; 10$ 时，初始化的数组 <code>nums</code> 占用 $O(n)$ 空间，因此最差空间复杂度为 $O(n)$ 。</li><li><strong>以算法运行中的峰值内存为准</strong>：例如，程序在执行最后一行之前，占用 $O(1)$ 空间；当初始化数组 <code>nums</code> 时，程序占用 $O(n)$ 空间，因此最差空间复杂度为 $O(n)$ 。</li></ol><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 0               # O(1)
    b = [0] * 10000     # O(1)
    if n &gt; 10:
        nums = [0] * n  # O(n)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 0;               // O(1)
    vector&lt;int&gt; b(10000);    // O(1)
    if (n &gt; 10)
        vector&lt;int&gt; nums(n); // O(n)
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 0;                   // O(1)
    int[] b = new int[10000];    // O(1)
    if (n &gt; 10)
        int[] nums = new int[n]; // O(n)
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 0;                   // O(1)
    int[] b = new int[10000];    // O(1)
    if (n &gt; 10) {
        int[] nums = new int[n]; // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 0                      // O(1)
    b := make([]int, 10000)     // O(1)
    var nums []int
    if n &gt; 10 {
        nums := make([]int, n)  // O(n)
    }
    fmt.Println(a, b, nums)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    let a = 0 // O(1)
    let b = Array(repeating: 0, count: 10000) // O(1)
    if n &gt; 10 {
        let nums = Array(repeating: 0, count: n) // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    const a = 0;                   // O(1)
    const b = new Array(10000);    // O(1)
    if (n &gt; 10) {
        const nums = new Array(n); // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void {
    const a = 0;                   // O(1)
    const b = new Array(10000);    // O(1)
    if (n &gt; 10) {
        const nums = new Array(n); // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 0;                            // O(1)
  List&lt;int&gt; b = List.filled(10000, 0);  // O(1)
  if (n &gt; 10) {
    List&lt;int&gt; nums = List.filled(n, 0); // O(n)
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let a = 0;                              // O(1)
    let b = [0; 10000];                     // O(1)
    if n &gt; 10 {
        let nums = vec![0; n as usize];     // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 0;               // O(1)
    int b[10000];            // O(1)
    if (n &gt; 10)
        int nums[n] = {0};   // O(n)
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    val a = 0                    // O(1)
    val b = IntArray(10000)      // O(1)
    if (n &gt; 10) {
        val nums = IntArray(n)   // O(n)
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 0                           # O(1)
    b = Array.new(10000)            # O(1)
    nums = Array.new(n) if n &gt; 10   # O(n)
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p><strong>在递归函数中，需要注意统计栈帧空间</strong>。观察以下代码：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def function() -&gt; int:
    # 执行某些操作
    return 0

def loop(n: int):
    &quot;&quot;&quot;循环的空间复杂度为 O(1)&quot;&quot;&quot;
    for _ in range(n):
        function()

def recur(n: int):
    &quot;&quot;&quot;递归的空间复杂度为 O(n)&quot;&quot;&quot;
    if n == 1:
        return
    return recur(n - 1)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
int func() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        func();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
int function() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        function();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
int Function() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void Loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        Function();
    }
}
/* 递归的空间复杂度为 O(n) */
int Recur(int n) {
    if (n == 1) return 1;
    return Recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func function() int {
    // 执行某些操作
    return 0
}

/* 循环的空间复杂度为 O(1) */
func loop(n int) {
    for i := 0; i &lt; n; i++ {
        function()
    }
}

/* 递归的空间复杂度为 O(n) */
func recur(n int) {
    if n == 1 {
        return
    }
    recur(n - 1)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
@discardableResult
func function() -&gt; Int {
    // 执行某些操作
    return 0
}

/* 循环的空间复杂度为 O(1) */
func loop(n: Int) {
    for _ in 0 ..&lt; n {
        function()
    }
}

/* 递归的空间复杂度为 O(n) */
func recur(n: Int) {
    if n == 1 {
        return
    }
    recur(n: n - 1)
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function constFunc() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
function loop(n) {
    for (let i = 0; i &lt; n; i++) {
        constFunc();
    }
}
/* 递归的空间复杂度为 O(n) */
function recur(n) {
    if (n === 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function constFunc(): number {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
function loop(n: number): void {
    for (let i = 0; i &lt; n; i++) {
        constFunc();
    }
}
/* 递归的空间复杂度为 O(n) */
function recur(n: number): void {
    if (n === 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
int function() {
  // 执行某些操作
  return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
  for (int i = 0; i &lt; n; i++) {
    function();
  }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
  if (n == 1) return;
  return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn function() -&gt; i32 {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
fn loop(n: i32) {
    for i in 0..n {
        function();
    }
}
/* 递归的空间复杂度为 O(n) */
fn recur(n: i32) {
    if n == 1 {
        return;
    }
    recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
int func() {
    // 执行某些操作
    return 0;
}
/* 循环的空间复杂度为 O(1) */
void loop(int n) {
    for (int i = 0; i &lt; n; i++) {
        func();
    }
}
/* 递归的空间复杂度为 O(n) */
void recur(int n) {
    if (n == 1) return;
    return recur(n - 1);
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun function(): Int {
    // 执行某些操作
    return 0
}
/* 循环的空间复杂度为 O(1) */
fun loop(n: Int) {
    for (i in 0..&lt;n) {
        function()
    }
}
/* 递归的空间复杂度为 O(n) */
fun recur(n: Int) {
    if (n == 1) return
    return recur(n - 1)
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def function
    # 执行某些操作
    0
end

### 循环的空间复杂度为 O(1) ###
def loop(n)
    (0...n).each { function }
end

### 递归的空间复杂度为 O(n) ###
def recur(n)
    return if n == 1
    recur(n - 1)
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p>函数 <code>loop()</code> 和 <code>recur()</code> 的时间复杂度都为 $O(n)$ ，但空间复杂度不同。</p><ul><li>函数 <code>loop()</code> 在循环中调用了 $n$ 次 <code>function()</code> ，每轮中的 <code>function()</code> 都返回并释放了栈帧空间，因此空间复杂度仍为 $O(1)$ 。</li><li>递归函数 <code>recur()</code> 在运行过程中会同时存在 $n$ 个未返回的 <code>recur()</code> ，从而占用 $O(n)$ 的栈帧空间。</li></ul><h2 id="常见类型" tabindex="-1"><a class="header-anchor" href="#常见类型"><span>常见类型</span></a></h2><p>设输入数据大小为 $n$ ，下图展示了常见的空间复杂度类型（从低到高排列）。</p><p>$$ \\begin{aligned} O(1) &lt; O(\\log n) &lt; O(n) &lt; O(n^2) &lt; O(2^n) \\newline \\text{常数阶} &lt; \\text{对数阶} &lt; \\text{线性阶} &lt; \\text{平方阶} &lt; \\text{指数阶} \\end{aligned} $$</p><figure><img src="`+r+'" alt="常见的空间复杂度类型" tabindex="0" loading="lazy"><figcaption>常见的空间复杂度类型</figcaption></figure><h3 id="常数阶-o-1" tabindex="-1"><a class="header-anchor" href="#常数阶-o-1"><span>常数阶 $O(1)$</span></a></h3><p>常数阶常见于数量与输入数据大小 $n$ 无关的常量、变量、对象。</p><p>需要注意的是，在循环中初始化变量或调用函数而占用的内存，在进入下一循环后就会被释放，因此不会累积占用空间，空间复杂度仍为 $O(1)$ ：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{constant}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="线性阶-o-n" tabindex="-1"><a class="header-anchor" href="#线性阶-o-n"><span>线性阶 $O(n)$</span></a></h3><p>线性阶常见于元素数量与 $n$ 成正比的数组、链表、栈、队列等：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{linear}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如下图所示，此函数的递归深度为 $n$ ，即同时存在 $n$ 个未返回的 <code>linear_recur()</code> 函数，使用 $O(n)$ 大小的栈帧空间：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{linear_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+'" alt="递归函数产生的线性阶空间复杂度" tabindex="0" loading="lazy"><figcaption>递归函数产生的线性阶空间复杂度</figcaption></figure><h3 id="平方阶-o-n-2" tabindex="-1"><a class="header-anchor" href="#平方阶-o-n-2"><span>平方阶 $O(n^2)$</span></a></h3><p>平方阶常见于矩阵和图，元素数量与 $n$ 成平方关系：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{quadratic}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如下图所示，该函数的递归深度为 $n$ ，在每个递归函数中都初始化了一个数组，长度分别为 $n$、$n-1$、$\\dots$、$2$、$1$ ，平均长度为 $n / 2$ ，因此总体占用 $O(n^2)$ 空间：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{quadratic_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+u+'" alt="递归函数产生的平方阶空间复杂度" tabindex="0" loading="lazy"><figcaption>递归函数产生的平方阶空间复杂度</figcaption></figure><h3 id="指数阶-o-2-n" tabindex="-1"><a class="header-anchor" href="#指数阶-o-2-n"><span>指数阶 $O(2^n)$</span></a></h3><p>指数阶常见于二叉树。观察下图，层数为 $n$ 的“满二叉树”的节点数量为 $2^n - 1$ ，占用 $O(2^n)$ 空间：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{space_complexity}-[class]{}-[func]{build_tree}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+a+'" alt="满二叉树产生的指数阶空间复杂度" tabindex="0" loading="lazy"><figcaption>满二叉树产生的指数阶空间复杂度</figcaption></figure><h3 id="对数阶-o-log-n" tabindex="-1"><a class="header-anchor" href="#对数阶-o-log-n"><span>对数阶 $O(\\log n)$</span></a></h3><p>对数阶常见于分治算法。例如归并排序，输入长度为 $n$ 的数组，每轮递归将数组从中点处划分为两半，形成高度为 $\\log n$ 的递归树，使用 $O(\\log n)$ 栈帧空间。</p><p>再例如将数字转化为字符串，输入一个正整数 $n$ ，它的位数为 $\\lfloor \\log_{10} n \\rfloor + 1$ ，即对应字符串长度为 $\\lfloor \\log_{10} n \\rfloor + 1$ ，因此空间复杂度为 $O(\\log_{10} n + 1) = O(\\log n)$ 。</p><h2 id="权衡时间与空间" tabindex="-1"><a class="header-anchor" href="#权衡时间与空间"><span>权衡时间与空间</span></a></h2><p>理想情况下，我们希望算法的时间复杂度和空间复杂度都能达到最优。然而在实际情况中，同时优化时间复杂度和空间复杂度通常非常困难。</p><p><strong>降低时间复杂度通常需要以提升空间复杂度为代价，反之亦然</strong>。我们将牺牲内存空间来提升算法运行速度的思路称为“以空间换时间”；反之，则称为“以时间换空间”。</p><p>选择哪种思路取决于我们更看重哪个方面。在大多数情况下，时间比空间更宝贵，因此“以空间换时间”通常是更常用的策略。当然，在数据量很大的情况下，控制空间复杂度也非常重要。</p>',134),p=[s];function d(g,h){return e(),t("div",null,p)}const m=n(l,[["render",d],["__file","space_complexity.html.vue"]]),b=JSON.parse('{"path":"/notebook/other/algo/chapter_computational_complexity/space_complexity.html","title":"空间复杂度","lang":"zh-CN","frontmatter":{"description":"空间复杂度 空间复杂度（space complexity）用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。 算法相关空间 算法在运行过程中使用的内存空间主要包括以下几种。 输入空间：用于存储算法的输入数据。 暂存空间：用于存储算法在运行过程中的变量、对象、函数上下文等数据。 输...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_computational_complexity/space_complexity.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"空间复杂度"}],["meta",{"property":"og:description","content":"空间复杂度 空间复杂度（space complexity）用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。 算法相关空间 算法在运行过程中使用的内存空间主要包括以下几种。 输入空间：用于存储算法的输入数据。 暂存空间：用于存储算法在运行过程中的变量、对象、函数上下文等数据。 输..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-13T02:16:40.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-13T02:16:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"空间复杂度\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-13T02:16:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"算法相关空间","slug":"算法相关空间","link":"#算法相关空间","children":[]},{"level":2,"title":"推算方法","slug":"推算方法","link":"#推算方法","children":[]},{"level":2,"title":"常见类型","slug":"常见类型","link":"#常见类型","children":[{"level":3,"title":"常数阶 $O(1)$","slug":"常数阶-o-1","link":"#常数阶-o-1","children":[]},{"level":3,"title":"线性阶 $O(n)$","slug":"线性阶-o-n","link":"#线性阶-o-n","children":[]},{"level":3,"title":"平方阶 $O(n^2)$","slug":"平方阶-o-n-2","link":"#平方阶-o-n-2","children":[]},{"level":3,"title":"指数阶 $O(2^n)$","slug":"指数阶-o-2-n","link":"#指数阶-o-2-n","children":[]},{"level":3,"title":"对数阶 $O(\\\\log n)$","slug":"对数阶-o-log-n","link":"#对数阶-o-log-n","children":[]}]},{"level":2,"title":"权衡时间与空间","slug":"权衡时间与空间","link":"#权衡时间与空间","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1739413000000,"contributors":[{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":13.48,"words":4044},"filePathRelative":"notebook/other/algo/chapter_computational_complexity/space_complexity.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>空间复杂度（space complexity）</u>用于衡量算法占用内存空间随着数据量变大时的增长趋势。这个概念与时间复杂度非常类似，只需将“运行时间”替换为“占用内存空间”。</p>\\n<h2>算法相关空间</h2>\\n<p>算法在运行过程中使用的内存空间主要包括以下几种。</p>\\n<ul>\\n<li><strong>输入空间</strong>：用于存储算法的输入数据。</li>\\n<li><strong>暂存空间</strong>：用于存储算法在运行过程中的变量、对象、函数上下文等数据。</li>\\n<li><strong>输出空间</strong>：用于存储算法的输出数据。</li>\\n</ul>","autoDesc":true}');export{m as comp,b as data};
