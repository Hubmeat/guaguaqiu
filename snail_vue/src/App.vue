<template>
  <div id="app">
  
    <transition :name="transitionName">
      <router-view class='all'></router-view>
    </transition>
  

</div>
</template>

<style>
body,html,h1,h2,h3,h4,h5,h6,ul,li,a,p,dt,dl,dd,span,pre,b,input,button {
  padding: 0;
  margin: 0;
}

body,html{
  width:100%;
  height:100%;
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

/*==========  icontfont_2 =============*/
@font-face {
  font-family: 'iconfont';
  src: url('./resource/iconfont_2/iconfont.eot');
  src: url('./resource/iconfont_2/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./resource/iconfont_2/iconfont.woff') format('woff'),
  url('./resource/iconfont_2/iconfont.ttf') format('truetype'),
  url('./resource/iconfont_2/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'trans-left'
    }
  }
}
</script>


