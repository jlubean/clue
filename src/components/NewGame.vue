<template>
  <div class="new-game">
    <md-content class="md-scrollbar options">
      <section id="how-many-players" v-if="step === 1">
        <h2>How many players?</h2>
        <md-radio v-for="(item, index) in numberOfPlayersSelect" v-bind:value="item" v-bind:key="index" v-model="numberOfPlayers"><span class="number-of-players-label">{{item}}</span></md-radio>
      </section>
      <section id="who-are-the-players" v-if="step === 2">
        <h2>Player {{playerNumber}} of {{numberOfPlayers}}</h2>
        <h3 v-if="playerNumber === 1">What is YOUR name?</h3>
        <h3 v-if="playerNumber === 2">Who is the person to YOUR LEFT?</h3>
        <h3 v-if="playerNumber > 2">Who is the person to the LEFT of {{lastPlayerName}}?</h3>
        <md-field>
          <label>Name</label>
          <md-input v-model="playerName"></md-input>
        </md-field>
        <h3 v-if="playerNumber === 1">How many cards do YOU have?</h3>
        <h3 v-if="playerNumber > 1">How many cards does {{computedPlayerName}} have?</h3>
        <md-field>
          <label># of Cards</label>
          <md-input v-model="playerCards"></md-input>
        </md-field>
      </section>
      <section id="your-cards" v-if="step === 3">
        <h2>What cards do YOU have?</h2>
        <div>
          <h3>Suspects</h3>
          <div class="all-cards">
            <md-checkbox v-for="card in suspects" v-bind:value="card.name" v-bind:key="card.name" v-model="cards">{{card.name}}</md-checkbox>
          </div>
          <h3>Weapons</h3>
          <div class="all-cards">
            <md-checkbox v-for="card in weapons" v-bind:value="card.name" v-bind:key="card.name" v-model="cards">{{card.name}}</md-checkbox>
          </div>
          <h3>Rooms</h3>
          <div class="all-cards">
            <md-checkbox v-for="card in rooms" v-bind:value="card.name" v-bind:key="card.name" v-model="cards">{{card.name}}</md-checkbox>
          </div>
        </div>
      </section>
    </md-content>
    <footer>
      <md-button class="md-raised previous" v-on:click="previousStep" v-if="step > 1">Previous</md-button>
      <md-button class="md-raised next" v-on:click="nextStep">Next</md-button>
    </footer>
  </div>
</template>

<script>
import GameStorage from '../GameStorage';
import Game from '../Game';

export default {
  name: 'NewGame',
  data () {
    return {
      numberOfPlayersSelect: [ 2, 3, 4, 5, 6 ],
      numberOfPlayers: 2,
      playerLabel: 'Player 1',
      playerName: '',
      playerNumber: 1,
      playerCards: 3,
      step: 1,
      cards: [],
      suspects: GameStorage.data.suspects,
      weapons: GameStorage.data.weapons,
      rooms: GameStorage.data.rooms
    };
  },
  computed: {
    computedPlayerName: function () {
      return this.playerName || this.playerLabel;
    }
  },
  methods: {
    getPlayer (playerNumber) {
      return playerNumber <= GameStorage.data.players.length ? GameStorage.data.players[playerNumber - 1] : {};
    },
    setCurrentPlayer (player) {
      this.lastPlayerName = GameStorage.data.players.length > 1 && this.playerNumber > 1 ? GameStorage.data.players[this.playerNumber - 2].name : '';
      this.playerLabel = 'Player ' + this.playerNumber;
      this.playerName = player.name || '';
      this.playerCards = player.cards || Math.floor(18 / this.numberOfPlayers);
    },
    previousStep () {
      let player = this.getPlayer(this.playerNumber);
      if (this.step === 3) {
        Game.setHasCards(0, this.cards);
        this.step--;
        this.playerNumber = this.numberOfPlayers;
        this.setCurrentPlayer(player);
      } else if (this.step === 2) {
        player.name = this.playerName || this.playerLabel;
        player.cards = this.playerCards || Math.floor(18 / this.numberOfPlayers);
        if (this.playerNumber > GameStorage.data.players.length) {
          Game.addPlayer(player);
        }
        if (this.playerNumber > 1) {
          this.playerNumber--;
          player = GameStorage.data.players[this.playerNumber - 1];
          this.setCurrentPlayer(player);
        } else {
          this.step--;
        }
      }
    },
    nextStep () {
      let player = this.getPlayer(this.playerNumber);
      if (this.step === 1) {
        this.setCurrentPlayer(player);
        this.lastPlayerName = '';
        this.step++;
      } else if (this.step === 2) {
        player.name = this.playerName || this.playerLabel;
        player.cards = this.playerCards || Math.floor(18 / this.numberOfPlayers);
        if (this.playerNumber > GameStorage.data.players.length) {
          Game.addPlayer(player);
        }
        if (this.playerNumber < this.numberOfPlayers) {
          this.playerNumber++;
          player = this.getPlayer(this.playerNumber);
          this.setCurrentPlayer(player);
        } else {
          this.step++;
        }
      } else if (this.step === 3) {
        Game.setHasCards(0, this.cards);
        this.$router.push({ name: 'Card' });
      }
    }
  }
};
</script>
<style scoped>
  .new-game {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 56px;
  }

  .options {
    bottom: 68px;
    left: 0;
    overflow: auto;
    padding: 16px;
    position: absolute;
    right: 0;
    top: 0;
  }

  footer {
    bottom: 0;
    background-color: #FFF;
    height: 68px;
    left: 0;
    position: absolute;
    right: 0;
  }

  footer .md-button {
    margin: 16px;
  }

  .md-button.previous {
    left: 0;
    position: absolute;
  }

  .md-button.next {
    right: 0;
    position: absolute;
  }

  .md-checkbox {
    margin: 10px 16px 10px 0;
  }

  .number-of-players-label {
    margin-left: -8px;
  }

  .all-cards {
    display: flex;
    flex-wrap: wrap;
  }
  .all-cards .md-checkbox {
    width: calc(50% - 16px);
  }
  @media screen and (min-width: 480px) {
    .all-cards .md-checkbox {
      width: calc(33% - 16px);
    }
  }
  @media screen and (min-width: 620px) {
    .all-cards .md-checkbox {
      width: calc(25% - 16px);
    }
  }
  @media screen and (min-width: 768px) {
    .all-cards .md-checkbox {
      width: calc(20% - 16px);
    }
  }
  @media screen and (min-width: 1024px) {
    .all-cards .md-checkbox {
      width: calc(16.667% - 16px);
    }
  }
</style>
