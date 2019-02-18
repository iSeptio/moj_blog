<template>
  <section class="util__container util__flex util__flexwrap">
    <div v-for="portfolioInstance in data.stories" class="portfolio__overview">

      <div class="portfolio__box">
        <img :src="portfolioInstance.content.picture" >
        <p>{{ portfolioInstance.content.intro }}</p>
        <nuxt-link class="blog__detail-link" :to="'/' + portfolioInstance.full_slug">
          <h1>About</h1>

        </nuxt-link>
              <a :href="portfolioInstance.content.link.cached_url">
              external link
      </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data () {
    return { total: 0, data: { stories: [] } }
  },

  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'

    return context.app.$storyapi.get('cdn/stories', {
      version: version,
      starts_with: `${context.store.state.language}/portfolio`,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>

<style lang="scss">
.portfolio__overview {
  padding: 0 20px;
  max-width: 300px;
  margin: 40px auto 60px;
  

  p {
    line-height: 1.6;
  }
}
.portfolio__box{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;  
  img{
  height: 250px;
  width: 250px;}
  
}

.util__flexwrap{
  flex-wrap: wrap;
}


</style>
