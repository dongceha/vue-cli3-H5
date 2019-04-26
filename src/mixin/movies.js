import {
  Indicator
} from 'mint-ui';
export default {
  data () {
    return {
      busy: false,
      start: 0
    }
  },
  methods: {
    getItem() {
      const param = {
        type: 'in_theaters',
        start: this.start,
        count: 20
      }
      this.busy = true;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.$store.dispatch('movie/getItemByType', param)
        .then(() => {
          this.busy = false;
          Indicator.close();
          this.start += 20;
        }).catch(() => {
          this.busy = false;
          Indicator.close();
        });
    },
    getDetail() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.$store.dispatch('movie/getMovieById', this.id)
        .then(() => {
          Indicator.close();
        }).catch(() => {
          Indicator.close();
        });
    }
  }
}
