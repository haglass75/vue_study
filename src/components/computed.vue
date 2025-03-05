<script setup>
import { reactive, computed, ref } from "vue";
const author = reactive({
  name: "John Doe",
  books: ["Vue 2 - Advanced Guide", "Vue 3 - Basic Guide", "Vue 4 - The Mystery"],
});
// 계산된 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
// 컴포넌트 내에서
function calculateBooksMessage() {
  return author.books.length > 0 ? "Yes" : "No";
}
// 수정 가능한 계산된 속성
const firstName = ref("John");
const lastName = ref("Doe");
const fullName = computed({
  // getter
  get() {
    return `${firstName.value} , ${lastName.value}`;
  },
  // setter
  set(newValue) {
    // 참고:분해 할당 문법을 사용함.
    /// 공백 기준으로 분해할당
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});
</script>
<template>
  <div class="bg">
    <p>책을 가지고 있다.</p>
    <!-- publishedBooksMessage라는 계산된 속성을 선언 -->
    <span>{{ publishedBooksMessage }}</span>
    <p>{{ calculateBooksMessage() }}</p>

    <hr />
    <h2>수정가능한 계산된 속성</h2>
    <p>{{ fullName }}</p>
    <input v-model="fullName" placeholder="이름을 이력하세요" />
  </div>
</template>
<style scoped></style>
