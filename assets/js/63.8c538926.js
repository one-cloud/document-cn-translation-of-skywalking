(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{241:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),s("ul",[s("li",[t._v("在"),s("code",[t._v("layout.ConversionPattern")]),t._v("中设置"),s("code",[t._v("%T")]),t._v(" (在2.0-2016中，你应该使用%x，"),s("a",{attrs:{href:"https://github.com/wu-sheng/sky-walking/issues/77",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么做了修改?"),s("OutboundLink")],1),t._v(" )")])]),t._v(" "),t._m(4),t._m(5)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("通过maven或gradle引入toolkit依赖。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[t._v("   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.apache.skywalking"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("apm-toolkit-log4j-1.x"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{project.release.version}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("配置layout")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("log4j.appender.CONSOLE.layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("TraceIdPatternLayout")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[this._v("log4j.appender.CONSOLE.layout.ConversionPattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[this._v("%d [%T] %-5p %c{1}:%L - %m%n")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("当你使用"),a("code",[this._v("-javaagent")]),this._v("激活skywalking tracer后，log4j将会输出"),a("strong",[this._v("traceId")]),this._v("（如果存在的话）。如果tracer未激活，输出将是"),a("code",[this._v("TID: N/A")]),this._v("。")])])}],!1,null,null,null);a.default=n.exports}}]);