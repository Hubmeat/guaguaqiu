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
    <i class="iconfont" id="ph_mark"  v-on:click="onPhClick">&#xe663;</i>
    <input type="file" id="ps_file">
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
            <h3 v-on:click="cityclick">北京</h3>
            <i class="iconfont im_back">&#xe62e;</i>
          </li>
          <li>
            <span>房屋类型</span>
            <h3 v-on:click="styleclick">公寓</h3>
             <i class="iconfont im_back">&#xe62e;</i>
          </li>
          <li>
            <span>建筑面积(m²)</span>
            <input class="shuru" type="telephone" placeholder="请输入" onfocus="this.placeholder=''" onblur="this.placeholder='请输入'"></input>
          </li>
          <li>
            <span>风格偏好</span>
            <h4 v-on:click="goodclick">请选择风格</h4>
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
    <div id="ps_city">
        <div id="city_head">
          <span v-on:click="cityBack">x</span>
          <h3>所在城市</h3>
        </div>
        <ul>
          <li>上海</li>
          <li>成都</li>
          <li>武汉</li>
          <li>南京</li>
          <li>杭州</li>
          <li>北京</li>
          <li>苏州</li>
          <li>广州</li>
          <li>深圳</li>
          <li>合肥</li>
          <li>无锡</li>
          <li>天津</li>
      <!--     <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> -->
        </ul>
    </div>
    <div id="ps_style">
      <div id="city_head">
          <span v-on:click="styleBack">x</span>
      </div>
          <ul>
            <li>公寓</li>
            <li>别墅</li>
          </ul>
    </div>
    <div id="ps_good">
      <div id="city_head">
          <span v-on:click="goodBack">x</span>
          <h3>风格偏好</h3>
      </div>
          <ul>
            <li>北欧</li>
            <li>日式</li>
            <li>美式</li>
            <li>中式</li>
            <li>地中海</li>
            <li>混搭</li>
            <li>欧式</li>
            <li>东南亚</li>
            <li>简约</li>
          </ul>
    </div>
    <div id="ps_mark"></div>
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
    }
  },
  methods:{
    onPhClick:function(){
      //console.log(sheetVisible)
      var tkph=document.getElementById('takeph');
      
    },
    cityclick:function(){
      var psMark=document.getElementById('ps_mark');
      var psCity=document.getElementById('ps_city');
      psMark.style.opacity=0.3;
      psMark.style.zIndex=2;
      psCity.style.bottom=0;
    },
    cityBack:function(){
       var psMark=document.getElementById('ps_mark');
      var psCity=document.getElementById('ps_city');
      psCity.style.bottom='-11.63rem';
      psMark.style.opacity=0;
      psMark.style.zIndex=-1;
    },
    styleclick:function(){
      var psMark=document.getElementById('ps_mark');
      var psStyle=document.getElementById('ps_style');
      psMark.style.opacity=0.3;
      psMark.style.zIndex=2;
      psStyle.style.bottom=0;
    },
    styleBack:function(){
      var psMark=document.getElementById('ps_mark');
      var psStyle=document.getElementById('ps_style');
      psStyle.style.bottom='-2.88rem';
      psMark.style.opacity=0;
      psMark.style.zIndex=-1;
    },
    goodclick:function(){
      var psMark=document.getElementById('ps_mark');
      var psGood=document.getElementById('ps_good');
      psMark.style.opacity=0.3;
      psMark.style.zIndex=2;
      psGood.style.bottom=0;
    },
    goodBack:function(){
      var psMark=document.getElementById('ps_mark');
      var psGood=document.getElementById('ps_good');
      psGood.style.bottom='-11.61rem';
      psMark.style.opacity=0;
      psMark.style.zIndex=-1;
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
#ps_file{
  width: 1.3rem;
  height: 1.3rem;
  opacity: 0;
  position: absolute;
  left:0.3rem;
  top:0.44rem; 
  z-index: 10;
}
#ph_mark{
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
  z-index: 9;
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
  list-style: none;
  height:1.67rem;
  border-bottom: 1px #e7e7e7 solid;
  position: relative;
}
#ps_bottom li:nth-of-type(6){
  border:none;
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
#ps_city{
  width: 7.5rem;
  min-height: 11.63rem;
  position: fixed;
  bottom:-11.63rem;
  transition: 0.5s;
  background:white;
  z-index: 100;
}
#city_head{
    height: 1rem;
    position: relative;
    text-align: center;
    border-bottom: 1px #e7e7e7 solid;
}
#city_head h3,span{
  font-size: 0.27rem;
  color:#666666; 
}
#city_head h3{
  line-height: 1rem;
}
#city_head span{
  width: 0.27rem;
  height: 0.27rem;
  top:1.2em;
  left:0.32rem;
  position: absolute;
}
#ps_city li,#ps_style li,#ps_good li{
  height: 0.87rem;
  line-height: 0.87rem;
  list-style: none;
  margin-left: 0.3rem;
  border-bottom: 1px #e7e7e7 solid;
  font-size: 0.28rem;
  color:#666666;
}
#ps_style li:nth-of-type(2){
  border: none;
}
#ps_style{
  width: 7.5rem;
  height: 2.88rem;
  position: fixed;
  bottom: -2.88rem;
  transition: 0.5s;
  background:white;
  z-index: 100;
}
#ps_good{
  width: 7.5rem;
  height: 11.61rem;
  position: fixed;
  bottom: -11.61rem;
  transition: 0.5s;
  background:white;
  z-index: 100;
}
#ps_mark{
  background: black;
  opacity: 0;
  position: absolute;
  transition: 0.5s;
  top:0;
  width: 7.5rem;
  height: 17.19rem;
  z-index: -1;
}
</style>
