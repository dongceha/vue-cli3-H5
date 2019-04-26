<template>
  <div class="detail">
    <h2 class="title">{{movieDetail.title }}&nbsp;{{movieDetail.original_title}}</h2>
    <div>
      <!-- <img v-lazy="movieDetail.images.large"> -->
      <img :src="movieDetail.images.large">
    </div>
    <div class="actors">{{getMeta}}</div>
    <div class="customers">
      <div class="want">想看
        <span v-if="!!movieDetail.wish_count">({{movieDetail.wish_count}})</span>
      </div>
      <div class="wanted">看过
        <span v-if="!!movieDetail.do_count">({{movieDetail.do_count}})</span>
      </div>
    </div>
    <div class="describute">
      <h2>{{movieDetail.title}}的剧情介绍</h2>
      <div class="bd">
        <p>
          {{movieDetail.summary}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex';
import mixin from '@/mixin/movies';

export default {
  mixins: [mixin],
  computed: {
    ...mapState({
      movieDetail: state => state.movie.movieDetail
    }),
    getMeta() {
      const cast = this.movieDetail.casts.reduce((name, value) => {
        return name ? name + ' / ' + value.name : value.name;
      }, '');
      return this.movieDetail.countries.join(' / ') +
        ' / ' + this.movieDetail.genres.join(' / ') +
        ' / ' + this.movieDetail.directors[0].name + '(导演) / ' + cast;
    }
  },
  mounted () {
    this.id = this.$route.query.id;
    this.getDetail();
  }
}
</script>

<style lang="less" scoped>
.detail{
  margin: 10px;
  .title{
    font-size: 16px;
    color: #999;
  }
  .actors{
    line-height: 1.5;
    font-size: 12px;
    color: #999;
    margin: 10px 0;
  }
  .customers{
    display: flex;
    justify-content: space-between;
    div{
      width: 44%;
      border: 1px solid;
      height: 26px;
      text-align: center;
      font-size: 14px;
      line-height: 26px;
      border-radius: 5px;
      &.want{
        border-color: #ffb712;
        color: #ffb712;
      }
      &.wanted{
        border-color: yellowgreen;
        color: yellowgreen;
      }
    }
  }
  img{
    width: 100%;
  }
  .describute{
    h2{
      font-size: 16px;
      color: #999;
      margin-bottom: 0;
    }
    p{
      font-size: 14px;
      line-height: 1.2;
      color: #666;
      white-space: pre-wrap;
      margin-top: 0;
    }
  }
}
</style>
