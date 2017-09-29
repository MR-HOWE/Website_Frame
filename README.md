
一直对网站前端和后端如何对接有点懵逼，所以完整过了一遍架构。本项目是一个以vue为前端框架,muse-ui为前端UI，以express为后端框架的网站架构案例。


# 项目架构
frame
- node_modules //npm项目依赖包
- package.json //npm配置文件
- .gitignore //git忽略文件配置
- README.md //项目说明
- .babelrc
- src
  - client //客户端
   - main.js 入口文件
   - index.html 主页
   - App.vue 根组件
   - public 静态资源
     - img
     - css
     - js 
   - router 路由
   - components 组件 
  - server // 服务端
    - app.js
    - routes 路由
    - controlers 
    - models 

安装包依赖
Dependencies
- vue
- vue-router vue前端官方路由
- express

devDependencies
- babel-core 将浏览器尚不兼容的新js版本转为旧版本
- babel-loader //webpack调用babel插件
- babel-preset-es2015 //ES6 转义规则
- cross-env 兼容不同系统的设置环境变量的方式
- file-loader //webpack文件打包
- vue-loader //webpack将\*.vue编译为*.js
- vue-template-compiler //vue-loader相关依赖
- css-loader //vue-loader相关依赖
- webpack
- webpack-dev-server //基于Express.js框架开发的web server，默认监听8080端口。server内部调用Webpack,提供额外功能如热更新和热替换
