import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as i,b as e}from"./app-CB3aEOlD.js";const o="/assets/time_complexity_simple_example-DQhPIagV.png",a="/assets/asymptotic_upper_bound-Ctwy6jXn.png",r="/assets/time_complexity_common_types-DgbUXOtd.png",l="/assets/time_complexity_constant_linear_quadratic-XrSv9GDC.png",s="/assets/time_complexity_exponential-BMbW6xf2.png",p="/assets/time_complexity_logarithmic-By49_rWP.png",d="/assets/time_complexity_logarithmic_linear-ClE6W5eJ.png",c="/assets/time_complexity_factorial-Bxg6tSHf.png",u={},g=e(`<h1 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h1><p>运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？</p><ol><li><strong>确定运行平台</strong>，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。</li><li><strong>评估各种计算操作所需的运行时间</strong>，例如加法操作 <code>+</code> 需要 1 ns ，乘法操作 <code>*</code> 需要 10 ns ，打印操作 <code>print()</code> 需要 5 ns 等。</li><li><strong>统计代码中所有的计算操作</strong>，并将所有操作的执行时间求和，从而得到运行时间。</li></ol><p>例如在以下代码中，输入数据大小为 $n$ ：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
# 在某运行平台下
def algorithm(n: int):
    a = 2      # 1 ns
    a = a + 1  # 1 ns
    a = a * 2  # 10 ns
    # 循环 n 次
    for _ in range(n):  # 1 ns
        print(0)        # 5 ns
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns
        cout &lt;&lt; 0 &lt;&lt; endl;         // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns
        System.out.println(0);     // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
// 在某运行平台下
void Algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {  // 1 ns
        Console.WriteLine(0);      // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
// 在某运行平台下
func algorithm(n int) {
    a := 2     // 1 ns
    a = a + 1  // 1 ns
    a = a * 2  // 10 ns
    // 循环 n 次
    for i := 0; i &lt; n; i++ {  // 1 ns
        fmt.Println(a)        // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
// 在某运行平台下
func algorithm(n: Int) {
    var a = 2 // 1 ns
    a = a + 1 // 1 ns
    a = a * 2 // 10 ns
    // 循环 n 次
    for _ in 0 ..&lt; n { // 1 ns
        print(0) // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
// 在某运行平台下
function algorithm(n) {
    var a = 2; // 1 ns
    a = a + 1; // 1 ns
    a = a * 2; // 10 ns
    // 循环 n 次
    for(let i = 0; i &lt; n; i++) { // 1 ns
        console.log(0); // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
// 在某运行平台下
function algorithm(n: number): void {
    var a: number = 2; // 1 ns
    a = a + 1; // 1 ns
    a = a * 2; // 10 ns
    // 循环 n 次
    for(let i = 0; i &lt; n; i++) { // 1 ns
        console.log(0); // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
  int a = 2; // 1 ns
  a = a + 1; // 1 ns
  a = a * 2; // 10 ns
  // 循环 n 次
  for (int i = 0; i &lt; n; i++) { // 1 ns
    print(0); // 5 ns
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
// 在某运行平台下
fn algorithm(n: i32) {
    let mut a = 2;      // 1 ns
    a = a + 1;          // 1 ns
    a = a * 2;          // 10 ns
    // 循环 n 次
    for _ in 0..n {     // 1 ns
        println!(&quot;{}&quot;, 0);  // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
// 在某运行平台下
void algorithm(int n) {
    int a = 2;  // 1 ns
    a = a + 1;  // 1 ns
    a = a * 2;  // 10 ns
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // 1 ns
        printf(&quot;%d&quot;, 0);            // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
// 在某运行平台下
fun algorithm(n: Int) {
    var a = 2 // 1 ns
    a = a + 1 // 1 ns
    a = a * 2 // 10 ns
    // 循环 n 次
    for (i in 0..&lt;n) {  // 1 ns
        println(0)      // 5 ns
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
# 在某运行平台下
def algorithm(n)
    a = 2       # 1 ns
    a = a + 1   # 1 ns
    a = a * 2   # 10 ns
    # 循环 n 次
    (0...n).each do # 1 ns
        puts 0      # 5 ns
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
// 在某运行平台下
fn algorithm(n: usize) void {
    var a: i32 = 2; // 1 ns
    a += 1; // 1 ns
    a *= 2; // 10 ns
    // 循环 n 次
    for (0..n) |_| { // 1 ns
        std.debug.print(&quot;{}\\n&quot;, .{0}); // 5 ns
    }
}
\`\`\`
</code></pre><p>根据以上方法，可以得到算法的运行时间为 $(6n + 12)$ ns ：</p><p>$$ 1 + 1 + 10 + (1 + 5) \\times n = 6n + 12 $$</p><p>但实际上，<strong>统计算法的运行时间既不合理也不现实</strong>。首先，我们不希望将预估时间和运行平台绑定，因为算法需要在各种不同的平台上运行。其次，我们很难获知每种操作的运行时间，这给预估过程带来了极大的难度。</p><h2 id="统计时间增长趋势" tabindex="-1"><a class="header-anchor" href="#统计时间增长趋势"><span>统计时间增长趋势</span></a></h2><p>时间复杂度分析统计的不是算法运行时间，<strong>而是算法运行时间随着数据量变大时的增长趋势</strong>。</p><p>“时间增长趋势”这个概念比较抽象，我们通过一个例子来加以理解。假设输入数据大小为 $n$ ，给定三个算法 <code>A</code>、<code>B</code> 和 <code>C</code> ：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
# 算法 A 的时间复杂度：常数阶
def algorithm_A(n: int):
    print(0)
# 算法 B 的时间复杂度：线性阶
def algorithm_B(n: int):
    for _ in range(n):
        print(0)
# 算法 C 的时间复杂度：常数阶
def algorithm_C(n: int):
    for _ in range(1000000):
        print(0)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    cout &lt;&lt; 0 &lt;&lt; endl;
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    System.out.println(0);
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        System.out.println(0);
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        System.out.println(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void AlgorithmA(int n) {
    Console.WriteLine(0);
}
// 算法 B 的时间复杂度：线性阶
void AlgorithmB(int n) {
    for (int i = 0; i &lt; n; i++) {
        Console.WriteLine(0);
    }
}
// 算法 C 的时间复杂度：常数阶
void AlgorithmC(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        Console.WriteLine(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
func algorithm_A(n int) {
    fmt.Println(0)
}
// 算法 B 的时间复杂度：线性阶
func algorithm_B(n int) {
    for i := 0; i &lt; n; i++ {
        fmt.Println(0)
    }
}
// 算法 C 的时间复杂度：常数阶
func algorithm_C(n int) {
    for i := 0; i &lt; 1000000; i++ {
        fmt.Println(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
func algorithmA(n: Int) {
    print(0)
}

// 算法 B 的时间复杂度：线性阶
func algorithmB(n: Int) {
    for _ in 0 ..&lt; n {
        print(0)
    }
}

// 算法 C 的时间复杂度：常数阶
func algorithmC(n: Int) {
    for _ in 0 ..&lt; 1_000_000 {
        print(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
function algorithm_A(n) {
    console.log(0);
}
// 算法 B 的时间复杂度：线性阶
function algorithm_B(n) {
    for (let i = 0; i &lt; n; i++) {
        console.log(0);
    }
}
// 算法 C 的时间复杂度：常数阶
function algorithm_C(n) {
    for (let i = 0; i &lt; 1000000; i++) {
        console.log(0);
    }
}

\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
function algorithm_A(n: number): void {
    console.log(0);
}
// 算法 B 的时间复杂度：线性阶
function algorithm_B(n: number): void {
    for (let i = 0; i &lt; n; i++) {
        console.log(0);
    }
}
// 算法 C 的时间复杂度：常数阶
function algorithm_C(n: number): void {
    for (let i = 0; i &lt; 1000000; i++) {
        console.log(0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithmA(int n) {
  print(0);
}
// 算法 B 的时间复杂度：线性阶
void algorithmB(int n) {
  for (int i = 0; i &lt; n; i++) {
    print(0);
  }
}
// 算法 C 的时间复杂度：常数阶
void algorithmC(int n) {
  for (int i = 0; i &lt; 1000000; i++) {
    print(0);
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fn algorithm_A(n: i32) {
    println!(&quot;{}&quot;, 0);
}
// 算法 B 的时间复杂度：线性阶
fn algorithm_B(n: i32) {
    for _ in 0..n {
        println!(&quot;{}&quot;, 0);
    }
}
// 算法 C 的时间复杂度：常数阶
fn algorithm_C(n: i32) {
    for _ in 0..1000000 {
        println!(&quot;{}&quot;, 0);
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
void algorithm_A(int n) {
    printf(&quot;%d&quot;, 0);
}
// 算法 B 的时间复杂度：线性阶
void algorithm_B(int n) {
    for (int i = 0; i &lt; n; i++) {
        printf(&quot;%d&quot;, 0);
    }
}
// 算法 C 的时间复杂度：常数阶
void algorithm_C(int n) {
    for (int i = 0; i &lt; 1000000; i++) {
        printf(&quot;%d&quot;, 0);
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fun algoritm_A(n: Int) {
    println(0)
}
// 算法 B 的时间复杂度：线性阶
fun algorithm_B(n: Int) {
    for (i in 0..&lt;n){
        println(0)
    }
}
// 算法 C 的时间复杂度：常数阶
fun algorithm_C(n: Int) {
    for (i in 0..&lt;1000000) {
        println(0)
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
# 算法 A 的时间复杂度：常数阶
def algorithm_A(n)
    puts 0
end

# 算法 B 的时间复杂度：线性阶
def algorithm_B(n)
    (0...n).each { puts 0 }
end

# 算法 C 的时间复杂度：常数阶
def algorithm_C(n)
    (0...1_000_000).each { puts 0 }
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
// 算法 A 的时间复杂度：常数阶
fn algorithm_A(n: usize) void {
    _ = n;
    std.debug.print(&quot;{}\\n&quot;, .{0});
}
// 算法 B 的时间复杂度：线性阶
fn algorithm_B(n: i32) void {
    for (0..n) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }
}
// 算法 C 的时间复杂度：常数阶
fn algorithm_C(n: i32) void {
    _ = n;
    for (0..1000000) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }
}
\`\`\`
</code></pre><p>下图展示了以上三个算法函数的时间复杂度。</p><ul><li>算法 <code>A</code> 只有 $1$ 个打印操作，算法运行时间不随着 $n$ 增大而增长。我们称此算法的时间复杂度为“常数阶”。</li><li>算法 <code>B</code> 中的打印操作需要循环 $n$ 次，算法运行时间随着 $n$ 增大呈线性增长。此算法的时间复杂度被称为“线性阶”。</li><li>算法 <code>C</code> 中的打印操作需要循环 $1000000$ 次，虽然运行时间很长，但它与输入数据大小 $n$ 无关。因此 <code>C</code> 的时间复杂度和 <code>A</code> 相同，仍为“常数阶”。</li></ul><figure><img src="`+o+`" alt="算法 A、B 和 C 的时间增长趋势" tabindex="0" loading="lazy"><figcaption>算法 A、B 和 C 的时间增长趋势</figcaption></figure><p>相较于直接统计算法的运行时间，时间复杂度分析有哪些特点呢？</p><ul><li><strong>时间复杂度能够有效评估算法效率</strong>。例如，算法 <code>B</code> 的运行时间呈线性增长，在 $n &gt; 1$ 时比算法 <code>A</code> 更慢，在 $n &gt; 1000000$ 时比算法 <code>C</code> 更慢。事实上，只要输入数据大小 $n$ 足够大，复杂度为“常数阶”的算法一定优于“线性阶”的算法，这正是时间增长趋势的含义。</li><li><strong>时间复杂度的推算方法更简便</strong>。显然，运行平台和计算操作类型都与算法运行时间的增长趋势无关。因此在时间复杂度分析中，我们可以简单地将所有计算操作的执行时间视为相同的“单位时间”，从而将“计算操作运行时间统计”简化为“计算操作数量统计”，这样一来估算难度就大大降低了。</li><li><strong>时间复杂度也存在一定的局限性</strong>。例如，尽管算法 <code>A</code> 和 <code>C</code> 的时间复杂度相同，但实际运行时间差别很大。同样，尽管算法 <code>B</code> 的时间复杂度比 <code>C</code> 高，但在输入数据大小 $n$ 较小时，算法 <code>B</code> 明显优于算法 <code>C</code> 。对于此类情况，我们时常难以仅凭时间复杂度判断算法效率的高低。当然，尽管存在上述问题，复杂度分析仍然是评判算法效率最有效且常用的方法。</li></ul><h2 id="函数渐近上界" tabindex="-1"><a class="header-anchor" href="#函数渐近上界"><span>函数渐近上界</span></a></h2><p>给定一个输入大小为 $n$ 的函数：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 1      # +1
    a = a + 1  # +1
    a = a * 2  # +1
    # 循环 n 次
    for i in range(n):  # +1
        print(0)        # +1
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
        cout &lt;&lt; 0 &lt;&lt; endl;    // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
        System.out.println(0);    // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // +1（每轮都执行 i ++）
        Console.WriteLine(0);   // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 1      // +1
    a = a + 1   // +1
    a = a * 2   // +1
    // 循环 n 次
    for i := 0; i &lt; n; i++ {   // +1
        fmt.Println(a)         // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    var a = 1 // +1
    a = a + 1 // +1
    a = a * 2 // +1
    // 循环 n 次
    for _ in 0 ..&lt; n { // +1
        print(0) // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    var a = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for(let i = 0; i &lt; n; i++){ // +1（每轮都执行 i ++）
        console.log(0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void{
    var a: number = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for(let i = 0; i &lt; n; i++){ // +1（每轮都执行 i ++）
        console.log(0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 1; // +1
  a = a + 1; // +1
  a = a * 2; // +1
  // 循环 n 次
  for (int i = 0; i &lt; n; i++) { // +1（每轮都执行 i ++）
    print(0); // +1
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let mut a = 1;   // +1
    a = a + 1;      // +1
    a = a * 2;      // +1

    // 循环 n 次
    for _ in 0..n { // +1（每轮都执行 i ++）
        println!(&quot;{}&quot;, 0); // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +1
    a = a + 1;  // +1
    a = a * 2;  // +1
    // 循环 n 次
    for (int i = 0; i &lt; n; i++) {   // +1（每轮都执行 i ++）
        printf(&quot;%d&quot;, 0);            // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    var a = 1 // +1
    a = a + 1 // +1
    a = a * 2 // +1
    // 循环 n 次
    for (i in 0..&lt;n) { // +1（每轮都执行 i ++）
        println(0) // +1
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 1       # +1
    a = a + 1   # +1
    a = a * 2   # +1
    # 循环 n 次
    (0...n).each do # +1
        puts 0      # +1
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
fn algorithm(n: usize) void {
    var a: i32 = 1; // +1
    a += 1; // +1
    a *= 2; // +1
    // 循环 n 次
    for (0..n) |_| { // +1（每轮都执行 i ++）
        std.debug.print(&quot;{}\\n&quot;, .{0}); // +1
    }
}
\`\`\`
</code></pre><p>设算法的操作数量是一个关于输入数据大小 $n$ 的函数，记为 $T(n)$ ，则以上函数的操作数量为：</p><p>$$ T(n) = 3 + 2n $$</p><p>$T(n)$ 是一次函数，说明其运行时间的增长趋势是线性的，因此它的时间复杂度是线性阶。</p><p>我们将线性阶的时间复杂度记为 $O(n)$ ，这个数学符号称为<u>大 $O$ 记号（big-$O$ notation）</u>，表示函数 $T(n)$ 的<u>渐近上界（asymptotic upper bound）</u>。</p><p>时间复杂度分析本质上是计算“操作数量 $T(n)$”的渐近上界，它具有明确的数学定义。</p><p>!!! note &quot;函数渐近上界&quot;</p><pre><code>若存在正实数 $c$ 和实数 $n_0$ ，使得对于所有的 $n &gt; n_0$ ，均有 $T(n) \\leq c \\cdot f(n)$ ，则可认为 $f(n)$ 给出了 $T(n)$ 的一个渐近上界，记为 $T(n) = O(f(n))$ 。
</code></pre><p>如下图所示，计算渐近上界就是寻找一个函数 $f(n)$ ，使得当 $n$ 趋向于无穷大时，$T(n)$ 和 $f(n)$ 处于相同的增长级别，仅相差一个常数项 $c$ 的倍数。</p><figure><img src="`+a+`" alt="函数的渐近上界" tabindex="0" loading="lazy"><figcaption>函数的渐近上界</figcaption></figure><h2 id="推算方法" tabindex="-1"><a class="header-anchor" href="#推算方法"><span>推算方法</span></a></h2><p>渐近上界的数学味儿有点重，如果你感觉没有完全理解，也无须担心。我们可以先掌握推算方法，在不断的实践中，就可以逐渐领悟其数学意义。</p><p>根据定义，确定 $f(n)$ 之后，我们便可得到时间复杂度 $O(f(n))$ 。那么如何确定渐近上界 $f(n)$ 呢？总体分为两步：首先统计操作数量，然后判断渐近上界。</p><h3 id="第一步-统计操作数量" tabindex="-1"><a class="header-anchor" href="#第一步-统计操作数量"><span>第一步：统计操作数量</span></a></h3><p>针对代码，逐行从上到下计算即可。然而，由于上述 $c \\cdot f(n)$ 中的常数项 $c$ 可以取任意大小，<strong>因此操作数量 $T(n)$ 中的各种系数、常数项都可以忽略</strong>。根据此原则，可以总结出以下计数简化技巧。</p><ol><li><strong>忽略 $T(n)$ 中的常数项</strong>。因为它们都与 $n$ 无关，所以对时间复杂度不产生影响。</li><li><strong>省略所有系数</strong>。例如，循环 $2n$ 次、$5n + 1$ 次等，都可以简化记为 $n$ 次，因为 $n$ 前面的系数对时间复杂度没有影响。</li><li><strong>循环嵌套时使用乘法</strong>。总操作数量等于外层循环和内层循环操作数量之积，每一层循环依然可以分别套用第 <code>1.</code> 点和第 <code>2.</code> 点的技巧。</li></ol><p>给定一个函数，我们可以用上述技巧来统计操作数量：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def algorithm(n: int):
    a = 1      # +0（技巧 1）
    a = a + n  # +0（技巧 1）
    # +n（技巧 2）
    for i in range(5 * n + 1):
        print(0)
    # +n*n（技巧 3）
    for i in range(2 * n):
        for j in range(n + 1):
            print(0)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        cout &lt;&lt; 0 &lt;&lt; endl;
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            cout &lt;&lt; 0 &lt;&lt; endl;
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        System.out.println(0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            System.out.println(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
void Algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        Console.WriteLine(0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            Console.WriteLine(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
func algorithm(n int) {
    a := 1     // +0（技巧 1）
    a = a + n  // +0（技巧 1）
    // +n（技巧 2）
    for i := 0; i &lt; 5 * n + 1; i++ {
        fmt.Println(0)
    }
    // +n*n（技巧 3）
    for i := 0; i &lt; 2 * n; i++ {
        for j := 0; j &lt; n + 1; j++ {
            fmt.Println(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
func algorithm(n: Int) {
    var a = 1 // +0（技巧 1）
    a = a + n // +0（技巧 1）
    // +n（技巧 2）
    for _ in 0 ..&lt; (5 * n + 1) {
        print(0)
    }
    // +n*n（技巧 3）
    for _ in 0 ..&lt; (2 * n) {
        for _ in 0 ..&lt; (n + 1) {
            print(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
function algorithm(n) {
    let a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (let i = 0; i &lt; 5 * n + 1; i++) {
        console.log(0);
    }
    // +n*n（技巧 3）
    for (let i = 0; i &lt; 2 * n; i++) {
        for (let j = 0; j &lt; n + 1; j++) {
            console.log(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
function algorithm(n: number): void {
    let a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (let i = 0; i &lt; 5 * n + 1; i++) {
        console.log(0);
    }
    // +n*n（技巧 3）
    for (let i = 0; i &lt; 2 * n; i++) {
        for (let j = 0; j &lt; n + 1; j++) {
            console.log(0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
void algorithm(int n) {
  int a = 1; // +0（技巧 1）
  a = a + n; // +0（技巧 1）
  // +n（技巧 2）
  for (int i = 0; i &lt; 5 * n + 1; i++) {
    print(0);
  }
  // +n*n（技巧 3）
  for (int i = 0; i &lt; 2 * n; i++) {
    for (int j = 0; j &lt; n + 1; j++) {
      print(0);
    }
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
fn algorithm(n: i32) {
    let mut a = 1;     // +0（技巧 1）
    a = a + n;        // +0（技巧 1）

    // +n（技巧 2）
    for i in 0..(5 * n + 1) {
        println!(&quot;{}&quot;, 0);
    }

    // +n*n（技巧 3）
    for i in 0..(2 * n) {
        for j in 0..(n + 1) {
            println!(&quot;{}&quot;, 0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
void algorithm(int n) {
    int a = 1;  // +0（技巧 1）
    a = a + n;  // +0（技巧 1）
    // +n（技巧 2）
    for (int i = 0; i &lt; 5 * n + 1; i++) {
        printf(&quot;%d&quot;, 0);
    }
    // +n*n（技巧 3）
    for (int i = 0; i &lt; 2 * n; i++) {
        for (int j = 0; j &lt; n + 1; j++) {
            printf(&quot;%d&quot;, 0);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
fun algorithm(n: Int) {
    var a = 1   // +0（技巧 1）
    a = a + n   // +0（技巧 1）
    // +n（技巧 2）
    for (i in 0..&lt;5 * n + 1) {
        println(0)
    }
    // +n*n（技巧 3）
    for (i in 0..&lt;2 * n) {
        for (j in 0..&lt;n + 1) {
            println(0)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
def algorithm(n)
    a = 1       # +0（技巧 1）
    a = a + n   # +0（技巧 1）
    # +n（技巧 2）
    (0...(5 * n + 1)).each do { puts 0 }
    # +n*n（技巧 3）
    (0...(2 * n)).each do
        (0...(n + 1)).each do { puts 0 }
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;
fn algorithm(n: usize) void {
    var a: i32 = 1;     // +0（技巧 1）
    a = a + @as(i32, @intCast(n));        // +0（技巧 1）

    // +n（技巧 2）
    for(0..(5 * n + 1)) |_| {
        std.debug.print(&quot;{}\\n&quot;, .{0});
    }

    // +n*n（技巧 3）
    for(0..(2 * n)) |_| {
        for(0..(n + 1)) |_| {
            std.debug.print(&quot;{}\\n&quot;, .{0});
        }
    }
}
\`\`\`
</code></pre><p>以下公式展示了使用上述技巧前后的统计结果，两者推算出的时间复杂度都为 $O(n^2)$ 。</p><p>$$ \\begin{aligned} T(n) &amp; = 2n(n + 1) + (5n + 1) + 2 &amp; \\text{完整统计 (-.-|||)} \\newline &amp; = 2n^2 + 7n + 3 \\newline T(n) &amp; = n^2 + n &amp; \\text{偷懒统计 (o.O)} \\end{aligned} $$</p><h3 id="第二步-判断渐近上界" tabindex="-1"><a class="header-anchor" href="#第二步-判断渐近上界"><span>第二步：判断渐近上界</span></a></h3><p><strong>时间复杂度由 $T(n)$ 中最高阶的项来决定</strong>。这是因为在 $n$ 趋于无穷大时，最高阶的项将发挥主导作用，其他项的影响都可以忽略。</p><p>下表展示了一些例子，其中一些夸张的值是为了强调“系数无法撼动阶数”这一结论。当 $n$ 趋于无穷大时，这些常数变得无足轻重。</p><p> 表   不同操作数量对应的时间复杂度 </p><table><thead><tr><th>操作数量 $T(n)$</th><th>时间复杂度 $O(f(n))$</th></tr></thead><tbody><tr><td>$100000$</td><td>$O(1)$</td></tr><tr><td>$3n + 2$</td><td>$O(n)$</td></tr><tr><td>$2n^2 + 3n + 2$</td><td>$O(n^2)$</td></tr><tr><td>$n^3 + 10000n^2$</td><td>$O(n^3)$</td></tr><tr><td>$2^n + 10000n^{10000}$</td><td>$O(2^n)$</td></tr></tbody></table><h2 id="常见类型" tabindex="-1"><a class="header-anchor" href="#常见类型"><span>常见类型</span></a></h2><p>设输入数据大小为 $n$ ，常见的时间复杂度类型如下图所示（按照从低到高的顺序排列）。</p><p>$$ \\begin{aligned} O(1) &lt; O(\\log n) &lt; O(n) &lt; O(n \\log n) &lt; O(n^2) &lt; O(2^n) &lt; O(n!) \\newline \\text{常数阶} &lt; \\text{对数阶} &lt; \\text{线性阶} &lt; \\text{线性对数阶} &lt; \\text{平方阶} &lt; \\text{指数阶} &lt; \\text{阶乘阶} \\end{aligned} $$</p><figure><img src="`+r+'" alt="常见的时间复杂度类型" tabindex="0" loading="lazy"><figcaption>常见的时间复杂度类型</figcaption></figure><h3 id="常数阶-o-1" tabindex="-1"><a class="header-anchor" href="#常数阶-o-1"><span>常数阶 $O(1)$</span></a></h3><p>常数阶的操作数量与输入数据大小 $n$ 无关，即不随着 $n$ 的变化而变化。</p><p>在以下函数中，尽管操作数量 <code>size</code> 可能很大，但由于其与输入数据大小 $n$ 无关，因此时间复杂度仍为 $O(1)$ ：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{constant}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="线性阶-o-n" tabindex="-1"><a class="header-anchor" href="#线性阶-o-n"><span>线性阶 $O(n)$</span></a></h3><p>线性阶的操作数量相对于输入数据大小 $n$ 以线性级别增长。线性阶通常出现在单层循环中：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{linear}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>遍历数组和遍历链表等操作的时间复杂度均为 $O(n)$ ，其中 $n$ 为数组或链表的长度：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{array_traversal}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>值得注意的是，<strong>输入数据大小 $n$ 需根据输入数据的类型来具体确定</strong>。比如在第一个示例中，变量 $n$ 为输入数据大小；在第二个示例中，数组长度 $n$ 为数据大小。</p><h3 id="平方阶-o-n-2" tabindex="-1"><a class="header-anchor" href="#平方阶-o-n-2"><span>平方阶 $O(n^2)$</span></a></h3><p>平方阶的操作数量相对于输入数据大小 $n$ 以平方级别增长。平方阶通常出现在嵌套循环中，外层循环和内层循环的时间复杂度都为 $O(n)$ ，因此总体的时间复杂度为 $O(n^2)$ ：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{quadratic}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下图对比了常数阶、线性阶和平方阶三种时间复杂度。</p><figure><img src="'+l+'" alt="常数阶、线性阶和平方阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>常数阶、线性阶和平方阶的时间复杂度</figcaption></figure><p>以冒泡排序为例，外层循环执行 $n - 1$ 次，内层循环执行 $n-1$、$n-2$、$\\dots$、$2$、$1$ 次，平均为 $n / 2$ 次，因此时间复杂度为 $O((n - 1) n / 2) = O(n^2)$ ：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{bubble_sort}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="指数阶-o-2-n" tabindex="-1"><a class="header-anchor" href="#指数阶-o-2-n"><span>指数阶 $O(2^n)$</span></a></h3><p>生物学的“细胞分裂”是指数阶增长的典型例子：初始状态为 $1$ 个细胞，分裂一轮后变为 $2$ 个，分裂两轮后变为 $4$ 个，以此类推，分裂 $n$ 轮后有 $2^n$ 个细胞。</p><p>下图和以下代码模拟了细胞分裂的过程，时间复杂度为 $O(2^n)$ 。请注意，输入 $n$ 表示分裂轮数，返回值 <code>count</code> 表示总分裂次数。</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{exponential}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+s+'" alt="指数阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>指数阶的时间复杂度</figcaption></figure><p>在实际算法中，指数阶常出现于递归函数中。例如在以下代码中，其递归地一分为二，经过 $n$ 次分裂后停止：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{exp_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>指数阶增长非常迅速，在穷举法（暴力搜索、回溯等）中比较常见。对于数据规模较大的问题，指数阶是不可接受的，通常需要使用动态规划或贪心算法等来解决。</p><h3 id="对数阶-o-log-n" tabindex="-1"><a class="header-anchor" href="#对数阶-o-log-n"><span>对数阶 $O(\\log n)$</span></a></h3><p>与指数阶相反，对数阶反映了“每轮缩减到一半”的情况。设输入数据大小为 $n$ ，由于每轮缩减到一半，因此循环次数是 $\\log_2 n$ ，即 $2^n$ 的反函数。</p><p>下图和以下代码模拟了“每轮缩减到一半”的过程，时间复杂度为 $O(\\log_2 n)$ ，简记为 $O(\\log n)$ ：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{logarithmic}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+p+`" alt="对数阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>对数阶的时间复杂度</figcaption></figure><p>与指数阶类似，对数阶也常出现于递归函数中。以下代码形成了一棵高度为 $\\log_2 n$ 的递归树：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{log_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对数阶常出现于基于分治策略的算法中，体现了“一分为多”和“化繁为简”的算法思想。它增长缓慢，是仅次于常数阶的理想的时间复杂度。</p><p>!!! tip &quot;$O(\\log n)$ 的底数是多少？&quot;</p><pre><code>准确来说，“一分为 $m$”对应的时间复杂度是 $O(\\log_m n)$ 。而通过对数换底公式，我们可以得到具有不同底数、相等的时间复杂度：

$$
O(\\log_m n) = O(\\log_k n / \\log_k m) = O(\\log_k n)
$$

也就是说，底数 $m$ 可以在不影响复杂度的前提下转换。因此我们通常会省略底数 $m$ ，将对数阶直接记为 $O(\\log n)$ 。
</code></pre><h3 id="线性对数阶-o-n-log-n" tabindex="-1"><a class="header-anchor" href="#线性对数阶-o-n-log-n"><span>线性对数阶 $O(n \\log n)$</span></a></h3><p>线性对数阶常出现于嵌套循环中，两层循环的时间复杂度分别为 $O(\\log n)$ 和 $O(n)$ 。相关代码如下：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{linear_log_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下图展示了线性对数阶的生成方式。二叉树的每一层的操作总数都为 $n$ ，树共有 $\\log_2 n + 1$ 层，因此时间复杂度为 $O(n \\log n)$ 。</p><figure><img src="`+d+'" alt="线性对数阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>线性对数阶的时间复杂度</figcaption></figure><p>主流排序算法的时间复杂度通常为 $O(n \\log n)$ ，例如快速排序、归并排序、堆排序等。</p><h3 id="阶乘阶-o-n" tabindex="-1"><a class="header-anchor" href="#阶乘阶-o-n"><span>阶乘阶 $O(n!)$</span></a></h3><p>阶乘阶对应数学上的“全排列”问题。给定 $n$ 个互不重复的元素，求其所有可能的排列方案，方案数量为：</p><p>$$ n! = n \\times (n - 1) \\times (n - 2) \\times \\dots \\times 2 \\times 1 $$</p><p>阶乘通常使用递归实现。如下图和以下代码所示，第一层分裂出 $n$ 个，第二层分裂出 $n - 1$ 个，以此类推，直至第 $n$ 层时停止分裂：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{time_complexity}-[class]{}-[func]{factorial_recur}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+c+`" alt="阶乘阶的时间复杂度" tabindex="0" loading="lazy"><figcaption>阶乘阶的时间复杂度</figcaption></figure><p>请注意，因为当 $n \\geq 4$ 时恒有 $n! &gt; 2^n$ ，所以阶乘阶比指数阶增长得更快，在 $n$ 较大时也是不可接受的。</p><h2 id="最差、最佳、平均时间复杂度" tabindex="-1"><a class="header-anchor" href="#最差、最佳、平均时间复杂度"><span>最差、最佳、平均时间复杂度</span></a></h2><p><strong>算法的时间效率往往不是固定的，而是与输入数据的分布有关</strong>。假设输入一个长度为 $n$ 的数组 <code>nums</code> ，其中 <code>nums</code> 由从 $1$ 至 $n$ 的数字组成，每个数字只出现一次；但元素顺序是随机打乱的，任务目标是返回元素 $1$ 的索引。我们可以得出以下结论。</p><ul><li>当 <code>nums = [?, ?, ..., 1]</code> ，即当末尾元素是 $1$ 时，需要完整遍历数组，<strong>达到最差时间复杂度 $O(n)$</strong> 。</li><li>当 <code>nums = [1, ?, ?, ...]</code> ，即当首个元素为 $1$ 时，无论数组多长都不需要继续遍历，<strong>达到最佳时间复杂度 $\\Omega(1)$</strong> 。</li></ul><p>“最差时间复杂度”对应函数渐近上界，使用大 $O$ 记号表示。相应地，“最佳时间复杂度”对应函数渐近下界，用 $\\Omega$ 记号表示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{worst_best_time_complexity}-[class]{}-[func]{find_one}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>值得说明的是，我们在实际中很少使用最佳时间复杂度，因为通常只有在很小概率下才能达到，可能会带来一定的误导性。<strong>而最差时间复杂度更为实用，因为它给出了一个效率安全值</strong>，让我们可以放心地使用算法。</p><p>从上述示例可以看出，最差时间复杂度和最佳时间复杂度只出现于“特殊的数据分布”，这些情况的出现概率可能很小，并不能真实地反映算法运行效率。相比之下，<strong>平均时间复杂度可以体现算法在随机输入数据下的运行效率</strong>，用 $\\Theta$ 记号来表示。</p><p>对于部分算法，我们可以简单地推算出随机数据分布下的平均情况。比如上述示例，由于输入数组是被打乱的，因此元素 $1$ 出现在任意索引的概率都是相等的，那么算法的平均循环次数就是数组长度的一半 $n / 2$ ，平均时间复杂度为 $\\Theta(n / 2) = \\Theta(n)$ 。</p><p>但对于较为复杂的算法，计算平均时间复杂度往往比较困难，因为很难分析出在数据分布下的整体数学期望。在这种情况下，我们通常使用最差时间复杂度作为算法效率的评判标准。</p><p>!!! question &quot;为什么很少看到 $\\Theta$ 符号？&quot;</p><pre><code>可能由于 $O$ 符号过于朗朗上口，因此我们常常使用它来表示平均时间复杂度。但从严格意义上讲，这种做法并不规范。在本书和其他资料中，若遇到类似“平均时间复杂度 $O(n)$”的表述，请将其直接理解为 $\\Theta(n)$ 。
</code></pre>`,215),h=[g];function m($,f){return i(),t("div",null,h)}const v=n(u,[["render",m],["__file","time_complexity.html.vue"]]),_=JSON.parse('{"path":"/notebook/other/algo/chapter_computational_complexity/time_complexity.html","title":"时间复杂度","lang":"zh-CN","frontmatter":{"description":"时间复杂度 运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？ 确定运行平台，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。 评估各种计算操作所需的运行时间，例如加法操作 + 需要 1 ns ，乘法操作 * 需要 10 ns ，打印操作 print() 需要 5 ns 等。 统计代码中所...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_computational_complexity/time_complexity.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"时间复杂度"}],["meta",{"property":"og:description","content":"时间复杂度 运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？ 确定运行平台，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。 评估各种计算操作所需的运行时间，例如加法操作 + 需要 1 ns ，乘法操作 * 需要 10 ns ，打印操作 print() 需要 5 ns 等。 统计代码中所..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"时间复杂度\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"统计时间增长趋势","slug":"统计时间增长趋势","link":"#统计时间增长趋势","children":[]},{"level":2,"title":"函数渐近上界","slug":"函数渐近上界","link":"#函数渐近上界","children":[]},{"level":2,"title":"推算方法","slug":"推算方法","link":"#推算方法","children":[{"level":3,"title":"第一步：统计操作数量","slug":"第一步-统计操作数量","link":"#第一步-统计操作数量","children":[]},{"level":3,"title":"第二步：判断渐近上界","slug":"第二步-判断渐近上界","link":"#第二步-判断渐近上界","children":[]}]},{"level":2,"title":"常见类型","slug":"常见类型","link":"#常见类型","children":[{"level":3,"title":"常数阶 $O(1)$","slug":"常数阶-o-1","link":"#常数阶-o-1","children":[]},{"level":3,"title":"线性阶 $O(n)$","slug":"线性阶-o-n","link":"#线性阶-o-n","children":[]},{"level":3,"title":"平方阶 $O(n^2)$","slug":"平方阶-o-n-2","link":"#平方阶-o-n-2","children":[]},{"level":3,"title":"指数阶 $O(2^n)$","slug":"指数阶-o-2-n","link":"#指数阶-o-2-n","children":[]},{"level":3,"title":"对数阶 $O(\\\\log n)$","slug":"对数阶-o-log-n","link":"#对数阶-o-log-n","children":[]},{"level":3,"title":"线性对数阶 $O(n \\\\log n)$","slug":"线性对数阶-o-n-log-n","link":"#线性对数阶-o-n-log-n","children":[]},{"level":3,"title":"阶乘阶 $O(n!)$","slug":"阶乘阶-o-n","link":"#阶乘阶-o-n","children":[]}]},{"level":2,"title":"最差、最佳、平均时间复杂度","slug":"最差、最佳、平均时间复杂度","link":"#最差、最佳、平均时间复杂度","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":23.73,"words":7120},"filePathRelative":"notebook/other/algo/chapter_computational_complexity/time_complexity.md","localizedDate":"2025年2月13日","excerpt":"\\n<p>运行时间可以直观且准确地反映算法的效率。如果我们想准确预估一段代码的运行时间，应该如何操作呢？</p>\\n<ol>\\n<li><strong>确定运行平台</strong>，包括硬件配置、编程语言、系统环境等，这些因素都会影响代码的运行效率。</li>\\n<li><strong>评估各种计算操作所需的运行时间</strong>，例如加法操作 <code>+</code> 需要 1 ns ，乘法操作 <code>*</code> 需要 10 ns ，打印操作 <code>print()</code> 需要 5 ns 等。</li>\\n<li><strong>统计代码中所有的计算操作</strong>，并将所有操作的执行时间求和，从而得到运行时间。</li>\\n</ol>","autoDesc":true}');export{v as comp,_ as data};
