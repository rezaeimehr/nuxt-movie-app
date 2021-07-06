<template>
  <VideoSingle :video="video" videoType="movie" />
</template>

<script>
export default {
  async asyncData({ $api, route }) {
    const video = await $api.$get(
      `/movie/${route.params.id}?append_to_response=images,credits,videos`
    )

    return { video }
  },
}
</script>