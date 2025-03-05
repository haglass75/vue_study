<script setup>
import { ref ,reactive } from "vue";
const parentMessage = ref("Parent");
const items = ref([
  { message: "Foo", children: ["A", "B"] },
  { message: "Bar", children: ["C", "D"] },
]);

const myObject = reactive({
  title: "Vue에서 목록을 작성하는 방법",
  author: "홍길동",
  publishedAt: "2016-04-10",
});

const todos = ref([
  { name: "청소하기", isComplete: false },
  { name: "공부하기", isComplete: true },
  { name: "운동하기", isComplete: false },
]);
</script>

<template>
  <div class="container">
    <h2>1. 기본 리스트 반복</h2>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>

    <h2>2. 부모 메시지와 함께 출력</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ parentMessage }} - {{ index }} - {{ item.message }}</li>
    </ul>

    <h2>3. 구조 분해 할당</h2>
    <ul>
      <li v-for="{ message } in items" :key="message">
        {{ message }}
      </li>
    </ul>

    <h2>4. 중첩 반복</h2>
    <ul>
      <li v-for="item in items" :key="item.message">
        <span v-for="childItem in item.children" :key="childItem"> {{ item.message }} - {{ childItem }} </span>
      </li>
    </ul>

    <h2>5. 객체 반복</h2>
    <ul>
      <li v-for="(value, key) in myObject" :key="key">{{ key }}: {{ value }}</li>
    </ul>

    <h2>6. 객체 반복 + 인덱스</h2>
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">{{ index }}. {{ key }}: {{ value }}</li>
    </ul>

    <h2>7. 특정 개수만큼 반복</h2>
    <ul>
      <li v-for="n in 5" :key="n">
        {{ n }}
      </li>
    </ul>

    <h2>8. 템플릿 사용</h2>
    <ul>
      <template v-for="item in items" :key="item.message">
        <li>{{ item.message }}</li>
        <li class="divider" role="presentation"></li>
      </template>
    </ul>

    <h2>9. 조건부 렌더링과 함께 사용</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.name">
        <li v-if="!todo.isComplete">
          {{ todo.name }}
        </li>
      </template>
    </ul>

    <h2>10. 템플릿을 활용한 조건부 렌더링</h2>
    <ul>
      <!-- v-if를 v-for와 같은 태그에 사용하면 
     Vue가 먼저 v-if를 평가하여 todo가 없는 경우 
     v-for가 실행되지 않을 수 있음.
    이를 해결하기 위해 <template> 태그를 사용하면 
    v-for가 먼저 실행된 후 v-if가 개별적으로 적용됨. -->
      <template v-for="todo in todos">
        <li v-if="!todo.isComplete" :key="todo.name">
          {{ todo.name }}
        </li>
      </template>
    </ul>

    <h2>11. Key 속성 사용</h2>
    <ul>
      <div v-for="item in items" :key="item.message">
        {{ item.message }}
      </div>
    </ul>
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

</style>
