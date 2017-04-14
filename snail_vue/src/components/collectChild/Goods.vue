<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      msg: '这个是 goods 页面'
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
