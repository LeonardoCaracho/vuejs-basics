<template>
  <div class="list">
      <div class="list-input">
        <input type="text" v-model="newContact" placeholder="name" />
        <BaseButton @click="addContact" buttonClass="-fill-gradient">Add</BaseButton>
        <BaseButton @click="sortContacts" buttonClass="-fill-gradient">Sort</BaseButton>
      </div>

      <transition-group name="slide-up" tag="ul" appear>
          <li v-for="contact in contacts" :key="contact">
              <h4>{{ contact }}</h4>
          </li>
      </transition-group>
  </div>
</template>

<script>
export default {
    data(){
        return {
            contacts: ['Loco Abreu', 'Romario', 'Naldo', 'Fabão'],
            newContact: ''
        }
    },

    methods: {
        addContact(){
            if (this.newContact != ''){
                this.contacts.push(this.newContact)
                this.newContact = ''
            }
        },

        sortContacts(){
            this.contacts.sort()
        }
    }
}
</script>

<style>

.list {
    display: flex;
    flex-direction: column;
    align-items: right;
}

.list .list-input {
    display: flex;
    justify-content: space-between;
}

.list ul li {
    list-style: none;
}

.slide-up-enter {
    opacity: 0;
    transform: translateY(10px);
}

.slide-up-enter-active {
    transition: all 0.3s ease;;
}

.slide-up-move {
    transition: transform .5s ease-out;
}
</style>