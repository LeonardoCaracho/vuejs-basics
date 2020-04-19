<template>
  <div>
    <h1>Events for {{ user.name }}</h1>
    <event-card 
      v-for="event in events" 
      :key="event.id" 
      :event="event"
    />
    <template v-if="page != 1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 } }" rel="prev">
        Prev Page
      </router-link>
    </template>
    <template v-if="eventsTotal > page * perPage">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 } }" rel="next">
        Next Page
      </router-link>
    </template>
  </div>
</template>

<script>

import store from '@/store/store'
import EventCard from '@/components/EventCard.vue'
import { mapGetters } from 'vuex'

function getPageEvents(routeTo, next){
  const currentPage =  parseInt(routeTo.query.page) || 1

    store.dispatch('fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage
      next()
    })
}

export default {
  components: {
    EventCard
  },

  props: {
    page: {
      type: Number,
      required: true
    }
  },

  beforeRouteEnter(routeTo, routeFrom, next){
    getPageEvents(routeTo, next)
  },

  beforeRouteUpdate(routeTo, routeFrom, next){
    getPageEvents(routeTo, next)
  },

  computed: {
    ...mapGetters(['events', 'eventsTotal', 'user', 'perPage'])
  },

}
</script>

