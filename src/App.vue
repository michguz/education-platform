<script setup>
import Home from './components/Home.vue'
import Programs from './components/Programs.vue'
import InsertableTable from './components/InsertableTable.vue';
import { RouterView } from 'vue-router';
import Editor from '@tinymce/tinymce-vue';
</script>


<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Vue</a>
      <router-link to="/">HOME</router-link>
      <router-link to="/Programs" msg="TESTETS">Programs</router-link>
    </nav>
  </div>
  <h1>Vue.js Test Application</h1>
  <RouterView/>
  <InsertableTable/>

  <Editor 
    api-key="no-api-key" 
    :init="{
      plugins: 'lists link image table code help'
    }"
  />
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
