<script setup>
import { ref } from 'vue';

// 할 일 목록 데이터
const todos = ref([
  { id: 1, name: 'Vue 공부하기', isComplete: false },
  { id: 2, name: '운동하기', isComplete: true },
  { id: 3, name: '책 읽기', isComplete: false }
]);

// 새 할 일 추가
const newTodo = ref('');
const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push({ id: Date.now(), name: newTodo.value, isComplete: false });
    newTodo.value = ''; // 입력 필드 초기화
  }
};

// 할 일 완료/미완료 토글
const toggleComplete = (todo) => {
  todo.isComplete = !todo.isComplete;
};

// 완료된 할 일 삭제
const deleteCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.isComplete);
};
</script>

<template>
  <div class="container">
    <h1>📝 Todo List</h1>
    
    <!-- 할 일 입력 -->
    <div class="input-group">
      <input v-model="newTodo" placeholder="새로운 할 일 입력..." />
      <button @click="addTodo">추가</button>
    </div>

    <!-- 미완료된 할 일 목록 -->
    <h2>📌 진행 중</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="!todo.isComplete">
          <input type="checkbox" @change="toggleComplete(todo)" />
          {{ todo.name }}
        </li>
      </template>
    </ul>

    <!-- 완료된 할 일 목록 -->
    <h2>✅ 완료</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.id">
        <li v-if="todo.isComplete">
          <input type="checkbox" checked @change="toggleComplete(todo)" />
          <del>{{ todo.name }}</del>
        </li>
      </template>
    </ul>

    <!-- 완료된 항목 삭제 버튼 -->
    <button @click="deleteCompleted" class="delete-btn">완료된 항목 삭제</button>
  </div>
</template>

<style scoped>
.container {
    display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}
.input-group {
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
}
input {
  /* flex: 1; */
  padding: 5px;
}
button {
  padding: 5px 10px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}
.delete-btn {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
