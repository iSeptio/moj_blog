<template>
  
  <div class="slide" v-editable="blok">

    <img :src="blok.image">

  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>

<style lang="scss">
$color1: #608060;
$color2: #3D3D34;
$color3: #f3f3e5;
$color4: #cebe9f;
$color5: #030301;
.slide img {
  width: 100%;
  padding: 5px 5px 5px 5px;
  background-color: $color4;


}

</style>
