<template>
  <div class="blocklet-list-item-bottom">
    <div class="blocklet-list-item-bottom-box">
      <div class="blocklet-list-item-bottom-box-left">
        <div class="title">From</div>
        <div>
          <BlockletListItemBottomInfo v-for="(item, index) in data.inputs" :key="index" :data="item" :index="index" :from="'from'" />
        </div>
      </div>
      <div class="blocklet-list-item-bottom-box-right">
        <div class="title">To</div>
        <div>
          <BlockletListItemBottomInfo v-for="(item, index) in data.out" :key="index" :data="item" :index="index" :from="'to'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import BlockletListItemBottomInfo from './BlockletListItemBottomInfo.vue'
import { defineProps } from 'vue';

defineProps(['data', 'index'])
</script>
<style lang='scss' scoped>
.blocklet-list-item-bottom {
  height: 215px;
  transition: height 0.25s ease-in 0s;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &-box {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
    margin: 0px 0px -1px;
    &>div {
      width: calc(50%);
      max-width: calc(50%);
      overflow: hidden;
      min-width: calc(50%);
      flex: 1 1 0%;
      margin: 0px 0px 0px -1px;
      padding: 0px;
      border-left: 1px solid rgb(238, 238, 238);
      text-align: left;
      .title {
        font-weight: 600;
        margin: 0.75rem;
      }
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
    }
    @media (max-width: 680px) {
      &>div {
        width: calc(100%);
        max-width: calc(100%);
        overflow: hidden;
        min-width: calc(100%);
        flex: 1 1 0%;
        margin: 0px 0px 0px -1px;
        padding: 0px;
        border-left: 1px solid rgb(238, 238, 238);
        border-bottom: 1px solid rgb(238, 238, 238);
      }
    }
  }
}
@media (max-width: 680px) {
  .blocklet-list-item-bottom {
    height: auto;
  }
}
</style>