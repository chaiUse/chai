<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
<template>
  <div class="app">
    <RouterView  />
  </div>
</template>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}
html ,body , #app ,.app{
  width: 100%;
  height: 100%;
  // background-color: ;
}
</style>