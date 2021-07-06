<template>
  <div>
    <NuxtLink :to="`/${videoType}/${video.id}`" class="flex" style="min-height: 138px">
      <BaseImage :filePath="video.poster_path" class="hover:opacity-75 transition ease-in-out duration-150 bg-gray-800 w-full" :alt="video.original_title || video.original_name" />
    </NuxtLink>
    <NuxtLink
      class="mt-2 hover:text-gray-300 block truncate"
      :class="{ 'text-lg': hasDetail }"
      :to="`/${videoType}/${video.id}`"
    >
      {{ title }}
    </NuxtLink>
    <VideoDetail
      v-if="hasDetail"
      :voteAverage="video.vote_average"
      :releaseDate="releaseDate"
    />
    <div>
      <span class="text-gray-400 text-sm block truncate">
        {{ getMyGenres }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    video: {
      type: Object,
    },
    videoType: {
      type: String,
      default: 'movies',
    },
    hasDetail: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState(['genres']),
    getMyGenres() {
      return this.video.genre_ids.map((genreId) => {
        return this.genres.find((genre) => genre.id === genreId)?.name
      }).join(', ')
    },
    releaseDate() {
      if (this.video.release_date) return this.video.release_date

      return this.video.first_air_date
    },
    title() {
      return this.videoType === 'movies' ? this.video.title : this.video.name
    },
  },
}
</script>