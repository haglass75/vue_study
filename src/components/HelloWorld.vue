<script setup>
import { ref } from "vue";
const message = ref("안녕하세요 , vue3 Script Setup! ");
const count = ref(0); //반응형 변수
function increment() {
  count.value++;
}
function decrese() {
  count.value--;
}
</script>

<template>
  <h1>{{ message }}</h1>
  <div class="count">
    <button @click="increment">+증가</button>
    <h2>{{ count }}</h2>
    <button @click="decrese">-감소</button>
  </div>
</template>

<style scoped>
:global(body) {
  width: 1200px;
  margin: auto;
  background-color: #fbd8d8;
}
.count {
  display: flex;
  gap: 20px;
}
</style>
