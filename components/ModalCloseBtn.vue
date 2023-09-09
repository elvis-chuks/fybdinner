<template>
  <button
    class="close-btn"
    @click="$emit('close')"
  >
    <span class="material-icons-round"> close </span>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>

.close-btn {
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 4px;
  transition: 0.3s;
  height: 37px;
  width: 37px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  --failure: #f04438;
  --action-btn-hover-box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
}

.close-btn .material-icons-round {
  height: 20px;
  width: 20px;
  transition: 0.3s;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover .material-icons-round {
  color: #fff;
  border-radius: 4px;
  height: 100%;
  width: 100%;
  border: 1px solid var(--failure);
  background: var(--failure);
  box-shadow: var(--action-btn-hover-box-shadow);
}

.close-btn:focus .material-icons-round {
  border: 1px solid var(--failure);
  background: var(--failure);
  box-shadow: var(--action-btn-hover-box-shadow);
  color: #fff;
  width: 100%;
  border-radius: 4px;
  height: 100%;
}
</style>
