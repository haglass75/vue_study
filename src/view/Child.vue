<script setup>
import {} from "vue";
const props = defineProps(["msg"]);
const emit = defineEmits(["reply"]);
function sendReply() {
  emit("reply", "네 안녕하세요!");
}
</script>
<template>
  <div>
    <h2>{{ props.msg }}</h2>
    <button @click="sendReply">답장보내기</button>
  </div>
</template>
<style scoped></style>
