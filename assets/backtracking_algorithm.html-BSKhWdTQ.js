import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as n,b as o}from"./app-CB3aEOlD.js";const i="/assets/preorder_find_nodes-HrbZyRpO.png",s="/assets/preorder_find_paths_step1-BWWrRBAR.png",c="/assets/preorder_find_paths_step2-CUYrfI7t.png",a="/assets/preorder_find_paths_step3-BA-ssvK3.png",r="/assets/preorder_find_paths_step4-BoRvB4Ks.png",p="/assets/preorder_find_paths_step5-BOEcugsH.png",d="/assets/preorder_find_paths_step6-B3s7wTWg.png",l="/assets/preorder_find_paths_step7-DLJ_6BgA.png",h="/assets/preorder_find_paths_step8-CIDqWURV.png",u="/assets/preorder_find_paths_step9-DnzQSEb_.png",g="/assets/preorder_find_paths_step10-Nb8zi-0x.png",_="/assets/preorder_find_paths_step11-Ca-ra0xo.png",m="/assets/preorder_find_constrained_paths-BylwvIyv.png",k="/assets/backtrack_remove_return_or_not-BEwxdAp5.png",f={},b=o(`<h1 id="回溯算法" tabindex="-1"><a class="header-anchor" href="#回溯算法"><span>回溯算法</span></a></h1><p><u>回溯算法（backtracking algorithm）</u>是一种通过穷举来解决问题的方法，它的核心思想是从一个初始状态出发，暴力搜索所有可能的解决方案，当遇到正确的解则将其记录，直到找到解或者尝试了所有可能的选择都无法找到解为止。</p><p>回溯算法通常采用“深度优先搜索”来遍历解空间。在“二叉树”章节中，我们提到前序、中序和后序遍历都属于深度优先搜索。接下来，我们利用前序遍历构造一个回溯问题，逐步了解回溯算法的工作原理。</p><p>!!! question &quot;例题一&quot;</p><pre><code>给定一棵二叉树，搜索并记录所有值为 $7$ 的节点，请返回节点列表。
</code></pre><p>对于此题，我们前序遍历这棵树，并判断当前节点的值是否为 $7$ ，若是，则将该节点的值加入结果列表 <code>res</code> 之中。相关过程实现如下图和以下代码所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{preorder_traversal_i_compact}-[class]{}-[func]{pre_order}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="`+i+`" alt="在前序遍历中搜索节点" tabindex="0" loading="lazy"><figcaption>在前序遍历中搜索节点</figcaption></figure><h2 id="尝试与回退" tabindex="-1"><a class="header-anchor" href="#尝试与回退"><span>尝试与回退</span></a></h2><p><strong>之所以称之为回溯算法，是因为该算法在搜索解空间时会采用“尝试”与“回退”的策略</strong>。当算法在搜索过程中遇到某个状态无法继续前进或无法得到满足条件的解时，它会撤销上一步的选择，退回到之前的状态，并尝试其他可能的选择。</p><p>对于例题一，访问每个节点都代表一次“尝试”，而越过叶节点或返回父节点的 <code>return</code> 则表示“回退”。</p><p>值得说明的是，<strong>回退并不仅仅包括函数返回</strong>。为解释这一点，我们对例题一稍作拓展。</p><p>!!! question &quot;例题二&quot;</p><pre><code>在二叉树中搜索所有值为 $7$ 的节点，**请返回根节点到这些节点的路径**。
</code></pre><p>在例题一代码的基础上，我们需要借助一个列表 <code>path</code> 记录访问过的节点路径。当访问到值为 $7$ 的节点时，则复制 <code>path</code> 并添加进结果列表 <code>res</code> 。遍历完成后，<code>res</code> 中保存的就是所有的解。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{preorder_traversal_ii_compact}-[class]{}-[func]{pre_order}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在每次“尝试”中，我们通过将当前节点添加进 <code>path</code> 来记录路径；而在“回退”前，我们需要将该节点从 <code>path</code> 中弹出，<strong>以恢复本次尝试之前的状态</strong>。</p><p>观察下图所示的过程，<strong>我们可以将尝试和回退理解为“前进”与“撤销”</strong>，两个操作互为逆向。</p><p>=== &quot;&lt;1&gt;&quot; <img src="`+s+'" alt="尝试与回退" loading="lazy"></p><p>=== &quot;&lt;2&gt;&quot; <img src="'+c+'" alt="preorder_find_paths_step2" loading="lazy"></p><p>=== &quot;&lt;3&gt;&quot; <img src="'+a+'" alt="preorder_find_paths_step3" loading="lazy"></p><p>=== &quot;&lt;4&gt;&quot; <img src="'+r+'" alt="preorder_find_paths_step4" loading="lazy"></p><p>=== &quot;&lt;5&gt;&quot; <img src="'+p+'" alt="preorder_find_paths_step5" loading="lazy"></p><p>=== &quot;&lt;6&gt;&quot; <img src="'+d+'" alt="preorder_find_paths_step6" loading="lazy"></p><p>=== &quot;&lt;7&gt;&quot; <img src="'+l+'" alt="preorder_find_paths_step7" loading="lazy"></p><p>=== &quot;&lt;8&gt;&quot; <img src="'+h+'" alt="preorder_find_paths_step8" loading="lazy"></p><p>=== &quot;&lt;9&gt;&quot; <img src="'+u+'" alt="preorder_find_paths_step9" loading="lazy"></p><p>=== &quot;&lt;10&gt;&quot; <img src="'+g+'" alt="preorder_find_paths_step10" loading="lazy"></p><p>=== &quot;&lt;11&gt;&quot; <img src="'+_+`" alt="preorder_find_paths_step11" loading="lazy"></p><h2 id="剪枝" tabindex="-1"><a class="header-anchor" href="#剪枝"><span>剪枝</span></a></h2><p>复杂的回溯问题通常包含一个或多个约束条件，<strong>约束条件通常可用于“剪枝”</strong>。</p><p>!!! question &quot;例题三&quot;</p><pre><code>在二叉树中搜索所有值为 $7$ 的节点，请返回根节点到这些节点的路径，**并要求路径中不包含值为 $3$ 的节点**。
</code></pre><p>为了满足以上约束条件，<strong>我们需要添加剪枝操作</strong>：在搜索过程中，若遇到值为 $3$ 的节点，则提前返回，不再继续搜索。代码如下所示：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{preorder_traversal_iii_compact}-[class]{}-[func]{pre_order}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>“剪枝”是一个非常形象的名词。如下图所示，在搜索过程中，<strong>我们“剪掉”了不满足约束条件的搜索分支</strong>，避免许多无意义的尝试，从而提高了搜索效率。</p><figure><img src="`+m+`" alt="根据约束条件剪枝" tabindex="0" loading="lazy"><figcaption>根据约束条件剪枝</figcaption></figure><h2 id="框架代码" tabindex="-1"><a class="header-anchor" href="#框架代码"><span>框架代码</span></a></h2><p>接下来，我们尝试将回溯的“尝试、回退、剪枝”的主体框架提炼出来，提升代码的通用性。</p><p>在以下框架代码中，<code>state</code> 表示问题的当前状态，<code>choices</code> 表示当前状态下可以做出的选择：</p><p>=== &quot;Python&quot;</p><pre><code>\`\`\`python title=&quot;&quot;
def backtrack(state: State, choices: list[choice], res: list[state]):
    &quot;&quot;&quot;回溯算法框架&quot;&quot;&quot;
    # 判断是否为解
    if is_solution(state):
        # 记录解
        record_solution(state, res)
        # 不再继续搜索
        return
    # 遍历所有选择
    for choice in choices:
        # 剪枝：判断选择是否合法
        if is_valid(state, choice):
            # 尝试：做出选择，更新状态
            make_choice(state, choice)
            backtrack(state, choices, res)
            # 回退：撤销选择，恢复到之前的状态
            undo_choice(state, choice)
\`\`\`
</code></pre><p>=== &quot;C++&quot;</p><pre><code>\`\`\`cpp title=&quot;&quot;
/* 回溯算法框架 */
void backtrack(State *state, vector&lt;Choice *&gt; &amp;choices, vector&lt;State *&gt; &amp;res) {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for (Choice choice : choices) {
        // 剪枝：判断选择是否合法
        if (isValid(state, choice)) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice);
            backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Java&quot;</p><pre><code>\`\`\`java title=&quot;&quot;
/* 回溯算法框架 */
void backtrack(State state, List&lt;Choice&gt; choices, List&lt;State&gt; res) {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for (Choice choice : choices) {
        // 剪枝：判断选择是否合法
        if (isValid(state, choice)) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice);
            backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C#&quot;</p><pre><code>\`\`\`csharp title=&quot;&quot;
/* 回溯算法框架 */
void Backtrack(State state, List&lt;Choice&gt; choices, List&lt;State&gt; res) {
    // 判断是否为解
    if (IsSolution(state)) {
        // 记录解
        RecordSolution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    foreach (Choice choice in choices) {
        // 剪枝：判断选择是否合法
        if (IsValid(state, choice)) {
            // 尝试：做出选择，更新状态
            MakeChoice(state, choice);
            Backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            UndoChoice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Go&quot;</p><pre><code>\`\`\`go title=&quot;&quot;
/* 回溯算法框架 */
func backtrack(state *State, choices []Choice, res *[]State) {
    // 判断是否为解
    if isSolution(state) {
        // 记录解
        recordSolution(state, res)
        // 不再继续搜索
        return
    }
    // 遍历所有选择
    for _, choice := range choices {
        // 剪枝：判断选择是否合法
        if isValid(state, choice) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice)
            backtrack(state, choices, res)
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Swift&quot;</p><pre><code>\`\`\`swift title=&quot;&quot;
/* 回溯算法框架 */
func backtrack(state: inout State, choices: [Choice], res: inout [State]) {
    // 判断是否为解
    if isSolution(state: state) {
        // 记录解
        recordSolution(state: state, res: &amp;res)
        // 不再继续搜索
        return
    }
    // 遍历所有选择
    for choice in choices {
        // 剪枝：判断选择是否合法
        if isValid(state: state, choice: choice) {
            // 尝试：做出选择，更新状态
            makeChoice(state: &amp;state, choice: choice)
            backtrack(state: &amp;state, choices: choices, res: &amp;res)
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state: &amp;state, choice: choice)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;JS&quot;</p><pre><code>\`\`\`javascript title=&quot;&quot;
/* 回溯算法框架 */
function backtrack(state, choices, res) {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for (let choice of choices) {
        // 剪枝：判断选择是否合法
        if (isValid(state, choice)) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice);
            backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;TS&quot;</p><pre><code>\`\`\`typescript title=&quot;&quot;
/* 回溯算法框架 */
function backtrack(state: State, choices: Choice[], res: State[]): void {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for (let choice of choices) {
        // 剪枝：判断选择是否合法
        if (isValid(state, choice)) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice);
            backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Dart&quot;</p><pre><code>\`\`\`dart title=&quot;&quot;
/* 回溯算法框架 */
void backtrack(State state, List&lt;Choice&gt;, List&lt;State&gt; res) {
  // 判断是否为解
  if (isSolution(state)) {
    // 记录解
    recordSolution(state, res);
    // 不再继续搜索
    return;
  }
  // 遍历所有选择
  for (Choice choice in choices) {
    // 剪枝：判断选择是否合法
    if (isValid(state, choice)) {
      // 尝试：做出选择，更新状态
      makeChoice(state, choice);
      backtrack(state, choices, res);
      // 回退：撤销选择，恢复到之前的状态
      undoChoice(state, choice);
    }
  }
}
\`\`\`
</code></pre><p>=== &quot;Rust&quot;</p><pre><code>\`\`\`rust title=&quot;&quot;
/* 回溯算法框架 */
fn backtrack(state: &amp;mut State, choices: &amp;Vec&lt;Choice&gt;, res: &amp;mut Vec&lt;State&gt;) {
    // 判断是否为解
    if is_solution(state) {
        // 记录解
        record_solution(state, res);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for choice in choices {
        // 剪枝：判断选择是否合法
        if is_valid(state, choice) {
            // 尝试：做出选择，更新状态
            make_choice(state, choice);
            backtrack(state, choices, res);
            // 回退：撤销选择，恢复到之前的状态
            undo_choice(state, choice);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;C&quot;</p><pre><code>\`\`\`c title=&quot;&quot;
/* 回溯算法框架 */
void backtrack(State *state, Choice *choices, int numChoices, State *res, int numRes) {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res, numRes);
        // 不再继续搜索
        return;
    }
    // 遍历所有选择
    for (int i = 0; i &lt; numChoices; i++) {
        // 剪枝：判断选择是否合法
        if (isValid(state, &amp;choices[i])) {
            // 尝试：做出选择，更新状态
            makeChoice(state, &amp;choices[i]);
            backtrack(state, choices, numChoices, res, numRes);
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, &amp;choices[i]);
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Kotlin&quot;</p><pre><code>\`\`\`kotlin title=&quot;&quot;
/* 回溯算法框架 */
fun backtrack(state: State?, choices: List&lt;Choice?&gt;, res: List&lt;State?&gt;?) {
    // 判断是否为解
    if (isSolution(state)) {
        // 记录解
        recordSolution(state, res)
        // 不再继续搜索
        return
    }
    // 遍历所有选择
    for (choice in choices) {
        // 剪枝：判断选择是否合法
        if (isValid(state, choice)) {
            // 尝试：做出选择，更新状态
            makeChoice(state, choice)
            backtrack(state, choices, res)
            // 回退：撤销选择，恢复到之前的状态
            undoChoice(state, choice)
        }
    }
}
\`\`\`
</code></pre><p>=== &quot;Ruby&quot;</p><pre><code>\`\`\`ruby title=&quot;&quot;
### 回溯算法框架 ###
def backtrack(state, choices, res)
    # 判断是否为解
    if is_solution?(state)
        # 记录解
        record_solution(state, res)
        return
    end

    # 遍历所有选择
    for choice in choices
        # 剪枝：判断选择是否合法
        if is_valid?(state, choice)
            # 尝试：做出选择，更新状态
            make_choice(state, choice)
            backtrack(state, choices, res)
            # 回退：撤销选择，恢复到之前的状态
            undo_choice(state, choice)
        end
    end
end
\`\`\`
</code></pre><p>=== &quot;Zig&quot;</p><pre><code>\`\`\`zig title=&quot;&quot;

\`\`\`
</code></pre><p>接下来，我们基于框架代码来解决例题三。状态 <code>state</code> 为节点遍历路径，选择 <code>choices</code> 为当前节点的左子节点和右子节点，结果 <code>res</code> 是路径列表：</p><div class="language-src line-numbers-mode" data-highlighter="shiki" data-ext="src" data-title="src" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[file]{preorder_traversal_iii_template}-[class]{}-[func]{backtrack}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>根据题意，我们在找到值为 $7$ 的节点后应该继续搜索，<strong>因此需要将记录解之后的 <code>return</code> 语句删除</strong>。下图对比了保留或删除 <code>return</code> 语句的搜索过程。</p><figure><img src="`+k+`" alt="保留与删除 return 的搜索过程对比" tabindex="0" loading="lazy"><figcaption>保留与删除 return 的搜索过程对比</figcaption></figure><p>相比基于前序遍历的代码实现，基于回溯算法框架的代码实现虽然显得啰唆，但通用性更好。实际上，<strong>许多回溯问题可以在该框架下解决</strong>。我们只需根据具体问题来定义 <code>state</code> 和 <code>choices</code> ，并实现框架中的各个方法即可。</p><h2 id="常用术语" tabindex="-1"><a class="header-anchor" href="#常用术语"><span>常用术语</span></a></h2><p>为了更清晰地分析算法问题，我们总结一下回溯算法中常用术语的含义，并对照例题三给出对应示例，如下表所示。</p><p> 表   常见的回溯算法术语 </p><table><thead><tr><th>名词</th><th>定义</th><th>例题三</th></tr></thead><tbody><tr><td>解（solution）</td><td>解是满足问题特定条件的答案，可能有一个或多个</td><td>根节点到节点 $7$ 的满足约束条件的所有路径</td></tr><tr><td>约束条件（constraint）</td><td>约束条件是问题中限制解的可行性的条件，通常用于剪枝</td><td>路径中不包含节点 $3$</td></tr><tr><td>状态（state）</td><td>状态表示问题在某一时刻的情况，包括已经做出的选择</td><td>当前已访问的节点路径，即 <code>path</code> 节点列表</td></tr><tr><td>尝试（attempt）</td><td>尝试是根据可用选择来探索解空间的过程，包括做出选择，更新状态，检查是否为解</td><td>递归访问左（右）子节点，将节点添加进 <code>path</code> ，判断节点的值是否为 $7$</td></tr><tr><td>回退（backtracking）</td><td>回退指遇到不满足约束条件的状态时，撤销前面做出的选择，回到上一个状态</td><td>当越过叶节点、结束节点访问、遇到值为 $3$ 的节点时终止搜索，函数返回</td></tr><tr><td>剪枝（pruning）</td><td>剪枝是根据问题特性和约束条件避免无意义的搜索路径的方法，可提高搜索效率</td><td>当遇到值为 $3$ 的节点时，则不再继续搜索</td></tr></tbody></table><p>!!! tip</p><pre><code>问题、解、状态等概念是通用的，在分治、回溯、动态规划、贪心等算法中都有涉及。
</code></pre><h2 id="优点与局限性" tabindex="-1"><a class="header-anchor" href="#优点与局限性"><span>优点与局限性</span></a></h2><p>回溯算法本质上是一种深度优先搜索算法，它尝试所有可能的解决方案直到找到满足条件的解。这种方法的优点在于能够找到所有可能的解决方案，而且在合理的剪枝操作下，具有很高的效率。</p><p>然而，在处理大规模或者复杂问题时，<strong>回溯算法的运行效率可能难以接受</strong>。</p><ul><li><strong>时间</strong>：回溯算法通常需要遍历状态空间的所有可能，时间复杂度可以达到指数阶或阶乘阶。</li><li><strong>空间</strong>：在递归调用中需要保存当前的状态（例如路径、用于剪枝的辅助变量等），当深度很大时，空间需求可能会变得很大。</li></ul><p>即便如此，<strong>回溯算法仍然是某些搜索问题和约束满足问题的最佳解决方案</strong>。对于这些问题，由于无法预测哪些选择可生成有效的解，因此我们必须对所有可能的选择进行遍历。在这种情况下，<strong>关键是如何优化效率</strong>，常见的效率优化方法有两种。</p><ul><li><strong>剪枝</strong>：避免搜索那些肯定不会产生解的路径，从而节省时间和空间。</li><li><strong>启发式搜索</strong>：在搜索过程中引入一些策略或者估计值，从而优先搜索最有可能产生有效解的路径。</li></ul><h2 id="回溯典型例题" tabindex="-1"><a class="header-anchor" href="#回溯典型例题"><span>回溯典型例题</span></a></h2><p>回溯算法可用于解决许多搜索问题、约束满足问题和组合优化问题。</p><p><strong>搜索问题</strong>：这类问题的目标是找到满足特定条件的解决方案。</p><ul><li>全排列问题：给定一个集合，求出其所有可能的排列组合。</li><li>子集和问题：给定一个集合和一个目标和，找到集合中所有和为目标和的子集。</li><li>汉诺塔问题：给定三根柱子和一系列大小不同的圆盘，要求将所有圆盘从一根柱子移动到另一根柱子，每次只能移动一个圆盘，且不能将大圆盘放在小圆盘上。</li></ul><p><strong>约束满足问题</strong>：这类问题的目标是找到满足所有约束条件的解。</p><ul><li>$n$ 皇后：在 $n \\times n$ 的棋盘上放置 $n$ 个皇后，使得它们互不攻击。</li><li>数独：在 $9 \\times 9$ 的网格中填入数字 $1$ ~ $9$ ，使得每行、每列和每个 $3 \\times 3$ 子网格中的数字不重复。</li><li>图着色问题：给定一个无向图，用最少的颜色给图的每个顶点着色，使得相邻顶点颜色不同。</li></ul><p><strong>组合优化问题</strong>：这类问题的目标是在一个组合空间中找到满足某些条件的最优解。</p><ul><li>0-1 背包问题：给定一组物品和一个背包，每个物品有一定的价值和重量，要求在背包容量限制内，选择物品使得总价值最大。</li><li>旅行商问题：在一个图中，从一个点出发，访问所有其他点恰好一次后返回起点，求最短路径。</li><li>最大团问题：给定一个无向图，找到最大的完全子图，即子图中的任意两个顶点之间都有边相连。</li></ul><p>请注意，对于许多组合优化问题，回溯不是最优解决方案。</p><ul><li>0-1 背包问题通常使用动态规划解决，以达到更高的时间效率。</li><li>旅行商是一个著名的 NP-Hard 问题，常用解法有遗传算法和蚁群算法等。</li><li>最大团问题是图论中的一个经典问题，可用贪心算法等启发式算法来解决。</li></ul>`,95),q=[b];function v(S,y){return n(),e("div",null,q)}const z=t(f,[["render",v],["__file","backtracking_algorithm.html.vue"]]),x=JSON.parse('{"path":"/notebook/other/algo/chapter_backtracking/backtracking_algorithm.html","title":"回溯算法","lang":"zh-CN","frontmatter":{"description":"回溯算法 回溯算法（backtracking algorithm）是一种通过穷举来解决问题的方法，它的核心思想是从一个初始状态出发，暴力搜索所有可能的解决方案，当遇到正确的解则将其记录，直到找到解或者尝试了所有可能的选择都无法找到解为止。 回溯算法通常采用“深度优先搜索”来遍历解空间。在“二叉树”章节中，我们提到前序、中序和后序遍历都属于深度优先搜索。...","head":[["meta",{"property":"og:url","content":"https://zmf96.github.io/notebook/other/algo/chapter_backtracking/backtracking_algorithm.html"}],["meta",{"property":"og:site_name","content":"小明的笔记本"}],["meta",{"property":"og:title","content":"回溯算法"}],["meta",{"property":"og:description","content":"回溯算法 回溯算法（backtracking algorithm）是一种通过穷举来解决问题的方法，它的核心思想是从一个初始状态出发，暴力搜索所有可能的解决方案，当遇到正确的解则将其记录，直到找到解或者尝试了所有可能的选择都无法找到解为止。 回溯算法通常采用“深度优先搜索”来遍历解空间。在“二叉树”章节中，我们提到前序、中序和后序遍历都属于深度优先搜索。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T02:01:48.000Z"}],["meta",{"property":"article:author","content":"XiaoMing"}],["meta",{"property":"article:modified_time","content":"2025-02-25T02:01:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"回溯算法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T02:01:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoMing\\",\\"url\\":\\"https://github.com/zmf963\\"}]}"]]},"headers":[{"level":2,"title":"尝试与回退","slug":"尝试与回退","link":"#尝试与回退","children":[]},{"level":2,"title":"剪枝","slug":"剪枝","link":"#剪枝","children":[]},{"level":2,"title":"框架代码","slug":"框架代码","link":"#框架代码","children":[]},{"level":2,"title":"常用术语","slug":"常用术语","link":"#常用术语","children":[]},{"level":2,"title":"优点与局限性","slug":"优点与局限性","link":"#优点与局限性","children":[]},{"level":2,"title":"回溯典型例题","slug":"回溯典型例题","link":"#回溯典型例题","children":[]}],"git":{"createdTime":1739413000000,"updatedTime":1740448908000,"contributors":[{"name":"one","email":"one@one.com","commits":1},{"name":"zhumf","email":"zhumf","commits":1}]},"readingTime":{"minutes":13.12,"words":3937},"filePathRelative":"notebook/other/algo/chapter_backtracking/backtracking_algorithm.md","localizedDate":"2025年2月13日","excerpt":"\\n<p><u>回溯算法（backtracking algorithm）</u>是一种通过穷举来解决问题的方法，它的核心思想是从一个初始状态出发，暴力搜索所有可能的解决方案，当遇到正确的解则将其记录，直到找到解或者尝试了所有可能的选择都无法找到解为止。</p>\\n<p>回溯算法通常采用“深度优先搜索”来遍历解空间。在“二叉树”章节中，我们提到前序、中序和后序遍历都属于深度优先搜索。接下来，我们利用前序遍历构造一个回溯问题，逐步了解回溯算法的工作原理。</p>\\n<p>!!! question \\"例题一\\"</p>\\n<pre><code>给定一棵二叉树，搜索并记录所有值为 $7$ 的节点，请返回节点列表。\\n</code></pre>","autoDesc":true}');export{z as comp,x as data};
