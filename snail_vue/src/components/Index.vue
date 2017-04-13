<template>
  <div>
    <!-- top -->
    <div id="top">
        <h1 class="l">全屋设计</h1>
        <h2 class="r">
            <a href="#/search.html">
                <i class="iconfont">&#xe503;</i>
            </a>
        </h2>
    </div>

    <!-- nav -->
    <div id="nav">
        <ul>
            <li>
                <a href="#">风格</a>
            </li>
            <li>
                <a href="#">户型</a>
            </li>
            <li>
                <a href="#">空间</a>
            </li>
            <li>
                <a href="#">城市</a>
            </li>
        </ul>
    </div>

<!-- swiper -->
 <!--  <mt-swipe :show-indicators="false" :auto="5000" style="height:200px;">
    <mt-swipe-item>
        <a href="#">
          <img v-bind:src="../resource/img/index/2.jpg">
        </a>
    </mt-swipe-item>
    <mt-swipe-item>
        <a href="#">
          <img v-bind:src="../resource/img/index/3.jpg">
        </a>
    </mt-swipe-item>
    <mt-swipe-item>
        <a href="#">
          <img v-bind:src="../resource/img/index/4.jpg">
        </a>
    </mt-swipe-item>
    <mt-swipe-item>
        <a href="#">
          <img v-bind:src="../resource/img/index/5.jpg">
        </a>
    </mt-swipe-item>
    <mt-swipe-item>
        <a href="#">
          <img v-bind:src="../resource/img/index/6.jpg">
        </a>
    </mt-swipe-item>            
  </mt-swipe> -->

   <!--  <ul>
      <li v-for='list in $store.state.shopList'>
          <a v-bind:href="'#/detail/' + list.id">{{list.shopName}}</a>
          <p>{{list.shopSummary}}</p>
      </li>
    </ul>
    <button @click='testWay'>点击</button>
    <button @click='handleClick'>点击</button>
    <button @click='loadClick'>点击加载</button> -->
    <!-- {{ $store.state.shopList }} -->
    <!-- {{ $store.state.test }} -->
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*top*/
#top{
  width: 100%;
  height: 0.7rem;
  padding: 0.1rem;
  overflow-x: hidden; 
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000000;
}

#top h1 {
  font-size: 0.26rem;
}

#top h2 a{
  color: #000;
  text-decoration: none;
}

#top h2 a i{
  font-size: 0.26rem;
}

/*nav*/
#nav{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0.8rem;
  z-index: 1000000;
  font-size: 0.18rem;
  transition: all .2s linear 0s;
}

#nav ul {
  list-style: none;
  overflow: hidden;
}

#nav li{
  width: 0.68rem;
  height: 0.5rem;
  float: left;
  line-height: 0.5rem;
}

#nav li a {
  display: block;
  height: 0.5rem;
  width: 100%;
  text-decoration:none;
  line-height: 0.5rem;
  text-align: center;
  color: #555;
  position: relative;
  font-weight: 600;
}

#nav li a::after {
    content: '';
    display: block;
    position: absolute;
    font-size: 0.18rem;
    left: 0.56rem;
    top: 0.22rem;
    width: 0;
    height: 0;
    border-top: 0.1rem solid black;
    border-left: 0.08rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.08rem solid transparent;
}


</style>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'

// swiper相关组件 
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  name: 'index',
  data () {
      return {
        msg: '欢迎来到 index 页面',
        shopList: []
      }
  },
  mounted () {
      console.log('this is mounted');
      var that = this;
      fetch('http://localhost:3000/trans',{
           mode:"cors",
           headers:{
               'content-type':'application/json'
           },
           method:'GET'
        })
        .then( (resp) => {
          console.log(resp)
          return resp.json()
        })
        .then( data => {
          console.log(data)
          that.$store.state.shopList = data
        })
  },
  methods: {
      ...mapActions([
          'testWay'
        ]),
      // testWay () {
      //   this.$store.dispatch('change')
      // }
      handleClick: function () {
        Toast('Upload Complete');
      },
      loadClick: function () {
        // Indicator.open({
        //   text: 'Loading...',
        //   spinnerType: 'fading-circle'
        // });
        Indicator.open();
        setTimeout( function () {
          Indicator.close();
        },3000)
      }
    }
  }
</script>

