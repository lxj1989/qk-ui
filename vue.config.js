// const path = require("path");
// //HardSourceWebpackPlugin是webpack的插件，为模块提供中间缓存步骤。为了查看结果，您需要使用此插件运行webpack两次：第一次构建将花费正常的时间。第二次构建将显着加快（大概提升90%的构建速度）。
// //安装 npm install --save-dev hard-source-webpack-plugin
// const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
// //DllPlugin插件能够快速打包，能把第三方依赖的文件能提前进行预编译打包到一个文件里面去。
// //安装 npm install --save-dev autodll-webpack-plugin
// const AutoDllPlugin = require("autodll-webpack-plugin");

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }
const utils = require('./utils')
const striptags = require('./strip-tags')
var path = require('path');
let HyperDown = require('hyperdown');
let parser = new HyperDown;
module.exports = {
	runtimeCompiler: true,
	publicPath: '../',
	outputDir: 'docs',
	assetsDir: 'static',
	lintOnSave: false, // 关闭eslint
	productionSourceMap: false,
	devServer: {
		port: 0701,
		open: true,
		https: false,
		overlay: {
			warnings: false,
			errors: true
		},
		proxy: {
			'/proxyApi/zs/v1': {
				target: 'https://admin.guide.51quicker.net/zs/v1',
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					'^/proxyApi/zs/v1': ''
				}
			}
		}
	},

	// configureWebpack: config => {
	//     Object.assign(config, {
	//       resolve: {
	//         extensions: ['.js', '.vue', '.json'] // 可以省略后缀名
	//       }
	//     });

	//     Object.assign(config.resolve.alias, {
	//       "@utils": resolve("src/utils"),
	//       "@libs": resolve("src/libs"),
	//       "@api": resolve("src/api"),
	//       "@components": resolve("src/components"),
	//       "@assets": resolve("src/assets"),
	//       "@css": resolve("src/assets/css"),
	//       "@images": resolve("src/assets/images"),
	//       "@views": resolve("src/views"),
	//       "@mixins": resolve("src/mixins")
	//     });

	//     if (process.env.NODE_ENV !== "production") {
	//       config.plugins.push(
	//         new HardSourceWebpackPlugin(),
	//         new AutoDllPlugin({
	//           inject: true,
	//           debug: true,
	//           filename: "[name]_[hash].js",
	//           path: "./dll" + Date.parse(new Date()),
	//           entry: {
	//             vendor_vue: ["vue", "vuex", "vue-router"],
	//             vendor_ui: ["vue-awesome-swiper"],
	//             vendor_tools: ["axios", "core-js"]
	//           }
	//         })
	//       );
	//     }
	//   },

	//   chainWebpack: config => {
	//     config.plugin("html").tap(args => {
	//       args[0].title = process.env.VUE_APP_TITLE;
	//       return args;
	//     });
	// },
	chainWebpack: config => {
		config.module
			.rule('url-loader')
			.test(/\.(cur)(\?.*)?$/)
			.use('url-loader')
			.loader('url-loader')
			.end()
	},
	chainWebpack: config => {
		config.module
			.rule('md')
			.test(/\.md/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')

			// .options(vueMarkdown)
			.options({		//格式化代码
				wrapper: 'article',
				wrapperName: '123',
				raw: true,
				// preventExtract: true,
				use: [
					[require('markdown-it-container'), 'tip'],
					[require('markdown-it-container'), 'warning'],
					[require('markdown-it-container'), 'danger'],
					[require('markdown-it-container'), 'details'],
					[require('markdown-it-container'), 'demo',{
						validate: params => params.trim().match(/^demo\s*(.*)$/),
						render: function(tokens, idx) {
							var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

							if (tokens[idx].nesting === 1) {
								var desc = tokens[idx + 2].content;
								const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
								// 移除描述，防止被添加到代码块
								tokens[idx + 2].children = [];
								return `<demo-block><div slot="desc">${html}</div><div slot="highlight">`;
							}
							return '</div></demo-block>\n';
						}
					}],
				]
			})

			.options({	//格式化样式
				// preset: 'default',
				// breaks: true,
				raw: true,
				// typographer: true,
				preprocess: function(MarkdownIt, source) {
					MarkdownIt.renderer.rules.table_open = function () {
						return '<table class="table">'
					}
					// MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

					// ```html `` 给这种样式加个class hljs
					//  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
					//  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
					//  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
					// const fence = MarkdownIt.renderer.rules.fence 
					// MarkdownIt.renderer.rules.fence = function(...args){
					//   args[0][args[1]].attrJoin('class', 'hljs')
					//   var a = fence(...args)
					//   return a
					// }

					// ```code`` 给这种样式加个class code_inline
					// const code_inline = MarkdownIt.renderer.rules.code_inline
					// MarkdownIt.renderer.rules.code_inline = function(...args){
					//   args[0][args[1]].attrJoin('class', 'code_inline')
					//   return code_inline(...args)
					// }
					return source
					// return parser.makeHtml(source);//重点在这里！！！
				}
			})
		// .end()
	},

	pluginOptions: {
		// 'style-resources-loader': {
		// 	preProcessor: 'scss',
		// 	patterns: []
		// }
	},
	// 修改 src 目录 为 examples 目录
	pages: {
		index: {
			entry: 'examples/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		}
	}

}
/**
 * Format HTML string
 */
var convertHtml = function(str) {
	return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}
const MarkdownItContainer = require('markdown-it-container')
// const vueMarkdown = {
// 	wrapper: 'article',
// 	wrapperName: '123',
// 	raw: true,
// 	preprocess: (MarkdownIt, source) => {
// 		MarkdownIt.renderer.rules.table_open = function() {
// 			return '<table class="table">'
// 		}
// 		MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)

// 		// ```html `` 给这种样式加个class hljs
// 		//  但是markdown-it 有个bug fence整合attr的时候直接加载class数组上而不是class的值上
// 		//  markdown-it\lib\renderer.js 71行 这么修改可以修复bug
// 		//  tmpAttrs[i] += ' ' + options.langPrefix + langName; --> tmpAttrs[i][1] += ' ' + options.langPrefix + langName;
// 		// const fence = MarkdownIt.renderer.rules.fence 
// 		// MarkdownIt.renderer.rules.fence = function(...args){
// 		//   args[0][args[1]].attrJoin('class', 'hljs')
// 		//   var a = fence(...args)
// 		//   return a
// 		// }

// 		// ```code`` 给这种样式加个class code_inline
// 		const code_inline = MarkdownIt.renderer.rules.code_inline
// 		MarkdownIt.renderer.rules.code_inline = function(...args) {
// 			args[0][args[1]].attrJoin('class', 'code_inline')
// 			return code_inline(...args)
// 		}
// 		return source
// 	},
// 	use: [
// 		// [require('markdown-it-container'), 'tip'],
// 		// [require('markdown-it-container'), 'warning'],
// 		// [require('markdown-it-container'), 'danger'],
// 		// [require('markdown-it-container'), 'details'],
// 		[MarkdownItContainer, 'demo', {
// 			validate: params => params.trim().match(/^demo\s*(.*)$/),
// 			render: function(tokens, idx) {

// 				var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

// 				if (tokens[idx].nesting === 1) {
// 					var desc = tokens[idx + 2].content;
// 					const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
// 					// 移除描述，防止被添加到代码块
// 					tokens[idx + 2].children = [];

// 					return `<demo-block>
//                         <div slot="desc">${html}</div>
//                         <div slot="highlight">`;
// 				}
// 				return '</div></demo-block>\n';

// 			}
// 		}]
// 	]
// }
