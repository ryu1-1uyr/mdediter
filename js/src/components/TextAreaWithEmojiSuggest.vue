<template>
  <div>
    <textarea class="editor" v-on:keyup="enter"></textarea>
  </div>
</template>

<script>
  import emojiOrigin from '../data/light.json'

  export default {
    name: 'suggest',
    data () {
      return {
        emojiList: emojiOrigin,
        preConvertEmoji: ""
      }
    },
    methods: {

      enter: function(data){

        this.$emit('enter', data.target.value)

      }
    }
  }
</script>
