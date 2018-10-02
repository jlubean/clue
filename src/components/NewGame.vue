<template>
  <div class="new-game">
    <div class="options">
      <section id="how-many-players" v-if="step === 1">
        <h2>How many players?</h2>
        <select>
          2-6
        </select>
      </section>
      <section id="who-are-the-players" v-if="step === 2">
        <h2>Player {{playerNumber}}</h2>
        <h3 v-if="playerNumber === 1">What is YOUR name?</h3>
        <h3 v-if="playerNumber === 2">Who is the person to YOUR LEFT?</h3>
        <h3 v-if="playerNumber > 2">Who is the person to the LEFT of {{lastPlayerName}}?</h3>
        <input>
        <h3 v-if="playerNumber === 1">How many cards do YOU have?</h3>
        <h3 v-if="playerNumber > 1">How many cards does {{playerName}} have?</h3>
        <input>
      </section>
      <section id="your-cards" v-if="step === 3">
        <h2>What cards do YOU have?</h2>
        <div>
          <input type="checkbox" id="checkbox_mustard"> <label for="checkbox_mustard">Mustard</label>
        </div>
      </section>
    </div>
    <footer>
      <button v-on:click="nextStep">Continue</button>
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
      numberOfPlayers: 2,
      playerName: 'Player 1',
      playerNumber: 1,
      playerCards: 3,
      step: 1,
      cards: []
    };
  },
  methods: {
    nextStep () {
      if (this.step === 1) {
        this.playerName = GameStorage.data.players.length ? GameStorage.data.players[0].name : 'Player 1';
        this.step++;
        this.playerCards = Math.floor(21 / this.numberOfPlayers);
        this.lastPlayerName = this.playerName;
      } else if (this.step === 2) {
        Game.addPlayer(this.playerName, this.playerCards);
        if (this.playerNumber < this.numberOfPlayers) {
          this.lastPlayerName = this.playerName;
          this.playerNumber++;
          this.playerName = 'Player ' + this.playerNumber;
          this.playerCards = Math.floor(21 / this.numberOfPlayers);
        } else {
          this.step++;
        }
      } else if (this.step === 3) {
        this.cards.forEach((card) => {
          Game.setHasCard(card, 0);
        });
        this.$router.replace('');
      }
    }
  }
};
</script>
<style scoped>

</style>
