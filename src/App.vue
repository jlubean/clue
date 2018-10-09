<template>
  <div class="page-container">
    <md-app md-mode="fixed" class="full-height">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Clue Card</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-list>
          <md-list-item>
            <a v-on:click="closeDrawer" href="#/" class="with-icon">
              <md-icon>how_to_reg</md-icon><span>Card</span>
            </a>
          </md-list-item>

          <md-list-item>
            <a v-on:click="closeDrawer" href="#/accusation" class="with-icon">
              <md-icon>feedback</md-icon><span>New Accusation</span>
            </a>
          </md-list-item>

          <md-list-item>
            <a v-on:click="closeDrawer" href="#/history" class="with-icon">
              <md-icon>timeline</md-icon><span>History</span>
            </a>
          </md-list-item>

          <md-list-item>
            <a v-on:click="newGame" href="" class="with-icon">
              <md-icon>add_circle_outline</md-icon><span>New Game</span>
            </a>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

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
      this.closeDrawer();
      this.$router.push({ name: 'NewGame' });
    },
    closeDrawer: function () {
      this.menuVisible = false;
    }
  }
};
</script>

<style scoped>
  .md-app {
    border: 1px solid rgba(#000, .12);
    min-height: 100vh;
  }

  .md-app-content .md-card {
    margin: 0;
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-list-item-content > .md-icon:first-child {
      margin-right: 16px;
  }

  .router-link-active:hover {
    text-decoration: none;
  }

  .with-icon {
    align-items: center;
    display: flex;
    margin-right: 8px;
    min-height: 48px;
    width: 100%;
  }

  .with-icon .md-icon {
    margin-right: 8px;
  }

</style>
