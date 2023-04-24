<script setup lang="ts">
import { useQueryProvider } from "vue-query";
useQueryProvider();
</script>

<template>
  <div class="container">
    <main>
      <RouterView />
    </main>
    <aside></aside>
    <footer></footer>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas: "main aside" "footer footer";
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr 100px;
  main {
    grid-area: main;
  }
  aside {
    grid-area: aside;
    border-left: 1px solid var(--darker-grey);
  }
  footer {
    grid-area: footer;
    border-top: 1px solid var(--darker-grey);
  }
}
</style>
