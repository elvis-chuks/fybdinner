<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <p>Logo</p>
      </div>
      <div class="cta">
        <primary-button @click.native="showModal = true" />
      </div>
    </header>
    <modal v-show="showModal" @closeModal="showModal = false">
      <buy-ticket />
    </modal>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
.wrapper {
    width: 90%;
    margin: auto;
}
header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
}

@media(max-width: 500px) {
    .cta {
        display: none;
    }
}
</style>
