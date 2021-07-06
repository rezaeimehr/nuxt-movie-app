<template>
  <VideoSingle :video="video" videoType="tv" />
</template>

<script>
export default {
  async asyncData({ $api, route }) {
    const video = await $api.$get(
      `/tv/${route.params.id}?append_to_response=images,credits,videos`
    )

    return { video }
  },
}
</script>