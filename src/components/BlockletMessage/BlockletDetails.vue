<template>
  <div class="blocklet-details">
    <div class="blocklet-block">
      <BlockletDetailsItem :title="'Hash'" :info="FormatHash(data?.hash)" />
    </div>
    <div class="blocklet-block">
      <BlockletDetailsItem :title="'Mined on'" :info="FormatTime(data?.time)" />
    </div>
  </div>
</template>
<script lang='ts' setup>
import { defineProps } from 'vue';
import {FormatHash, FormatTime} from './../../libs/tools';
import BlockletDetailsItem from './BlockletDetailsItem.vue'

defineProps(['data'])

</script>
<style lang='scss' scoped>
.blocklet-details {
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  margin: 0px 15px 5px;
  .blocklet-block {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 50%;
    gap: 5px 0px;
  }
}
@media (max-width: 680px) {
  .blocklet-details {
    .blocklet-block {
      width: 100%;
    }
  }
}
</style>