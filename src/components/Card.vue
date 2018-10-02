<template>
  <div class="card">
    <h1>Suspects</h1>
    <table>
      <tr>
        <th>Cards</th>
        <th v-for="player in players" v-bind:key="player.name">{{ player.name }}</th>
      </tr>
      <tr v-for="suspect in suspects" v-bind:key="suspect.name">
        <td>{{ suspect.name }}</td>
        <td v-for="player in suspect.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">{{ player.has }}</td>
      </tr>
    </table>
    <h1>Weapons</h1>
    <table>
      <tr>
        <th>Cards</th>
        <th v-for="player in players" v-bind:key="player.name">{{ player.name }}</th>
      </tr>
      <tr v-for="weapon in weapons" v-bind:key="weapon.name">
        <td>{{ weapon.name }}</td>
        <td v-for="player in weapon.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">{{ player.has }}</td>
      </tr>
    </table>
    <h1>Rooms</h1>
    <table>
      <tr>
        <th>Cards</th>
        <th v-for="player in players" v-bind:key="player.name">{{ player.name }}</th>
      </tr>
      <tr v-for="room in rooms" v-bind:key="room.name">
        <td>{{ room.name }}</td>
        <td v-for="player in room.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u' }">{{ player.has }}</td>
      </tr>
    </table>
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
  table {
    border-collapse: collapse;
    min-width: 320px;
  }
  th {
    background-color: black;
    color: white;
  }
  th, td {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    padding: 6px;
    text-align: center;
    width: 70px;
  }
  th:first-child, td:first-child {
    border-left: 1px solid black;
    text-align: left;
    width: 100px;
  }
  .yes {
    background-color: green;
    color: white;
  }
  .no {
    background-color: red;
    color: white;
  }
  .unknown {
    background-color: gray;
    color: black;
  }
</style>
