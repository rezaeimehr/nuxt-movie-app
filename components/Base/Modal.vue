<template>
  <div>
    <div
      @keydown.esc="closeModal"
      ref="modal"
      tabindex="0"
      style="background-color: rgba(0, 0, 0, 0.5)"
      class="
        fixed
        top-0
        left-0
        w-full
        h-full
        flex
        items-center
        shadow-lg
        overflow-y-auto
      "
    >
      <div class="container mx-auto lg:px-32 rounded-lg overflow-y-auto">
        <div class="bg-gray-900 rounded">
          <div class="flex justify-end align-middle pr-4 pt-2">
            <button
              @click="closeModal"
              class="text-3xl leading-none hover:text-gray-300"
            >
              ×
            </button>
          </div>
          <div class="px-8 py-8">
            <BaseImage :filePath="image.file_path" class="w-full" alt="poster" :org="true" :size="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['image'],
  mounted() {
    this.$refs.modal.focus()
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },
}
</script>