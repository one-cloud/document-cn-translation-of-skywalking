(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{258:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",{attrs:{id:"现象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#现象","aria-hidden":"true"}},[t._v("#")]),t._v(" 现象")]),t._v(" "),a("ul",[a("li",[t._v("maven构建时，protoc-plugins插件出现如下错误：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[ERROR] Failed to execute goal org.xolstice.maven.plugins:protobuf-maven-plugin:0.5.0:compile-custom (default) on project apm-network: Unable to copy the file to \\skywalking\\apm-network\\target\\protoc-plugins: \\skywalking\\apm-network\\target\\protoc-plugins\\protoc-3.3.0-linux-x86_64.exe (The process cannot access the file because it is being used by another process) -> [Help 1]```\n")])])]),a("h3",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 原因")]),t._v(" "),a("ul",[a("li",[t._v("Protobuf编译器依赖于glibc环境，而系统上没有安装它或安装的旧版本。")])]),t._v(" "),a("h3",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),a("ul",[a("li",[t._v("检查并升级最新版本glibc库，若使用容器镜像环境推荐含有最新版本glibc的alpine系统。请参考官方手册：http://www.gnu.org/software/libc/documentation.html")])])])}],!1,null,null,null);e.default=r.exports}}]);