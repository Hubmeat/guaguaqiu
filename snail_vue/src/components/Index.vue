<template>
  <div>
    <!-- top -->
        <div id="top">
            <h1 class="l">全屋设计</h1>
            <h2 class="r">
                <a href="#/search">
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


    <div>
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
    <!-- swiper -->
        <mt-swipe :show-indicators="false" :continuous="true" :auto="3000" class='mtSwipe'>
          <mt-swipe-item class='mt-swipe-item'>
              <a href="#">
                <img src="../resource/img/index/2.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/3.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/8.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/6.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/7.jpg">
              </a>
          </mt-swipe-item>
        </mt-swipe>

      <div class="content">
          <img src="../resource/img/index/9.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">地中海风格</h1>
          <p class="r">收藏 42</p>
      </div>

      <div class="content">
          <img src="../resource/img/index/10.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">欧美风格</h1>
          <p class="r">收藏 42</p>
      </div>

      <div class="content">
          <img src="../resource/img/index/11.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">肯尼亚风格</h1>
          <p class="r">收藏 42</p>
      </div>
<!-- swiper222 -->
      <mt-swipe :show-indicators="false" :continuous="true" :auto="2000" class='mtSwipe2'>
          <mt-swipe-item class='mt-swipe-item'>
              <a href="#">
                <img src="../resource/img/index/17.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/16.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/15.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/14.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/index/13.jpg">
              </a>
          </mt-swipe-item>
        </mt-swipe>

      <div class="content">
          <img src="../resource/img/index/12.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">简欧风格</h1>
          <p class="r">收藏 42</p>
      </div>

      <div class="content">
          <img src="../resource/img/index/13.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">简约风格</h1>
          <p class="r">收藏 42</p>
      </div>

<!-- swiper3333 -->
        <mt-swipe :show-indicators="false" :continuous="true" :auto="3000" class='mtSwipe3'>
          <mt-swipe-item class='mt-swipe-item'>
              <a href="#">
                <img src="../resource/img/homepage/1.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/homepage/11.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/homepage/12.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/homepage/13.jpg">
              </a>
          </mt-swipe-item>
          <mt-swipe-item>
              <a href="#" class='mt-swipe-item'>
                <img src="../resource/img/homepage/14.jpg">
              </a>
          </mt-swipe-item>
        </mt-swipe>

      <div class="content">
          <img src="../resource/img/index/14.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">商务风格</h1>
          <p class="r">收藏 42</p>
      </div>

      <div class="content">
          <img src="../resource/img/index/15.jpg"/>
      </div>
      <div class="slide-title">
          <h1 class="l">夏威夷风格</h1>
          <p class="r">收藏 42</p>
      </div>


      <div class="content">
          <img src="../resource/img/index/16.jpg"/>
      </div>
      <div class="slide-title" style="margin-bottom:0.5rem;">
          <h1 class="l">混合风格</h1>
          <p class="r">收藏 42</p>
      </div>

    </mt-loadmore>
  </div>
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
    <router-view id="router"></router-view>
</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#router {
  width: 100%;
  height: 60%;
  position: fixed;
  left: 0;
  bottom: 0; 
}

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

#top h2 {
  margin-right: 0.1rem
}

#top h2 a{
  color: #555;
  display: block;
  text-decoration: none;
  width: 100%;
  height: 0.7rem;
}

#top h2 a i{
  display: block;
  width: 100%;
  height: 0.7rem;
  line-height: 0.4rem;
  margin-right: 0.1rem;
  text-align: center;
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

/*  mt-swipe  */
.mtSwipe {
  height: 5.8rem;
  margin-top: 1.68rem;
}

.mtSwipe .mt-swipe-item {
  height: 5.8rem;
  width: 100%;
}

.mtSwipe .mt-swipe-item img {
  width: 100%;
  height: 5.8rem;
}

.mtSwipe2 {
  height: 3.4rem;
}

.mtSwipe2 .mt-swipe-item {
  height: 3.4rem;
  width: 100%;
}

.mtSwipe2 .mt-swipe-item img {
  width: 100%;
  height: 3.4rem;
}

.mtSwipe3 {
  height: 3.4rem;
}

.mtSwipe3 .mt-swipe-item {
  height: 3.4rem;
  width: 100%;
}

.mtSwipe3 .mt-swipe-item img {
  width: 100%;
  height: 3.4rem;
}



/*content*/

.slide-title {
   width: 100%;
   height: 0.65rem;
   line-height: 0.45rem;
   background-color: #fff;
   padding: 0.01rem;
   font-size: 0.08rem;
   font-weight: 500;
   box-shadow: 0px -1px 5px #777;
}

.slide-title p{
  font-size: 0.12rem;
  padding-right: 0.1rem;
}

.slide-title h1 {
  padding-left: 0.1rem;
}

.content{
  width: 100%;
  height: 3.4rem;
  overflow: hidden;
  margin-top: 0.2rem;
}

.content img {
  display: block;
  width: 100%;
  height: 3.5rem;
}

</style>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Loadmore } from 'mint-ui'
import { Spinner } from 'mint-ui'
import $ from 'jquery'

// swiper相关组件 
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)

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

      window.onscroll = function () {
            if ($(window).scrollTop() > 200) {
                $('#nav').css({
                    "top": "0.4rem"
                });
            }

            if ($(window).scrollTop() < 40) {
                $('#nav').css({
                    "top": "0.8rem"
                });
            }
      };

      this.$refs.loadmore.topPullText='';
      this.$refs.loadmore.topDropText='';
      this.$refs.loadmore.topLoadingText='';
      this.$refs.loadmore.bottomPullText='';
      this.$refs.loadmore.bottomDropText='';
      this.$refs.loadmore.bottomLoadingText='';

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
      },
      loadTop() {
        // load more data
        this.$refs.loadmore.onTopLoaded();
      },
      loadBottom() {
        // load more data
        // this.allLoaded = true;// if all data are loaded
        this.$refs.loadmore.onBottomLoaded();
      }
    }
  }
</script>

