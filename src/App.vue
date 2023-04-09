<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppBody from "@/components/AppBody.vue"
export default {
  components: {
    AppHeader,
    AppFooter,
    AppBody,
  },
}
</script>

<template>
    <div class="container bg-light" style="border: 2px solid darkcyan;">

      
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <AppBody />
      
      <router-view />
    </div>
    <AppFooter />
  </div>
</div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>