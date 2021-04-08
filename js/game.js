/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Phaser3 configuration file

import TitleScene from './titleScene.js'
import GameScene from './gameScene.js'

// Our game scene
const gameScene = new GameScene()
const titleScene = new TitleScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x27ae60,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}
const game = new Phaser.Game(config)

// load scenes
game.scene.add('titleScene', titleScene)
game.scene.add('game', gameScene)

// start title
game.scene.start('titleScene')
