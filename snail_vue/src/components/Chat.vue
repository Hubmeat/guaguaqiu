<template>
  <div>
    <div id="chat_header">
      <a href="#/index" class="chat_a1"><i class="iconfont">&#xe62e;</i></a>
      <a class="chat_a2"><span class="chat_span1">{{msg}}</span><a class="chat_span2" href="#/online">聊天</a></a>
      <a class="chat_a3"><i class="iconfont">&#xe686;</i></a>
    </div>
    <div id="chat_content">
      <div class="chat_box1">
        <img src="../resource/img/chat/1.jpg" />
        <span class="chat_span3">刘西城</span>
        <span class="chat_span4">服务于苏州</span>
      </div>
      <p class="chat_p1">
        【尊享魅力设计，百变品质生活！】设计是一种追求完美的生活态度，设计是一种追求完美的生活态度，设计是一种追求完美的生活态。，设计是一种追求完美的生活态度，设计是一种追求完美的生活态度，设计是一种追求完美的生活态度。
      </p>
      <div class="chat_box2">
        <img src="../resource/img/detail/1.jpg" />
        <span class="chat_span5">5</span>
        <span class="chat_span6">发布的作品</span>
      </div>
      <div class="chat_box3">
        <h1>提供的服务</h1>
        <h2>室内设计</h2>
        <h1>￥50-100/㎡ </h1>
        <p>嘉兴地区可以后期工地跟进，软装搭配</p>
        <a>查看详情</a>
      </div>
    </div>
    <div id="chat_bottom">
      <p class="chat_p2 l">咨询</p><p class="chat_p3 l">关注</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data () {
    return {
      msg: '资料'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chat_header{
  height:1rem;
  width:100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #eee;
  line-height: 1rem;
  padding:0 0.4rem;
  padding-right: 0.5rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000000;
}
#chat_header a{
  text-decoration: none;
  font-size: 0.28rem;
  color:#000;
  font-size: 0.3rem;
}
.chat_span1{
  margin-right: 0.1rem;
  border-bottom: 0.04rem solid #3e3e3e;
}
.chat_span2{
  margin-left: 0.1rem;
  color:#ccc;
  font-size: 0.3rem;
}

#chat_header a.chat_a3 i{
  font-size: 0.55rem;
  margin-right: 0.6rem;
}
#chat_content{
  margin-bottom:1rem;
}
.chat_box1{
  height:5.8rem;
  width:100%;
  position: relative;

}
.chat_box1 img{
  height:100%;
  width:100%;
}
.chat_span3{
  position: absolute;
  top:4.7rem;
  left: 0.29rem;
  color: #fff;
  font-size: 0.35rem;
}
.chat_span4{
  position: absolute;
  top:5.2rem;
  left: 0.29rem;
  color: #fff;
  font-size: 0.2rem;
}
.chat_p1{
  margin: 0.25rem;
  font-size: 0.2rem;
  color: #444;
  word-spacing: 0.2em;
  line-height: 1.5;
  font-weight: 400;
}
.chat_box2{
  height:6.5rem;
  width: 100%;
  background:#f6f6f6;
  padding:0.4rem 0;
  position: relative;
}
.chat_box2 img{
  width:100%;
  height: 100%;
}
.chat_span5{
  position: absolute;
  color:#fff;
  top:35%;
  left:45%;
  font-size: 1rem;
}
.chat_span6{
  position: absolute;
  color:#fff;
  top:50%;
  left:32%;
  font-size: 0.5rem
}
.chat_box3{
  margin: 0.3rem;
  color:#3e3e3e;
  line-height: 2;
}
.chat_box3 h1{
  font-size:0.4rem;
}
.chat_box3 h2{
  font-size:0.3rem;
}
.chat_box3 p{
  font-size: 0.28rem;
  line-height: 1;
}
.chat_box3 a{
  color: #3fbb9e;
  font-size: 0.24rem;
}
#chat_bottom{
  height:1rem;
  width:100%;
  line-height: 1rem;
  font-size:0.28rem;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10000000;
}
.chat_p2{
  width:75%;
  height:100%;
  background-color: #555;
  color: #f2f2f2;
}
.chat_p3{
  width:25%;
  height:100%;
  background-color: #bbb;
  color: #f2f2f2;
}
</style>
