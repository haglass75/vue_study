<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import EventHandl from "./components/EventHandl.vue";
import Vmodel from "./components/Vmodel.vue";
import VifEx from "./components/VifEx.vue";
import Computed from "./components/computed.vue";
import Stylebinding from "./components/Stylebinding.vue";
import ForEx from "./components/ForEx.vue";
</script>

<template>
  <HelloWorld />
  <EventHandl />
  <Vmodel />
  <VifEx />
  <Computed />
  <Stylebinding />
  <ForEx />
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/about">소개</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped></style>
