<template>
  <nav class="navbar navbar-expand bg-dark navbar-dark">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
          class="nav-item">
          <a href="#" class="nav-link">{{link.title}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Home', url: '/', exact: true },
      { title: 'Login', url: '/login' }
    ]
  })
}
</script>

<style scoped>

</style>
