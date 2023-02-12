<template>
  <div class="blocklet-message">
    <div class="blocklet-message-title">
      <div class="top">Bitcoin Block <span>{{FormatNumbers(data?.block_index)}}</span></div>
      <div class="bottom">Mined on {{FormatTime(data?.time)}}</div>
    </div>
    <div class="blocklet-message-detail">
      <div class="details">Details</div>
      <BlockletDetails :data="data" />
    </div>
    <div class="blocklet-message-detail">
      <div class="details">Transactions</div>
      <BlockletList :data="data" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { defineProps } from 'vue';
import {FormatNumbers, FormatTime} from '../../libs/tools';
import BlockletDetails from './BlockletDetails.vue'
import BlockletList from './BlockletList.vue'

defineProps(['data'])



</script>
<style lang='scss' scoped>
.blocklet-message {
  display: flex;
  flex-direction: column;
  padding: 0px;
  font-size: 14px;
  max-width: 1800px;
  margin: 15px;
  &-title {
    display: flex;
    flex-flow: column wrap;
    .top {
      display: flex;
      flex: 10 1 0%;
      width: 100%;
      flex-flow: row wrap;
      font-weight: 600;
      font-size: 1.79rem;
      align-items: flex-end;
      span {
        font-weight: 600;
        font-size: 1.62rem;
        place-self: flex-end;
        margin: 0px 10px;
      }
    }
    .bottom {
      margin: 0px;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      color: rgb(153, 153, 153);
    }
  }
  &-detail {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    margin: 20px 0 0;
    border-top: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    .details {
      font-weight: 600;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: justify;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;
      margin: 13px;
      width: 100%;
    }
  }
}
</style>