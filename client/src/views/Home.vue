<template>
  <div class="home">
    <ApplicationHeader msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ApplicationHeader from '@/components/ApplicationHeader.vue'

export default {
  name: 'home',
  components: {
    ApplicationHeader
  }
}
</script>
