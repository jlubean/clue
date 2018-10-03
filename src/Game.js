import GameStorage from './GameStorage';

function findCardInData (data, cardName) {
  return findCard(data.suspects, cardName) || findCard(data.weapons, cardName) || findCard(data.rooms, cardName);
}

function findCard (cards, cardName) {
  return cards.find((card) => {
    return card.name === cardName;
  });
}

function setHasCard (card, playerIndex) {
  card.players.forEach((player, index) => {
    player.has = index === playerIndex ? 'y' : 'n';
  });
}

function addPlayerToData (data, player) {
  data.players.push(player);
  addPlayerToCards(data.suspects, player);
  addPlayerToCards(data.weapons, player);
  addPlayerToCards(data.rooms, player);
}

function addPlayerToCards (cards, player) {
  cards.forEach(card => {
    card.players.push({ name: player.name, has: 'u' });
  });
}

function clearPlayers (cards) {
  cards.forEach((card) => {
    card.players.splice(0, card.players.length);
  });
}

export default {
  initializeGame: function () {
    clearPlayers(GameStorage.data.suspects);
    clearPlayers(GameStorage.data.weapons);
    clearPlayers(GameStorage.data.rooms);

    if (GameStorage.data.players.length) {
      let player = GameStorage.data.players[0];
      GameStorage.data.players.splice(0, GameStorage.data.players.length);
      addPlayerToData(GameStorage.data, { name: player.name });
    }
    GameStorage.data.accusations.splice(0, GameStorage.data.accusations.length);
  },

  addPlayer: function (player, cardNames) {
    addPlayerToData(GameStorage.data, { name: player.name, cards: player.cards });
    if (cardNames) {
      this.setHasCards(GameStorage.data.players.length - 1, cardNames);
    }
  },

  setHasCards: function (playerIndex, cardNames) {
    cardNames.forEach(cardName => {
      setHasCard(findCardInData(GameStorage.data, cardName), playerIndex);
    });
  },

  addAccusation: function (accuser, suspect, weapon, room, revealer, revealed) {
    GameStorage.data.accusations.push({
      accuser, suspect, weapon, room, revealer, revealed
    });
    let accuserIndex = GameStorage.data.players.findIndex((player) => {
      return player.name === accuser;
    });
    let revealerIndex = GameStorage.data.players.findIndex((player) => {
      return player.name === revealer;
    });
    let suspectCard = findCard(GameStorage.data.suspects, suspect);
    let weaponCard = findCard(GameStorage.data.weapons, weapon);
    let roomCard = findCard(GameStorage.data.rooms, room);

    if (revealed) {
      setHasCard(findCardInData(GameStorage.data, revealed), revealerIndex);
    } else {
      // If the revealer does not have two of the cards, then the revealer has the third card
      let hasSuspectCard = suspectCard.players[revealerIndex].has === 'y';
      let hasWeaponCard = weaponCard.players[revealerIndex].has === 'y';
      let hasRoomCard = roomCard.players[revealerIndex].has === 'y';

      if (!hasSuspectCard && !hasWeaponCard) {
        setHasCard(roomCard, revealerIndex);
      } else if (!hasSuspectCard && !hasRoomCard) {
        setHasCard(weaponCard, revealerIndex);
      } if (!hasWeaponCard && !hasRoomCard) {
        setHasCard(suspectCard, revealerIndex);
      }
    }

    // players between the accuser and revealer do not have the cards
    GameStorage.data.players.forEach((player, index) => {
      if ((accuserIndex < revealerIndex && index > accuserIndex && index < revealerIndex) || (accuserIndex > revealerIndex && (index < revealerIndex || index > accuserIndex))) {
        suspectCard.players[index].has = 'n';
        weaponCard.players[index].has = 'n';
        roomCard.players[index].has = 'n';
      }
    });
  }
};
