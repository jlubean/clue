<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">History</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Accuser</md-table-head>
        <md-table-head>Suspect</md-table-head>
        <md-table-head>Weapon</md-table-head>
        <md-table-head>Room</md-table-head>
        <md-table-head>Revealer</md-table-head>
        <md-table-head>Card</md-table-head>
      </md-table-row>
      <md-table-row v-for="(accusation, index) in accusations" v-bind:key="index">
        <md-table-cell>{{ players[accusation.accuserIndex].name }}</md-table-cell>
        <md-table-cell>{{ accusation.suspect }}</md-table-cell>
        <md-table-cell>{{ accusation.weapon }}</md-table-cell>
        <md-table-cell>{{ accusation.room }}</md-table-cell>
        <md-table-cell>{{ players[accusation.revealerIndex].name }}</md-table-cell>
        <md-table-cell>{{ accusation.revealed }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import GameStorage from '../GameStorage';

export default {
  name: 'History',
  data () {
    return {
      suspects: GameStorage.data.suspects,
      weapons: GameStorage.data.weapons,
      rooms: GameStorage.data.rooms,
      players: GameStorage.data.players,
      accusations: GameStorage.data.accusations
    };
  }
};
</script>
<style scoped>

  th, td {
    text-align: left;
    width: 70px;
  }

  .md-table-head-container {
    height: 32px;
    padding: 2px 0;
  }

  .md-table-cell-container {
    padding-top: 2px;
    padding-bottom: 2px;
  }

</style>
