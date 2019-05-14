(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{197:function(e,r,v){"use strict";v.r(r);var t=v(0),_=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"高级部署"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高级部署","aria-hidden":"true"}},[e._v("#")]),e._v(" 高级部署")]),e._v(" "),v("p",[e._v("OAP服务器在集群环境中相互通信。\n在集群模式中，可通过不同的角色运行。")]),e._v(" "),v("ul",[v("li",[e._v("Mixed(默认)")]),e._v(" "),v("li",[e._v("Receiver")]),e._v(" "),v("li",[e._v("Aggregator")])]),e._v(" "),v("p",[e._v("有时，用户希望集群中的节点承担明确的角色。可以参考以下：")]),e._v(" "),v("h2",{attrs:{id:"mixed"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mixed","aria-hidden":"true"}},[e._v("#")]),e._v(" Mixed")]),e._v(" "),v("p",[e._v("默认角色，OAP需承担以下责任：")]),e._v(" "),v("ol",[v("li",[e._v("接收agent的跟踪或指标。")]),e._v(" "),v("li",[e._v("做L1聚合")]),e._v(" "),v("li",[e._v("内部通信(发送/接收)")]),e._v(" "),v("li",[e._v("做L2聚合")]),e._v(" "),v("li",[e._v("持久化数据")]),e._v(" "),v("li",[e._v("报警")])]),e._v(" "),v("h2",{attrs:{id:"receiver"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#receiver","aria-hidden":"true"}},[e._v("#")]),e._v(" Receiver")]),e._v(" "),v("p",[e._v("OAP需承担以下责任：")]),e._v(" "),v("ol",[v("li",[e._v("接收代理跟踪或指标")]),e._v(" "),v("li",[e._v("做L1聚合")]),e._v(" "),v("li",[e._v("内部通信(发送)")])]),e._v(" "),v("h2",{attrs:{id:"aggregator"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aggregator","aria-hidden":"true"}},[e._v("#")]),e._v(" Aggregator")]),e._v(" "),v("p",[e._v("OAP需承担以下责任：")]),e._v(" "),v("ol",[v("li",[e._v("内部沟通(接收)")]),e._v(" "),v("li",[e._v("做L2聚合")]),e._v(" "),v("li",[e._v("持久化数据")]),e._v(" "),v("li",[e._v("告警")])]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("这些角色是基于安全和网络策略的复杂部署需求而设计的。")]),e._v(" "),v("h2",{attrs:{id:"kubernetes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes")]),e._v(" "),v("p",[e._v("如果你正在使用我们原生的[Kubernetes coordinator](backend-cluster.md# Kubernetes)，"),v("code",[e._v("labelSelector")]),e._v("\n的设置可用于"),v("code",[e._v("Aggregator")]),e._v("角色。根据你的需求选择正确的OAP部署。")])])}],!1,null,null,null);r.default=_.exports}}]);