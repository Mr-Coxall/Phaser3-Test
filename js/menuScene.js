/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
    this.startButton = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#808080')
  }

  preload () {
    console.log('Menu Scene')
    this.load.image('startButton', 'assets/start.png')
  }

  create (data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume()
    }

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2, 'startButton')
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on('pointerdown', () => this.clickButton())
  }

  update (time, delta) {

  }

  clickButton () {
    this.scene.start('gameScene')
  }
}

export default MenuScene
