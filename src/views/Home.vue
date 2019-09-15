<template>
  <div class="home">
    <img alt="Brastlewark City" src="../assets/brastlewark.jpg">
    <HelloWorld msg="Welcome to Brastlewark City Townhall "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
}
</script>
