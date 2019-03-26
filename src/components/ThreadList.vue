<template>
  <div class="thread-list">
    <h2 class="list-title">All my Threads</h2>

    <!--Contain the vue component ThreadItem which is import via de script and made available in the template-->
    <ThreadListItem
      v-for="thread in threads"
      :thread="thread"
      :key="thread['.key']"
    />
  </div>

</template>

<script>
  import ThreadListItem from './ThreadListItem'
  export default {
    name: 'ThreadList',
    components: {
      ThreadListItem
    },
    props: {
      threads: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
