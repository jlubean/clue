<template>
  <div class="accusation">
    <md-content class="md-scrollbar options">
      <section id="who" v-if="step === 1">
        <h1>Who made the accusation?</h1>
        <div class="players">
          <md-radio v-for="(player, index) in players" v-bind:value="index" v-bind:key="index" v-model="accuserIndex">{{player.name}}</md-radio>
        </div>
      </section>
      <section id="what" v-if="step === 2">
        <h1>What was the accusation?</h1>
        <h3>Suspect</h3>
        <div class="all-cards">
          <md-radio v-for="card in suspects" v-bind:value="card.name" v-bind:key="card.name" v-model="suspect">{{card.name}}</md-radio>
        </div>
        <h3>Weapon</h3>
        <div class="all-cards">
          <md-radio v-for="card in weapons" v-bind:value="card.name" v-bind:key="card.name" v-model="weapon">{{card.name}}</md-radio>
        </div>
        <h3>Room</h3>
        <div class="all-cards">
          <md-radio v-for="card in rooms" v-bind:value="card.name" v-bind:key="card.name" v-model="room">{{card.name}}</md-radio>
        </div>
      </section>
      <section id="what" v-if="step === 3">
        <h1>Who revealed a card?</h1>
        <div class="players">
          <md-radio v-for="(player, index) in players" v-bind:value="index" v-bind:key="index" v-model="revealerIndex">{{player.name}}</md-radio>
        </div>
      </section>
      <section id="what" v-if="step === 4">
        <h1 v-if="accuserIndex === 0">What card did {{players[revealerIndex].name}} show you?</h1>
        <h1 v-if="accuserIndex > 0">What card did you show {{players[revealerIndex].name}}?</h1>
        <div class="all-cards">
          <md-radio v-bind:value="suspect" v-model="revealed">{{suspect}}</md-radio>
          <md-radio v-bind:value="weapon" v-model="revealed">{{weapon}}</md-radio>
          <md-radio v-bind:value="room" v-model="revealed">{{room}}</md-radio>
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
  name: 'Accusation',
  data () {
    return {
      step: 1,
      accuserIndex: 0,
      revealerIndex: 1,
      suspect: null,
      weapon: null,
      room: null,
      revealed: null,
      suspects: GameStorage.data.suspects,
      weapons: GameStorage.data.weapons,
      rooms: GameStorage.data.rooms,
      players: GameStorage.data.players,
      categories: [
        { name: 'Suspects', cards: GameStorage.data.suspects },
        { name: 'Weapons', cards: GameStorage.data.weapons },
        { name: 'Rooms', cards: GameStorage.data.rooms }
      ]
    };
  },
  methods: {
    previousStep () {
      this.step--;
    },
    nextStep () {
      if ((this.step === 3 && this.accuserIndex !== 0 && this.revealerIndex !== 0) || (this.step === 4 && (this.accuserIndex === 0 || this.revealerIndex === 0))) {
        Game.addAccusation(this.accuserIndex, this.suspect, this.weapon, this.room, this.revealerIndex, this.revealed);
        this.$router.push({ name: 'Card' });
      } else {
        this.step++;
      }
    }
  },
  computed: {
  }
};
</script>
<style scoped>
  .accusation {
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

  .players {

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
