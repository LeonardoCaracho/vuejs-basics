<template>
    <div>
        <BaseButton 
            buttonClass="-fill-gradient" 
            @click="toggleModal"
        > Open </BaseButton>

            <transition name="fade">
            <div v-if="isOpen" class="modal">

                <BaseButton  
                    buttonClass="-fill-gradient" 
                    @click="toggleModal"
                > Close</BaseButton>
            </div>
            </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false
        }
    },

    methods: {
        toggleModal(){
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>
.modal {
    border-radius: 5px;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid grey;
    margin-top: 20px;
}

.fade-enter {
    opacity: 0;
}


.fade-leave-to {
    opacity: 0;
}


.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;;
}
</style>