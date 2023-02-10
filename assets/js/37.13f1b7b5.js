(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{371:function(t,e,a){"use strict";a.r(e);var n=a(4),l=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mongodb-索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-索引"}},[t._v("#")]),t._v(" MongoDB 索引")]),t._v(" "),e("h2",{attrs:{id:"mongodb-索引简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-索引简介"}},[t._v("#")]),t._v(" MongoDB 索引简介")]),t._v(" "),e("h3",{attrs:{id:"索引的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引的作用"}},[t._v("#")]),t._v(" 索引的作用")]),t._v(" "),e("p",[e("strong",[t._v("MongoDB 在 collection 数据级别上定义索引")]),t._v("。")]),t._v(" "),e("p",[t._v("索引通常能够极大的提高查询的效率。如果"),e("strong",[t._v("没有索引")]),t._v("，MongoDB 在读取数据时"),e("strong",[t._v("必须扫描 collection 中的每个 document")]),t._v(" 并选取那些符合查询条件的记录。")]),t._v(" "),e("p",[t._v("这种扫描全集合的查询是非常低效的，特别是在处理大量的数据时。查询可能要花费几十秒甚至几分钟，这种性能开销是不可接受的。")]),t._v(" "),e("p",[t._v("索引是特殊的数据结构，索引存储在一个易于遍历读取的数据集合中，索引是对数据库表中一列或多列的值进行排序的一种结构。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20200921210621.svg",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"createindex-方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createindex-方法"}},[t._v("#")]),t._v(" createIndex() 方法")]),t._v(" "),e("p",[e("strong",[t._v("MongoDB 使用 "),e("code",[t._v("createIndex()")]),t._v(" 方法来创建索引")]),t._v("。")]),t._v(" "),e("p",[e("code",[t._v("createIndex()")]),t._v(" 语法如下：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("db"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createIndex")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key and index type specification"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("code",[t._v("createIndex()")]),t._v(" 可选参数列表如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("background")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为'),e("strong",[t._v("false")]),t._v("。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("unique")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("建立的索引是否唯一。指定为 true 创建唯一索引。默认值为"),e("strong",[t._v("false")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("name")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dropDups")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("**3.0+版本已废弃。**在建立唯一索引时是否删除重复记录,指定 true 创建唯一索引。默认值为 "),e("strong",[t._v("false")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("sparse")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为 "),e("strong",[t._v("false")]),t._v(".")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("expireAfterSeconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("integer")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("v")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("index version")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("索引的版本号。默认的索引版本取决于 mongod 创建索引时运行的版本。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("weights")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("document")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("default_language")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("language_override")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.")])])])]),t._v(" "),e("p",[t._v("【示例】使用 name 作为索引，并且按照降序排序")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("db.collection.createIndex( { name: -1 } )\n")])])]),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("官方")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/mongodb/mongo",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB Github"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://university.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 官方免费教程"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[e("strong",[t._v("教程")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.runoob.com/mongodb/mongodb-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://time.geekbang.org/course/intro/100040001",target:"_blank",rel:"noopener noreferrer"}},[t._v("MongoDB 高手课"),e("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);