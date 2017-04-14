<template>
  <div>
    <div id="chat_header">
      <a href="#/index" class="chat_a1"><i class="iconfont">&#xe62e;</i></a>
      <a class="chat_a2"><span class="chat_span1">{{msg}}</span><span class="chat_span2">聊天</span></a>
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
      </div>
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
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #eee;
  line-height: 1rem;
  padding:0 0.4rem;
}
#chat_header a{
  text-decoration: none;
  font-size: 0.28rem;
  color:#000;
  font-size: 0.4rem;
}
.chat_span1{
  margin-right: 0.1rem;
}
.chat_span2{
  margin-left: 0.1rem;
}
#chat_header a.chat_a3 i{
  font-size: 0.6rem;
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
  font-size: 0.25rem;
  line-height: 1.5;
  font-weight: bolder;
}
.chat_box2{
  height:6.8rem;
  width: 100%;
  background:#f6f6f6;
  padding:0.4rem 0;
}
.chat_box2 img{
  width:100%;
  height: 100%;
}


</style>
