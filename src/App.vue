<template>
  <div id="app">
    <CustomHeader></CustomHeader>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import CustomHeader from 'components/CustomHeader';
export default {
  components: {
    CustomHeader
  }
}
</script>

<style>

</style>
