
const defaultData = {
  suspects: [
    { name: 'Green', players: [] },
    { name: 'Mustard', players: [] },
    { name: 'Peacock', players: [] },
    { name: 'Plum', players: [] },
    { name: 'Scarlet', players: [] },
    { name: 'White', players: [] }
  ],
  weapons: [
    { name: 'Candlestick', players: [] },
    { name: 'Knife', players: [] },
    { name: 'Pipe', players: [] },
    { name: 'Revolver', players: [] },
    { name: 'Rope', players: [] },
    { name: 'Wrench', players: [] }
  ],
  rooms: [
    { name: 'Ballroom', players: [] },
    { name: 'Billiard', players: [] },
    { name: 'Conservatory', players: [] },
    { name: 'Dining', players: [] },
    { name: 'Hall', players: [] },
    { name: 'Kitchen', players: [] },
    { name: 'Library', players: [] },
    { name: 'Lounge', players: [] },
    { name: 'Study', players: [] }
  ],
  players: [],
  accusations: []
};

const data = JSON.parse(localStorage.getItem('data') || JSON.stringify(defaultData));

export default {
  data,
  storeData: () => {
    localStorage.setItem('data', JSON.stringify(data));
  }
};
