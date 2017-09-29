<template>
    <router-view></router-view><!-- 子路由视图,类似于一个插槽，跳转某个路由时，该路由下的页面就插在这个插槽中渲染显示 -->
</template>
<!-- 这里的template里面的内容会完全替代 html 的<div id="app"> -->
<script>
export default {
  name: 'app2'//名字无关紧要
}
</script>

<style>
html,body {
  height: 100%;
}
#vue-component-container {
  height: 100%;
}
</style>