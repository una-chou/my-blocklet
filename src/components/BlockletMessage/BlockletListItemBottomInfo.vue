<template>
  <div class="list-item-infos">
    <div>
      <div class="numbers">
        <div class="numbers-images">
          <a href="">
            <div><img src="https://www.blockchain.com/explorer/_next/static/media/spenderIcon.ff7f92ca.svg" /></div>
          </a>
        </div>
        <div class="numbers-index">{{ index+1 }}</div>
      </div>
      <div class="details">
        <div class="details-hash"><a href=""><div>{{ from==='from' ? data?.prev_out?.addr ? data?.prev_out?.addr : 'Block Reward' : data?.addr ? data?.addr : 'Unknown' }}</div></a></div>
        <div class="details-time"><span class="black-color">
          {{ from==='from' ? data?.prev_out?.value ? data?.prev_out?.value/100000000 : '0.00' : data?.value ? data?.value / 100000000 : '0.00000000' }}
        </span>• $194.21</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { defineProps } from 'vue';

defineProps(['data', 'index', 'from'])
</script>
<style lang='scss' scoped>
.list-item-infos {
  margin: 0px 0.75rem 15px;
  font-size: 0.8rem;
  min-width: 230px;
  &>div {
    display: flex;
    flex-direction: row;
    .numbers {
      display: grid;
      grid-template-columns: max-content max-content;
      gap: 0px 10px;
      margin: 0px 0px 5px;
      align-self: flex-start;
      &-images {
        width: max-content;
        display: inline-flex;
        a {
          display: contents;
          pointer-events: inherit;
          cursor: unset;
          color: inherit;
          text-decoration: none;
          &>div {
            display: block;
            img {
              width: 15px;
              height: 15px;
              background-color: rgb(0, 0, 0);
              display: inline-flex;
              margin: 0px;
              cursor: pointer;
              transform: scale(-1, 1);
            }
          }
        }
      }
      &-index {
        font-weight: 600;
        font-size: 0.8rem;
        margin: 0px 0.25rem 10px 0px;
        min-width: 18px;
        align-self: flex-start;
        line-height: 1;
      }
    }
    .details {
      display: inline-block;
      overflow: hidden;
      &-hash {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        line-height: 1;
        a {
          display: contents;
          pointer-events: inherit;
          cursor: unset;
          color: inherit;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          div {
            color: rgb(237, 155, 96);
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: pointer;
          }
        }
      }
      &-time {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        line-height: 1;
        color: rgb(153, 153, 153);
        margin-top: 5px;
      }
    }
  }
}
</style>