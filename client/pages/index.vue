<template lang="pug">
v-app
  v-app-bar(title='Application')
  v-navigation-drawer
    v-list
      v-list-item(title='Navigation Drawer')
  v-main
    v-container.pa-8
      v-row
        v-btn Welcome
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()

onMounted(() => {
  console.log(`the component is now mounted.`)
  $api.test()
})
</script>
