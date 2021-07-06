<template>
  <div>
    <VideoDisplay :videos="popularMovies.results" title="POPULAR MOVIES" />
    <VideoDisplay :videos="nowPlayingMovies.results" title="NOW PLAYING" />
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const popularMovies = await $api.$get('/movie/popular')
    const nowPlayingMovies = await $api.$get('/movie/now_playing')
    return { popularMovies, nowPlayingMovies }
  },
}
</script>