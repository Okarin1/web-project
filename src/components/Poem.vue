<template>
  <div class="poem-wrap">
    <p id="poem">{{ poem }}</p>
    <p id="info">{{ info }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      poem: "",
      info: "",
    }
  },
  mounted() {
    axios.defaults.baseURL = "https://v1.jinrishici.com"
    axios.defaults.timeout = 5000 //毫秒
    axios({
      url: "/all.json",
    })
      .then((res) => {
        //console.log(res.data)
        this.poem = res.data.content
        this.info = `${res.data.author}《${res.data.origin}》`
      })
      .catch((res) => {
        console.log(res)
        this.poem = "醉后不知天在水，满船清梦压星河。"
        this.info = "唐珙《题龙阳县青草湖》"
      })
  },
}
</script>

<style lang="less">
/*诗*/
.poem-wrap {
  position: relative;
  width: 730px;
  max-width: 80%;
  border-top: none;
  text-align: center;
  margin: auto;
  font-family: Arial, Helvetica, "sans-serif";
}

.poem-wrap p {
  width: 70%;
  margin: auto;
  line-height: 30px;
  color: #797979;
}

.poem-wrap p#poem {
  margin-top: -5px;
  font-size: 20px;
}

.poem-wrap p#info {
  font-size: 15px;
  margin: 15px auto;
}

@media (max-width: 1024px) {
  .poem-wrap {
    margin-top: -15px;
  }

  .poem-wrap p#poem {
    width: 90%;
    margin: auto;
    font-size: 16px;
  }
  .poem-wrap p#info {
    font-size: 13px;
    margin: 5px auto;
  }
}
</style>
