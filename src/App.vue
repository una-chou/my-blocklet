<script setup>
import { ref } from 'vue';
import axios from 'axios'
import InputHeader from './components/InputHeader.vue'
import BlocketMessageIndex from './components/BlockletMessage/BlocketMessageIndex.vue'

const loading = ref(true)

const code = ref('00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa')

const blockletData = ref()

search(code.value)

function search(keyword) {
  if (keyword==='') keyword = code.value
  axios.get('https://blockchain.info/rawblock/'+keyword).then(res => {
    blockletData.value = res.data
    loading.value = false
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <InputHeader @search="search" />
      </el-header>
      <el-main v-loading="loading">
        <BlocketMessageIndex v-if="blockletData" :data="blockletData" />
      </el-main>
    </el-container>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  padding: 0 !important;
}
.black-color {
  color: rgb(0, 0, 0) !important;
  margin-right: 5px !important;
}
.el-pagination {
  margin: 20px auto;
}
</style>
