<template>
  <footer class="bottom-footer">
    <div class="util__container">
      <nuxt-link class="bottom-footer__link" :to="'/' + $store.state.language + '/sitemap'">Sitemap</nuxt-link>
    </div>
    <h1>
    archived with </br>
    <img src="https://css-tricks.com/wp-content/uploads/2017/07/nuxt.png" alt="NUXT" style="width:199px;"> <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Storyblok_Primary_Full.svg" alt="storyblok" style="height:100px;">
  </h1>
  </footer>
</template>

<style lang="scss">
.bottom-footer {
  background: #e3f2ed;
  padding: 40px 0 120px 0;
  text-align: center;
}

.bottom-footer__link {
  color: #8ba19a;
  text-decoration: none;
}
</style>
