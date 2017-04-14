<template>
  <div>
    <h1>{{msg}}</h1>
    {{$store.state.shopList}}
  

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

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: '这个是 message 页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
