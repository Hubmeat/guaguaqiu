<template>
<div>
    <div id="house">
        <ul>
            <li>
                <a href="#/" class="l">取消</a>
                <p>其他</p>
                <a href="#/">确认</a>
            </li>
            <li>
              <p>城市</p>
              <p><a href="#">全国</a><span>></span></p>
            </li>
            <li>
              <p>空间</p>
              <p><a href="#">客厅</a><span>></span></p>
            </li>
            <li>
              <p>风格</p>
              <p><a href="#">美式</a><span>></span></p>
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
  display: flex;
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  background-color:#efefef;
  padding: 0.1rem;
  justify-content: space-around;  
}

#house li:nth-of-type(1) a:nth-of-type(1) {
  margin-left: -0.92rem;
}

#house li:nth-of-type(1) p {
  font-weight: 600;
}

#house li:nth-of-type(1) a:nth-of-type(2) {
  margin-right: -0.92rem;
  color: #29ba8f;
}




#house li:nth-of-type(2) {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  margin-left: 0.2rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
} 

#house li:nth-of-type(2) p:nth-of-type(2) a {
  color: #29ba8f;
  margin-right: 0.3rem;
}

#house li:nth-of-type(3) {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  margin-left: 0.2rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
} 

#house li:nth-of-type(3) p:nth-of-type(2) a {
  color: #29ba8f;
  margin-right: 0.3rem;
}

#house li:nth-of-type(4) {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #dedede;
  margin-left: 0.2rem;
  padding: 0.1rem;
  display: flex;
  justify-content: space-between;
} 

#house li:nth-of-type(4) p:nth-of-type(2) a {
  color: #29ba8f;
  margin-right: 0.3rem;
}


/*#house li:nth-of-type(2) {
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
}*/



</style>

<script>
export default {
  name: 'House',
  data () {
      return {
        shopList: [],
      }
  }
}
</script>

