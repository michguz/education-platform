<script setup>

import Editor from '@tinymce/tinymce-vue';

</script>

<template>
    <br>
    <div class="card">
    <Editor api-key="no-api-key" 
        :init="{
            plugins: 'lists link image table code help'
        }"
    />
    </div>
    <br>
</template>

<style scoped>
    .card {
        padding: 0em;
    }
</style>