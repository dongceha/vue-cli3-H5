<template>
  <div class="movies">
    <Header>
      <span slot="left">
        正在上映的电影-{{location}}
      </span>
      <Button slot="right">更多></Button>
    </Header>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';
export default {
  components: {
    Header,
    Button
  },
  data () {
    return {
      location: '北京'
    }
  }
}
</script>

<style lang="less" scoped>
.movies{
  background: #eee;
  .mint-header{
    background: transparent;
    color: #8e8e8e;
  }
}
</style>

