<template>
  <button class="primary-btn" @click="$emit('action')">
    <p>{{ name }}</p>
  </button>
</template>
<script>
export default {
  name: 'PrimaryButton',
  props: {
    name: {
      type: String,
      default: 'Contact Sales'
    }
  }
}
</script>
  <style scoped>
.primary-btn {
  /* width: 165px; */
  padding: 16px 5px;
  width: 180px;
  background: var(--grey-6);
  cursor: pointer;
  height: 50px;
  color: var(--dark-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--light-purple, #A29DAB);
  letter-spacing: 0.5px;
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.10), 0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}
.primary-btn p {
  font-size: 15px;
  font-weight: 500;
}
</style>
