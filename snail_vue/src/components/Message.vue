<template>
  <div>
    <h1>{{msg}}</h1>
    {{$store.state.shopList}}
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: '这个是 message 页面'
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
