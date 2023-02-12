<template>
  <div class="header">
    <div class="form-input" @keyup.enter="search">
      <input type="text" v-model="keyword">
      <button @click="search">
        <img src="https://www.blockchain.com/explorer/_next/static/media/magGlass.d61ba0e4.svg" alt="">
      </button>
    </div>
  </div>
</template>
<script lang='ts' setup>
import {ref, defineEmits} from 'vue'
const keyword = ref('')
const emit = defineEmits(['search'])
function search() {
  emit('search', keyword.value)
}
</script>
<style lang='scss' scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-bottom: 1px solid rgb(238, 238, 238);
  .form-input {
    height: 40px;
    max-width: 750px;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0px;
    border: 1px solid rgb(238, 238, 238);
    display: flex;
    flex-direction: row;
    position: relative;
    input {
      color: rgb(0, 0, 0);
      border: none;
      width: 45vw;
      box-sizing: border-box;
      max-width: 750px;
      font-size: 1rem;
      overflow: hidden;
      height: 40px;
      background: rgba(255, 255, 255, 0.4);
      padding: 0px 5px 0px 17px;
      &:focus {
        outline: none;
      }
    }
    button {
      all: unset;
      width: 50px;
      height: 100%;
      box-sizing: border-box;
      background-color: rgb(238, 238, 238);
      cursor: pointer;
      display: grid;
      right: 0px;
      border-width: initial;
      border-style: none;
      border-color: initial;
      border-image: initial;
      -webkit-mask-repeat: no-repeat;
      place-items: center;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>