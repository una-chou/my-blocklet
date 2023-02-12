<template>
  <div class="blocklet-block-item">
    <div class="blocklet-block-item-left"><div><div>{{title}}</div></div></div>
    <div class="blocklet-block-item-right"><div><div>{{info}}</div></div></div>
  </div>
</template>
<script lang='ts' setup>
import { defineProps } from 'vue';
defineProps(['title', 'info'])
</script>
<style lang='scss' scoped>
.blocklet-block-item {
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  &-left {
    display: flex;
    width: 40%;
    position: relative;
    &>div {
      width: max-content;
      display: inline-flex;
      &>div {
        display: inline-block;
        color: rgb(0, 0, 0);
        cursor: pointer;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
        font-size: 14px;
        place-self: flex-start;
        margin-right: 3px;
      }
    }
  }
  &-right {
    display: flex;
    width: 60%;
    margin-right: 0px;
    flex-direction: column;
    position: relative;
    gap: 7px 0px;
    &>div {
      width: max-content;
      display: inline-flex;
      &>div {
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow-wrap: break-word;
        font-size: 14px;
        color: rgb(153, 153, 153);
        place-self: flex-start;
      }
    }
  }
}
</style>