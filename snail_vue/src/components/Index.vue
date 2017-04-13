<template>
  <div>
    <h1>{{msg}}</h1>
    <ul>
      <li v-for='list in $store.state.shopList'>
          <a v-bind:href="'#/detail/' + list.id">{{list.shopName}}</a>
          <p>{{list.shopSummary}}</p>
      </li>
    </ul>
    <button @click='testWay'>点击</button>
    <button @click='handleClick'>点击</button>
    <button @click='loadClick'>点击加载</button>
    <!-- {{ $store.state.shopList }} -->
    {{ $store.state.test }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-size: 0.8rem;
}

</style>