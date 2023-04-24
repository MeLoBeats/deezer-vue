<script lang="ts" setup>
import { usePlaylists } from "../hooks";

const { playlists, isLoading } = usePlaylists();

// https://api.deezer.com/chart/0/playlists?limit=20

// Chercher les playlists sur deezer
// Afficher les playlists dans la vue
</script>

<template>
  <p v-if="isLoading">Loading...</p>
  <ul v-else>
    <li v-for="playlist in playlists" :key="playlist.id">
      <router-link :to="`/playlist/${playlist.id}`">{{ playlist.title }}</router-link>
    </li>
  </ul>
</template>
