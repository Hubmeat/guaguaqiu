<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <a href="#/">首页</a><br/>
    <a href="#/collect">收藏</a><br/>
    <a href="#/message">消息</a><br/>
    <a href="#/homepage">个人中心</a><br/>
    <a href="#/login">登录</a><br/>
    <a href="#/register">注册</a><br/>
    <a href="#/detail">详情</a><br/>
    <a href="#/search">搜素</a><br/>
    <a href="#/histroy">历史记录</a><br/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
