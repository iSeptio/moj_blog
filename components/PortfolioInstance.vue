<template>
  
  <div class="porfolioDiv" v-editable="blok">
      <p>{{ blok.title }}</p>

    <img :src="blok.image">

    <p>{{ blok.intro }}</p>
    <h1>{{ blok.fullslug }}</h1>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">


</style>
