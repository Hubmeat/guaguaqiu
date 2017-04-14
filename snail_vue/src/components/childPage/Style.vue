<template>
  <div>
    <div id="house">
        <ul>
            <li>
              <p>
                <a href="#/other" class="l">取消</a>空间
              </p>
            </li>
            <li>
              <p>Style</p>
            </li>
            <li>
              <p><a href="#">北欧</a></p>
            </li>
            <li>
              <p><a href="#">日式</a></p>
            </li>
            <li>
              <p><a href="#">美式</a></p>
            </li>
            <li>
              <p><a href="#">中式</a></p>
            </li>
            <li>
              <p><a href="#">地中海</a></p>
            </li>
            <li>
              <p><a href="#">混搭</a></p>
            </li>
            <li>
              <p><a href="#">欧式</a></p>
            </li>
            <li>
              <p><a href="#">东南亚</a></p>
            </li>
            <li>
              <p><a href="#">简约</a></p>
            </li>
            <li>
              <p><a href="#">复古</a></p>
            </li>
            <li>
              <p><a href="#">悉尼风</a></p>
            </li>
            <li>
              <p><a href="#">南美风格</a></p>
            </li>
            <li>
              <p><a href="#">中式简约</a></p>
            </li>
        </ul>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#house {
  width: 100%;
  height: 100%;
  background: #fff;
}

#house a {
  text-decoration: none;
  color: #444;
}

#house ul {
  list-style: none;
  height: 100%;
  width: 100%;
  font-size: 0.28rem;
}

#house li:nth-of-type(1) {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  background-color:#efefef;
  padding: 0.1rem;
  text-align: center;
  margin: 0;
  margin-right: 0.1rem;
  text-indent: -2em;
  font-weight: 600;
}

#house li:nth-of-type(1) a {
  margin-left: 0.54rem;
  font-weight: 400;
  font-size: 0.28rem;
}

#house li:nth-of-type(1) p {
  width: 100%;
  height: 0.6rem;
}

#house li:nth-of-type(2) {
  color: #29ba8f;
}

#house li{
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  margin-left: 0.2rem;
  padding: 0.1rem;
}




</style>

<script>
export default {
  name: 'style',
  data () {
    return {
      msg: '这个是 style 页面'
    }
  }
}
</script>

