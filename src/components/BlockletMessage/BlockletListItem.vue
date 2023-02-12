<template>
  <div class="blocklet-list-item" v-if="items && Object.keys(items).length">
    <div class="blocklet-list-item-top">
      <div class="blocklet-list-item-top-left"><div>TX</div></div>
      <div class="blocklet-list-item-top-center">
        <div class="f1">
          <div><span class="black-color">{{ index }}</span>ID: {{FormatHash(items?.hash)}}</div>
          <div>{{FormatTableTime(items?.time)}}</div>
        </div>
        <div class="f1">
          <div><span class="black-color">From</span>{{ items?.inputs?.length ? items?.inputs?.length + ' Inputs' : 'Block Reward' }}</div>
          <div><span class="black-color">To</span>{{ items?.out?.length ? items?.out?.length + ' Outputs' : 'Unknown' }}</div>
        </div>
        <div class="f3">
          <div><span class="black-color">6.41583560 BTC</span>• $146,286</div>
          <div>Fee<span class="black-color">0 Sats </span>• $0.00</div>
        </div>
      </div>
      <div class="blocklet-list-item-top-right" @click="openBottom">
        <div :style="`transform: rotate(${isOpen?'180':'0'}deg)`">
          <img src="https://www.blockchain.com/explorer/_next/static/media/handle.d006a275.svg" alt="">
        </div>
      </div>
    </div>
    <BlockletListItemBottom v-show="isOpen" :data="items" />
  </div>
</template>
<script lang='ts' setup>
import {FormatHash, FormatTableTime} from './../../libs/tools';
import { defineProps, ref } from 'vue';
import BlockletListItemBottom from './BlockletListItemBottom.vue'

defineProps(['items', 'index'])

const isOpen = ref(false)

function openBottom() {
  isOpen.value = !isOpen.value
}
</script>
<style lang='scss' scoped>

.blocklet-list-item {
  display: flex;
  border-top: 1px solid rgb(238, 238, 238);
  box-sizing: border-box;
  flex-direction: column;
  margin: 0px;
  &-top {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid rgb(238, 238, 238);
    align-items: flex-start;
    padding: 1rem 0px;
    margin: -1px 0px;
    box-sizing: border-box;
    &-left {
      margin: 0px 1rem;
      &>div {
        height: 40px;
        width: 40px;
        aspect-ratio: 1 / 1;
        border-radius: 30px;
        margin: 0px;
        align-self: flex-start;
        display: grid;
        place-content: center;
        user-select: none;
        pointer-events: none;
        font-size: 1rem;
        border: 1px solid rgb(238, 238, 238);
        background-color: transparent;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }
    &-right {
      width: max-content;
      display: inline-flex;
      &>div {
        display: grid;
        place-items: center;
        height: 40px;
        width: 30px;
        cursor: pointer;
        margin: 0px 0.5rem;
        transition: transform 0.25s ease-in 0s;
        // transform: rotate(180deg);
        img {
          width: 12px;
          height: 7px;
          display: inline-flex;
          margin: 0px;
        }
      }
    }
    &-center {
      display: grid;
      grid-template-columns: 33.333% 1fr min-content;
      grid-template-rows: max-content;
      opacity: 1;
      width: 100%;
      flex: 1 1 0%;
      font-size: 0.85rem;
      gap: 0px 5px;
      .f1 {
        -webkit-box-pack: end;
        justify-content: flex-end;
        width: 100%;
        position: relative;
        align-items: flex-start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        max-width: 400px;
        text-align: left;
        color: rgb(153, 153, 153);
      }
      .f3 {
        -webkit-box-pack: end;
        justify-content: flex-end;
        display: flex;
        width: 100%;
        flex-direction: column;
        position: relative;
        align-items: flex-end;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    @media (max-width: 680px) {
      &-center {
        grid-template-columns: 1fr;
        gap: 6px;
        .f3 {
          align-items: flex-start;
        }
      }
    }
  }
}
</style>