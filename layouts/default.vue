<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <img src="@/assets/images/nuesa.jpg" alt="NUESA">
        <img src="@/assets/images/naas.jpg" alt="NAAS">
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

.logo {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.logo img {
  width: 60px;
}

@media (max-width: 500px) {
  .cta {
    display: none;
  }
}
</style>
