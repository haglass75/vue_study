<script setup>
import { ref, computed } from "vue";
//테마 변경 버튼 (다크/라이트 모드)
const isDarkMode = ref(false);
// 바탕 다크모드
const themeStyles = computed(() => ({
  backgroundColor: isDarkMode.value ? "#333" : "#fff",
  color: isDarkMode.value ? "#fff" : "#000",
  padding: "20px",
  textAlign: "center",
  transition: "0.3s",
}));
// 버튼 다크모드
const btnthemeStyles = computed(() => ({
  backgroundColor: isDarkMode.value ? "#fff" : "#333",
  color: isDarkMode.value ? "#000" : "#fff",
  padding: "10px",
  textAlign: "center",
  transition: "0.3s",
}));
// 동적 클래스 바인딩 (:class)
// 네비게이션 메뉴 활성화
const activeTab = ref("home");

const tabs = [
  { name: "home", label: "홈" },
  { name: "about", label: "소개" },
  { name: "contact", label: "문의" },
];
// 폼 요소와 객체 바인딩 (v-model)
const user = ref({
  name: "",
  email: "",
  newsletter: false,
});
// 다중 스타일 & 클래스 바인딩 (:style + :class)
// 버튼 상태 (활성화/비활성화)
const isDisabled = ref(false);

const buttonStyles = computed(() => ({
  backgroundColor: isDisabled.value ? "gray" : "blue",
  color: "#fff",
  cursor: isDisabled.value ? "not-allowed" : "pointer",
  padding: "10px 20px",
  border: "none",
  transition: "0.3s",
}));

const buttonClass = computed(() => ({
  "btn-disabled": isDisabled.value,
}));
</script>
<template>
  <div class="bgpadding">
    <!-- 테마 변경 버튼 (다크/라이트 모드) -->
    <div :style="themeStyles">
      <p>현재 모드: {{ isDarkMode ? "다크 모드" : "라이트 모드" }}</p>
      <button @click="isDarkMode = !isDarkMode" :style="btnthemeStyles">모드 변경</button>
    </div>
    <!-- // 동적 클래스 바인딩 (:class)
// 네비게이션 메뉴 활성화 -->
    <nav>
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          :class="{ active: activeTab === tab.name }"
          @click="activeTab = tab.name">
          {{ tab.label }}
        </li>
      </ul>
    </nav>
    <hr />
    <!-- 폼 요소와 객체 바인딩 (v-model) -->
    <!-- 사용자 정보 입력 폼 -->
    <form>
      <label> 이름: <input v-model="user.name" type="text" /> </label>
      <label> 이메일: <input v-model="user.email" type="email" /> </label>
      <label>
        <input v-model="user.newsletter" type="checkbox" />
        뉴스레터 구독
      </label>
      <p>이름: {{ user.name }}</p>
      <p>이메일: {{ user.email }}</p>
      <p>뉴스레터 구독 여부: {{ user.newsletter ? "구독 중" : "미구독" }}</p>
    </form>
    <hr />
    <hr />
    <hr />
    <!-- 다중 스타일 & 클래스 바인딩 (:style + :class) -->
    <button :style="buttonStyles" :class="buttonClass" @click="isDisabled = !isDisabled">
      {{ isDisabled ? "비활성화됨" : "활성화됨" }}
    </button>
  </div>
</template>
<style scoped>
button {
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: lightgray;
}
ul {
  list-style: none;
  display: flex;
  padding: 0;
  background-color: #e7ec9c;
}
li {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
}
.active {
  font-weight: bold;
  border-bottom: 3px solid blue;
}
.btn-disabled {
  opacity: 0.5;
}
.bgpadding {
  padding: 50px 0;
  background-color: aliceblue;
}
</style>
