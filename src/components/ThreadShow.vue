<template>
  <div class="col-large push-top">
    <h1>{{thread.title}}</h1>

    <div class="post-list">
      <div v-for="postId in thread.posts"
           class="post"
      >
        <div class="user-info">
          <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

          <a href="#">
            <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            {{posts[postId].text}}
          </div>
        </div>

        <div class="post-date text-faded">
          {{posts[postId].publishedAt}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/assets/data/data.json'

  export default {
    name: 'ThreadShow',
    // properties used to pass data from the parent
    props: {
      id: {
        required: true,
        type: String
      }
    },
    // data function that will access the active thread
    data () {
      return {
        // //Component will be tightly coupled to the router. not ideal!
        // thread: sourceData.threads[this.$route.parms.id],
        // //Defined props in the router as true makes independed component as params are passed as properties.
        thread: sourceData.threads[this.id],
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>

<style scoped>

</style>
