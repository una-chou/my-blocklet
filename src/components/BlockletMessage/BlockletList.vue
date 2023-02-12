<template>
  <div class="blocklet-list">
    <BlockletListItem v-for="(items, index) in list" :key="index" :index="getIndex(index)" :items="items" />
    <el-pagination background layout="prev, pager, next, sizes" :total="data.tx.length"
      v-model:currentPage="currentPage"
      v-model:page-size="currentPageSize"
      :page-sizes="[10, 20, 30, 40]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
     />
  </div>
</template>
<script lang='ts' setup>
import { defineProps, ref, watch } from 'vue';
import BlockletListItem from './BlockletListItem.vue'

const props = defineProps(['data'])

const list = ref([])

const currentPage: any = ref(1)
const currentPageSize: any = ref(10)

watch(() => props.data, (newVal) => {
  list.value = spliceList()
})

const spliceList = () => {
  return props.data?.tx?.splice((currentPage.value-1)*currentPageSize.value, currentPageSize.value)
}

list.value = spliceList()

const getIndex = (index: any) => {
  return (currentPage.value-1)*currentPageSize.value + index + 1
}
// 处理分页大小
const handleSizeChange = async (val: number) => {
  currentPageSize.value = val;
  list.value = spliceList()
}
// 处理正常分页
const handleCurrentChange = async (val: number) => {
  currentPage.value = val;
  list.value = spliceList()
}
</script>
<style lang='scss' scoped>
.blocklet-list {
  overflow: hidden;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  // border-bottom: 1px solid rgb(238, 238, 238);
}
</style>