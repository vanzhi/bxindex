<template>
  <div id="app" class="main" :class="{'open' : open}">
    <Top-Head @search="setOpen"></Top-Head>
    <router-view></router-view>
    <To-Top></To-Top>
  </div>
</template>

<script>
import TopHead from './components/common/topHead'
import ToTop from './components/common/toTop'
export default {
  name: 'app',
  data() {
    return {
      open: false
    }
  },
  methods: {
    setOpen(open) {
      this.open = open
    }
  },
  components: {
    TopHead,
    ToTop
  }
}
</script>
<style lang="scss">
@import './style/param';
.main {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-width: 1080px;
    padding-top: 144px;
    transition: all 0.5s;
    &.open {
        padding-top: 294px;
    }
}

@media only screen and (max-width: 768px) {
    .main {
        min-width: initial;
        padding-top: 50px;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
    
}
@media only screen and (min-width: 1200px) {
    
}
</style>
