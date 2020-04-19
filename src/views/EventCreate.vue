<template>
    <div class="create-event">
        <h1>Create an event </h1>

        <form @submit.prevent="submitCreateEvent">
          <BaseSelect
            v-model="event.category"
            label="Select a category"
            :options="categories"
            class="field"
          />

          <h3>Name & describe your event</h3>

          <BaseInput
            v-model="event.title"
            label="Title"
            type="text"
            placeholder="Title"
            class="field"
          />

          <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
            placeholder="description"
            class="field"
          />

          <h3>Where is your event?</h3>
          <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
            placeholder="Add a location"
            class="field"
          />

          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker v-model="event.date" placeholder="Select a date"/>
          </div>

          <BaseSelect
            v-model="event.time"
            label="Select a time"
            :options="times"
            class="field"
          />
          
          <!-- <input type="submit" class="button -fill-gradient" value="Submit"/> -->
          <BaseButton 
            buttonClass="-fill-gradient" 
            type="submit"
          > 
            Submit 
          </BaseButton>
        </form>
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions  } from 'vuex'
import Datepicker from 'vuejs-datepicker';
import NProgress from 'nprogress'

export default {
    data(){
        const times = []
        for (let i = 1; i <= 24; i++){
            times.push(`${i}:00`)
        }

        return {
            times,
            event: this.createFreshEventObject()
        }
    },

    components: {
        Datepicker
    },

    computed: {
        ...mapState(['categories', 'user']),
        ...mapGetters([''])
    },

    methods: {
        ...mapActions(['createEvent']),

        submitCreateEvent(){
            NProgress.start()
            this.createEvent(this.event).then(() => {
                this.$router.push({
                    name: 'event-show',
                    params: { id: this.event.id }
                })
                this.event = this.createFreshEventObject()
            }).catch(() => {
              NProgress.done()
            })
        },

        createFreshEventObject(){
            const user = this.user
            const id = Math.floor(Math.random() * 1000000)

            return {
                id,
                user,
                category: '',
                organizer: user,
                title: '',
                description: '',
                location: '',
                date: '',
                attendees: []
            }
        }
    }
}
</script>

<style scoped>
.field {
    margin-bottom: 24px;
}
</style>