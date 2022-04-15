<template>

  <section class="gallery-link">
    <router-link to="/gallery" @click="hideGalleryLink()" v-if="hideLinks">Галерея</router-link>
    <router-link to="/weather" @click="hideGalleryLink()" v-if="!hideLinks" >Погода</router-link>
  </section>

  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      hideLinks: true,
    }
  },

  methods: {
    hideGalleryLink() {
      this.hideLinks  = !this.hideLinks
    }
  },

  mounted() {
    if ( this.$router.currentRoute.value.path === "/gallery") {
      this.hideLinks  = false
    }
  }

}
</script>

<style>
/*gallery-link*/

.gallery-link {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: #1d9ffc;
  cursor: pointer;

}

.gallery-link * {
  color: white;
  text-decoration: none;
}

.gallery-link *:hover {
  color: #9baacf;
}

</style>
