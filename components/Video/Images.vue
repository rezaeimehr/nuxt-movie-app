<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
    <div
      v-for="(image, index) in backdrops"
      :key="index"
      class="flex flex-col cursor-pointer"
    >
      <BaseImage @click.native="openModal(image)" :filePath="image.file_path"/>
    </div>
    <BaseModal
      v-if="isModalOpen"
      @closeModal="isModalOpen = false"
      :isModalOpen="isModalOpen"
      :image="openedImage"
    />
  </div>
</template>

<script>
export default {
  props: ['images'],
  data() {
    return {
      isModalOpen: false,
      openedImage: null,
    }
  },
  computed: {
    backdrops() {
      return this.images.backdrops.slice(0, 9)
    },
  },
  methods: {
    openModal(image) {
      this.openedImage = image
      this.isModalOpen = true
    },
  },
}
</script>