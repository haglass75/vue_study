<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue"; // ✅ TodoList 컴포넌트 추가
import ForList from "./ForList.vue"; // ✅ ForList 컴포넌트 추가
import Exarr from "./Exarr.vue"; // ✅ ForList 컴포넌트 추가

const showArray = ref(false); // 초기값 설정

const toggleArray = () => {
  showArray.value = !showArray.value; // 버튼 클릭 시 표시/숨김 전환
};
// todolist화면 보이게 하는 코드
const showTodoList = ref(false); //할일 목록 표시 여부
const showfor = ref(false); //for공부예제 표시 여부
</script>

<template>
  <div class="wrap">
    <!-- todolist보이게 하는 코드 -->
    <div class="container">
      <h1>ForEx_01.vue</h1>
      <button @click="showfor = !showfor">
        {{ showfor ? "닫기" : "v-for조건 보기" }}
      </button>

      <!-- TodoList.vue 표시 여부 -->
      <ForList v-if="showfor" />
    </div>

    <!-- todolist보이게 하는 코드 -->
    <div class="container">
      <h1>ForEx.vue</h1>
      <button @click="showTodoList = !showTodoList">
        {{ showTodoList ? "닫기" : "Todo List 보기" }}
      </button>

      <!-- TodoList.vue 표시 여부 -->
      <TodoList v-if="showTodoList" />
    </div>
  </div>
  <div class="container">
    <button @click="toggleArray">배열 표시/숨김</button>
    <Exarr v-if="showArray" />
    <!-- <ul v-if="showArray">
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul> -->
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  gap: 10px;
}
.container {
  flex: 1;
  text-align: center;
  margin-top: 20px;
  padding: 20px 0;
  background-color: #fff;
}
</style>
