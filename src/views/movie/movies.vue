<template>
  <div class="movies" v-infinite-scroll="loadMore" :infinite-scroll-disabled="!isDone && !busy" infinite-scroll-distance="10" >
    <Header>
      <span slot="left">
        正在上映的电影-{{location}}
      </span>
      <Button slot="right">更多></Button>
    </Header>
    <div class="movies-container" v-if="movieList.length > 0">
      <div v-for="item in movieList" :key="item.id">
        <router-link :to="{name: 'movie-detail', query: {id: item.id}}">
          <img v-lazy="item.images.medium">
          <p class="movie-title">{{item.title}}</p>
        </router-link>
      </div>
      <div class="itemempty"></div>
      <div class="itemempty"></div>
      <div class="itemempty"></div>
    </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';
import InfiniteScroll from 'vue-infinite-scroll'
import mixin from '@/mixin/movies';
import {
  mapState
} from 'vuex';

export default {
  components: {
    Header,
    Button
  },
  mixins: [mixin],
  directives: {
    InfiniteScroll
  },
  computed: {
    ...mapState({
      movieList: state => state.movie.movieList,
      isDone: state => state.movie.isDone
    })
  },
  data () {
    return {
      location: '北京'
    }
  },
  methods: {
    loadMore() {
      if (!this.isDone && !this.busy) {
        this.getItem();
      }
    }
  }
}
</script>
<style>
a{
  text-decoration: none;
}
image[lazy=loading] {
  width: 100%;
  height: 100%;
  margin: auto;
  background: pink;
}
</style>

<style lang="less" scoped>
.movies{
  background: #eee;
  min-height: calc(100vh - 120px);
  .mint-header{
    background: transparent;
    color: #8e8e8e;
  }
  .movies-container{
    margin: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background: white;
    border-radius: 10px;
    padding-top: 10px;
    // &:after{
    //   content: "";
    //   flex: 0 1 auto;
    // }
    .itemempty{
      display: inline-block;
      width: 30%;
      height: 0;
    }
    div{
      width: 30%;
      height: 150px;
      img{
        width: 100%;
        height: calc(100% - 30px);
      }
      .movie-title{
        text-align: center;
        color: #333;
        padding: 0;
        font-size: 12px;
        line-height: 18px;
        margin: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}
</style>
