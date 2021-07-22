<template>
  <div class="main-skeleton">
    <qk-skeleton height="80px"></qk-skeleton>
    <div>
      <div class="skeleton-container">
        <div class="skeleton">
          <qk-skeleton height="300px"></qk-skeleton>
        </div>
        <qk-skeleton height="45px"></qk-skeleton>
      </div>
      <div class="skeleton-bottom">
        <qk-skeleton height="45px"></qk-skeleton>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
<style lang="less">
  .skeleton-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
  }
  .skeleton-bottom {
    width: 960px;
    margin: 0 auto;
    text-align: center;
  }
  .skeleton {
    margin: 0 auto;
    width: 300px;
    margin-bottom: 56px;
  }
</style>
