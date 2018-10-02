
export default {
  data: {
    suspects: [
      { name: 'Mustard', players: [ {name: 'Tom', has: 'y'}, {name: 'George', has: 'n'}, {name: 'Mary', has: 'n'}, {name: 'Bob', has: 'n'} ] },
      { name: 'Plum', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Green', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Peacock', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Scarlet', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'White', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] }
    ],
    weapons: [
      { name: 'Knife', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Candlestick', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Revolver', players: [ {name: 'Tom', has: 'y'}, {name: 'George', has: 'n'}, {name: 'Mary', has: 'n'}, {name: 'Bob', has: 'n'} ] },
      { name: 'Rope', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Pipe', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Wrench', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] }
    ],
    rooms: [
      { name: 'Hall', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Lounge', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Dining', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Kitchen', players: [ {name: 'Tom', has: 'y'}, {name: 'George', has: 'n'}, {name: 'Mary', has: 'n'}, {name: 'Bob', has: 'n'} ] },
      { name: 'Ballroom', players: [ {name: 'Tom', has: 'y'}, {name: 'George', has: 'n'}, {name: 'Mary', has: 'n'}, {name: 'Bob', has: 'n'} ] },
      { name: 'Conservatory', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Billiard', players: [ {name: 'Tom', has: 'y'}, {name: 'George', has: 'n'}, {name: 'Mary', has: 'n'}, {name: 'Bob', has: 'n'} ] },
      { name: 'Library', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] },
      { name: 'Study', players: [ {name: 'Tom', has: 'u'}, {name: 'George', has: 'u'}, {name: 'Mary', has: 'u'}, {name: 'Bob', has: 'u'} ] }
    ],
    players: [
      { name: 'Tom', cards: 5 },
      { name: 'George', cards: 5 },
      { name: 'Mary', cards: 4 },
      { name: 'Bob', cards: 4 }
    ],
    accusations: [
      {
        accuser: 'Tom',
        player: 'Mary',
        suspect: 'Plum',
        weapon: 'Wrench',
        room: 'Kitchen'
      }
    ]
  }
};
