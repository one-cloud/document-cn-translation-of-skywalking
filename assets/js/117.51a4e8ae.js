(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{200:function(t,e,r){"use strict";r.r(e);var n=r(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("追踪数据协议描述了 SkyWalking 代理/sniffer 和后端之间的数据交互格式.")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("本协议包含了上行数据和下行数据的数据格式。其他语言的代理和 SDK 可以使用这个协议来将数据上传到 SkyWalking 后端。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("v1 版本")]),t._v(" "),t._m(4),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/tree/v2.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC proto 文件"),r("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/TraceSegmentService.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 服务定义"),r("OutboundLink")],1)]),t._v(" "),r("ul",[t._m(6),t._v(" "),r("li",[t._v("Span 数据请参考 "),r("router-link",{attrs:{to:"./../guides/Java-Plugin-Development-Guide.html"}},[t._v("插件开发指南")])],1),t._v(" "),t._m(7),t._v(" "),r("li",[t._v("组件 ID（componentIds）在后端中定义，参考"),r("a",{attrs:{href:"https://github.com/apache/skywalking//blob/master/apm-protocol/apm-network/src/main/java/org/apache/skywalking/apm/network/trace/component/ComponentsDefine.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("此处"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("HTTP 格式:")]),t._v(" "),r("p",[t._v("输入：")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("注册应用代码到后端中，且返回一个整数标识该应用。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/ApplicationRegisterService.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 服务定义"),r("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/DiscoveryService.proto#L29",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 服务定义"),r("OutboundLink")],1)]),t._v(" "),t._m(18),t._v(" "),r("p",[t._v("HTTP 格式 http://ip:port/instance/register(默认: localhost:12800)")]),t._v(" "),r("p",[t._v("输入:")]),t._v(" "),t._m(19),r("p",[t._v("输出:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/DiscoveryService.proto#L32",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 服务定义"),r("OutboundLink")],1)]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("HTTP 格式 http://ip:port/instance/heartbeat(默认: localhost:12800)")]),t._v(" "),r("p",[t._v("输入:")]),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),r("p",[t._v("使用整型 ID 替换字符串类型的服务（操作）名称")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),r("p",[t._v("HTTP 格式 http://ip:port/servicename/discovery(默认: localhost:12800)")]),t._v(" "),r("p",[t._v("输入：")]),t._v(" "),t._m(29),r("p",[t._v("输出：")]),t._v(" "),t._m(30),t._m(31),t._v(" "),t._m(32),t._v(" "),r("p",[t._v("网络地址包括所有已经被移除的服务的地址，包含 IP，端口，主机等，这些在 RPC 框架和消息队列、数据库等中使用。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/NetworkAddressRegisterService.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("gRPC 服务定义"),r("OutboundLink")],1)]),t._v(" "),t._m(33)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"追踪数据协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追踪数据协议","aria-hidden":"true"}},[this._v("#")]),this._v(" 追踪数据协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"摘要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要","aria-hidden":"true"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("其他服务都是通过 HTTP/JSON 和 gRPC 两者提供，包括注册服务，追踪服务等。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"grpc-proto-文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grpc-proto-文件","aria-hidden":"true"}},[this._v("#")]),this._v(" gRPC proto 文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"追踪段服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追踪段服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 追踪段服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("UniqueId 代表段的 ID （segmentId）和全局追踪 ID（globalTraceId）。它包含三部分（long 类型）。\n"),e("ol",[e("li",[this._v("应用实例 ID（applicationInstanceId）")]),this._v(" "),e("li",[this._v("线程 ID（ThreadId）")]),this._v(" "),e("li",[this._v("时间戳（Timestamp）+ 10000 + seq(seq is in [0, 100000) )")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("当以下 ID 和名称（name）同时存在时，在可能的情况下优先使用 ID\n"),r("ul",[r("li",[t._v("operationNameId/endpointName")]),t._v(" "),r("li",[t._v("networkAddress/networkAddressId")]),t._v(" "),r("li",[t._v("entryServiceName/entryServiceId")]),t._v(" "),r("li",[t._v("parentServiceName/parentServiceId")]),t._v(" "),r("li",[t._v("peerId/peer")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('[\n  {\n    "gt": [[230150, 185809, 24040000]], \n    "sg": { //TraceSegmentObject \n      "ts": [137150, 185809, 48780000], \n      "ai": 2, //serviceId\n      "ii": 3, //applicationInstanceId\n      "ss": [ //SpanObject\n        {\n          "si": 0, //spanId\n          "tv": 0, //SpanType\n          "lv": 2, //SpanLayer\n          "ps": -1, //parentSpanId\n          "st": 1501858094726, //startTime\n          "et": 1501858096804, //endTime\n          "ci": 3, //componentId\n          "cn": "", //component\n          "oi": 0, //operationNameId\n          "on": "org.skywaking.apm.testcase.dubbo.services.GreetService.doBusiness()", //endpointName\n          "pi": 0, //peerId\n          "pn": "", //peer\n          "ie": false, //isError\n          "rs": [ //TraceSegmentReference\n            {\n              "pts": [230150, 185809, 24040000], //parentTraceSegmentId\n              "pii": 2, //parentServiceInstanceId\n              "psp": 1, //parentSpanId\n              "psi": 0, //parentServiceId\n              "psn": "/dubbox-case/case/dubbox-rest", //parentServiceName\n              "ni": 0,  //networkAddressId\n              "nn": "172.25.0.4:20880", //networkAddress\n              "eii": 2, //entryServiceInstanceId\n              "esi": 0, //entryServiceId\n              "esn": "/dubbox-case/case/dubbox-rest", //entryServiceName\n              "rv": 0 //RefTypeValue\n            }\n          ],\n          "to": [ //KeyWithStringValue\n            {\n              "k": "url", //key\n              "v": "rest://172.25.0.4:20880/org.skywaking.apm.testcase.dubbo.services.GreetService.doBusiness()" //value\n            },\n            {\n              "k": "http.method",\n              "v": "GET"\n            }\n          ],\n          "lo": [{\n                "ti": 1501858094726,\n                "ld": [{ \n                        "k": "NullPointException",\n                        "v": "Error Stack"\n                    }]\n           }]\n        },\n        {\n          "si": 1,\n          "tv": 1,\n          "lv": 1,\n          "ps": 0,\n          "st": 1501858094726,\n          "et": 1501858095804,\n          "ci": 9,\n          "cn": "",\n          "oi": 0,\n          "on": "mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]",\n          "pi": 0,\n          "pn": "localhost:27017",\n          "ie": false,\n          "to": [],\n          "lo": []\n        }\n      ]\n    }\n  }\n]\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"弃用的服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#弃用的服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 弃用的服务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("弃用的服务")]),this._v(" 是 SkyWalking 以前使用的 gRPC 服务。在 SkyWalking 6 以后，为了适配云原生（CloudNative）的通用概念，这些服务被废弃了。\n尽管这些服务此时仍然支持，但是预计在 2019 年后将不再支持。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"应用注册服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用注册服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("应用注册服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("弃用的服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"摘要-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("应用编码（applicationCode）是配置在你 "),r("code",[t._v("agent.config")]),t._v(" 中的.")]),t._v(" "),r("li",[t._v("返回的 ID 是"),r("strong",[t._v("应用 ID（ApplicationId）")]),t._v("，存储在 "),r("code",[t._v("KeyWithIntegerValue")]),t._v(" 的 "),r("code",[t._v("value")]),t._v(" 中，会在后续数据上传中使用到。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"发现服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发现服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("发现服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("弃用的服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"注册实例服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册实例服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("注册实例服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("代理唯一键（agentUUID）由代理生成，必须全局唯一，且至少在重启之前保持一致")]),this._v(" "),e("li",[e("strong",[this._v("应用实例 ID（ApplicationInstanceId）")]),this._v(" 将会在后续数据上传过程中使用")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    ai: x, #serviceId\n    au: "", #agentUUID\n    rt: x, #registerTime\n    oi: "", #osinfo\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("{\n    ai: x, #serviceId\n    ii: x, #applicationInstanceId\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"心跳服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#心跳服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("心跳服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("推荐每隔 20-60 秒进行一次心跳检测。")]),this._v(" "),e("li",[this._v("Java 代理不会使用这个服务，因为 JVM 指标上游替换了此服务的能力。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    "ii": x, #applicationInstanceId\n    "ht": x #heartbeatTime, java timestamp format\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"服务名称发现服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务名称发现服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("服务名称发现服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("弃用的服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"摘要-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:".https://github.com/apache/skywalking-data-collect-protocol/blob/v2.0/DiscoveryService.proto#L70"}},[this._v("gRPC 服务定义")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可选的服务，降低网络开销，但增大内存使用（因为使用了缓冲映射）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    ai: x, #serviceId\n    sn: "", #serviceName\n    st: x, #srcSpanType\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{\n    si: x, #osinfo\n    el: { #element\n        ai: x, #serviceId\n        sn: "", #serviceName\n        st: x, #srcSpanType\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"网络地址注册服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络地址注册服务","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("s",[this._v("网络地址注册服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"摘要-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#摘要-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 摘要")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可选的服务，降低网络开销，但增大内存使用（因为使用了缓冲映射）")])])}],!1,null,null,null);e.default=a.exports}}]);