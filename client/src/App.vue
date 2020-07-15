<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <component :is="layout" class="col-6 mx-auto">
        <router-view/>
      </component>
    </div>
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLayout'
import Navbar from './components/Navbar'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    Navbar,
    EmptyLayout,
    MainLayout
  }
}
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.min.css';
  #app {
    height: 100vh;
    background: #797979;}
</style>
