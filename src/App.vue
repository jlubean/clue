<template>
  <div class="page-container">
    <md-app md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Clue Vue</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Card</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">New Accusation</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">History</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <a class="md-list-item-text" v-on:click="newGame" href="">New Game</a>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<script>
import Game from './Game';

export default {
  name: 'App',
  data: function () {
    return { menuVisible: false };
  },
  methods: {
    newGame: function (event) {
      event.preventDefault();
      Game.initializeGame();
      this.menuVisible = false;
      this.$router.replace('new-game');
    }
  }
};
</script>
