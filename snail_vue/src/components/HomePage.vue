<template>
  <div>
    <h1>{{msg}}</h1>
  
  <a href="#/person"></a>
  <router-view></router-view>
  
  
  </div>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      msg: '这个是 homepage 页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 10px;
}

</style>
