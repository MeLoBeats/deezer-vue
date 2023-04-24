<script lang="ts" setup>
import { onMounted, ref } from "vue";

const playlists = ref([]);

onMounted(async () => {
  const response = await fetch("http://127.0.0.1:3000/playlists").then((response) =>
    response.json()
  );
  playlists.value = response.data;
});
// https://api.deezer.com/chart/0/playlists?limit=20

// Chercher les playlists sur deezer
// Afficher les playlists dans la vue
</script>

<template>
  <p v-if="playlists.length <= 0">Loading...</p>
  <ul v-else>
    <li v-for="playlist in playlists" :key="playlist.id">
      <router-link :to="`/playlist/${playlist.id}`">{{ playlist.title }}</router-link>
    </li>
  </ul>
</template>
