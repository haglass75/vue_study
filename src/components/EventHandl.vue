<script setup>
import {ref} from "vue"
const count = ref(0)

</script>
<template>
<button @click="count++">클릭수 : {{ count }}</button>
<button @click="count--">클릭수 : {{ count }}</button>
</template>
<style scoped>
</style>