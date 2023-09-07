<template>
  <div class="modal">
    <div class="modal-content">
      <div class="top">
        <modal-close-btn v-if="showTopCloseBtn" @close="closeModal()" />
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import ModalCloseBtn from './ModalCloseBtn.vue'
export default {
  name: 'ModalView',
  components: { ModalCloseBtn },
  props: {
    showTopCloseBtn: {
      type: Boolean,
      default: () => true
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>
<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.6);
}

.modal-content {
  background-color: #fff;
  margin: 80px auto;
  padding: 0 30px 30px;
  /* border: 1px solid #888; */
  width: 508px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  animation: moveUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  box-shadow: 0px 0px 0px 0px rgba(0, 2, 46, 0.10), 0px 9px 19px 0px rgba(0, 2, 46, 0.10), 0px 35px 35px 0px rgba(0, 2, 46, 0.09), 0px 78px 47px 0px rgba(0, 2, 46, 0.05), 0px 138px 55px 0px rgba(0, 2, 46, 0.01), 0px 216px 60px 0px rgba(0, 2, 46, 0.00);
}
.top {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background: rebeccapurple; */
    height: 80px;
}

.close {
  color: var(--dark-purple);
  font-size: 38px;
  font-weight: 200;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media(max-width: 500px) {
    .modal-content {
        width: 90%;
    }

    .modal-content {
      margin: 20px auto;
      padding: 0 20px 20px;
    }
}
</style>
