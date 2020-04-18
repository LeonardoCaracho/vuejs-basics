<template>
  <div id="app">
    <nav-bar />
    <notification-container />
    <router-view :key="$route.fullPath" />
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

