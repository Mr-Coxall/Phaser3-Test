import TitleScene from './titleScene.js';
import GameScene from './gameScene.js';

// Our game scene
var gameScene = new GameScene();
var titleScene = new TitleScene();

//* Game scene */
var config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade'
  },
  //set background color
  backgroundColor: 0x27ae60,
  scale: {
    mode: Phaser.Scale.FIT,
    //we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
};
var game = new Phaser.Game(config);

// load scenes
game.scene.add('titleScene', titleScene);
game.scene.add("game", gameScene);

// start title
game.scene.start('titleScene');