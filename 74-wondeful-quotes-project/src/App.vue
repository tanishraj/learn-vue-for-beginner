<template>
  <div id="app">
    <div class="container">
      <app-quotes-grid :quotes="quotes"></app-quotes-grid>
    </div>
  </div>
</template>

<script>
import quotesGrid from './components/quotesGrid.vue'

export default {
  name: 'app',
  data () {
    return {
      quotes: [
        'Just a quote to see something.'
      ],
      maxQuotes: 10,
    }
  },
  components: {
    'app-quotes-grid': quotesGrid
  }
}
</script>

<style>

</style>
