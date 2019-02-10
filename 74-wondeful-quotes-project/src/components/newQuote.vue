<template>
    <div class="row">
        <app-quote v-for="quote in quotes" :key="quote">{{quote}}</app-quote>
    </div>
</template>

<script>
import quote from './quote.vue';

export default {
    props: ['quotes'],

    components: {
        'app-quote': quote
    }
}
</script>

<style>
    
</style>