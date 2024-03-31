<script setup lang="ts">
import Vlogin from '../../views/Vlogin.vue'
</script>
<template>
  <div class="login">
    <div class="VOne">
      <Vlogin />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #63b6f5,#4278d4);
  position: relative;
}
.VOne{
  position: absolute;
  right: 300px;
  bottom: 300px;
}
</style>