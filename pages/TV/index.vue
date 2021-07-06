<template>
  <div>
    <VideoDisplay
      :videos="popularTvShows.results"
      videoType="tv"
      title="POPULAR SHOWS"
    />
    <VideoDisplay
      :videos="topRatedTvShows.results"
      videoType="tv"
      title="TOP RATED SHOWS"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    const popularTvShows = await $api.$get('/tv/popular')
    const topRatedTvShows = await $api.$get('/tv/top_rated')
    return { popularTvShows, topRatedTvShows }
  },
}
</script>