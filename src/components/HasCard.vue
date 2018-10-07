<template>
  <span v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">
    <md-icon v-if="player.has === 'y'">done</md-icon>
    <md-icon v-if="player.has === 'n'">not_interested</md-icon>
  </span>
</template>

<script>
import Vue from 'vue';

var HasCard = {
  name: 'HasCard',
  props: [
    'player'
  ]
};

Vue.component('has-card', HasCard);

export default HasCard;

</script>

<style scoped>
  .yes .md-icon.md-theme-default.md-icon-font {
    color: green;
  }

  .no .md-icon.md-theme-default.md-icon-font {
    color: #cccccc;
  }
</style>
