<script lang="ts" setup>
import { useRoute } from "vue-router";
import { usePlaylist } from "../hooks";
const route = useRoute();
const playlistId = parseInt(route.params.id as string);
const { playlist, isLoading } = usePlaylist(playlistId);
</script>

<template>
  <RouterLink to="/">Back to playlists</RouterLink>

  <p v-if="isLoading">Loading...</p>
  <article v-else>
    <h1>{{ playlist.title }}</h1>

    <section class="tracks">
      <div class="track" v-for="track in playlist.tracks.data">
        <!-- Fetch tracks with images -->
        <img :src="track.album.cover_small" alt="Track cover" />
        <div class="track-info">
          <h3>{{ track.title }}</h3>
          <p>{{ track.artist.name }}</p>
        </div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
article {
  position: relative;
  height: 100%;
  max-height: calc(100vh - 150px);
  overflow-y: hidden;
}
.tracks {
  display: flex;
  flex-direction: column;
  padding-inline: 8px;
  padding-block-end: 30px;
  overflow-y: auto;
  height: 100%;
}

.track {
  display: flex;
  align-items: center;
  &:not(:first-child) {
    border-top: 1px solid var(--darker-grey);
  }
  gap: 4px;
  padding-block: 8px;
  h3 {
    font-size: 1.1rem;
    font-weight: 400;
  }
  p {
    font-size: 0.8rem;
  }
  img {
    height: 50px;
    width: 50px;
  }
}
</style>
