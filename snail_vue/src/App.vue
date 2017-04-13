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
  

<!-- footer -->
  <div id="footer">
      <ul>
          <li>
              <i class="iconfont">&#xe604;</i>
              <a href="#/">首页</a>
          </li>
          <li>
              <i class="iconfont">&#xe614;</i>
              <a href="#/collect">收藏</a>
          </li>
          <li>
              <i class="iconfont">&#xe64a;</i>
              <a href="#/message">个人中心</a>
          </li>
          <li>
              <i class="iconfont">&#xe618;</i>
              <a href="#/homepage">主页</a>
          </li>
      </ul>
  </div>
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

/* =======================  footer  ====================*/
/*footer*/
#footer{
  width: 100%;
  height: 0.5rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
}

#footer ul {
  width: 100%;
  overflow: hidden;
  list-style: none;
}

#footer ul li {
  width: 25%;
  height: 0.5rem;
  line-height: 0.25rem;
  float: left;
}


#footer ul li:hover {
  background-color: #fff;
  color: #000;
}

#footer ul li i{
    height: 0.25rem;
    width: 100%;
    display: block;
    text-align: center;
    font-size: 0.18rem;
    color: #979797;
}

#footer ul li a{
  text-align: center;
    height: 0.25rem;
    width: 100%;
    display: block;
    color: #979797;
    font-size: 0.12rem;
    text-decoration: none;
}
</style>

<script>
export default {
  name: 'app'
}
</script>


