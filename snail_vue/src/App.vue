<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <!-- <a href="#/login">登录</a><br/>
    <a href="#/register">注册</a><br/>
    <a href="#/detail">详情</a><br/>
    <a href="#/search">搜素</a><br/>
    <a href="#/histroy">历史记录</a><br/>
    <a href="#/chat">交谈</a><br/>
    <a href="#/person">个人资料</a><br/> -->
  

</div>
</template>

<style>
body,html,h1,h2,h3,h4,h5,h6,ul,li,a,p,dt,dl,dd,span,pre,b,input,button {
  padding: 0;
  margin: 0;
}

.l {
  float: left;
}

.r {
  float: right;
}

@font-face {
  font-family: 'iconfont';
  src: url('./resource/iconfont/iconfont.eot');
  src: url('./resource/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./resource/iconfont/iconfont.woff') format('woff'),
  url('./resource/iconfont/iconfont.ttf') format('truetype'),
  url('./resource/iconfont/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px; font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}


</style>

<script>
export default {
  name: 'app'
}
</script>


