<template>
  <div>
   <div id="chat_header">
      <a href="#/index" class="chat_a1"><i class="iconfont">&#xe62e;</i></a>
      <a class="chat_a2"><a class="chat_span2" href="#/chat">资料</a><span class="chat_span1">{{msg}}</span></a>
      <a class="chat_a3"><i class="iconfont">&#xe625;</i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'online',
  data () {
    return {
      msg: '聊天'
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
  border-bottom: 0.02rem solid #3e3e3e;
}
.chat_span2{
  margin-left: 0.1rem;
  color:#ccc; 
  margin-right: 0.1rem;
  font-size: 0.3rem;
}

#chat_header a.chat_a3 i{
  font-size: 0.55rem;
  margin-right: 0.6rem;
}
</style>
