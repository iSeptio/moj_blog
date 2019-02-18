<template>
  <section class="util__container">
    <div v-editable="story.content" class="blog">
      <h1>{{ story.content.Title }}</h1>
      <div class="blog__description" v-html="description">
      </div>
    </div>
  </section>
</template>

<script>
import marked from 'marked'

export default {
  data () {
    return { story: { content: { description: '' } } }
  },
  computed: {
    description () {
      return marked(this.story.content.description)
    }
  },
  mounted () {
    this.$storyblok.init()
    this.$storyblok.on(['change', 'published'], () => {
      location.reload(true)
    })
  },
  asyncData (context) {
    let version = context.query._storyblok || context.isDev ? 'draft' : 'published'
    let endpoint = `cdn/stories/${context.params.language}/portfolio/${context.params.slug}`

    return context.app.$storyapi.get(endpoint, {
      version: version,
      cv: context.store.state.cacheVersion
    }).then((res) => {
      return res.data
    }).catch((res) => {
      context.error({ statusCode: res.response.status, message: res.response.data })
    })
  }
}
</script>


<style lang="scss">
$color1: #608060;
$color2: #3D3D34;
$color3: #f3f3e5;
$color4: #cebe9f;
$color5: #3f3f3f;
h1{
  color:$color4;
}
.blog {
  padding: 0 20px;
  max-width: 600px;
  margin: 40px auto 100px;
  color: $color5;

  img {
    width: 100%;
    height: auto;
  }
}

.blog__description {
  line-height: 1.6;
}
</style>
