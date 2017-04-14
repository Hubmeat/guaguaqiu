<template>
  <div>
    <div id="detail_header">
      <a href="#/index" class="detail_a1 l"><i class="iconfont">&#xe62e;</i></a>
      <a class="r detail_a2"><i class="iconfont">&#xe656;</i>{{msg}}</a>
    </div>
    <div id="detail_content">
      <div class="detail_content_top">
        <h1 class="detail_content_h1">自由国度</h1>
        <em class="detail_content_p1">94㎡，四室一厅，北欧，宁波</em>
        <p class="detail_content_p2">
          <i class="iconfont">&#xe6e3;</i>
          <span class="detail_content_span1">赵四</span>
        </p>
      </div>
      <ul>
        <li>
          <div class="detail_content_img">
            <img src="../resource/img/detail/6.jpg">
            <span class="detail_content_span2"><i class="iconfont">&#xe614;</i></span>
          </div>
          <div class="detail_content_box"> 
            <em class="detail_content_b1">餐厅</em>
            <p class="detail_content_p3">北欧风格的餐厅哈恩美丽啦，北欧风格的餐厅哈恩美丽啦。北欧风格的餐厅哈恩美丽啦，北欧风格的餐厅哈恩美丽啦。北欧风格的餐厅哈恩美丽啦。</p>
          </div>
        </li>
      </ul>
      <div class="detail_content_bottom">
        <p class="detail_content_p4">74.9K 浏览 | 1.3K 收藏</p>
        <div class="detail_content_box1">
          <div class="detail_content_div1 l"><i class="iconfont">&#xe612;</i></div>
          <div class="detail_content_div2 l">
            <p class="detail_content_p6"><b class="detail_content_b2 l">赵四</b><span class="detail_content_em l">长沙</span></p>
            <p class="detail_content_p5">设计触及灵魂。服务感动心灵</p>
          </div>
        </div>
        <p class="detail_content_p7">
          室内设计：50-200￥/㎡ >
        </p>
      </div>
    </div>

   
   
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      msg: '作品信息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#detail_header{
  height:1rem;
  width: 100%;
  padding-bottom: 0.15rem;
  border-bottom: 0.01rem solid #eee;
  position: relative;
  font-family: "微软雅黑";
  top: 0;
  line-height: 1rem;
}
.detail_a1{
  text-decoration: none;
  color:#000;margin-left: 0.4rem;
  font-size: 0.4rem;
}
.detail_a2{
  font-size: 0.25rem;
  margin-right:0.4rem;
}
.detail_a2 .iconfont{
  margin-right: 0.1rem;
  font-size: 0.2rem;
}
#detail_content{
  overflow: hidden;
  margin-bottom: 1rem;
}
.detail_content_top{
  margin-left: 0.5rem;
  margin-top: 0.8rem;
}
.detail_content_h1{
  font-size: 0.4rem;
}
.detail_content_p1{
  height:0.5rem;
  color:#ddd;
  background-color: #fefefe;
  padding:0.15rem;
  font-size: 0.2rem;
  font-style:normal;
  border-radius: 0.25rem;
}
.detail_content_p2 .iconfont{

}
#detail_content ul li{
}
.detail_content_box{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.detail_content_span1{
  font-size: 0.35rem;
}
.detail_content_img{
  width:100%;
  height: 5rem;
  position: relative;
}
.detail_content_img img{
  height:100%;
  width: 100%;
}
.detail_content_span2{
  position: absolute;
  right:0.5rem;
  bottom:0.3rem;
  height:0.6rem;
  width:0.6rem;
  background-color: #000;
  opacity: 0.5;
  border-radius: 50%;
}
.detail_content_span2 .iconfont{
  color:#fff;
  position: absolute;
  left:0.15rem;
  top:0.14rem;
}
.detail_content_b1{
  font-size: 0.2rem;
  height:0.3rem;
  border-radius:0.2rem;
  border:0.01rem solid #3e3e3e; 
  font-style:normal;
  padding:0.05rem 0.2rem;
}
.detail_content_p3{
  font-size: 0.2rem;
  font-weight: bloder;
}
.detail_content_bottom{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
}
.detail_content_box1{
  margin-top:0.6rem;
  height:2rem;
  overflow: hidden;
}
.detail_content_p4{
  font-size: 0.16rem;
  color: #cbcbcb;
  padding-bottom: 0.30rem;
  border-bottom: 0.01rem solid #efefef;
}
.detail_content_div1{
  height:1.5rem;
}
.detail_content_div2{
  height:1.5rem;
  margin-left: 0.26rem;
}
.detail_content_div1 .iconfont{
  font-size: 1rem;
}
.detail_content_b2{
  font-size: 0.3rem;
  margin-right:0.2rem;
}
.detail_content_em{
  font-size: 0.15rem;
  height:0.5rem;
  color:#ddd;
  background-color: #fefefe;
  padding:0.15rem;
  font-size: 0.2rem;
  font-style:normal;
  border-radius: 0.25rem;
  margin-top: -0.19rem;
}
.detail_content_p5{
  font-size: 0.2rem;
}
.detail_content_p6{
  height:0.8rem;
  overflow: hidden;
  line-height: 0.8rem;
}
.detail_content_p7{
  text-align: center;
  font-weight: bold;
  height:0.7rem;
  line-height: 0.7rem;
  color:#0eb;
  background-color: #fefefe;
  padding:0.15rem;
  font-size: 0.2rem;
  font-style:normal;
  border-radius: 0.25rem;
  margin: 0 auto;
  background-color: #e5ffed;
}
</style>
