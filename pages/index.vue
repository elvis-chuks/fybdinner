<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="hero">
        <h1>Purchase your <span>FYB-Dinner</span> tickets</h1>
        <div class="ctas">
          <primary-button @click.native="showModal = true" />
          <secondary-button />
        </div>
      </div>
      <div class="bottom-img">
        <img src="@/assets/images/phone-view.png" alt="ticket">
      </div>
    </div>
    <modal v-show="showModal" @closeModal="showModal = false">
      <buy-ticket />
    </modal>
  </div>
</template>

<script>
import BuyTicket from '~/components/BuyTicket.vue'
import Modal from '~/components/Modal.vue'
import primaryButton from '~/components/PrimaryButton.vue'
import SecondaryButton from '~/components/SecondaryButton.vue'
export default {
  name: 'IndexPage',
  components: { primaryButton, SecondaryButton, Modal, BuyTicket },
  data () {
    return {
      showModal: false
    }
  }
}
</script>
<style scoped>
.wrapper {
  /* margin-top: 80px; */
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.inner-wrapper {
  /* background: rebeccapurple; */
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 80px
}

.hero {
  display: flex;
  flex-direction: column;
}

.hero h1,
.hero h1 span {
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
}

.hero h1 span {
  white-space: nowrap;
}
.ctas {
  display: flex;
  gap: 20px;
  margin-top: 32px;
  justify-content: center;
}

.bottom-img {
  display: flex;
}

.bottom-img img {
  width: 340px;
  margin-bottom: 0px;
}

@media(max-width: 500px) {
  .hero {
    width: 100%;
  }
  .hero h1,
  .hero h1 span {
    font-size: 45px;
    width: 100%;
    text-align: center;
  }
  .ctas {
    flex-direction: column;
    align-items: center;
  }

  .ctas button {
    width: 100%;
  }

  .inner-wrapper {
    padding-top: 30px;
    width: 90%;
  }

  .bottom-img {
    margin-top: 30px;
  }

  .bottom-img img {
    width: 300px;
  }
}

@media(max-width: 300px) {
  .hero h1 span {
    white-space: pre-wrap;
  }

  .bottom-img img {
    width: 100%;
  }
}
</style>
