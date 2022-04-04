<template>

  <section class="gallery-link">
    <router-link to="/gallery">Галерея</router-link>
  </section>

  <router-view></router-view>

</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
/*gallery-link*/

.gallery-link  {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 2rem;
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
