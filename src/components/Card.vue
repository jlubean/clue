<template>
  <div class="card">
    <div class="menu">
      <a href="#/accusation"><md-icon>feedback</md-icon> Add Accusation</a>
    </div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Suspects</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Cards</md-table-head>
        <md-table-head v-for="player in players" v-bind:key="player.name">{{ player.name }}</md-table-head>
      </md-table-row>
      <md-table-row v-for="suspect in suspects" v-bind:key="suspect.name">
        <md-table-cell>{{ suspect.name }}</md-table-cell>
        <md-table-cell v-for="player in suspect.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">
          <has-card v-bind:player="player"></has-card>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <br>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Weapons</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Cards</md-table-head>
        <md-table-head v-for="player in players" v-bind:key="player.name">{{ player.name }}</md-table-head>
      </md-table-row>
      <md-table-row v-for="weapon in weapons" v-bind:key="weapon.name">
        <md-table-cell>{{ weapon.name }}</md-table-cell>
        <md-table-cell v-for="player in weapon.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">
          <has-card v-bind:player="player"></has-card>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <br>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Rooms</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Cards</md-table-head>
        <md-table-head v-for="player in players" v-bind:key="player.name">{{ player.name }}</md-table-head>
      </md-table-row>
      <md-table-row v-for="room in rooms" v-bind:key="room.name">
        <md-table-cell>{{ room.name }}</md-table-cell>
        <md-table-cell v-for="player in room.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">
          <has-card v-bind:player="player"></has-card>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import GameStorage from '../GameStorage';

export default {
  name: 'Card',
  data () {
    return {
      suspects: GameStorage.data.suspects,
      weapons: GameStorage.data.weapons,
      rooms: GameStorage.data.rooms,
      players: GameStorage.data.players
    };
  }
};
</script>
<style scoped>

  .md-app-content .md-card {
    margin: 0;
  }

  .card {
    bottom: 0;
    left: 0;
    padding: 16px;
    position: absolute;
    right: 0;
    top: 56px;
    overflow: auto;
  }

  th, td {
    text-align: center;
    width: 70px;
  }

  th:first-child, td:first-child {
    text-align: left;
    width: 100px;
  }

  .yes .md-table-cell-container i {
    color: green;
  }

  .no .md-table-cell-container i {
    color: #cccccc;
  }

  .unknown {
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4px;
  }
</style>
