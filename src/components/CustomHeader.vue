<template>
<div>
  <Header fixed >
    <router-link to="/movies" slot="left" id="heade">电影</router-link>
  </Header>
  <div class="search">
    <input
      type="text"
      class="search-input"
      v-model.trim="query"
      @keyup.enter="search()"
      name="search"
      placeholder="请输入搜索内容"/>
      <i class="mintui mintui-search"></i>
  </div>
</div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  components: {
    Header
  },
  data () {
    return {
      query: ''
    }
  },
  methods: {
    search() {

    }
  }
}
</script>

<style lang="less" scoped>
.mint-header{
  background-color: white;
  color: rgb(35, 132, 232);
  a{
    text-decoration: none;
  }
}
.search{
  margin-top: 40px;
  background: #f5f5f5;
  input{
    width: calc(100% - 30px);
    height: 20px;
    background: transparent;
    padding: 10px 5px;
    border: none;
    outline: none;
  }
  .mintui{
    padding-top: 10px;
    padding-bottom: 10px;
    position: absolute;
  }
}
</style>
