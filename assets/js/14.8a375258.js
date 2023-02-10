(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{348:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"扩展-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展-sql"}},[s._v("#")]),s._v(" 扩展 SQL")]),s._v(" "),t("blockquote",[t("p",[s._v("不同于 "),t("RouterLink",{attrs:{to:"/12.数据库/03.关系型数据库/01.综合/02.SqlCheatSheet.html"}},[s._v("SQL Cheat Sheet")]),s._v(" 中的一般语法，本文主要整理收集一些高级但是很有用的 SQL")],1)]),s._v(" "),t("h2",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[s._v("#")]),s._v(" 数据库")]),s._v(" "),t("h2",{attrs:{id:"表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表"}},[s._v("#")]),s._v(" 表")]),s._v(" "),t("h3",{attrs:{id:"查看表的基本信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表的基本信息"}},[s._v("#")]),s._v(" 查看表的基本信息")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_schema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"查看表的列信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看表的列信息"}},[s._v("#")]),s._v(" 查看表的列信息")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("columns")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" table_schema "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"如何批量删除大量数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何批量删除大量数据"}},[s._v("#")]),s._v(" 如何批量删除大量数据")]),s._v(" "),t("p",[s._v("如果要根据时间范围批量删除大量数据，最简单的语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" SUBDATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("上面的语句，大概率执行会报错，提示删除失败，因为需要删除的数据量太大了，所以需要分批删除。")]),s._v(" "),t("p",[s._v("可以先通过一次查询，找到符合条件的历史订单中最大的那个订单 ID，然后在删除语句中把删除的条件转换成按主键删除。")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" SUBDATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CURDATE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERVAL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("month")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 分批删除，? 填上一条语句查到的最大 ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" orders\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" ?\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://item.jd.com/11232698.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("《SQL 必知必会》"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);