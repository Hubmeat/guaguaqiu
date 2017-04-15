<template>
  <div id="ps_all">
    <div id="ps_head">
      <a href="../#homepage"><i class="iconfont ps_back">&#xe62e;</i></a>
      <h3>编辑资料</h3>
      <span>保存</span>
    </div>
    <div id="ps_top">
    <div id="ps_photo">
       <img src="../resource/img/homepage/1.png" >
    </div>
    <i class="iconfont" id="ps_mark"  v-on:click="onPhClick">&#xe6be;</i>
    <div id="ps_name">
        <h3>噗嗤</h3>
        <div>修改昵称</div>
    </div>
    </div>
    <div id="ps_myim">
        <h3>我的装修信息</h3>
    </div>
    <div id="ps_bottom">
        <ul>
          <li>
            <span>城市</span>
            <h3>北京</h3>
            <i class="iconfont im_back">&#xe62e;</i>
          </li>
          <li>
            <span>房屋类型</span>
            <h3>公寓</h3>
             <i class="iconfont im_back">&#xe62e;</i>
          </li>
          <li>
            <span>建筑面积(m²)</span>
            <input class="shuru" type="telephone" placeholder="请输入" onfocus="this.placeholder=''" onblur="this.placeholder='请输入'"></input>
          </li>
          <li>
            <span>风格偏好</span>
            <h4>请选择风格</h4>
            <i class="iconfont im_back">&#xe62e;</i>
          </li>
          <li>
            <span>预算(万)</span>
            <input class="shuru" type="telephone" placeholder="请输入" onfocus="this.placeholder=''" onblur="this.placeholder='请输入'"></input>
          </li>
          <li>
            <span>愿意被设计师主动询问</span>
            <p>设计师会根据你所公开的装修需求,主动联系到您</p>
            <mt-switch id="ps_kg" v-model="value"></mt-switch>
          </li>
        </ul>
    </div>
    <div id="ps_foot"></div>
    <mt-actionsheet
  :actions="actions"
  v-model="sheetVisible" id="takeph">
</mt-actionsheet>
</div>
</template>

<script>
import Vue from 'vue';
import { Switch } from 'mint-ui';
import { Actionsheet } from 'mint-ui';
Vue.component(Switch.name, Switch);
Vue.component(Actionsheet.name, Actionsheet);
export default {
  name: 'person',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    onPhClick:function(){
      //console.log(sheetVisible)
      var tkph=document.getElementById('takeph');
      tkph.sheetVisible=true;
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ps_back{
  position: absolute;
  top:0.28rem;
  left:0.34rem;
  color:#b9b9b9;
}
.im_back{
  transform:rotate(180deg);
  position: absolute;
  right: 0.3rem;
  top:0.69rem;
  font-size: 0.26rem;
  color:#c7c7cc;
}
#ps_all{
  width: 100%;
}
#ps_head{
  text-align: center;
  height: 0.92rem;
   border-bottom: 1px #e7e7e7 solid;
   position: relative;
}
#ps_head h3{
  font-size: 0.28rem;
  line-height: 0.92rem;
}
#ps_head span{
  position: absolute;
  right: 0.23rem;
  top:0.33rem;
  font-size: 0.29rem;
  font-weight: bold;
}
#ps_top{
  height:2.18rem;
  position: relative;
}
#ps_photo{
  width: 1.3rem;
    height: 1.3rem;
    border-radius:50%;
    position: absolute;
    left:0.3rem;
    top:0.44rem;
    overflow: hidden;
     text-align: center;
}
 #ps_photo img{
    width: 100%;
    height: 100%;
  }
#ps_mark{
  width: 1.3rem;
  height: 1.3rem;
  border-radius:50%;
  position: absolute;
  left:0.3rem;
  top:0.44rem; 
  background: black;
  opacity: 0.3;
  color:#b2b2b2;
  text-align: center;
  font-size: 0.5rem;
  line-height: 1.3rem;
}
#ps_myim{
  height: 1.76rem;
  background: #fafafa;
}
#ps_name{
  position: absolute;
  left:1.88rem;
  top:0.34rem;
  width: 5.17rem;
  height: 1.85rem;
}
#ps_name h3{
  line-height: 0.72rem;
  font-size: 0.31rem;
  border-bottom: 1px #e7e7e7 solid;
}
#ps_name div{
  font-size: 0.21rem;
  margin-top: 0.23rem;
  color:#a3a3a3;
}
#ps_myim h3{
   font-size: 0.3rem;
   padding-top: 0.97rem;
   padding-left: 0.32rem;
}
#ps_bottom ul{
  margin-left: 0.3rem;
}
#ps_bottom li{
  height:1.67rem;
  border-bottom: 1px #e7e7e7 solid;
  position: relative;
}
#ps_bottom span{
  font-size: 0.28rem;
  color:#999999;
}
#ps_bottom h3{
  position: absolute;
  top:0.55rem;
  right:0.73rem;
  font-size: 0.37rem;
}
#ps_bottom h4,#ps_bottom input{
  position: absolute;
  top:0.55rem;
  right:0.73rem;
  font-size: 0.37rem;
  color:#bdbdbd;
}
#ps_bottom input{
  border: none;
  width:1.19rem;
  top:0.65rem;
}
#ps_bottom .shuru::-webkit-input-placeholder{
  font-size: 0.37rem;
  color:#bdbdbd;
  font-weight: bold;
}
#ps_bottom p{
  width: 3.73rem;
  font-size: 0.22rem;
  color:#b9b9b9;
}
#ps_bottom li:nth-of-type(6){
  height:2.24rem;
} 
#ps_bottom #ps_kg{
  position: absolute;
  right:0.32rem;
  top:0.88rem;
  width: 1.02rem;
  height: 0.62rem;
}
#ps_foot{
  height:1.6rem;
  background: #fafafa;
}
</style>
