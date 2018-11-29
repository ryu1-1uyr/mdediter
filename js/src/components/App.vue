<template>
  <div id="app">
    <h1>Vue Markdown Editor</h1>

    <div class="editor-main">
      <div class="main">
        <text-area-with-emoji-suggest v-on:enter="setSource"></text-area-with-emoji-suggest>
        <div class="preview">
          <vue-markdown :source="source"></vue-markdown>
        </div>
      </div>
    </div>

    <upload></upload>

  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import TextAreaWithEmojiSuggest from './TextAreaWithEmojiSuggest.vue'
  import Upload from './Upload.vue'

  export default {
    name: 'app',
    data () {
      return {
        source: ""
      }
    },
    methods: {
      setSource: function(data) {
        this.source = data
      }
    },
    components: {
        VueMarkdown,
        TextAreaWithEmojiSuggest,
        Upload
    }
  }
</script>
