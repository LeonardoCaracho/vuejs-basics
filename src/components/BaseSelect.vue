<template>
  <div>
      <label v-if="label">{{ label }}</label>
      <select :value="value" @change="updateValue" v-bind="$attrs">
          <option 
            :selected="option === value" 
            v-for="option in options" 
            :value="option" 
            :key="option">{{ option }}</option>
      </select>
  </div>
</template>

<script>
export default {    
    props: {
        label: String,
        value: [String, Number],
        options: Array
    },

    methods: {
        updateValue(e){
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style>

</style>