(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{321:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("本文档指导每个提交者以 Apache 的方式来发布 SkyWalking, 并且还帮助提交者检查发布以便参与投票.")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("按照 "),e("a",{attrs:{href:"http://www.apache.org/dev/publishing-maven-artifacts.html#dev-env",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache maven 部署环境文档"),e("OutboundLink")],1),t._v("设置 gpg 工具和加密密码")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),e("ol",[e("li",[t._v("将您的 GPG 公钥添加到 "),e("a",{attrs:{href:"https://dist.apache.org/repos/dist/release/skywalking/KEYS",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyWalking GPG KEYS"),e("OutboundLink")],1),t._v(" 文件中,\n只有当你是一个提交者时才能修改, 使用你的 Apache id 和密码登录这个 svn, 并更新文件. "),e("strong",[t._v("不要覆盖现有文件")])]),t._v(" "),e("li",[t._v("将您的 GPG 公钥上传到公共 GPG 站点.  如 "),e("a",{attrs:{href:"http://pgp.mit.edu:11371/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT 的站点"),e("OutboundLink")],1),t._v(". 这个网站应该在 Apache maven staging repository 的检查列表中")])]),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("此步骤仅用于测试, 如果您的环境设置正确, 则不需要每次都检查.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("这个脚本应该做以下事情")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("在开发邮件列表中发送公告邮件.")]),t._v(" "),t._m(26),t._m(27),t._v(" "),e("p",[t._v("任何 PMC, 提交者或贡献者都可以测试发布的功能并提供反馈.\n基于此, PMC 将决定是否开始投票.")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),e("p",[t._v("所有 PMC 成员和提交者都应在投票 +1 之前检查这些.")]),t._v(" "),e("ol",[e("li",[t._v("功能测试.")]),t._v(" "),e("li",[t._v("staging repository 中的所有工件都使用 .asc, .md5, *sha1 文件发布")]),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),e("li",[t._v("遵循"),e("a",{attrs:{href:"https://github.com/apache/skywalking/blob/master/docs/en/How-to-build.md#build-from-apache-source-codes",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v("构建发布源代码包 (apache-skywalking-x.y.z-src.tar.gz).")]),t._v(" "),t._m(35),t._v(" "),e("li",[t._v("需要有免责声明")])]),t._v(" "),e("p",[t._v("投票结果应遵循这些.")]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"apache-skywalking-发布指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-skywalking-发布指南","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache SkyWalking 发布指南")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"设置您的开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置您的开发环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置您的开发环境")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("使用以下代码块作为模板并将其放入 "),a("code",[this._v("~/.m2/settings.xml")]),this._v(" 文件中")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n...\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("servers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- To publish a snapshot of some part of Maven --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("apache.snapshots.https"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- YOUR APACHE LDAP USERNAME --\x3e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- YOUR APACHE LDAP PASSWORD (encrypted) --\x3e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- To stage a release of some part of Maven --\x3e")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("apache.releases.https"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- YOUR APACHE LDAP USERNAME --\x3e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- YOUR APACHE LDAP PASSWORD (encrypted) --\x3e")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   ...\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("servers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("settings")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"添加您的-gpg-公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加您的-gpg-公钥","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加您的 GPG 公钥")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"测试你的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试你的配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试你的配置")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("./mvnw clean install -Papache-release (这将构建工件, 来源和标志)\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"准备发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 准备发布")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("./mvnw release:clean\n./mvnw release:prepare -DautoVersionSubmodules=true -Pauto-submodule\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("你可以在发布之前做 GPG 签名, 如果你需要输入密码以进行签名, 但 maven 没有给你输入的机会.\n对任意文件运行 "),a("code",[this._v("gpg --sign xxx")]),this._v(" 进行签名, 这可以记住密码一段时间, 应该可以在这段时间内发布完成.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"发布阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布阶段","aria-hidden":"true"}},[this._v("#")]),this._v(" 发布阶段")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("./mvnw release:perform -DskipTests -Pauto-submodule\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("将版本号设置为 x.y.z, 打上 tag, "),a("strong",[this._v("v")]),this._v("x.y.z (版本 tag 必须以 "),a("strong",[this._v("v")]),this._v(" 开头, 您将在下一步中知道为什么必须这样.)")]),this._v(" "),a("li",[this._v("该版本将自动插入临时存储库中.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"构建并签署源代码包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建并签署源代码包","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建并签署源代码包")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("export RELEASE_VERSION=x.y.z (example: RELEASE_VERSION=5.0.0-alpha)\ncd tools/releasing\nsh create_source_release.sh\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("注意")]),this._v(", "),a("code",[this._v("create_source_release.sh")]),this._v(" 只适合 MacOS.  欢迎任何人贡献 Windows bat 和 Linux shell.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",[e("li",[t._v("使用 "),e("code",[t._v("v")]),t._v(" + "),e("code",[t._v("RELEASE_VERSION")]),t._v(" 作为标记来克隆代码.")]),t._v(" "),e("li",[t._v("完成 "),e("code",[t._v("git submodule init/update")]),t._v(" .")]),t._v(" "),e("li",[t._v("排除目标源 tar 中的所有不必要的文件, 例如 "),e("code",[t._v(".git")]),t._v(", "),e("code",[t._v(".github")]),t._v(", "),e("code",[t._v(".gitmodules")]),t._v(". 有关详细信息, 请参阅脚本.")]),t._v(" "),e("li",[t._v("执行 "),e("code",[t._v("gpg")]),t._v(" 和 "),e("code",[t._v("shasum 512")]),t._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("此时你应该可以在 "),a("code",[this._v("tools/releasing")]),this._v(" 文件夹中找到 "),a("code",[this._v("apache-skywalking-apm-x.y.z-src.tgz")]),this._v(" 和 .asc, .sha512 结尾的文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"在-apache-nexus-staging-存储库中查找和下载分发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-apache-nexus-staging-存储库中查找和下载分发","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Apache Nexus Staging 存储库中查找和下载分发")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",[e("li",[t._v("使用 ApacheId 登录 "),e("code",[t._v("https://repository.apache.org/")]),t._v(".")]),t._v(" "),e("li",[t._v("跳转到 "),e("code",[t._v("https://repository.apache.org/#stagingRepositories")]),t._v(".")]),t._v(" "),e("li",[t._v("搜索 "),e("code",[t._v("skywalking")]),t._v(" 并找到您的暂存存储库.")]),t._v(" "),e("li",[t._v("关闭存储库并等待所有检查通过. 在此步骤中, 将检查您的 GPG KEYS. 如果你以前没有这样做过, 请参考"),e("a",{attrs:{href:"#add-your-gpg-public-key"}},[t._v("设置 GPG 文档")]),t._v(".")]),t._v(" "),e("li",[t._v("跳转到 "),e("code",[t._v("{REPO_URL}/org/apache/skywalking/apache-skywalking-apm-/x.y.z")])]),t._v(" "),e("li",[t._v("下载 "),e("code",[t._v(".tar.gz")]),t._v(" 和 "),e("code",[t._v(".zip")]),t._v(" 且有 .asc 和 .sha1 结尾的文件")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"上传到-apache-svn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到-apache-svn","aria-hidden":"true"}},[this._v("#")]),this._v(" 上传到 Apache svn")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("使用 ApacheId 登录 "),a("code",[this._v("https://dist.apache.org/repos/dist/dev/skywalking/")]),this._v(".")]),this._v(" "),a("li",[this._v("创建文件夹, 按发行版本和圆形命名, 例如: x.y.z")]),this._v(" "),a("li",[this._v("将源代码包上传到包含 .asc, .sha512 的文件夹")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("包名: apache-skywalking-x.y.z-src.tar.gz")]),this._v(" "),a("li",[this._v('有关详细信息, 请参见"构建和签署源代码包"一节')])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("使用.asc, .sha512将分发包上载到该文件夹")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("包名: apache-skywalking-x.y.z.tar.gz, apache-skywalking-x.y.z.zip")]),this._v(" "),a("li",[this._v("有关详细信息, 请参见“在Apache Nexus Staging存储库中查找和下载分发”一节")]),this._v(" "),a("li",[this._v("创建 .sha512 包: "),a("code",[this._v("shasum -a 512 file > file.sha512")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"发表内部公告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发表内部公告","aria-hidden":"true"}},[this._v("#")]),this._v(" 发表内部公告")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("邮件标题: [ANNOUNCE] SkyWalking x.y.z test build available\n\n邮件内容:\nThe test build of x.y.z is available.\n\nThis is our Apache Release.\nWe welcome any comments you may have, and will take all feedback into\naccount if a quality vote is called for this build.\n\nRelease notes:\n\n * https://github.com/apache/skywalking/blob/master/CHANGES.md\n\nRelease Candidate:\n\n * https://dist.apache.org/repos/dist/dev/skywalking/xxxx\n * sha512 checksums\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x-src.tgz\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x.tar.gz\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x.zip\n\nMaven 2 staging repository:\n\n * https://repository.apache.org/content/repositories/xxxx/org/apache/skywalking/\n\nRelease Tag :\n\n * (Git Tag) x.y.z\n\nRelease CommitID :\n\n * https://github.com/apache/skywalking/tree/(Git Commit ID)\n * Git submodule\n   * skywalking-ui: https://github.com/apache/skywalking-ui/tree/(Git Commit ID)\n   * apm-protocol/apm-network/src/main/proto: https://github.com/apache/skywalking-data-collect-protocol/tree/(Git Commit ID)\n   * oap-server/server-query-plugin/query-graphql-plugin/src/main/resources/query-protocol https://github.com/apache/skywalking-query-protocol/tree/(Git Commit ID)\n\nKeys to verify the Release Candidate :\n\n * http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x2EF5026E70A55777 corresponding to pengys@apache.org\n\nGuide to build the release from source :\n\n * https://github.com/apache/skywalking/blob/x.y.z/docs/en/guides/How-to-build.md\n\nA vote regarding the quality of this test build will be initiated\nwithin the next couple of days.\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"等待至少-48-小时的测试响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#等待至少-48-小时的测试响应","aria-hidden":"true"}},[this._v("#")]),this._v(" 等待至少 48 小时的测试响应")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"在-dev-群组中投票"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-dev-群组中投票","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 dev 群组中投票")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("在 "),a("code",[this._v("dev@skywalking.apache.org")]),this._v(" 中发起投票")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("邮件标题: [VOTE] Release Apache SkyWalking version x.y.z\n\n邮件内容:\nHi All,\nThis is a call for vote to release Apache SkyWalking version x.y.z.\n\nRelease notes:\n\n * https://github.com/apache/skywalking/blob/x.y.z/CHANGES.md\n\nRelease Candidate:\n\n * https://dist.apache.org/repos/dist/dev/skywalking/xxxx\n * sha512 checksums\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x-src.tgz\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x.tar.gz\n   - sha512xxxxyyyzzz apache-skywalking-apm-x.x.x.zip\n\nMaven 2 staging repository:\n\n * https://repository.apache.org/content/repositories/xxxx/org/apache/skywalking/\n\nRelease Tag :\n\n * (Git Tag) x.y.z\n\nRelease CommitID :\n\n * https://github.com/apache/skywalking/tree/(Git Commit ID)\n * Git submodule\n   * skywalking-ui: https://github.com/apache/skywalking-ui/tree/(Git Commit ID)\n   * apm-protocol/apm-network/src/main/proto: https://github.com/apache/skywalking-data-collect-protocol/tree/(Git Commit ID)\n   * oap-server/server-query-plugin/query-graphql-plugin/src/main/resources/query-protocol https://github.com/apache/skywalking-query-protocol/tree/(Git Commit ID)\n\nKeys to verify the Release Candidate :\n\n * http://pgp.mit.edu:11371/pks/lookup?op=get&search=0x2EF5026E70A55777 corresponding to pengys@apache.org\n\nGuide to build the release from source :\n\n * https://github.com/apache/skywalking/blob/x.y.z/docs/en/guides/How-to-build.md\n\nVoting will start now (xxxx date) and will remain open for at least 72 hours, Request all PMC members to give their vote.\n[ ] +1 Release this package.\n[ ] +0 No opinion.\n[ ] -1 Do not release this package because....\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"投票检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#投票检查","aria-hidden":"true"}},[this._v("#")]),this._v(" 投票检查")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("源代码和下发包 (apache-skywalking-x.y.z-src.tar.gz, apache-skywalking-x.y.z.tar.gz, apache-skywalking-x.y.z.zip)\n都应该在 "),a("code",[this._v("https://dist.apache.org/repos/dist/dev/skywalking/x.y.z")]),this._v(" 且包含 .asc, .sha512")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("code",[this._v("LICENSE")]),this._v(" 和 "),a("code",[this._v("NOTICE")]),this._v(" 文件在源代码和分发包中.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("检查 "),a("code",[this._v("shasum -c apache-skywalking-apm-x.y.z-src.tgz.sha512")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[this._v("Apache RAT 检查. 运行"),a("code",[this._v("./mvnw apache-rat:check")]),this._v(". (源代码中没有二进制文件)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("PMC 投票是 +1 绑定, 所有其他投票是 +1 没有约束力.")]),this._v(" "),a("li",[this._v("在 72 小时内, 你得到至少 3 个 (+1 绑定), 并且 +1 比 -1 更多. 投票通过.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"发版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发版","aria-hidden":"true"}},[this._v("#")]),this._v(" 发版")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("将源代码 tar 包和分发包移动到 "),a("code",[this._v("https://dist.apache.org/repos/dist/release/skywalking/")]),this._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("> export SVN_EDITOR=vim\n> svn mv https://dist.apache.org/repos/dist/dev/skywalking/x.y.z https://dist.apache.org/repos/dist/release/skywalking\n....\nenter your apache password\n....\n\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",[e("li",[t._v("在 nexus staging repo 中发布.")]),t._v(" "),e("li",[t._v("公共下载源和下发 tar/zip 位于 "),e("code",[t._v("http://www.apache.org/dyn/closer.cgi/skywalking/x.y.z/xxx")]),t._v(". 我们只发布 Apache 镜像路径作为发布信息.")]),t._v(" "),e("li",[t._v("公共 asc 和 sha512 位于 "),e("code",[t._v("https://www.apache.org/dist/skywalking/x.y.z/xxx")])]),t._v(" "),e("li",[t._v("公共密钥指向 "),e("code",[t._v("https://www.apache.org/dist/skywalking/KEYS")])]),t._v(" "),e("li",[t._v("将 ANNOUNCE 邮件发送到 "),e("code",[t._v("dev@skywalking.apache.org")]),t._v(".")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("邮件标题: [ANNOUNCE] Release Apache SkyWalking version x.y.z\n\n邮件内容:\nHi all,\n\nApache SkyWalking Team is glad to announce the first release of Apache SkyWalking x.y.z.\n\nSkyWalking: APM (application performance monitor) tool for distributed systems, \nespecially designed for microservices, cloud native and container-based (Docker, Kubernetes, Mesos) architectures. \nUnderlying technology is a distributed tracing system.\n\nVote Thread: \n\nDownload Links : http://skywalking.apache.org/downloads/\n\nRelease Notes : https://github.com/apache/skywalking/blob/x.y.z/CHANGES.md\n\nWebsite: http://skywalking.apache.org/\n\nSkyWalking Resources:\n- Issue: https://github.com/apache/skywalking/issues\n- Mailing list: dev@skywalkiing.apache.org\n- Documents: https://github.com/apache/skywalking/blob/x.y.z/docs/README.md\n\n\n- Apache SkyWalking Team\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("更新网站下载页面.  http://skywalking.apache.org/downloads/ .  包括新的下载源, 分发, sha512, asc 和文档, 链接. 可通过遵循上述规则（3） - （6）找到链接.")]),this._v(" "),a("li",[this._v("在网站主页甚至页面上添加发布活动. 通过更改日志或主要功能宣布公开发布.")])])}],!1,null,null,null);a.default=n.exports}}]);