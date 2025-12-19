import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as n,b as i}from"./app-CB3aEOlD.js";const a="/assets/avltree_degradation_from_removing_node-Bbwiq6r4.png",l="/assets/avltree_degradation_from_inserting_node-DN5tpAwB.png",r="/assets/avltree_right_rotate_step1-BbnyF3jJ.png",o="/assets/avltree_right_rotate_step2-C83gSLnP.png",s="/assets/avltree_right_rotate_step3-x_hE1b_S.png",d="/assets/avltree_right_rotate_step4-DEnEqZSH.png",c="/assets/avltree_right_rotate_with_grandchild-BU7NE6Oj.png",h="/assets/avltree_left_rotate-Cbmc3uyA.png",p="/assets/avltree_left_rotate_with_grandchild-Kygyc3yN.png",g="/assets/avltree_left_right_rotate-Ih7oQFoT.png",u="/assets/avltree_right_left_rotate-D7iD6tmP.png",v="/assets/avltree_rotation_cases-a_AubIbi.png",f={},_=i('<h1 id="avl-树" tabindex="-1"><a class="header-anchor" href="#avl-树"><span>AVL 树 *</span></a></h1><p>在“二叉搜索树”章节中我们提到，在多次插入和删除操作后，二叉搜索树可能退化为链表。在这种情况下，所有操作的时间复杂度将从 $O(\\log n)$ 劣化为 $O(n)$ 。</p><p>如下图所示，经过两次删除节点操作，这棵二叉搜索树便会退化为链表。</p><figure><img src="'+a+'" alt="AVL 树在删除节点后发生退化" tabindex="0" loading="lazy"><figcaption>AVL 树在删除节点后发生退化</figcaption></figure><p>再例如，在下图所示的完美二叉树中插入两个节点后，树将严重向左倾斜，查找操作的时间复杂度也随之劣化。</p><figure><img src="'+l+`" alt="AVL 树在插入节点后发生退化" tabindex="0" loading="lazy"><figcaption>AVL 树在插入节点后发生退化</figcaption></figure><p>1962 年 G. M. Adelson-Velsky 和 E. M. Landis 在论文“An algorithm for the organization of information”中提出了 <u>AVL 树</u>。论文中详细描述了一系列操作，确保在持续添加和删除节点后，AVL 树不会退化，从而使得各种操作的时间复杂度保持在 $O(\\log n)$ 级别。换句话说，在需要频繁进行增删查改操作的场景中，AVL 树能始终保持高效的数据操作性能，具有很好的应用价值。</p><h2 id="avl-树常见术语" tabindex="-1"><a class="header-anchor" href="#avl-树常见术语"><span>AVL 树常见术语</span></a></h2><p>AVL 树既是二叉搜索树，也是平衡二叉树，同时满足这两类二叉树的所有性质，因此是一种<u>平衡二叉搜索树（balanced binary search tree）</u>。</p><h3 id="节点高度" tabindex="-1"><a class="header-anchor" href="#节点高度"><span>节点高度</span></a></h3><p>由于 AVL 树的相关操作需要获取节点高度，因此我们需要为节点类添加 <code>height</code> 变量：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
class TreeNode:
    &quot;&quot;&quot;AVL 树节点类&quot;&quot;&quot;
    def __init__(self, val: int):
        self.val: int = val                 # 节点值
        self.height: int = 0                # 节点高度
        self.left: TreeNode | None = None   # 左子节点引用
        self.right: TreeNode | None = None  # 右子节点引用
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
/* AVL 树节点类 */
struct TreeNode {
    int val{};          // 节点值
    int height = 0;     // 节点高度
    TreeNode *left{};   // 左子节点
    TreeNode *right{};  // 右子节点
    TreeNode() = default;
    explicit TreeNode(int x) : val(x){}
};
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode {
    public int val;        // 节点值
    public int height;     // 节点高度
    public TreeNode left;  // 左子节点
    public TreeNode right; // 右子节点
    public TreeNode(int x) { val = x; }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode(int? x) {
    public int? val = x;    // 节点值
    public int height;      // 节点高度
    public TreeNode? left;  // 左子节点引用
    public TreeNode? right; // 右子节点引用
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
/* AVL 树节点结构体 */
type TreeNode struct {
    Val    int       // 节点值
    Height int       // 节点高度
    Left   *TreeNode // 左子节点引用
    Right  *TreeNode // 右子节点引用
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode {
    var val: Int // 节点值
    var height: Int // 节点高度
    var left: TreeNode? // 左子节点
    var right: TreeNode? // 右子节点

    init(x: Int) {
        val = x
        height = 0
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode {
    val; // 节点值
    height; //节点高度
    left; // 左子节点指针
    right; // 右子节点指针
    constructor(val, left, right, height) {
        this.val = val === undefined ? 0 : val;
        this.height = height === undefined ? 0 : height;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode {
    val: number;            // 节点值
    height: number;         // 节点高度
    left: TreeNode | null;  // 左子节点指针
    right: TreeNode | null; // 右子节点指针
    constructor(val?: number, height?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.height = height === undefined ? 0 : height;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
/* AVL 树节点类 */
class TreeNode {
  int val;         // 节点值
  int height;      // 节点高度
  TreeNode? left;  // 左子节点
  TreeNode? right; // 右子节点
  TreeNode(this.val, [this.height = 0, this.left, this.right]);
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
use std::rc::Rc;
use std::cell::RefCell;

/* AVL 树节点结构体 */
struct TreeNode {
    val: i32,                               // 节点值
    height: i32,                            // 节点高度
    left: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,    // 左子节点
    right: Option&lt;Rc&lt;RefCell&lt;TreeNode&gt;&gt;&gt;,   // 右子节点
}

impl TreeNode {
    /* 构造方法 */
    fn new(val: i32) -&gt; Rc&lt;RefCell&lt;Self&gt;&gt; {
        Rc::new(RefCell::new(Self {
            val,
            height: 0,
            left: None,
            right: None
        }))
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
/* AVL 树节点结构体 */
typedef struct TreeNode {
    int val;
    int height;
    struct TreeNode *left;
    struct TreeNode *right;
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
/* AVL 树节点类 */
class TreeNode(val _val: Int) {  // 节点值
    val height: Int = 0          // 节点高度
    val left: TreeNode? = null   // 左子节点
    val right: TreeNode? = null  // 右子节点
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
### AVL 树节点类 ###
class TreeNode
  attr_accessor :val    # 节点值
  attr_accessor :height # 节点高度
  attr_accessor :left   # 左子节点引用
  attr_accessor :right  # 右子节点引用

  def initialize(val)
    @val = val
    @height = 0
  end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p>“节点高度”是指从该节点到它的最远叶节点的距离，即所经过的“边”的数量。需要特别注意的是，叶节点的高度为 $0$ ，而空节点的高度为 $-1$ 。我们将创建两个工具函数，分别用于获取和更新节点的高度：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{update_height}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="节点平衡因子" tabindex="-1"><a class="header-anchor" href="#节点平衡因子"><span>节点平衡因子</span></a></h3><p>节点的<u>平衡因子（balance factor）</u>定义为节点左子树的高度减去右子树的高度，同时规定空节点的平衡因子为 $0$ 。我们同样将获取节点平衡因子的功能封装成函数，方便后续使用：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{balance_factor}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>!!! tip</p><pre><code>设平衡因子为 $f$ ，则一棵 AVL 树的任意节点的平衡因子皆满足 $-1 \\le f \\le 1$ 。
</code></pre><h2 id="avl-树旋转" tabindex="-1"><a class="header-anchor" href="#avl-树旋转"><span>AVL 树旋转</span></a></h2><p>AVL 树的特点在于“旋转”操作，它能够在不影响二叉树的中序遍历序列的前提下，使失衡节点重新恢复平衡。换句话说，<strong>旋转操作既能保持“二叉搜索树”的性质，也能使树重新变为“平衡二叉树”</strong>。</p><p>我们将平衡因子绝对值 $&gt; 1$ 的节点称为“失衡节点”。根据节点失衡情况的不同，旋转操作分为四种：右旋、左旋、先右旋后左旋、先左旋后右旋。下面详细介绍这些旋转操作。</p><h3 id="右旋" tabindex="-1"><a class="header-anchor" href="#右旋"><span>右旋</span></a></h3><p>如下图所示，节点下方为平衡因子。从底至顶看，二叉树中首个失衡节点是“节点 3”。我们关注以该失衡节点为根节点的子树，将该节点记为 <code>node</code> ，其左子节点记为 <code>child</code> ，执行“右旋”操作。完成右旋后，子树恢复平衡，并且仍然保持二叉搜索树的性质。</p><p>=== &quot;&lt;1&gt;&quot; <img src="`+r+'" alt="右旋操作步骤" loading="lazy"></p><p>=== &quot;&lt;2&gt;&quot; <img src="'+o+'" alt="avltree_right_rotate_step2" loading="lazy"></p><p>=== &quot;&lt;3&gt;&quot; <img src="'+s+'" alt="avltree_right_rotate_step3" loading="lazy"></p><p>=== &quot;&lt;4&gt;&quot; <img src="'+d+'" alt="avltree_right_rotate_step4" loading="lazy"></p><p>如下图所示，当节点 <code>child</code> 有右子节点（记为 <code>grand_child</code> ）时，需要在右旋中添加一步：将 <code>grand_child</code> 作为 <code>node</code> 的左子节点。</p><figure><img src="'+c+'" alt="有 grand_child 的右旋操作" tabindex="0" loading="lazy"><figcaption>有 grand_child 的右旋操作</figcaption></figure><p>“向右旋转”是一种形象化的说法，实际上需要通过修改节点指针来实现，代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{right_rotate}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="左旋" tabindex="-1"><a class="header-anchor" href="#左旋"><span>左旋</span></a></h3><p>相应地，如果考虑上述失衡二叉树的“镜像”，则需要执行下图所示的“左旋”操作。</p><figure><img src="'+h+'" alt="左旋操作" tabindex="0" loading="lazy"><figcaption>左旋操作</figcaption></figure><p>同理，如下图所示，当节点 <code>child</code> 有左子节点（记为 <code>grand_child</code> ）时，需要在左旋中添加一步：将 <code>grand_child</code> 作为 <code>node</code> 的右子节点。</p><figure><img src="'+p+'" alt="有 grand_child 的左旋操作" tabindex="0" loading="lazy"><figcaption>有 grand_child 的左旋操作</figcaption></figure><p>可以观察到，<strong>右旋和左旋操作在逻辑上是镜像对称的，它们分别解决的两种失衡情况也是对称的</strong>。基于对称性，我们只需将右旋的实现代码中的所有的 <code>left</code> 替换为 <code>right</code> ，将所有的 <code>right</code> 替换为 <code>left</code> ，即可得到左旋的实现代码：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{left_rotate}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="先左旋后右旋" tabindex="-1"><a class="header-anchor" href="#先左旋后右旋"><span>先左旋后右旋</span></a></h3><p>对于下图中的失衡节点 3 ，仅使用左旋或右旋都无法使子树恢复平衡。此时需要先对 <code>child</code> 执行“左旋”，再对 <code>node</code> 执行“右旋”。</p><figure><img src="'+g+'" alt="先左旋后右旋" tabindex="0" loading="lazy"><figcaption>先左旋后右旋</figcaption></figure><h3 id="先右旋后左旋" tabindex="-1"><a class="header-anchor" href="#先右旋后左旋"><span>先右旋后左旋</span></a></h3><p>如下图所示，对于上述失衡二叉树的镜像情况，需要先对 <code>child</code> 执行“右旋”，再对 <code>node</code> 执行“左旋”。</p><figure><img src="'+u+'" alt="先右旋后左旋" tabindex="0" loading="lazy"><figcaption>先右旋后左旋</figcaption></figure><h3 id="旋转的选择" tabindex="-1"><a class="header-anchor" href="#旋转的选择"><span>旋转的选择</span></a></h3><p>下图展示的四种失衡情况与上述案例逐个对应，分别需要采用右旋、先左旋后右旋、先右旋后左旋、左旋的操作。</p><figure><img src="'+v+'" alt="AVL 树的四种旋转情况" tabindex="0" loading="lazy"><figcaption>AVL 树的四种旋转情况</figcaption></figure><p>如下表所示，我们通过判断失衡节点的平衡因子以及较高一侧子节点的平衡因子的正负号，来确定失衡节点属于上图中的哪种情况。</p><p> 表   四种旋转情况的选择条件 </p><table><thead><tr><th>失衡节点的平衡因子</th><th>子节点的平衡因子</th><th>应采用的旋转方法</th></tr></thead><tbody><tr><td>$&gt; 1$ （左偏树）</td><td>$\\geq 0$</td><td>右旋</td></tr><tr><td>$&gt; 1$ （左偏树）</td><td>$&lt;0$</td><td>先左旋后右旋</td></tr><tr><td>$&lt; -1$ （右偏树）</td><td>$\\leq 0$</td><td>左旋</td></tr><tr><td>$&lt; -1$ （右偏树）</td><td>$&gt;0$</td><td>先右旋后左旋</td></tr></tbody></table><p>为了便于使用，我们将旋转操作封装成一个函数。<strong>有了这个函数，我们就能对各种失衡情况进行旋转，使失衡节点重新恢复平衡</strong>。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{rotate}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="avl-树常用操作" tabindex="-1"><a class="header-anchor" href="#avl-树常用操作"><span>AVL 树常用操作</span></a></h2><h3 id="插入节点" tabindex="-1"><a class="header-anchor" href="#插入节点"><span>插入节点</span></a></h3><p>AVL 树的节点插入操作与二叉搜索树在主体上类似。唯一的区别在于，在 AVL 树中插入节点后，从该节点到根节点的路径上可能会出现一系列失衡节点。因此，<strong>我们需要从这个节点开始，自底向上执行旋转操作，使所有失衡节点恢复平衡</strong>。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{insert_helper}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除节点" tabindex="-1"><a class="header-anchor" href="#删除节点"><span>删除节点</span></a></h3><p>类似地，在二叉搜索树的删除节点方法的基础上，需要从底至顶执行旋转操作，使所有失衡节点恢复平衡。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{avl_tree}-[class]{avl_tree}-[func]{remove_helper}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="查找节点" tabindex="-1"><a class="header-anchor" href="#查找节点"><span>查找节点</span></a></h3><p>AVL 树的节点查找操作与二叉搜索树一致，在此不再赘述。</p><h2 id="avl-树典型应用" tabindex="-1"><a class="header-anchor" href="#avl-树典型应用"><span>AVL 树典型应用</span></a></h2><ul><li>组织和存储大型数据，适用于高频查找、低频增删的场景。</li><li>用于构建数据库中的索引系统。</li><li>红黑树也是一种常见的平衡二叉搜索树。相较于 AVL 树，红黑树的平衡条件更宽松，插入与删除节点所需的旋转操作更少，节点增删操作的平均效率更高。</li></ul>',91),m=[_];function b(k,A){return n(),t("div",null,m)}const L=e(f,[["render",b],["__file","avl_tree.html.vue"]]),T=JSON.parse('{"path":"/notebook/other/algo/chapter_tree/avl_tree.html","title":"AVL 树 *","lang":"zh-CN","frontmatter":{"description":"AVL 树 * 在“二叉搜索树”章节中我们提到，在多次插入和删除操作后，二叉搜索树可能退化为链表。在这种情况下，所有操作的时间复杂度将从 $O(\\\\log n)$ 劣化为 $O(n)$ 。 如下图所示，经过两次删除节点操作，这棵二叉搜索树便会退化为链表。 AVL 树在删除节点后发生退化AVL 树在删除节点后发生退化 再例如，在下图所示的完美二叉树中插入两...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_tree/avl_tree.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"AVL 树 *"}],["meta",{"property":"og:description","content":"AVL 树 * 在“二叉搜索树”章节中我们提到，在多次插入和删除操作后，二叉搜索树可能退化为链表。在这种情况下，所有操作的时间复杂度将从 $O(\\\\log n)$ 劣化为 $O(n)$ 。 如下图所示，经过两次删除节点操作，这棵二叉搜索树便会退化为链表。 AVL 树在删除节点后发生退化AVL 树在删除节点后发生退化 再例如，在下图所示的完美二叉树中插入两..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AVL 树 *\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"AVL 树常见术语","slug":"avl-树常见术语","link":"#avl-树常见术语","children":[{"level":3,"title":"节点高度","slug":"节点高度","link":"#节点高度","children":[]},{"level":3,"title":"节点平衡因子","slug":"节点平衡因子","link":"#节点平衡因子","children":[]}]},{"level":2,"title":"AVL 树旋转","slug":"avl-树旋转","link":"#avl-树旋转","children":[{"level":3,"title":"右旋","slug":"右旋","link":"#右旋","children":[]},{"level":3,"title":"左旋","slug":"左旋","link":"#左旋","children":[]},{"level":3,"title":"先左旋后右旋","slug":"先左旋后右旋","link":"#先左旋后右旋","children":[]},{"level":3,"title":"先右旋后左旋","slug":"先右旋后左旋","link":"#先右旋后左旋","children":[]},{"level":3,"title":"旋转的选择","slug":"旋转的选择","link":"#旋转的选择","children":[]}]},{"level":2,"title":"AVL 树常用操作","slug":"avl-树常用操作","link":"#avl-树常用操作","children":[{"level":3,"title":"插入节点","slug":"插入节点","link":"#插入节点","children":[]},{"level":3,"title":"删除节点","slug":"删除节点","link":"#删除节点","children":[]},{"level":3,"title":"查找节点","slug":"查找节点","link":"#查找节点","children":[]}]},{"level":2,"title":"AVL 树典型应用","slug":"avl-树典型应用","link":"#avl-树典型应用","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":8.33,"words":2500},"filePathRelative":"notebook/other/algo/chapter_tree/avl_tree.md","localizedDate":"2025年2月13日","excerpt":"\\n<p>在“二叉搜索树”章节中我们提到，在多次插入和删除操作后，二叉搜索树可能退化为链表。在这种情况下，所有操作的时间复杂度将从 $O(\\\\log n)$ 劣化为 $O(n)$ 。</p>\\n<p>如下图所示，经过两次删除节点操作，这棵二叉搜索树便会退化为链表。</p>\\n<figure><figcaption>AVL 树在删除节点后发生退化</figcaption></figure>\\n<p>再例如，在下图所示的完美二叉树中插入两个节点后，树将严重向左倾斜，查找操作的时间复杂度也随之劣化。</p>\\n<figure><figcaption>AVL 树在插入节点后发生退化</figcaption></figure>","autoDesc":true}');export{L as comp,T as data};
