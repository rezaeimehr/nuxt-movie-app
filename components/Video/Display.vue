<template>
  <div class="container mx-auto px-5 pt-8 pb-10">
    <BaseHeading :title="title" />
    <div
      class="
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-8
      "
    >
      <Video
        v-for="video in videos"
        :key="video.id"
        :video="video"
        :videoType="videoType"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    videos: {
      type: Array,
    },
    videoType: {
      type: String,
      default: 'movies',
    },
  },
}
</script>