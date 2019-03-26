<template>
  <div id="app">
  <!--    <img src="./assets/logo.png">-->
    <!--    This div is contains the different content based what is loaded by the router-->
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  /*This stylesheets in this location will be minimized by web pack during build */
@import "assets/css/style.css";
/*@import "bootstrap/css/bootstrap.css"; */
</style>
