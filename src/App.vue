<script setup>
import Home from './components/Home.vue'
import Programs from './components/Programs.vue'
import InsertableTable from './components/InsertableTable.vue';
import { RouterView } from 'vue-router';
</script>


<template>
  <div class="nav">
    <a href="home">Home</a>
    <a href="programs">Programs</a>
    <a href="help">Help</a>
    <router-link to="/">HOME</router-link>
    <router-link to="/Programs" msg="TESTETS">PROGRAMS</router-link>
  </div>
  <h1>Education Platform</h1>
  <RouterView/>
  <InsertableTable/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #83ff64aa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.nav {
  display: inline;
  padding: 8px;
  background-color: #eec590
}
</style>
