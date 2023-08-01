<template>
  <Button class="primary-btn">
    <p>Buy tickets</p>
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
  </Button>
</template>
<script>
export default {
  name: 'PrimaryButton'
}
</script>
<style scoped>
.primary-btn {
  padding: 16px 24px;
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
}

.primary-btn p {
  font-size: 15px;
}

.primary-btn:hover {
  gap: 20px;
}
</style>
