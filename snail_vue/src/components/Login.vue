<template>
<div id="register">
<img src="../resource/img/chat/1.jpg">
 <p class="p1">{{$store.state.userPhone}}</p>
 <table>
 <div class="password">
 <span class="l sp1">密码</span>
<input type="text" placeholder="请填写密码" id="pwd">
 </div>
 <button @click='loginFun'>登录</button>
 </table>
    <a href="#">登录遇到问题？</a>
  </div>

</template>

<script>

import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui'

export default {
  name: 'login',
  data () {
      return {

      }
  },
  methods: {
    loginFun() {
      var that = this;
      fetch('http://localhost:3000/login', {
        mode: "cors",
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          phone: that.$store.state.userPhone,
          password: $('#pwd').val()
        })
       })
       .then(function (resp) {
          console.log(resp)
          console.log(resp.status)
          return resp.json()
       })
       .then((result) => {
          console.log(result)
          if (result.status === 'false') {
            Indicator.open();
            setTimeout(function(){
              Indicator.close();
              MessageBox.alert('密码错误，请重新输入', '');
            },1500)
          } else {
            Indicator.open();
            setTimeout(function(){
              Indicator.close();
              MessageBox.alert('登录成功', '');
              that.$router.push('/homepage');
            },1500)
          }
       })
    }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #register img{
    width:1.6rem;
    height:1.6rem;
    margin: 0 3rem;
    display: block;
    border: none;
    background:#333;
    border-radius: 0.12rem;
    margin-top: 1.8rem;
  }

  #register .p1{
    margin-top:0.37rem;
    font-size: 0.28rem;
    font-weight: 600;
    color: #444;
    text-align: center;
  }
  #register table{
    margin:0 0.4rem;
    width:6.68rem;
  }
  #register .password{
    margin-top: 0.6rem;
    height:0.8rem;
    line-height:0.8rem;
    font-size: 0.3rem;
  }
  #register .password span{
    color: #000;
    width:1.7rem;
  }
  #register .password input{
  border:none;
  height:0.8rem;
  color:#c7c7cd;
  font-size: 0.3rem;
  height:0.8rem;
  }
  #register button{
    width:100%;
    height:0.9rem;
    background:#b5e5b5;
    color:#e1f5e1;
    font-size:0.33rem;
    border:none;
    border-radius: 0.1rem;
  }
  #register a{
    display: block;
    text-align: center;
    font-size: 0.23rem;
    color: #576b95;
    text-decoration: none;
    margin-top: 0.46rem;
  }
</style>
