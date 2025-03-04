const team = {
  _players: [
    { firstName: 'Sasha', lastName: 'Vezenkov', age: 29 }, 
    {firstName: 'Giannoulis', lastName: 'Laretzakis', age: 31 },
    {firstName: 'Thomas', lastName: 'Walkup', age: 32 }
  ],

  _games: [
    { opponent: 'Barcelona', teamPoints: 90, opponentPoints: 88},
    { opponent: 'PAOK', teamPoints: 86, opponentPoints: 60},
    { opponent: 'Pari', teamPoints: 73, opponentPoints: 90}
  ],

  get players() {
    return team._players;
  },

  get games() {
    return team._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  }
  ,

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints

    };
    this._games.push(game);
  }
};

team.addPlayer('Bugs', 'Bunny', 76); //testing if addPlayer method works
console.log(team.players);

team.addGame('Titans', 100, 98); //testing if addGame method works
console.log(team.games);
