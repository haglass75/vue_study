<script setup>
import { ref } from "vue";
const name = ref("");
const text = ref("");
const checked = ref(false);
</script>
<template>
  <div>
    <input v-model="name" placeholder="이름을 입력하세요" />
    <input v-model="text" placeholder="이메일 입력하세요" />
    <p>안녕하세요, {{ name }}님!</p>
    <p>{{ name }}님의 {{ text }} 이메일입니다.</p>
  </div>
  <div>
    <label> <input type="checkbox" v-model="checked" /> 동의합니다. </label>
    <p>체크 상태: {{ checked }}</p>
  </div>
</template>
<style scoped></style>
