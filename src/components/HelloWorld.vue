<template>
    <div class="col-full">
    <h1>Welcome to the Forum</h1>

    <!--Contain the vue component ThreadList which is import via de script and made available in the template-->
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
  import sourceData from '@/assets/data/data.json'
  import ThreadList from './ThreadList'
  console.log(sourceData)

  export default {
    name: 'HelloWorld',
    components: {
      ThreadList
    },
    data () {
      return {
        // The javascript function Object.keys(<myObject>) transforms a object into a array keys
        // The javascript function Object.values(<myObject>) transforms a object into a array values
        threads: Object.values(sourceData.threads),
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
