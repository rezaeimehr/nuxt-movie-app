<template>
  <div>
    <div class="border-b border-gray-800">
      <div class="container mx-auto p-8 sm:p-10">
        <div class="flex flex-col md:flex-row">
          <div class="md:pr-12 lg:pr-16">
            <BaseImage :filePath="video.poster_path" class="w-full sm:w-72 lg:w-96" :alt="video.original_title || video.original_name" />
          </div>
          <div class="flex-1">
            <h2 class="text-4xl mt-4 md:mt-0 font-semibold mb-2">
              {{ title }}
            </h2>
            <VideoDetail
              :voteAverage="video.vote_average"
              :releaseDate="releaseDate"
            />
            <p class="py-10">
              {{ video.overview }}
            </p>

            <div v-if="featuredCrew.length">
              <span class="font-semibold"> Featured Crew </span>
              <div class="flex pt-5">
                <div
                  v-for="(person, index) in featuredCrew"
                  :key="index"
                  class="flex flex-col pr-10"
                >
                  <span> {{ person.name }} </span>
                  <span class="text-sm text-gray-300"> {{ person.job }} </span>
                </div>
              </div>
            </div>

            <div v-if="video.videos.results[0]">
              <a
                target="_blank"
                :href="`https://youtube.com/watch?v=${video.videos.results[0]['key']}`"
                class="
                  inline-flex
                  items-center
                  bg-yellow-500
                  text-gray-900
                  rounded
                  font-semibold
                  px-5
                  py-4
                  hover:bg-yellow-600
                  transition
                  ease-in-out
                  duration-150
                  mt-20
                "
              >
                <svg class="w-6 fill-current mr-1" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                  ></path>
                </svg>
                Play Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="video.credits.cast.length" :class="{ 'border-b border-gray-800': video.images.backdrops.length }">
      <div class="container mx-auto p-8 sm:p-10">
        <h3 class="text-3xl pb-8">Cast</h3>
        <PersonDisplay :people="video.credits" />
      </div>
    </div>

    <div
      v-if="video.images.backdrops.length"
      class="container mx-auto p-8 sm:p-10"
    >
      <h3 class="text-3xl pb-8">Images</h3>
      <VideoImages :images="video.images" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
    videoType: {
      type: String,
      default: 'movie',
    },
  },
  computed: {
    isMovie() {
      return this.videoType === 'movie'
    },
    title() {
      return this.isMovie ? this.video.original_title : this.video.name
    },
    releaseDate() {
      return this.isMovie ? this.video.release_date : this.video.first_air_date
    },
    featuredCrew() {
      return this.video.credits.crew.slice(0, 2)
    },
  },
}
</script>