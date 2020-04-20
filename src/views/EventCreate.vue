<template>
    <div class="create-event">
        <h1>Create an event </h1>

        <form @submit.prevent="submitCreateEvent">
          <BaseSelect
            v-model="event.category"
            label="Select a category"
            :options="categories"
            class="field"
            :class="{ error: $v.event.category.$error }"
            @blur="$v.event.category.$touch()"
          />
          <template v-if="$v.event.category.$error">
            <p class="errorMessage" v-if="!$v.event.category.required" >Category is required</p>
          </template>

          <h3>Name & describe your event</h3>

          <BaseInput
            v-model="event.title"
            label="Title"
            type="text"
            placeholder="Title"
            class="field"
            :class="{ error: $v.event.title.$error }"
            @blur="$v.event.title.$touch()"
          />
          <template v-if="$v.event.title.$error">
            <p class="errorMessage" v-if="!$v.event.title.required" >Title is required</p>
          </template>

          <BaseInput
            v-model="event.description"
            label="Description"
            type="text"
            placeholder="description"
            class="field"
            :class="{ error: $v.event.description.$error }"
            @blur="$v.event.description.$touch()"
          />
          <template v-if="$v.event.description.$error">
            <p class="errorMessage" v-if="!$v.event.description.required" >Description is required</p>
          </template>

          <h3>Where is your event?</h3>
          <BaseInput
            v-model="event.location"
            label="Location"
            type="text"
            placeholder="Add a location"
            class="field"
            :class="{ error: $v.event.location.$error }"
            @blur="$v.event.location.$touch()"
          />
          <template v-if="$v.event.location.$error">
            <p class="errorMessage" v-if="!$v.event.location.required" >Location is required</p>
          </template>

          <h3>When is your event?</h3>
          <div class="field">
            <label>Date</label>
            <datepicker 
              v-model="event.date" 
              placeholder="Select a date"
              :input-class="{ error: $v.event.date.$error }"
              @opened="$v.event.date.$touch()"
            />
          </div>
          <template v-if="$v.event.date.$error">
            <p class="errorMessage" v-if="!$v.event.date.required" >Date is required</p>
          </template>

          <BaseSelect
            v-model="event.time"
            label="Select a time"
            :options="times"
            class="field"
            :class="{ error: $v.event.time.$error }"
            @blur="$v.event.time.$touch()"
          />
          <template v-if="$v.event.time.$error">
            <p class="errorMessage" v-if="!$v.event.time.required" >Time is required</p>
          </template>
          
          <!-- <input type="submit" class="button -fill-gradient" value="Submit"/> -->
          <BaseButton 
            buttonClass="-fill-gradient" 
            type="submit"
            :disabled="$v.$anyError"
          > 
            Submit 
          </BaseButton>
          <p v-if="$v.$anyError" class="errorMessage" >Please fill out the required fields</p>
        </form>
    </div>
</template>

<script>

import { mapGetters, mapState, mapActions  } from 'vuex'
import { required } from 'vuelidate/lib/validators'
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

    validations: {
      event: {
        category: { required },
        title: { required },
        description: { required },
        location: { required },
        date: { required },
        time: { required },
      }
    },

    methods: {
        ...mapActions(['createEvent']),

        submitCreateEvent(){
            this.$v.$touch()
            if (!this.$v.$invalid){
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
            }
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

.create-event {
  width: 500px;
  margin: auto;
}

.field {
    margin-bottom: 24px;
}

.errorMessage {
  color: red;
  font-weight: bold;
}
</style>