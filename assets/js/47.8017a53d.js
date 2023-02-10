(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{381:function(e,_,v){"use strict";v.r(_);var t=v(4),n=Object(t.a)({},(function(){var e=this,_=e._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"redis-哨兵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-哨兵"}},[e._v("#")]),e._v(" Redis 哨兵")]),e._v(" "),_("blockquote",[_("p",[e._v("Redis 哨兵（Sentinel）是 Redis 的"),_("strong",[e._v("高可用性")]),e._v("（Hight Availability）解决方案。")]),e._v(" "),_("p",[e._v("Redis 哨兵是 "),_("a",{attrs:{href:"https://dunwu.github.io/blog/pages/4907dc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raft 算法"),_("OutboundLink")],1),e._v(" 的具体实现。")])]),e._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200713072747.png",alt:"img"}})]),e._v(" "),_("h2",{attrs:{id:"一、哨兵简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、哨兵简介"}},[e._v("#")]),e._v(" 一、哨兵简介")]),e._v(" "),_("p",[e._v("Redis 哨兵（Sentinel）是 Redis 的"),_("strong",[e._v("高可用性")]),e._v("（Hight Availability）解决方案：由一个或多个 Sentinel 实例组成的 Sentinel 系统可以监视任意多个主服务器，以及这些主服务器的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器的某个从服务器升级为新的主服务器，然后由新的主服务器代替已下线的主服务器继续处理命令请求。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200131135847.png",alt:"img"}})]),e._v(" "),_("p",[e._v("Sentinel 的主要功能如下：")]),e._v(" "),_("ul",[_("li",[_("strong",[_("code",[e._v("监控（Monitoring）")])]),e._v(" - Sentinel 不断检查主从服务器是否正常在工作。")]),e._v(" "),_("li",[_("strong",[_("code",[e._v("通知（Notification）")])]),e._v(" - Sentinel 可以通过一个 api 来通知系统管理员或者另外的应用程序，被监控的 Redis 实例有一些问题。")]),e._v(" "),_("li",[_("strong",[_("code",[e._v("自动故障转移（Automatic Failover）")])]),e._v(" - 如果一个主服务器下线，Sentinel 会开始自动故障转移：把一个从节点提升为主节点，并重新配置其他的从节点使用新的主节点，使用 Redis 服务的应用程序在连接的时候也被通知新的地址。")]),e._v(" "),_("li",[_("strong",[_("code",[e._v("配置提供者（Configuration provider）")])]),e._v(" - Sentinel 给客户端的服务发现提供来源：对于一个给定的服务，客户端连接到 Sentinels 来寻找当前主节点的地址。当故障转移发生的时候，Sentinel 将报告新的地址。")])]),e._v(" "),_("h2",{attrs:{id:"二、启动哨兵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、启动哨兵"}},[e._v("#")]),e._v(" 二、启动哨兵")]),e._v(" "),_("p",[e._v("启动一个 Sentinel 可以使用下面任意一条命令，两条命令效果完全相同。")]),e._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[e._v("redis-sentinel /path/to/sentinel.conf\nredis-server /path/to/sentinel.conf "),_("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--sentinel")]),e._v("\n")])])]),_("p",[e._v("当一个 Sentinel 启动时，它需要执行以下步骤：")]),e._v(" "),_("ol",[_("li",[e._v("初始化服务器。")]),e._v(" "),_("li",[e._v("使用 Sentinel 专用代码。")]),e._v(" "),_("li",[e._v("初始化 Sentinel 状态。")]),e._v(" "),_("li",[e._v("初始化 Sentinel 的主服务器列表。")]),e._v(" "),_("li",[e._v("创建连向被监视的主服务器的网络连接。")])]),e._v(" "),_("p",[_("strong",[e._v("Sentinel 本质上是一个运行在特殊状模式下的 Redis 服务器")]),e._v("。")]),e._v(" "),_("p",[e._v("Sentinel 模式下 Redis 服务器只支持 "),_("code",[e._v("PING")]),e._v("、"),_("code",[e._v("SENTINEL")]),e._v("、"),_("code",[e._v("INFO")]),e._v("、"),_("code",[e._v("SUBSCRIBE")]),e._v("、"),_("code",[e._v("UNSUBSCRIBE")]),e._v("、"),_("code",[e._v("PSUBSCRIBE")]),e._v("、"),_("code",[e._v("PUNSUBSCRIBE")]),e._v(" 七个命令。")]),e._v(" "),_("p",[e._v("创建连向被监视的主服务器的网络连接，Sentinel 将成为主服务器的客户端，它可以向主服务器发送命令，并从命令回复中获取相关的信息。对于每个被 Sentinel 监视的主服务器，Sentinel 会创建两个连向主服务器的异步网络：")]),e._v(" "),_("ul",[_("li",[e._v("命令连接：专门用于向主服务器发送命令，并接受命令回复。")]),e._v(" "),_("li",[e._v("订阅连接：专门用于订阅主服务器的 "),_("code",[e._v("__sentinel__:hello")]),e._v(" 频道。")])]),e._v(" "),_("h2",{attrs:{id:"三、监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、监控"}},[e._v("#")]),e._v(" 三、监控")]),e._v(" "),_("h3",{attrs:{id:"检测服务器状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检测服务器状态"}},[e._v("#")]),e._v(" 检测服务器状态")]),e._v(" "),_("blockquote",[_("p",[_("strong",[e._v("Sentinel 向 Redis 服务器发送 "),_("code",[e._v("PING")]),e._v(" 命令，检查其状态")]),e._v("。")])]),e._v(" "),_("p",[e._v("默认情况下，"),_("strong",[e._v("每个")]),e._v(" "),_("code",[e._v("Sentinel")]),e._v(" 节点会以 "),_("strong",[e._v("每秒一次")]),e._v(" 的频率对 "),_("code",[e._v("Redis")]),e._v(" 节点和 "),_("strong",[e._v("其它")]),e._v(" 的 "),_("code",[e._v("Sentinel")]),e._v(" 节点发送 "),_("code",[e._v("PING")]),e._v(" 命令，并通过节点的 "),_("strong",[e._v("回复")]),e._v(" 来判断节点是否在线。")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("主观下线")]),e._v("："),_("strong",[e._v("主观下线")]),e._v(" 适用于所有 "),_("strong",[e._v("主节点")]),e._v(" 和 "),_("strong",[e._v("从节点")]),e._v("。如果在 "),_("code",[e._v("down-after-milliseconds")]),e._v(" 毫秒内，"),_("code",[e._v("Sentinel")]),e._v(" 没有收到 "),_("strong",[e._v("目标节点")]),e._v(" 的有效回复，则会判定 "),_("strong",[e._v("该节点")]),e._v(" 为 "),_("strong",[e._v("主观下线")]),e._v("。")]),e._v(" "),_("li",[_("strong",[e._v("客观下线")]),e._v("："),_("strong",[e._v("客观下线")]),e._v(" 只适用于 "),_("strong",[e._v("主节点")]),e._v("。当 "),_("code",[e._v("Sentinel")]),e._v(" 将一个主服务器判断为主管下线后，为了确认这个主服务器是否真的下线，会向同样监视这一主服务器的其他 Sentinel 询问，看它们是否也认为主服务器已经下线。当足够数量的 Sentinel 认为主服务器已下线，就判定其为客观下线，并对其执行故障转移操作。\n"),_("ul",[_("li",[_("code",[e._v("Sentinel")]),e._v(" 节点通过 "),_("code",[e._v("sentinel is-master-down-by-addr")]),e._v(" 命令，向其它 "),_("code",[e._v("Sentinel")]),e._v(" 节点询问对该节点的 "),_("strong",[e._v("状态判断")]),e._v("。")])])])]),e._v(" "),_("h3",{attrs:{id:"获取服务器信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取服务器信息"}},[e._v("#")]),e._v(" 获取服务器信息")]),e._v(" "),_("blockquote",[_("p",[_("strong",[e._v("Sentinel 向主服务器发送 "),_("code",[e._v("INFO")]),e._v(" 命令，获取主服务器及它的从服务器信息")]),e._v("。")])]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("获取主服务器信息")]),e._v(" - Sentinel "),_("strong",[e._v("默认")]),e._v("会以"),_("strong",[e._v("每十秒一次")]),e._v("的频率，通过命令连接"),_("strong",[e._v("向被监视的主服务器发送 "),_("code",[e._v("INFO")]),e._v(" 命令，并通过分析 "),_("code",[e._v("INFO")]),e._v(" 命令的回复来获取主服务器的当前信息")]),e._v("。\n"),_("ul",[_("li",[e._v("主服务自身信息：包括 run_id 域记录的服务器运行 ID，以及 role 域记录的服务器角色")]),e._v(" "),_("li",[e._v("主服务的从服务器信息：包括 IP 地址和端口号")])])]),e._v(" "),_("li",[_("strong",[e._v("获取从服务器信息")]),e._v(" - 当 Sentinel 发现主服务器有新的从服务器出现时，Sentinel 除了会为这个新的从服务器创建相应的实例结构之外，Sentinel 还会创建连接到从服务器的命令连接和订阅连接。")])]),e._v(" "),_("h2",{attrs:{id:"四、通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、通知"}},[e._v("#")]),e._v(" 四、通知")]),e._v(" "),_("p",[e._v("对于每个与 Sentinel 连接的服务器，Sentinel 既会向服务器的 "),_("code",[e._v("__sentinel__:hello")]),e._v(" 频道发送消息，也会订阅服务器的 "),_("code",[e._v("__sentinel__:hello")]),e._v(" 频道的消息。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200131153842.png",alt:"img"}})]),e._v(" "),_("h3",{attrs:{id:"向服务器发送消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#向服务器发送消息"}},[e._v("#")]),e._v(" 向服务器发送消息")]),e._v(" "),_("p",[e._v("在默认情况下，Sentinel 会以每两秒一次的频率，通过命令向所有被监视的主服务器和从服务器发送以下格式的命令。")]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('PUBLISH __sentinel__:hello "<s_ip>,<s_port>,<s_runid>,<s_epoch>,<m_name>,<m_ip>,<m_port>,<m_epoch>"\n')])])]),_("p",[e._v("这条命令向服务器的 "),_("code",[e._v("__sentinel__:hello")]),e._v(" 频道发送一条消息。")]),e._v(" "),_("h3",{attrs:{id:"接收服务器的消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接收服务器的消息"}},[e._v("#")]),e._v(" 接收服务器的消息")]),e._v(" "),_("p",[e._v("当 Sentinel 与一个主服务器或从服务器建立起订阅连接后，Sentinel 就会通过订阅连接，向服务器发送以下命令："),_("code",[e._v("SUBSCRIBE __sentinel__:hello")]),e._v("。")]),e._v(" "),_("p",[e._v("Sentinel 对 "),_("code",[e._v("__sentinel__:hello")]),e._v(" 频道的订阅会一直持续到 Sentinel 与服务器断开连接为止。")]),e._v(" "),_("h2",{attrs:{id:"五、选举-leader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、选举-leader"}},[e._v("#")]),e._v(" 五、选举 Leader")]),e._v(" "),_("blockquote",[_("p",[e._v("Redis Sentinel 系统选举 Leader 的算法是 "),_("a",{attrs:{href:"https://ramcloud.atlassian.net/wiki/download/attachments/6586375/raft.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raft"),_("OutboundLink")],1),e._v(" 的实现。")]),e._v(" "),_("p",[e._v("Raft 是一种共识性算法，想了解其原理，可以参考 "),_("a",{attrs:{href:"https://dunwu.github.io/blog/pages/4907dc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入剖析共识性算法 Raft"),_("OutboundLink")],1),e._v("。")])]),e._v(" "),_("p",[_("strong",[e._v("当一个主服务器被判断为客观下线时，监视这个下线主服务器的各个 Sentinel 会进行协商，选举出一个领头的 Sentinel，并由领头 Sentinel 对下线主服务器执行故障转移操作")]),e._v("。")]),e._v(" "),_("p",[e._v("所有在线 Sentinel 都有资格被选为 Leader。")]),e._v(" "),_("p",[e._v("每个 "),_("code",[e._v("Sentinel")]),e._v(" 节点都需要 "),_("strong",[e._v("定期执行")]),e._v(" 以下任务：")]),e._v(" "),_("p",[e._v("（1）每个 "),_("code",[e._v("Sentinel")]),e._v(" 以 "),_("strong",[e._v("每秒钟")]),e._v(" 一次的频率，向它所知的 "),_("strong",[e._v("主服务器")]),e._v("、"),_("strong",[e._v("从服务器")]),e._v(" 以及其他 "),_("code",[e._v("Sentinel")]),e._v(" "),_("strong",[e._v("实例")]),e._v(" 发送一个 "),_("code",[e._v("PING")]),e._v(" 命令。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce61df44c4d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（2）如果一个 "),_("strong",[e._v("实例")]),e._v("（"),_("code",[e._v("instance")]),e._v("）距离 "),_("strong",[e._v("最后一次")]),e._v(" 有效回复 "),_("code",[e._v("PING")]),e._v(" 命令的时间超过 "),_("code",[e._v("down-after-milliseconds")]),e._v(" 所指定的值，那么这个实例会被 "),_("code",[e._v("Sentinel")]),e._v(" 标记为 "),_("strong",[e._v("主观下线")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce61dc739de?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（3）如果一个 "),_("strong",[e._v("主服务器")]),e._v(" 被标记为 "),_("strong",[e._v("主观下线")]),e._v("，那么正在 "),_("strong",[e._v("监视")]),e._v(" 这个 "),_("strong",[e._v("主服务器")]),e._v(" 的所有 "),_("code",[e._v("Sentinel")]),e._v(" 节点，要以 "),_("strong",[e._v("每秒一次")]),e._v(" 的频率确认 "),_("strong",[e._v("主服务器")]),e._v(" 的确进入了 "),_("strong",[e._v("主观下线")]),e._v(" 状态。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce647a39535?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（4）如果一个 "),_("strong",[e._v("主服务器")]),e._v(" 被标记为 "),_("strong",[e._v("主观下线")]),e._v("，并且有 "),_("strong",[e._v("足够数量")]),e._v(" 的 "),_("code",[e._v("Sentinel")]),e._v("（至少要达到 "),_("strong",[e._v("配置文件")]),e._v(" 指定的数量）在指定的 "),_("strong",[e._v("时间范围")]),e._v(" 内同意这一判断，那么这个 "),_("strong",[e._v("主服务器")]),e._v(" 被标记为 "),_("strong",[e._v("客观下线")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce647c2583e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（5）在一般情况下， 每个 "),_("code",[e._v("Sentinel")]),e._v(" 会以每 "),_("code",[e._v("10")]),e._v(" 秒一次的频率，向它已知的所有 "),_("strong",[e._v("主服务器")]),e._v(" 和 "),_("strong",[e._v("从服务器")]),e._v(" 发送 "),_("code",[e._v("INFO")]),e._v(" 命令。当一个 "),_("strong",[e._v("主服务器")]),e._v(" 被 "),_("code",[e._v("Sentinel")]),e._v(" 标记为 "),_("strong",[e._v("客观下线")]),e._v(" 时，"),_("code",[e._v("Sentinel")]),e._v(" 向 "),_("strong",[e._v("下线主服务器")]),e._v(" 的所有 "),_("strong",[e._v("从服务器")]),e._v(" 发送 "),_("code",[e._v("INFO")]),e._v(" 命令的频率，会从 "),_("code",[e._v("10")]),e._v(" 秒一次改为 "),_("strong",[e._v("每秒一次")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce6738a30db?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（6）"),_("code",[e._v("Sentinel")]),e._v(" 和其他 "),_("code",[e._v("Sentinel")]),e._v(" 协商 "),_("strong",[e._v("主节点")]),e._v(" 的状态，如果 "),_("strong",[e._v("主节点")]),e._v(" 处于 "),_("code",[e._v("SDOWN")]),e._v(" 状态，则投票自动选出新的 "),_("strong",[e._v("主节点")]),e._v("。将剩余的 "),_("strong",[e._v("从节点")]),e._v(" 指向 "),_("strong",[e._v("新的主节点")]),e._v(" 进行 "),_("strong",[e._v("数据复制")]),e._v("。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce676a95a54?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("p",[e._v("（7）当没有足够数量的 "),_("code",[e._v("Sentinel")]),e._v(" 同意 "),_("strong",[e._v("主服务器")]),e._v(" 下线时， "),_("strong",[e._v("主服务器")]),e._v(" 的 "),_("strong",[e._v("客观下线状态")]),e._v(" 就会被移除。当 "),_("strong",[e._v("主服务器")]),e._v(" 重新向 "),_("code",[e._v("Sentinel")]),e._v(" 的 "),_("code",[e._v("PING")]),e._v(" 命令返回 "),_("strong",[e._v("有效回复")]),e._v(" 时，"),_("strong",[e._v("主服务器")]),e._v(" 的 "),_("strong",[e._v("主观下线状态")]),e._v(" 就会被移除。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce6759c1cb3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),e._v(" "),_("blockquote",[_("p",[e._v("注意：一个有效的 "),_("code",[e._v("PING")]),e._v(" 回复可以是："),_("code",[e._v("+PONG")]),e._v("、"),_("code",[e._v("-LOADING")]),e._v(" 或者 "),_("code",[e._v("-MASTERDOWN")]),e._v("。如果 "),_("strong",[e._v("服务器")]),e._v(" 返回除以上三种回复之外的其他回复，又或者在 "),_("strong",[e._v("指定时间")]),e._v(" 内没有回复 "),_("code",[e._v("PING")]),e._v(" 命令， 那么 "),_("code",[e._v("Sentinel")]),e._v(" 认为服务器返回的回复 "),_("strong",[e._v("无效")]),e._v("（"),_("code",[e._v("non-valid")]),e._v("）。")])]),e._v(" "),_("h2",{attrs:{id:"六、故障转移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、故障转移"}},[e._v("#")]),e._v(" 六、故障转移")]),e._v(" "),_("p",[e._v("在选举产生出 Sentinel Leader 后，Sentinel Leader 将对已下线的主服务器执行故障转移操作。操作含以下三个步骤：")]),e._v(" "),_("p",[e._v("（一）"),_("strong",[e._v("选出新的主服务器")])]),e._v(" "),_("p",[e._v("故障转移第一步，是 Sentinel Leader 在已下线主服务属下的所有从服务器中，挑选一个状态良好、数据完整的从服务器。然后，向这个从服务器发送 "),_("code",[e._v("SLAVEOF no one")]),e._v(" 命令，将其转换为主服务器。")]),e._v(" "),_("p",[e._v("Sentinel Leader 如何选出新的主服务器：")]),e._v(" "),_("ul",[_("li",[e._v("删除列表中所有处于下线或断线状态的从服务器。")]),e._v(" "),_("li",[e._v("删除列表中所有最近五秒没有回复过 Sentinel Leader 的 INFO 命令的从服务器。")]),e._v(" "),_("li",[e._v("删除所有与已下线主服务器连接断开超过 "),_("code",[e._v("down-after-milliseconds")]),e._v(" * 10 毫秒的从服务器（"),_("code",[e._v("down-after-milliseconds")]),e._v(" 指定了判断主服务器下线所需的时间）。")]),e._v(" "),_("li",[e._v("之后， Sentinel Leader 先选出优先级最高的从服务器；如果优先级一样高，再选择复制偏移量最大的从服务器；如果结果还不唯一，则选出运行 ID 最小的从服务器。")])]),e._v(" "),_("p",[e._v("（二）"),_("strong",[e._v("修改从服务器的复制目标")])]),e._v(" "),_("p",[e._v("选出新的主服务器后，Sentinel Leader 会向所有从服务器发送 "),_("code",[e._v("SLAVEOF")]),e._v(" 命令，让它们去复制新的主服务器。")]),e._v(" "),_("p",[e._v("（三）"),_("strong",[e._v("将旧的主服务器变为从服务器")])]),e._v(" "),_("p",[e._v("Sentinel Leader 将旧的主服务器标记为从服务器。当旧的主服务器重新上线，Sentinel 会向它发送 SLAVEOF 命令，让其成为从服务器。")]),e._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),_("ul",[_("li",[_("strong",[e._v("官网")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官网"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis github"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 官方文档中文版"),_("OutboundLink")],1)])])]),e._v(" "),_("li",[_("strong",[e._v("书籍")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 实战》"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("《Redis 设计与实现》"),_("OutboundLink")],1)])])]),e._v(" "),_("li",[_("strong",[e._v("教程")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 命令参考"),_("OutboundLink")],1)])])]),e._v(" "),_("li",[_("strong",[e._v("文章")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.web-lovers.com/redis-source-sentinel.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("渐进式解析 Redis 源码 - 哨兵 sentinel"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5b7d226a6fb9a01a1e01ff64",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入剖析 Redis 系列(二) - Redis 哨兵模式与高可用集群"),_("OutboundLink")],1)])])])])])}),[],!1,null,null,null);_.default=n.exports}}]);