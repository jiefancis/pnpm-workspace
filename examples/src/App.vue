<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const toggleVisible = () => {
  visible.value = !visible.value
}

const items = ref([
  { label: '11' },
  { label: '22' },
  { label: '33' },
  { label: '44' },
  { label: '55' },
  { label: '66' },
])
</script>

<template>
  <div @click="toggleVisible">
    <a href="javascript:;">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="javascript:;">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <CustomModal :items="items"></CustomModal>
  <ContextMenu v-model:visible="visible"></ContextMenu>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
