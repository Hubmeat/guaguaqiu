<template>
<div>
  <div class="bg bg-blur"></div>
  <div id="login">
       <p class="p1"><a href="#/login">取消</a></p>
       <p class="p2">请输入你的手机号</p>
       <table>
       <div class="country">
         <span class="l sp1">国家/地区</span>
         <span >中国</span>
       </div>
       
       <div class="phone">
         <span class="l">+86</span>
        <input type="text" placeholder="请填写手机号码" id="phone">
        
        <P>
          <span class="l">密码</span>
          <input type="password" placeholder="请填写密码" id="pwd">
        </P>
       </div>
        <button @click='checkVal' id="regster">注册</button>
       </table>
  </div>
</div>
</template>


<script>
import { MessageBox } from 'mint-ui'
import { Indicator } from 'mint-ui';

export default {
  name: 'regiseter',
  data () {
      return {
        // transitionName: 'slide-left'
      }
  },
  methods: {
    checkVal () {

      $('#regster').css('background-color','#a0dea4')
      $('#regster').css('color','#fff');
      
      var phoneReg = /0?(13|14|15|18)[0-9]{9}/;
      var passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;

      if ($('#phone').val() === '') {
        MessageBox.alert('请输入你的手机号', '');
      } else if (phoneReg.test($('#phone').val()) === false) {
        MessageBox.alert('这是手机号吗？？', '');
      } else if (passwordReg.test($('#pwd').val()) === false) {
        MessageBox.alert('密码不符合规则', '');
      } else {
        Indicator.open();
        var that = this;
        setTimeout(function () {
          Indicator.close();
          MessageBox.alert('注册成功', '');
          that.$router.push('/login');
        },1500)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .bg {
    height: 40%;
    width: 100%;
    background: url('../resource/img/login/bg_login.jpg') no-repeat;
    background-position: 0rem 1rem;
    position: absolute;
    z-index: 1;
  }
  .bg-blur {
    float: left;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 0rem 1rem;
    background-size: 100% 100%;
    -webkit-filter: blur(0.15rem);
    -moz-filter: blur(0.15rem);
    -o-filter: blur(0.15rem);
    -ms-filter: blur(0.15rem);
    filter: blur(0.15rem);
    z-index: -1;
  }

  #login {
    z-index: 10;
  }

  #login .p1{
    width:100%;
    margin-top:0.7rem;
    margin-left: 0.21rem;
    margin-bottom: 0.66rem;
    color: #35c933;
    font-size: 0.3rem;
  }

  #login .p1 a {
    text-decoration: none;
    color: #29ba8f;
  }

  #login .p2{
    font-size: 0.45rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }

  #login .country {
    margin-top:1.15rem;
    background: rgba(0,0,0,0);
    font-size:0.28rem;
    color:#333;
    height:0.8rem;
    line-height:0.8rem;
  }

  #login .country span:nth-child(1){
    width:1.6rem;
    color: #29ba8f;
  }

  #login .country span:nth-child(2){
    padding-left: 0.15rem;
    color: #555;
    font-weight: 600;
  }

  #login table{
    margin:0 0.4rem;
    width:6.68rem;
  }

  #login .phone span {
    color: #555;
    font-weight: 600;
  }
  
  #login .phone{
    font-size:0.28rem;
    color:#333;
    height:0.8rem;
    line-height:0.8rem;
  }
  #login .phone span:nth-child(1){
    width:1.6rem;
  }

  #login .phone input{
    background: rgba(0,0,0,0);
    border: none;
    padding-left: 0.15rem;
    font-size: 0.3rem;
    height:0.8rem;
  }

  #login button{
    width:100%;
    height:0.9rem;
    background:#b5e5b5;
    margin-top: 1.6rem;
    color:#e1f5e1;
    font-size:0.33rem;
    border:none;
    border-radius: 0.1rem;
  }

</style>
