<template>
  <div class="notification-container">
      <notification-bar 
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
  </div>
</template>

<script>

import NotificationBar from './NotificationBar'
import { mapGetters } from 'vuex'

export default {
    components: {
        NotificationBar
    },

    computed: {
        ...mapGetters('notification', ['notifications'])
    },
}

</script>
 
<style>

.notification-container {
    position: fixed;
    bottom: 0;
    right: 0;
    padding-right: 40px;
}

</style>