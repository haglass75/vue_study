<script setup>
import { ref  } from 'vue';

const items = ref(['Apple', 'Banana', 'Cherry', 'Orange', 'Grapes']);

// 배열 조작 함수
const addItem = () => {
  items.value.push('Pineapple'); // 배열 끝에 추가
};

const removeLastItem = () => {
  items.value.pop(); // 배열 끝에서 제거
};

const removeFirstItem = () => {
  items.value.shift(); // 배열 처음에서 제거
};

const addFirstItem = () => {
  items.value.unshift('Mango'); // 배열 처음에 추가
};

const removeAndAddItem = () => {
  items.value.splice(1, 1, 'Kiwi'); // 인덱스 1의 요소 제거 후 'Kiwi' 추가
};

const sortItems = () => {
  items.value.sort(); // 정렬
};

const reverseItems = () => {
  items.value.reverse(); // 역순 정렬
};

// ✅ filter(), concat(), slice() 버튼 클릭 시 적용되는 함수
const filterItems = () => {
  items.value = items.value.filter(item => item.includes('a')); // 'a' 포함된 항목 필터링
};

const concatItems = () => {
  items.value = items.value.concat(['Strawberry', 'Blueberry']); // 새로운 배열과 결합
};

const sliceItems = () => {
  items.value = items.value.slice(1, 3); // 인덱스 1~2(3 미포함) 요소만 추출
};
</script>

<template>
  <div>
    <h2>배열 조작 예제</h2>
    <p>현재 배열: {{ items }}</p>
    <button @click="addItem">push() - 추가</button>
    <button @click="removeLastItem">pop() - 마지막 제거</button>
    <button @click="removeFirstItem">shift() - 첫 번째 제거</button>
    <button @click="addFirstItem">unshift() - 첫 번째 추가</button>
    <button @click="removeAndAddItem">splice() - 요소 변경</button>
    <button @click="sortItems">sort() - 정렬</button>
    <button @click="reverseItems">reverse() - 역순 정렬</button>
    <button @click="filterItems">filter() - 'a' 포함된 요소만</button>
    <button @click="concatItems">concat() - 새로운 배열과 결합</button>
    <button @click="sliceItems">slice() - 인덱스 1~2 요소 추출</button>
  </div>
</template>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  border: none;
  background: blue;
  color: white;
  cursor: pointer;
}
button:hover {
  background: darkblue;
}
</style>
