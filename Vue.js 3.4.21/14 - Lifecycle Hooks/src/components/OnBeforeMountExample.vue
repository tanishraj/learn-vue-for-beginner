<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';

const value = ref(null);
const loading = ref(true);

const makeApiCall = () => {
  setTimeout(() => {
    value.value = 'Hello World!';
  }, 5000)
}

onBeforeMount(() => {
  console.log("OnBefore Mounted Called")
  makeApiCall()
});

onMounted(() => {
  console.log("Component is mounted");
})

</script>

<template>
  <h3>OnBeforeMount() Example:</h3>

  <p v-if="loading">Loading...</p>
  {{ value }}
</template>

<style scoped></style>