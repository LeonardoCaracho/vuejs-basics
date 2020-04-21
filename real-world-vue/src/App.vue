<template>
  <div id="app">
    <nav-bar />
    <notification-container />
    <router-view class="content" :key="$route.fullPath" />
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer'

export default {
  components: {
    NavBar,
    NotificationContainer
  }
}
</script>

<style>

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>

