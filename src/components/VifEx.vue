<script setup>
import { ref } from "vue";
const isVisible = ref(true);
const products = ref(["노트북", "스마트폰", "태블릿"]);
const fruit = ref(["사과", "바나나", "포도"]);
// 깊은 반응형
const obj = ref({
  nested: { count: 0 },
  arr: ["foo", "bar"],
});
function mutateDeeply() {
  obj.value.nested.count++;
  obj.value.arr.push("baz");
}
const type1 = ref("A"); // 'A', 'B', 'C' 중 하나로 변경 가능
const awesome = ref(true);
const ok = ref(true); // true이면 템플릿이 보이고, false이면 사라짐
// reactive()
import { reactive } from "vue";
const state = reactive({ count: 1 });
</script>
<template>
  <div>
    <div class="if">
      <!-- ex1 -->
      <h1>v-if v-show</h1>
      <button @click="isVisible = !isVisible">토글</button>
      <p v-if="isVisible">v-if: 조건이 true일 때만 표시</p>
      <p v-show="isVisible">v-show: 조건에 따라 보이기만 함</p>
      <!-- ex2 -->
      <div class="ex2">
        <!-- if else -->
        <div class="if">
          <button @click="awesome = !awesome">전환</button>

          <h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
          <h1 v-else>아닌가요? 😢</h1>
        </div>

        <div class="fielse">
          <div v-if="type1 === 'A'">A</div>
          <div v-else-if="type1 === 'B'">B</div>
          <div v-else-if="type1 === 'C'">C</div>
          <div v-else>A/B/C 아님</div>

          <button @click="type1 = 'A'">A 선택</button>
          <button @click="type1 = 'B'">B 선택</button>
          <button @click="type1 = 'C'">C 선택</button>
          <button @click="type1 = 'D'">D 선택</button>
        </div>
        <!-- 단락 표시 -->
        <div>
          <div v-if="ok">
            <h1>제목</h1>
            <p>단락 1</p>
            <p>단락 2</p>
          </div>

          <button @click="ok = !ok">단락토글</button>
        </div>
      </div>
    </div>
    <div class="for">
      <h1>v-for</h1>
      <ul class="title">
        <li v-for="(product, index) in products" :key="index">
          {{ product }}
          <!-- - `v-for`: `products` 배열을 반복 출력
            - `:key="index"`: 리스트 최적화를 위해 고유값 제공 -->
        </li>
      </ul>
      <ul>
        <li v-for="(fruit, index) in fruit" :key="index">{{ fruit }}</li>
      </ul>
    </div>
    <hr />
    <!-- 깊은반응형 -->
    <div class="bg">
      <h2>깊은반응형</h2>
      <p>Count: {{ obj.nested.count }}</p>
      <p>Array: {{ obj.arr.join(", ") }}</p>
      <button @click="mutateDeeply">변경하기</button>
      <h2>reactive()</h2>
      <button @click="state.count++">{{ state.count }}</button>
    </div>
  </div>
</template>
<style scoped>
.title {
  color: red;
}
.ex2 {
  background-color: #ededeb;
}
</style>
