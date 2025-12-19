import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as t,b as o}from"./app-CB3aEOlD.js";const r="/assets/binary_tree_definition-D-C96j9G.png",l="/assets/binary_tree_terminology-DcV9wMbw.png",i="/assets/binary_tree_add_remove-V5wPKX-4.png",d="/assets/perfect_binary_tree-CGf1MLQO.png",a="/assets/complete_binary_tree-CUa35CMR.png",p="/assets/full_binary_tree-D3n-j-HO.png",u="/assets/balanced_binary_tree-DkcQL-Xw.png",c="/assets/binary_tree_best_worst_cases-DjrTJiCr.png",s={},f=o(`<h1 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h1><p><u>二叉树（binary tree）</u>是一种非线性数据结构，代表“祖先”与“后代”之间的派生关系，体现了“一分为二”的分治逻辑。与链表类似，二叉树的基本单元是节点，每个节点包含值、左子节点引用和右子节点引用。</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
class TreeNode:
    &quot;&quot;&quot;二叉树节点类&quot;&quot;&quot;
    def __init__(self, val: int):
        self.val: int = val                # 节点值
        self.left: TreeNode | None = None  # 左子节点引用
        self.right: TreeNode | None = None # 右子节点引用
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
/* 二叉树节点结构体 */
struct TreeNode {
    int val;          // 节点值
    TreeNode *left;   // 左子节点指针
    TreeNode *right;  // 右子节点指针
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode {
    int val;         // 节点值
    TreeNode left;   // 左子节点引用
    TreeNode right;  // 右子节点引用
    TreeNode(int x) { val = x; }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode(int? x) {
    public int? val = x;    // 节点值
    public TreeNode? left;  // 左子节点引用
    public TreeNode? right; // 右子节点引用
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
/* 二叉树节点结构体 */
type TreeNode struct {
    Val   int
    Left  *TreeNode
    Right *TreeNode
}
/* 构造方法 */
func NewTreeNode(v int) *TreeNode {
    return &amp;TreeNode{
        Left:  nil, // 左子节点指针
        Right: nil, // 右子节点指针
        Val:   v,   // 节点值
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode {
    var val: Int // 节点值
    var left: TreeNode? // 左子节点引用
    var right: TreeNode? // 右子节点引用

    init(x: Int) {
        val = x
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode {
    val; // 节点值
    left; // 左子节点指针
    right; // 右子节点指针
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val; // 节点值
        this.left = left === undefined ? null : left; // 左子节点引用
        this.right = right === undefined ? null : right; // 右子节点引用
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode {
  int val;         // 节点值
  TreeNode? left;  // 左子节点引用
  TreeNode? right; // 右子节点引用
  TreeNode(this.val, [this.left, this.right]);
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
use std::rc::Rc;
use std::cell::RefCell;

/* 二叉树节点结构体 */
struct TreeNode {
    val: i32,                               // 节点值
    left: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,    // 左子节点引用
    right: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,   // 右子节点引用
}

impl TreeNode {
    /* 构造方法 */
    fn new(val: i32) -&gt; Rc&lt;RefCell&lt;Self&gt;&gt; {
        Rc::new(RefCell::new(Self {
            val,
            left: None,
            right: None
        }))
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
/* 二叉树节点结构体 */
typedef struct TreeNode {
    int val;                // 节点值
    int height;             // 节点高度
    struct TreeNode *left;  // 左子节点指针
    struct TreeNode *right; // 右子节点指针
} TreeNode;

/* 构造函数 */
TreeNode *newTreeNode(int val) {
    TreeNode *node;

    node = (TreeNode *)malloc(sizeof(TreeNode));
    node-&gt;val = val;
    node-&gt;height = 0;
    node-&gt;left = NULL;
    node-&gt;right = NULL;
    return node;
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
/* 二叉树节点类 */
class TreeNode(val _val: Int) {  // 节点值
    val left: TreeNode? = null   // 左子节点引用
    val right: TreeNode? = null  // 右子节点引用
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
### 二叉树节点类 ###
class TreeNode
  attr_accessor :val    # 节点值
  attr_accessor :left   # 左子节点引用
  attr_accessor :right  # 右子节点引用

  def initialize(val)
    @val = val
  end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p>每个节点都有两个引用（指针），分别指向<u>左子节点（left-child node）</u>和<u>右子节点（right-child node）</u>，该节点被称为这两个子节点的<u>父节点（parent node）</u>。当给定一个二叉树的节点时，我们将该节点的左子节点及其以下节点形成的树称为该节点的<u>左子树（left subtree）</u>，同理可得<u>右子树（right subtree）</u>。</p><p><strong>在二叉树中，除叶节点外，其他所有节点都包含子节点和非空子树</strong>。如下图所示，如果将“节点 2”视为父节点，则其左子节点和右子节点分别是“节点 4”和“节点 5”，左子树是“节点 4 及其以下节点形成的树”，右子树是“节点 5 及其以下节点形成的树”。</p><figure><img src="`+r+'" alt="父节点、子节点、子树" tabindex="0" loading="lazy"><figcaption>父节点、子节点、子树</figcaption></figure><h2 id="二叉树常见术语" tabindex="-1"><a class="header-anchor" href="#二叉树常见术语"><span>二叉树常见术语</span></a></h2><p>二叉树的常用术语如下图所示。</p><ul><li><u>根节点（root node）</u>：位于二叉树顶层的节点，没有父节点。</li><li><u>叶节点（leaf node）</u>：没有子节点的节点，其两个指针均指向 <code>None</code> 。</li><li><u>边（edge）</u>：连接两个节点的线段，即节点引用（指针）。</li><li>节点所在的<u>层（level）</u>：从顶至底递增，根节点所在层为 1 。</li><li>节点的<u>度（degree）</u>：节点的子节点的数量。在二叉树中，度的取值范围是 0、1、2 。</li><li>二叉树的<u>高度（height）</u>：从根节点到最远叶节点所经过的边的数量。</li><li>节点的<u>深度（depth）</u>：从根节点到该节点所经过的边的数量。</li><li>节点的<u>高度（height）</u>：从距离该节点最远的叶节点到该节点所经过的边的数量。</li></ul><figure><img src="'+l+`" alt="二叉树的常用术语" tabindex="0" loading="lazy"><figcaption>二叉树的常用术语</figcaption></figure><p>!!! tip</p><pre><code>请注意，我们通常将“高度”和“深度”定义为“经过的边的数量”，但有些题目或教材可能会将其定义为“经过的节点的数量”。在这种情况下，高度和深度都需要加 1 。
</code></pre><h2 id="二叉树基本操作" tabindex="-1"><a class="header-anchor" href="#二叉树基本操作"><span>二叉树基本操作</span></a></h2><h3 id="初始化二叉树" tabindex="-1"><a class="header-anchor" href="#初始化二叉树"><span>初始化二叉树</span></a></h3><p>与链表类似，首先初始化节点，然后构建引用（指针）。</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;binary_tree.py&quot;
# 初始化二叉树
# 初始化节点
n1 = TreeNode(val=1)
n2 = TreeNode(val=2)
n3 = TreeNode(val=3)
n4 = TreeNode(val=4)
n5 = TreeNode(val=5)
# 构建节点之间的引用（指针）
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;binary_tree.cpp&quot;
/* 初始化二叉树 */
// 初始化节点
TreeNode* n1 = new TreeNode(1);
TreeNode* n2 = new TreeNode(2);
TreeNode* n3 = new TreeNode(3);
TreeNode* n4 = new TreeNode(4);
TreeNode* n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1-&gt;left = n2;
n1-&gt;right = n3;
n2-&gt;left = n4;
n2-&gt;right = n5;
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;binary_tree.java&quot;
// 初始化节点
TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);
TreeNode n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;binary_tree.cs&quot;
/* 初始化二叉树 */
// 初始化节点
TreeNode n1 = new(1);
TreeNode n2 = new(2);
TreeNode n3 = new(3);
TreeNode n4 = new(4);
TreeNode n5 = new(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;binary_tree.go&quot;
/* 初始化二叉树 */
// 初始化节点
n1 := NewTreeNode(1)
n2 := NewTreeNode(2)
n3 := NewTreeNode(3)
n4 := NewTreeNode(4)
n5 := NewTreeNode(5)
// 构建节点之间的引用（指针）
n1.Left = n2
n1.Right = n3
n2.Left = n4
n2.Right = n5
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;binary_tree.swift&quot;
// 初始化节点
let n1 = TreeNode(x: 1)
let n2 = TreeNode(x: 2)
let n3 = TreeNode(x: 3)
let n4 = TreeNode(x: 4)
let n5 = TreeNode(x: 5)
// 构建节点之间的引用（指针）
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;binary_tree.js&quot;
/* 初始化二叉树 */
// 初始化节点
let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;binary_tree.ts&quot;
/* 初始化二叉树 */
// 初始化节点
let n1 = new TreeNode(1),
    n2 = new TreeNode(2),
    n3 = new TreeNode(3),
    n4 = new TreeNode(4),
    n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;binary_tree.dart&quot;
/* 初始化二叉树 */
// 初始化节点
TreeNode n1 = new TreeNode(1);
TreeNode n2 = new TreeNode(2);
TreeNode n3 = new TreeNode(3);
TreeNode n4 = new TreeNode(4);
TreeNode n5 = new TreeNode(5);
// 构建节点之间的引用（指针）
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;binary_tree.rs&quot;
// 初始化节点
let n1 = TreeNode::new(1);
let n2 = TreeNode::new(2);
let n3 = TreeNode::new(3);
let n4 = TreeNode::new(4);
let n5 = TreeNode::new(5);
// 构建节点之间的引用（指针）
n1.borrow_mut().left = Some(n2.clone());
n1.borrow_mut().right = Some(n3);
n2.borrow_mut().left = Some(n4);
n2.borrow_mut().right = Some(n5);
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;binary_tree.c&quot;
/* 初始化二叉树 */
// 初始化节点
TreeNode *n1 = newTreeNode(1);
TreeNode *n2 = newTreeNode(2);
TreeNode *n3 = newTreeNode(3);
TreeNode *n4 = newTreeNode(4);
TreeNode *n5 = newTreeNode(5);
// 构建节点之间的引用（指针）
n1-&gt;left = n2;
n1-&gt;right = n3;
n2-&gt;left = n4;
n2-&gt;right = n5;
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;binary_tree.kt&quot;
// 初始化节点
val n1 = TreeNode(1)
val n2 = TreeNode(2)
val n3 = TreeNode(3)
val n4 = TreeNode(4)
val n5 = TreeNode(5)
// 构建节点之间的引用（指针）
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;binary_tree.rb&quot;
# 初始化二叉树
# 初始化节点
n1 = TreeNode.new(1)
n2 = TreeNode.new(2)
n3 = TreeNode.new(3)
n4 = TreeNode.new(4)
n5 = TreeNode.new(5)
# 构建节点之间的引用（指针）
n1.left = n2
n1.right = n3
n2.left = n4
n2.right = n5
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;binary_tree.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=class%20TreeNode%3A%0A%20%20%20%20%22%22%22%E4%BA%8C%E5%8F%89%E6%A0%91%E8%8A%82%E7%82%B9%E7%B1%BB%22%22%22%0A%20%20%20%20def%20__init__%28self,%20val%3A%20int%29%3A%0A%20%20%20%20%20%20%20%20self.val%3A%20int%20%3D%20val%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20%E8%8A%82%E7%82%B9%E5%80%BC%0A%20%20%20%20%20%20%20%20self.left%3A%20TreeNode%20%7C%20None%20%3D%20None%20%20%23%20%E5%B7%A6%E5%AD%90%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%0A%20%20%20%20%20%20%20%20self.right%3A%20TreeNode%20%7C%20None%20%3D%20None%20%23%20%E5%8F%B3%E5%AD%90%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%0A%0A%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BA%8C%E5%8F%89%E6%A0%91%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E8%8A%82%E7%82%B9%0A%20%20%20%20n1%20%3D%20TreeNode%28val%3D1%29%0A%20%20%20%20n2%20%3D%20TreeNode%28val%3D2%29%0A%20%20%20%20n3%20%3D%20TreeNode%28val%3D3%29%0A%20%20%20%20n4%20%3D%20TreeNode%28val%3D4%29%0A%20%20%20%20n5%20%3D%20TreeNode%28val%3D5%29%0A%20%20%20%20%23%20%E6%9E%84%E5%BB%BA%E8%8A%82%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E5%BC%95%E7%94%A8%EF%BC%88%E6%8C%87%E9%92%88%EF%BC%89%0A%20%20%20%20n1.left%20%3D%20n2%0A%20%20%20%20n1.right%20%3D%20n3%0A%20%20%20%20n2.left%20%3D%20n4%0A%20%20%20%20n2.right%20%3D%20n5&amp;cumulative=false&amp;curInstr=3&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><h3 id="插入与删除节点" tabindex="-1"><a class="header-anchor" href="#插入与删除节点"><span>插入与删除节点</span></a></h3><p>与链表类似，在二叉树中插入与删除节点可以通过修改指针来实现。下图给出了一个示例。</p><figure><img src="`+i+`" alt="在二叉树中插入与删除节点" tabindex="0" loading="lazy"><figcaption>在二叉树中插入与删除节点</figcaption></figure><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;binary_tree.py&quot;
# 插入与删除节点
p = TreeNode(0)
# 在 n1 -&gt; n2 中间插入节点 P
n1.left = p
p.left = n2
# 删除节点 P
n1.left = n2
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;binary_tree.cpp&quot;
/* 插入与删除节点 */
TreeNode* P = new TreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1-&gt;left = P;
P-&gt;left = n2;
// 删除节点 P
n1-&gt;left = n2;
// 释放内存
delete P;
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;binary_tree.java&quot;
TreeNode P = new TreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;binary_tree.cs&quot;
/* 插入与删除节点 */
TreeNode P = new(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;binary_tree.go&quot;
/* 插入与删除节点 */
// 在 n1 -&gt; n2 中间插入节点 P
p := NewTreeNode(0)
n1.Left = p
p.Left = n2
// 删除节点 P
n1.Left = n2
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;binary_tree.swift&quot;
let P = TreeNode(x: 0)
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P
P.left = n2
// 删除节点 P
n1.left = n2
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;binary_tree.js&quot;
/* 插入与删除节点 */
let P = new TreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;binary_tree.ts&quot;
/* 插入与删除节点 */
const P = new TreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;binary_tree.dart&quot;
/* 插入与删除节点 */
TreeNode P = new TreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P;
P.left = n2;
// 删除节点 P
n1.left = n2;
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;binary_tree.rs&quot;
let p = TreeNode::new(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1.borrow_mut().left = Some(p.clone());
p.borrow_mut().left = Some(n2.clone());
// 删除节点 p
n1.borrow_mut().left = Some(n2);
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;binary_tree.c&quot;
/* 插入与删除节点 */
TreeNode *P = newTreeNode(0);
// 在 n1 -&gt; n2 中间插入节点 P
n1-&gt;left = P;
P-&gt;left = n2;
// 删除节点 P
n1-&gt;left = n2;
// 释放内存
free(P);
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;binary_tree.kt&quot;
val P = TreeNode(0)
// 在 n1 -&gt; n2 中间插入节点 P
n1.left = P
P.left = n2
// 删除节点 P
n1.left = n2
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;binary_tree.rb&quot;
# 插入与删除节点
_p = TreeNode.new(0)
# 在 n1 -&gt; n2 中间插入节点 _p
n1.left = _p
_p.left = n2
# 删除节点
n1.left = n2
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;binary_tree.zig&quot;

\`\`\`
</code></pre><p>??? pythontutor &quot;可视化运行&quot;</p><pre><code>https://pythontutor.com/render.html#code=class%20TreeNode%3A%0A%20%20%20%20%22%22%22%E4%BA%8C%E5%8F%89%E6%A0%91%E8%8A%82%E7%82%B9%E7%B1%BB%22%22%22%0A%20%20%20%20def%20__init__%28self,%20val%3A%20int%29%3A%0A%20%20%20%20%20%20%20%20self.val%3A%20int%20%3D%20val%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20%E8%8A%82%E7%82%B9%E5%80%BC%0A%20%20%20%20%20%20%20%20self.left%3A%20TreeNode%20%7C%20None%20%3D%20None%20%20%23%20%E5%B7%A6%E5%AD%90%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%0A%20%20%20%20%20%20%20%20self.right%3A%20TreeNode%20%7C%20None%20%3D%20None%20%23%20%E5%8F%B3%E5%AD%90%E8%8A%82%E7%82%B9%E5%BC%95%E7%94%A8%0A%0A%22%22%22Driver%20Code%22%22%22%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BA%8C%E5%8F%89%E6%A0%91%0A%20%20%20%20%23%20%E5%88%9D%E5%A7%8B%E5%8C%96%E8%8A%82%E7%82%B9%0A%20%20%20%20n1%20%3D%20TreeNode%28val%3D1%29%0A%20%20%20%20n2%20%3D%20TreeNode%28val%3D2%29%0A%20%20%20%20n3%20%3D%20TreeNode%28val%3D3%29%0A%20%20%20%20n4%20%3D%20TreeNode%28val%3D4%29%0A%20%20%20%20n5%20%3D%20TreeNode%28val%3D5%29%0A%20%20%20%20%23%20%E6%9E%84%E5%BB%BA%E8%8A%82%E7%82%B9%E4%B9%8B%E9%97%B4%E7%9A%84%E5%BC%95%E7%94%A8%EF%BC%88%E6%8C%87%E9%92%88%EF%BC%89%0A%20%20%20%20n1.left%20%3D%20n2%0A%20%20%20%20n1.right%20%3D%20n3%0A%20%20%20%20n2.left%20%3D%20n4%0A%20%20%20%20n2.right%20%3D%20n5%0A%0A%20%20%20%20%23%20%E6%8F%92%E5%85%A5%E4%B8%8E%E5%88%A0%E9%99%A4%E8%8A%82%E7%82%B9%0A%20%20%20%20p%20%3D%20TreeNode%280%29%0A%20%20%20%20%23%20%E5%9C%A8%20n1%20-%3E%20n2%20%E4%B8%AD%E9%97%B4%E6%8F%92%E5%85%A5%E8%8A%82%E7%82%B9%20P%0A%20%20%20%20n1.left%20%3D%20p%0A%20%20%20%20p.left%20%3D%20n2%0A%20%20%20%20%23%20%E5%88%A0%E9%99%A4%E8%8A%82%E7%82%B9%20P%0A%20%20%20%20n1.left%20%3D%20n2&amp;cumulative=false&amp;curInstr=37&amp;heapPrimitives=nevernest&amp;mode=display&amp;origin=opt-frontend.js&amp;py=311&amp;rawInputLstJSON=%5B%5D&amp;textReferences=false
</code></pre><p>!!! tip</p><pre><code>需要注意的是，插入节点可能会改变二叉树的原有逻辑结构，而删除节点通常意味着删除该节点及其所有子树。因此，在二叉树中，插入与删除通常是由一套操作配合完成的，以实现有实际意义的操作。
</code></pre><h2 id="常见二叉树类型" tabindex="-1"><a class="header-anchor" href="#常见二叉树类型"><span>常见二叉树类型</span></a></h2><h3 id="完美二叉树" tabindex="-1"><a class="header-anchor" href="#完美二叉树"><span>完美二叉树</span></a></h3><p>如下图所示，<u>完美二叉树（perfect binary tree）</u>所有层的节点都被完全填满。在完美二叉树中，叶节点的度为 $0$ ，其余所有节点的度都为 $2$ ；若树的高度为 $h$ ，则节点总数为 $2^{h+1} - 1$ ，呈现标准的指数级关系，反映了自然界中常见的细胞分裂现象。</p><p>!!! tip</p><pre><code>请注意，在中文社区中，完美二叉树常被称为&lt;u&gt;满二叉树&lt;/u&gt;。
</code></pre><figure><img src="`+d+'" alt="完美二叉树" tabindex="0" loading="lazy"><figcaption>完美二叉树</figcaption></figure><h3 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树"><span>完全二叉树</span></a></h3><p>如下图所示，<u>完全二叉树（complete binary tree）</u>只有最底层的节点未被填满，且最底层节点尽量靠左填充。请注意，完美二叉树也是一棵完全二叉树。</p><figure><img src="'+a+'" alt="完全二叉树" tabindex="0" loading="lazy"><figcaption>完全二叉树</figcaption></figure><h3 id="完满二叉树" tabindex="-1"><a class="header-anchor" href="#完满二叉树"><span>完满二叉树</span></a></h3><p>如下图所示，<u>完满二叉树（full binary tree）</u>除了叶节点之外，其余所有节点都有两个子节点。</p><figure><img src="'+p+'" alt="完满二叉树" tabindex="0" loading="lazy"><figcaption>完满二叉树</figcaption></figure><h3 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树"><span>平衡二叉树</span></a></h3><p>如下图所示，<u>平衡二叉树（balanced binary tree）</u>中任意节点的左子树和右子树的高度之差的绝对值不超过 1 。</p><figure><img src="'+u+'" alt="平衡二叉树" tabindex="0" loading="lazy"><figcaption>平衡二叉树</figcaption></figure><h2 id="二叉树的退化" tabindex="-1"><a class="header-anchor" href="#二叉树的退化"><span>二叉树的退化</span></a></h2><p>下图展示了二叉树的理想结构与退化结构。当二叉树的每层节点都被填满时，达到“完美二叉树”；而当所有节点都偏向一侧时，二叉树退化为“链表”。</p><ul><li>完美二叉树是理想情况，可以充分发挥二叉树“分治”的优势。</li><li>链表则是另一个极端，各项操作都变为线性操作，时间复杂度退化至 $O(n)$ 。</li></ul><figure><img src="'+c+'" alt="二叉树的最佳结构与最差结构" tabindex="0" loading="lazy"><figcaption>二叉树的最佳结构与最差结构</figcaption></figure><p>如下表所示，在最佳结构和最差结构下，二叉树的叶节点数量、节点总数、高度等达到极大值或极小值。</p><p> 表   二叉树的最佳结构与最差结构 </p><table><thead><tr><th></th><th>完美二叉树</th><th>链表</th></tr></thead><tbody><tr><td>第 $i$ 层的节点数量</td><td>$2^{i-1}$</td><td>$1$</td></tr><tr><td>高度为 $h$ 的树的叶节点数量</td><td>$2^h$</td><td>$1$</td></tr><tr><td>高度为 $h$ 的树的节点总数</td><td>$2^{h+1} - 1$</td><td>$h + 1$</td></tr><tr><td>节点总数为 $n$ 的树的高度</td><td>$\\log_2 (n+1) - 1$</td><td>$n - 1$</td></tr></tbody></table>',129),h=[f];function g(N,T){return t(),n("div",null,h)}const m=e(s,[["render",g],["__file","binary_tree.html.vue"]]),A=JSON.parse('{"path":"/notebook/other/algo/chapter_tree/binary_tree.html","title":"二叉树","lang":"zh-CN","frontmatter":{"description":"二叉树 二叉树（binary tree）是一种非线性数据结构，代表“祖先”与“后代”之间的派生关系，体现了“一分为二”的分治逻辑。与链表类似，二叉树的基本单元是节点，每个节点包含值、左子节点引用和右子节点引用。 === \\"Python\\" === \\"C++\\" === \\"Java\\" === \\"C#\\" === \\"Go\\" === \\"Swift\\" === \\"JS...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_tree/binary_tree.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"二叉树"}],["meta",{"property":"og:description","content":"二叉树 二叉树（binary tree）是一种非线性数据结构，代表“祖先”与“后代”之间的派生关系，体现了“一分为二”的分治逻辑。与链表类似，二叉树的基本单元是节点，每个节点包含值、左子节点引用和右子节点引用。 === \\"Python\\" === \\"C++\\" === \\"Java\\" === \\"C#\\" === \\"Go\\" === \\"Swift\\" === \\"JS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"二叉树常见术语","slug":"二叉树常见术语","link":"#二叉树常见术语","children":[]},{"level":2,"title":"二叉树基本操作","slug":"二叉树基本操作","link":"#二叉树基本操作","children":[{"level":3,"title":"初始化二叉树","slug":"初始化二叉树","link":"#初始化二叉树","children":[]},{"level":3,"title":"插入与删除节点","slug":"插入与删除节点","link":"#插入与删除节点","children":[]}]},{"level":2,"title":"常见二叉树类型","slug":"常见二叉树类型","link":"#常见二叉树类型","children":[{"level":3,"title":"完美二叉树","slug":"完美二叉树","link":"#完美二叉树","children":[]},{"level":3,"title":"完全二叉树","slug":"完全二叉树","link":"#完全二叉树","children":[]},{"level":3,"title":"完满二叉树","slug":"完满二叉树","link":"#完满二叉树","children":[]},{"level":3,"title":"平衡二叉树","slug":"平衡二叉树","link":"#平衡二叉树","children":[]}]},{"level":2,"title":"二叉树的退化","slug":"二叉树的退化","link":"#二叉树的退化","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":13.87,"words":4162},"filePathRelative":"notebook/other/algo/chapter_tree/binary_tree.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>二叉树（binary tree）</u>是一种非线性数据结构，代表“祖先”与“后代”之间的派生关系，体现了“一分为二”的分治逻辑。与链表类似，二叉树的基本单元是节点，每个节点包含值、左子节点引用和右子节点引用。</p>\\n<p>=== \\"Python\\"</p>\\n<pre><code>```python title=\\"\\"\\nclass TreeNode:\\n    \\"\\"\\"二叉树节点类\\"\\"\\"\\n    def __init__(self, val: int):\\n        self.val: int = val                # 节点值\\n        self.left: TreeNode | None = None  # 左子节点引用\\n        self.right: TreeNode | None = None # 右子节点引用\\n```\\n</code></pre>","autoDesc":true}');export{m as comp,A as data};
