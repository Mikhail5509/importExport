import Game, { GameSavingData as GameData, read as loadGame, write as saveGame } from './game.js';

const game = new Game();
game.start();