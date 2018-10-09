<template>
  <div class="card">
    <div class="actions">
      <a href="#/accusation"><md-icon>feedback</md-icon> Add Accusation</a>
    </div>
    <md-card>
      <div class="md-toolbar">
        <h1 class="md-title">Suspects</h1>
      </div>
      <md-content class="md-scrollbar">
        <table>
        <tr>
          <th class="tc">Cards</th>
          <th v-for="player in players" v-bind:key="player.name" class="tc"><div class="th">{{ player.name }}</div></th>
        </tr>
        <tr v-for="item in suspects" v-bind:key="item.name">
          <td class="tc">{{ item.name }}</td>
          <td v-for="player in item.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u', tc: true }">
            <has-card v-bind:player="player"></has-card>
          </td>
        </tr>
        </table>
      </md-content>
    </md-card>
    <br>
    <md-card>
      <div class="md-toolbar">
        <h1 class="md-title">Weapons</h1>
      </div>
      <md-content class="md-scrollbar">
        <table>
        <tr>
          <th class="tc">Cards</th>
          <th v-for="player in players" v-bind:key="player.name" class="tc"><div class="th">{{ player.name }}</div></th>
        </tr>
        <tr v-for="item in weapons" v-bind:key="item.name">
          <td class="tc">{{ item.name }}</td>
          <td v-for="player in item.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u', tc: true }">
            <has-card v-bind:player="player"></has-card>
          </td>
        </tr>
        </table>
      </md-content>
    </md-card>
    <br>
    <md-card>
      <div class="md-toolbar">
        <h1 class="md-title">Rooms</h1>
      </div>
      <md-content class="md-scrollbar">
        <table>
        <tr>
          <th class="tc">Cards</th>
          <th v-for="player in players" v-bind:key="player.name" class="tc"><div class="th">{{ player.name }}</div></th>
        </tr>
        <tr v-for="item in rooms" v-bind:key="item.name">
          <td class="tc">{{ item.name }}</td>
          <td v-for="player in item.players" v-bind:key="player.name" v-bind:class="{ yes: player.has === 'y', no: player.has === 'n', unknown: player.has === 'u', tc: true }">
            <has-card v-bind:player="player"></has-card>
          </td>
        </tr>
        </table>
      </md-content>
    </md-card>
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

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    padding: 12px;
    text-align: center;
    width: 60px;
  }

  th {
    color: var(--md-theme-default-text-accent-on-background, rgba(0,0,0,0.54));
    font-size: 12px;
  }

  td {
    border-top: 1px solid var(--md-theme-default-divider-on-background, rgba(0,0,0,0.12));
  }

  .th {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 36px;
  }

  th:first-child, td:first-child {
    padding-right: 24px;
    text-align: left;
    width: inherit;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4px;
  }
</style>
