import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as n,b as a}from"./app-CB3aEOlD.js";const o="/assets/hash_table_lookup-CNxeV9nC.png",p="/assets/hash_function-DXz5XocA.png",i="/assets/hash_collision-B7EsM0Ke.png",s="/assets/hash_table_reshash-DlOJUA8u.png",u={},l=a('<h1 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表"><span>哈希表</span></a></h1><p><u>哈希表（hash table）</u>，又称<u>散列表</u>，它通过建立键 <code>key</code> 与值 <code>value</code> 之间的映射，实现高效的元素查询。具体而言，我们向哈希表中输入一个键 <code>key</code> ，则可以在 $O(1)$ 时间内获取对应的值 <code>value</code> 。</p><p>如下图所示，给定 $n$ 个学生，每个学生都有“姓名”和“学号”两项数据。假如我们希望实现“输入一个学号，返回对应的姓名”的查询功能，则可以采用下图所示的哈希表来实现。</p><figure><img src="'+o+`" alt="哈希表的抽象表示" tabindex="0" loading="lazy"><figcaption>哈希表的抽象表示</figcaption></figure><p>除哈希表外，数组和链表也可以实现查询功能，它们的效率对比如下表所示。</p><ul><li><strong>添加元素</strong>：仅需将元素添加至数组（链表）的尾部即可，使用 $O(1)$ 时间。</li><li><strong>查询元素</strong>：由于数组（链表）是乱序的，因此需要遍历其中的所有元素，使用 $O(n)$ 时间。</li><li><strong>删除元素</strong>：需要先查询到元素，再从数组（链表）中删除，使用 $O(n)$ 时间。</li></ul><p> 表   元素查询效率对比 </p><table><thead><tr><th></th><th>数组</th><th>链表</th><th>哈希表</th></tr></thead><tbody><tr><td>查找元素</td><td>$O(n)$</td><td>$O(n)$</td><td>$O(1)$</td></tr><tr><td>添加元素</td><td>$O(1)$</td><td>$O(1)$</td><td>$O(1)$</td></tr><tr><td>删除元素</td><td>$O(n)$</td><td>$O(n)$</td><td>$O(1)$</td></tr></tbody></table><p>观察发现，<strong>在哈希表中进行增删查改的时间复杂度都是 $O(1)$</strong> ，非常高效。</p><h2 id="哈希表常用操作" tabindex="-1"><a class="header-anchor" href="#哈希表常用操作"><span>哈希表常用操作</span></a></h2><p>哈希表的常见操作包括：初始化、查询操作、添加键值对和删除键值对等，示例代码如下：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;hash_map.py&quot;
# 初始化哈希表
hmap: dict = {}

# 添加操作
# 在哈希表中添加键值对 (key, value)
hmap[12836] = &quot;小哈&quot;
hmap[15937] = &quot;小啰&quot;
hmap[16750] = &quot;小算&quot;
hmap[13276] = &quot;小法&quot;
hmap[10583] = &quot;小鸭&quot;

# 查询操作
# 向哈希表中输入键 key ，得到值 value
name: str = hmap[15937]

# 删除操作
# 在哈希表中删除键值对 (key, value)
hmap.pop(10583)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;hash_map.cpp&quot;
/* 初始化哈希表 */
unordered_map&lt;int, string&gt; map;

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map[12836] = &quot;小哈&quot;;
map[15937] = &quot;小啰&quot;;
map[16750] = &quot;小算&quot;;
map[13276] = &quot;小法&quot;;
map[10583] = &quot;小鸭&quot;;

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
string name = map[15937];

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.erase(10583);
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;hash_map.java&quot;
/* 初始化哈希表 */
Map&lt;Integer, String&gt; map = new HashMap&lt;&gt;();

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.put(12836, &quot;小哈&quot;);
map.put(15937, &quot;小啰&quot;);
map.put(16750, &quot;小算&quot;);
map.put(13276, &quot;小法&quot;);
map.put(10583, &quot;小鸭&quot;);

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
String name = map.get(15937);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.remove(10583);
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;hash_map.cs&quot;
/* 初始化哈希表 */
Dictionary&lt;int, string&gt; map = new() {
    /* 添加操作 */
    // 在哈希表中添加键值对 (key, value)
    { 12836, &quot;小哈&quot; },
    { 15937, &quot;小啰&quot; },
    { 16750, &quot;小算&quot; },
    { 13276, &quot;小法&quot; },
    { 10583, &quot;小鸭&quot; }
};

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
string name = map[15937];

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.Remove(10583);
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;hash_map_test.go&quot;
/* 初始化哈希表 */
hmap := make(map[int]string)

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
hmap[12836] = &quot;小哈&quot;
hmap[15937] = &quot;小啰&quot;
hmap[16750] = &quot;小算&quot;
hmap[13276] = &quot;小法&quot;
hmap[10583] = &quot;小鸭&quot;

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
name := hmap[15937]

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
delete(hmap, 10583)
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;hash_map.swift&quot;
/* 初始化哈希表 */
var map: [Int: String] = [:]

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map[12836] = &quot;小哈&quot;
map[15937] = &quot;小啰&quot;
map[16750] = &quot;小算&quot;
map[13276] = &quot;小法&quot;
map[10583] = &quot;小鸭&quot;

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let name = map[15937]!

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.removeValue(forKey: 10583)
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;hash_map.js&quot;
/* 初始化哈希表 */
const map = new Map();
/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.set(12836, &#39;小哈&#39;);
map.set(15937, &#39;小啰&#39;);
map.set(16750, &#39;小算&#39;);
map.set(13276, &#39;小法&#39;);
map.set(10583, &#39;小鸭&#39;);

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let name = map.get(15937);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;hash_map.ts&quot;
/* 初始化哈希表 */
const map = new Map&lt;number, string&gt;();
/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.set(12836, &#39;小哈&#39;);
map.set(15937, &#39;小啰&#39;);
map.set(16750, &#39;小算&#39;);
map.set(13276, &#39;小法&#39;);
map.set(10583, &#39;小鸭&#39;);
console.info(&#39;\\n添加完成后，哈希表为\\nKey -&gt; Value&#39;);
console.info(map);

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let name = map.get(15937);
console.info(&#39;\\n输入学号 15937 ，查询到姓名 &#39; + name);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.delete(10583);
console.info(&#39;\\n删除 10583 后，哈希表为\\nKey -&gt; Value&#39;);
console.info(map);
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;hash_map.dart&quot;
/* 初始化哈希表 */
Map&lt;int, String&gt; map = {};

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map[12836] = &quot;小哈&quot;;
map[15937] = &quot;小啰&quot;;
map[16750] = &quot;小算&quot;;
map[13276] = &quot;小法&quot;;
map[10583] = &quot;小鸭&quot;;

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
String name = map[15937];

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.remove(10583);
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;hash_map.rs&quot;
use std::collections::HashMap;

/* 初始化哈希表 */
let mut map: HashMap&lt;i32, String&gt; = HashMap::new();

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map.insert(12836, &quot;小哈&quot;.to_string());
map.insert(15937, &quot;小啰&quot;.to_string());
map.insert(16750, &quot;小算&quot;.to_string());
map.insert(13279, &quot;小法&quot;.to_string());
map.insert(10583, &quot;小鸭&quot;.to_string());

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
let _name: Option&lt;&amp;String&gt; = map.get(&amp;15937);

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
let _removed_value: Option&lt;String&gt; = map.remove(&amp;10583);
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;hash_map.c&quot;
// C 未提供内置哈希表
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;hash_map.kt&quot;
/* 初始化哈希表 */
val map = HashMap&lt;Int,String&gt;()

/* 添加操作 */
// 在哈希表中添加键值对 (key, value)
map[12836] = &quot;小哈&quot;
map[15937] = &quot;小啰&quot;
map[16750] = &quot;小算&quot;
map[13276] = &quot;小法&quot;
map[10583] = &quot;小鸭&quot;

/* 查询操作 */
// 向哈希表中输入键 key ，得到值 value
val name = map[15937]

/* 删除操作 */
// 在哈希表中删除键值对 (key, value)
map.remove(10583)
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;hash_map.rb&quot;
# 初始化哈希表
hmap = {}

# 添加操作
# 在哈希表中添加键值对 (key, value)
hmap[12836] = &quot;小哈&quot;
hmap[15937] = &quot;小啰&quot;
hmap[16750] = &quot;小算&quot;
hmap[13276] = &quot;小法&quot;
hmap[10583] = &quot;小鸭&quot;

# 查询操作
# 向哈希表中输入键 key ，得到值 value
name = hmap[15937]

# 删除操作
# 在哈希表中删除键值对 (key, value)
hmap.delete(10583)
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;hash_map.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E5%93%88%E5%B8%8C%E8%A1%A8%0A%20%20%20%20hmap%20%3D%20%7B%7D%0A%20%20%20%20%0A%20%20%20%20%23%20%E6%B7%BB%E5%8A%A0%E6%93%8D%E4%BD%9C%0A%20%20%20%20%23%20%E5%9C%A8%E5%93%88%E5%B8%8C%E8%A1%A8%E4%B8%AD%E6%B7%BB%E5%8A%A0%E9%94%AE%E5%80%BC%E5%AF%B9%20%28key,%20value%29%0A%20%20%20%20hmap%5B12836%5D%20%3D%20%22%E5%B0%8F%E5%93%88%22%0A%20%20%20%20hmap%5B15937%5D%20%3D%20%22%E5%B0%8F%E5%95%B0%22%0A%20%20%20%20hmap%5B16750%5D%20%3D%20%22%E5%B0%8F%E7%AE%97%22%0A%20%20%20%20hmap%5B13276%5D%20%3D%20%22%E5%B0%8F%E6%B3%95%22%0A%20%20%20%20hmap%5B10583%5D%20%3D%20%22%E5%B0%8F%E9%B8%AD%22%0A%20%20%20%20%0A%20%20%20%20%23%20%E6%9F%A5%E8%AF%A2%E6%93%8D%E4%BD%9C%0A%20%20%20%20%23%20%E5%90%91%E5%93%88%E5%B8%8C%E8%A1%A8%E4%B8%AD%E8%BE%93%E5%85%A5%E9%94%AE%20key%20%EF%BC%8C%E5%BE%97%E5%88%B0%E5%80%BC%20value%0A%20%20%20%20name%20%3D%20hmap%5B15937%5D%0A%20%20%20%20%0A%20%20%20%20%23%20%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C%0A%20%20%20%20%23%20%E5%9C%A8%E5%93%88%E5%B8%8C%E8%A1%A8%E4%B8%AD%E5%88%A0%E9%99%A4%E9%94%AE%E5%80%BC%E5%AF%B9%20%28key,%20value%29%0A%20%20%20%20hmap.pop%2810583%29&amp;cumulative=false&amp;curInstr=2&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><p>哈希表有三种常用的遍历方式：遍历键值对、遍历键和遍历值。示例代码如下：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;hash_map.py&quot;
# 遍历哈希表
# 遍历键值对 key-&gt;value
for key, value in hmap.items():
    print(key, &quot;-&gt;&quot;, value)
# 单独遍历键 key
for key in hmap.keys():
    print(key)
# 单独遍历值 value
for value in hmap.values():
    print(value)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;hash_map.cpp&quot;
/* 遍历哈希表 */
// 遍历键值对 key-&gt;value
for (auto kv: map) {
    cout &lt;&lt; kv.first &lt;&lt; &quot; -&gt; &quot; &lt;&lt; kv.second &lt;&lt; endl;
}
// 使用迭代器遍历 key-&gt;value
for (auto iter = map.begin(); iter != map.end(); iter++) {
    cout &lt;&lt; iter-&gt;first &lt;&lt; &quot;-&gt;&quot; &lt;&lt; iter-&gt;second &lt;&lt; endl;
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;hash_map.java&quot;
/* 遍历哈希表 */
// 遍历键值对 key-&gt;value
for (Map.Entry &lt;Integer, String&gt; kv: map.entrySet()) {
    System.out.println(kv.getKey() + &quot; -&gt; &quot; + kv.getValue());
}
// 单独遍历键 key
for (int key: map.keySet()) {
    System.out.println(key);
}
// 单独遍历值 value
for (String val: map.values()) {
    System.out.println(val);
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;hash_map.cs&quot;
/* 遍历哈希表 */
// 遍历键值对 Key-&gt;Value
foreach (var kv in map) {
    Console.WriteLine(kv.Key + &quot; -&gt; &quot; + kv.Value);
}
// 单独遍历键 key
foreach (int key in map.Keys) {
    Console.WriteLine(key);
}
// 单独遍历值 value
foreach (string val in map.Values) {
    Console.WriteLine(val);
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;hash_map_test.go&quot;
/* 遍历哈希表 */
// 遍历键值对 key-&gt;value
for key, value := range hmap {
    fmt.Println(key, &quot;-&gt;&quot;, value)
}
// 单独遍历键 key
for key := range hmap {
    fmt.Println(key)
}
// 单独遍历值 value
for _, value := range hmap {
    fmt.Println(value)
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;hash_map.swift&quot;
/* 遍历哈希表 */
// 遍历键值对 Key-&gt;Value
for (key, value) in map {
    print(&quot;\\(key) -&gt; \\(value)&quot;)
}
// 单独遍历键 Key
for key in map.keys {
    print(key)
}
// 单独遍历值 Value
for value in map.values {
    print(value)
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;hash_map.js&quot;
/* 遍历哈希表 */
console.info(&#39;\\n遍历键值对 Key-&gt;Value&#39;);
for (const [k, v] of map.entries()) {
    console.info(k + &#39; -&gt; &#39; + v);
}
console.info(&#39;\\n单独遍历键 Key&#39;);
for (const k of map.keys()) {
    console.info(k);
}
console.info(&#39;\\n单独遍历值 Value&#39;);
for (const v of map.values()) {
    console.info(v);
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;hash_map.ts&quot;
/* 遍历哈希表 */
console.info(&#39;\\n遍历键值对 Key-&gt;Value&#39;);
for (const [k, v] of map.entries()) {
    console.info(k + &#39; -&gt; &#39; + v);
}
console.info(&#39;\\n单独遍历键 Key&#39;);
for (const k of map.keys()) {
    console.info(k);
}
console.info(&#39;\\n单独遍历值 Value&#39;);
for (const v of map.values()) {
    console.info(v);
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;hash_map.dart&quot;
/* 遍历哈希表 */
// 遍历键值对 Key-&gt;Value
map.forEach((key, value) {
  print(&#39;$key -&gt; $value&#39;);
});

// 单独遍历键 Key
map.keys.forEach((key) {
  print(key);
});

// 单独遍历值 Value
map.values.forEach((value) {
  print(value);
});
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;hash_map.rs&quot;
/* 遍历哈希表 */
// 遍历键值对 Key-&gt;Value
for (key, value) in &amp;map {
    println!(&quot;{key} -&gt; {value}&quot;);
}

// 单独遍历键 Key
for key in map.keys() {
    println!(&quot;{key}&quot;);
}

// 单独遍历值 Value
for value in map.values() {
    println!(&quot;{value}&quot;);
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;hash_map.c&quot;
// C 未提供内置哈希表
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;hash_map.kt&quot;
/* 遍历哈希表 */
// 遍历键值对 key-&gt;value
for ((key, value) in map) {
    println(&quot;$key -&gt; $value&quot;)
}
// 单独遍历键 key
for (key in map.keys) {
    println(key)
}
// 单独遍历值 value
for (_val in map.values) {
    println(_val)
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;hash_map.rb&quot;
# 遍历哈希表
# 遍历键值对 key-&gt;value
hmap.entries.each { |key, value| puts &quot;#{key} -&gt; #{value}&quot; }

# 单独遍历键 key
hmap.keys.each { |key| puts key }

# 单独遍历值 value
hmap.values.each { |val| puts val }
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;hash_map.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E5%93%88%E5%B8%8C%E8%A1%A8%0A%20%20%20%20hmap%20%3D%20%7B%7D%0A%20%20%20%20%0A%20%20%20%20%23%20%E6%B7%BB%E5%8A%A0%E6%93%8D%E4%BD%9C%0A%20%20%20%20%23%20%E5%9C%A8%E5%93%88%E5%B8%8C%E8%A1%A8%E4%B8%AD%E6%B7%BB%E5%8A%A0%E9%94%AE%E5%80%BC%E5%AF%B9%20%28key,%20value%29%0A%20%20%20%20hmap%5B12836%5D%20%3D%20%22%E5%B0%8F%E5%93%88%22%0A%20%20%20%20hmap%5B15937%5D%20%3D%20%22%E5%B0%8F%E5%95%B0%22%0A%20%20%20%20hmap%5B16750%5D%20%3D%20%22%E5%B0%8F%E7%AE%97%22%0A%20%20%20%20hmap%5B13276%5D%20%3D%20%22%E5%B0%8F%E6%B3%95%22%0A%20%20%20%20hmap%5B10583%5D%20%3D%20%22%E5%B0%8F%E9%B8%AD%22%0A%20%20%20%20%0A%20%20%20%20%23%20%E9%81%8D%E5%8E%86%E5%93%88%E5%B8%8C%E8%A1%A8%0A%20%20%20%20%23%20%E9%81%8D%E5%8E%86%E9%94%AE%E5%80%BC%E5%AF%B9%20key-%3Evalue%0A%20%20%20%20for%20key,%20value%20in%20hmap.items%28%29%3A%0A%20%20%20%20%20%20%20%20print%28key,%20%22-%3E%22,%20value%29%0A%20%20%20%20%23%20%E5%8D%95%E7%8B%AC%E9%81%8D%E5%8E%86%E9%94%AE%20key%0A%20%20%20%20for%20key%20in%20hmap.keys%28%29%3A%0A%20%20%20%20%20%20%20%20print%28key%29%0A%20%20%20%20%23%20%E5%8D%95%E7%8B%AC%E9%81%8D%E5%8E%86%E5%80%BC%20value%0A%20%20%20%20for%20value%20in%20hmap.values%28%29%3A%0A%20%20%20%20%20%20%20%20print%28value%29&amp;cumulative=false&amp;curInstr=8&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><h2 id="哈希表简单实现" tabindex="-1"><a class="header-anchor" href="#哈希表简单实现"><span>哈希表简单实现</span></a></h2><p>我们先考虑最简单的情况，<strong>仅用一个数组来实现哈希表</strong>。在哈希表中，我们将数组中的每个空位称为<u>桶（bucket）</u>，每个桶可存储一个键值对。因此，查询操作就是找到 <code>key</code> 对应的桶，并在桶中获取 <code>value</code> 。</p><p>那么，如何基于 <code>key</code> 定位对应的桶呢？这是通过<u>哈希函数（hash function）</u>实现的。哈希函数的作用是将一个较大的输入空间映射到一个较小的输出空间。在哈希表中，输入空间是所有 <code>key</code> ，输出空间是所有桶（数组索引）。换句话说，输入一个 <code>key</code> ，<strong>我们可以通过哈希函数得到该 <code>key</code> 对应的键值对在数组中的存储位置</strong>。</p><p>输入一个 <code>key</code> ，哈希函数的计算过程分为以下两步。</p><ol><li>通过某种哈希算法 <code>hash()</code> 计算得到哈希值。</li><li>将哈希值对桶数量（数组长度）<code>capacity</code> 取模，从而获取该 <code>key</code> 对应的数组索引 <code>index</code> 。</li></ol><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">index</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> hash</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">key</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">%</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> capacity</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>随后，我们就可以利用 <code>index</code> 在哈希表中访问对应的桶，从而获取 <code>value</code> 。</p><p>设数组长度 <code>capacity = 100</code>、哈希算法 <code>hash(key) = key</code> ，易得哈希函数为 <code>key % 100</code> 。下图以 <code>key</code> 学号和 <code>value</code> 姓名为例，展示了哈希函数的工作原理。</p><figure><img src="`+p+`" alt="哈希函数工作原理" tabindex="0" loading="lazy"><figcaption>哈希函数工作原理</figcaption></figure><p>以下代码实现了一个简单哈希表。其中，我们将 <code>key</code> 和 <code>value</code> 封装成一个类 <code>Pair</code> ，以表示键值对。</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{array_hash_map}-[class]{array_hash_map}-[func]{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="哈希冲突与扩容" tabindex="-1"><a class="header-anchor" href="#哈希冲突与扩容"><span>哈希冲突与扩容</span></a></h2><p>从本质上看，哈希函数的作用是将所有 <code>key</code> 构成的输入空间映射到数组所有索引构成的输出空间，而输入空间往往远大于输出空间。因此，<strong>理论上一定存在“多个输入对应相同输出”的情况</strong>。</p><p>对于上述示例中的哈希函数，当输入的 <code>key</code> 后两位相同时，哈希函数的输出结果也相同。例如，查询学号为 12836 和 20336 的两个学生时，我们得到：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">12836</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 36</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">20336</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> %</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 36</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如下图所示，两个学号指向了同一个姓名，这显然是不对的。我们将这种多个输入对应同一输出的情况称为<u>哈希冲突（hash collision）</u>。</p><figure><img src="`+i+'" alt="哈希冲突示例" tabindex="0" loading="lazy"><figcaption>哈希冲突示例</figcaption></figure><p>容易想到，哈希表容量 $n$ 越大，多个 <code>key</code> 被分配到同一个桶中的概率就越低，冲突就越少。因此，<strong>我们可以通过扩容哈希表来减少哈希冲突</strong>。</p><p>如下图所示，扩容前键值对 <code>(136, A)</code> 和 <code>(236, D)</code> 发生冲突，扩容后冲突消失。</p><figure><img src="'+s+'" alt="哈希表扩容" tabindex="0" loading="lazy"><figcaption>哈希表扩容</figcaption></figure><p>类似于数组扩容，哈希表扩容需将所有键值对从原哈希表迁移至新哈希表，非常耗时；并且由于哈希表容量 <code>capacity</code> 改变，我们需要通过哈希函数来重新计算所有键值对的存储位置，这进一步增加了扩容过程的计算开销。为此，编程语言通常会预留足够大的哈希表容量，防止频繁扩容。</p><p><u>负载因子（load factor）</u>是哈希表的一个重要概念，其定义为哈希表的元素数量除以桶数量，用于衡量哈希冲突的严重程度，<strong>也常作为哈希表扩容的触发条件</strong>。例如在 Java 中，当负载因子超过 $0.75$ 时，系统会将哈希表扩容至原先的 $2$ 倍。</p>',94),r=[l];function h(c,m){return n(),t("div",null,r)}const q=e(u,[["render",h],["__file","hash_map.html.vue"]]),y=JSON.parse('{"path":"/notebook/other/algo/chapter_hashing/hash_map.html","title":"哈希表","lang":"zh-CN","frontmatter":{"description":"哈希表 哈希表（hash table），又称散列表，它通过建立键 key 与值 value 之间的映射，实现高效的元素查询。具体而言，我们向哈希表中输入一个键 key ，则可以在 $O(1)$ 时间内获取对应的值 value 。 如下图所示，给定 $n$ 个学生，每个学生都有“姓名”和“学号”两项数据。假如我们希望实现“输入一个学号，返回对应的姓名”的...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_hashing/hash_map.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"哈希表"}],["meta",{"property":"og:description","content":"哈希表 哈希表（hash table），又称散列表，它通过建立键 key 与值 value 之间的映射，实现高效的元素查询。具体而言，我们向哈希表中输入一个键 key ，则可以在 $O(1)$ 时间内获取对应的值 value 。 如下图所示，给定 $n$ 个学生，每个学生都有“姓名”和“学号”两项数据。假如我们希望实现“输入一个学号，返回对应的姓名”的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"哈希表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"哈希表常用操作","slug":"哈希表常用操作","link":"#哈希表常用操作","children":[]},{"level":2,"title":"哈希表简单实现","slug":"哈希表简单实现","link":"#哈希表简单实现","children":[]},{"level":2,"title":"哈希冲突与扩容","slug":"哈希冲突与扩容","link":"#哈希冲突与扩容","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":13.35,"words":4006},"filePathRelative":"notebook/other/algo/chapter_hashing/hash_map.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>哈希表（hash table）</u>，又称<u>散列表</u>，它通过建立键 <code>key</code> 与值 <code>value</code> 之间的映射，实现高效的元素查询。具体而言，我们向哈希表中输入一个键 <code>key</code> ，则可以在 $O(1)$ 时间内获取对应的值 <code>value</code> 。</p>\\n<p>如下图所示，给定 $n$ 个学生，每个学生都有“姓名”和“学号”两项数据。假如我们希望实现“输入一个学号，返回对应的姓名”的查询功能，则可以采用下图所示的哈希表来实现。</p>\\n<figure><figcaption>哈希表的抽象表示</figcaption></figure>","autoDesc":true}');export{q as comp,y as data};
