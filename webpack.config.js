var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/client/main.js',//entry：指定了程序的入口文件(处理的源文件)
  // 这里应用程序开始执行
  // webpack 开始打包

  output: {//指定文件输出
    path: path.resolve(__dirname, './src/client'),//打包文件存储的绝对位置
    publicPath: '/', //输出解析文件的目录，url 相对于 HTML 页面
    filename: 'bundle.js' //文件命名
  },
  module: {
    // 关于模块配置
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.vue$/,
        loader: 'vue-loader',//指定后缀名为.vue 的文件通过vue-loader语法解析加载
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', //指定后缀名为.js 的文件通过babel-loader语法解析加载
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader', //png/jpg/gif/svg通过文件格式解析
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,  
        loader: 'style-loader!css-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//用于配置程序可以自行补全哪些文件后缀,意味着我们require/import模块可以省略不写后缀名
    // 解析模块请求的选项
    alias: {//定义别名
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true, // 	当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
    noInfo: true, // only errors & warns on hot reload
    port: 8082, // 默认端口为8080
    stats: {colors: true}, // 设置终端输出字体颜色
    proxy: {
      '/api': {
          target: 'http://localhost:3000/',
          hots: 'localhost',
          secure: false
      }
    }
  },
  performance: {
    hints: false // 关闭性能提示
  },
  devtool: '#eval-source-map'
    // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试

}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
