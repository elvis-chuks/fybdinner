<template>
  <button class="primary-btn" @click="$emit('action')">
    <p>{{ name }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M12.025 4.94165L17.0834 9.99998L12.025 15.0583"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.91669 10H16.9417"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'PrimaryButton',
  props: {
    name: {
      type: String,
      default: 'Buy tickets'
    }
  }
}
</script>
<style scoped>
.primary-btn {
  padding: 16px 5px;
  width: 180px;
  background: var(--dark-grey);
  cursor: pointer;
  height: 50px;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 14px;
  border: 1px solid var(--light-grey);
  letter-spacing: 0.5px;
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.10), 0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}

.primary-btn p {
  font-size: 15px;
}

.primary-btn:hover {
  gap: 20px;
}
</style>
