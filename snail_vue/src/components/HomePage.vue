<template>
    <div id="hp_all">
      <div id="hp_head">
        <div id="hp_photo">
          <a href="/#person"><img src="../resource/img/homepage/1.png"></a>
        </div>
        <div id="hp_tittle">
          <h2>噗嗤</h2>
          <a href="/#person"><div id="hp_bianji">编辑装修材料</div></a>
          <div id="hp_help">帮助？</div>
        </div>
      </div>
    <div id="hp_middle">
         <span>
          <i class="iconfont">&#xe606;</i>
           <p>订单</p>
         </span>
         <span>
         <i class="iconfont">&#xe64f;</i>
           <p>关注</p>
         </span>
         <span>
          <i class="iconfont">&#xf0003;</i>
           <p>设置</p>
         </span>
    </div>
    <div id="hp_bottom">
      <span>近一周浏览</span>
    </div>
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
  name: 'homepage',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  color:#02b886;
  font-size: 0.53rem;
}
  #hp_all{
    overflow-y: hidden;
    overflow-x: hidden;
  }
  #hp_head{
    height: 2.13rem;
    border-bottom: 1px #e7e7e7 solid;
    margin-left:0.3rem;
    margin-right:0.3rem;
  }
  #hp_photo{
    width: 1.3rem;
    height: 1.3rem;
    border-radius:50%;
    position: absolute;
    left:0.3rem;
    top:0.44rem;
    overflow: hidden;
     text-align: center;
  }
  #hp_photo img{
    width: 100%;
    height: 100%;
  }
  #hp_tittle{
    width: 5.6rem;
    height:1.7rem;
    position: absolute;
    left: 1.9rem;
    top:0.44rem;
  }
  #hp_tittle h2{
    font-size: 0.34rem;
    font-weight: bold;
    margin-top: 0.24rem; 
  }
  #hp_tittle #hp_bianji{
      width: 1.72rem;
      height: 0.4rem;
     font-size: 0.2rem;
     text-align: center;
     line-height: 0.4rem;
     color:#999999;
     background: #efefef;
     border: 1px white solid;
     border-radius: 0.2rem;
     margin-top: 0.24rem; 
  }
  #hp_tittle a{
    text-decoration: none;
  }
  #hp_help{
    font-size: 0.26rem;
    position: absolute;
    right: 0.54rem;
    top:0;
    margin-top: 0.24rem;
    color:#999999;
  }
  #hp_middle{
    height:1.74rem;
    display: flex;
   flex-direction:row;
  }
  #hp_middle span{
  height:1.74rem;
  width: 2.5rem;
  text-align: center;
  }
  #hp_middle span p{
    font-size: 0.25rem;
  }
  #hp_bottom{
    background: #f6f6f6;
    min-height: 8rem;
     overflow-y: hidden;
  }
  #hp_bottom span{
    font-size: 0.25rem;
    color:#666666;
    margin-left: 0.31rem;
    margin-top: -0.2rem;
  }
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
