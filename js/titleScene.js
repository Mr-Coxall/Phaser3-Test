/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    console.log("Title Scene")
    this.load.image('titleSceneBackground', 'assets/background.jpg')
  }

  create (data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume()
    }
    const bg = this.add.sprite(0, 0, 'titleSceneBackground')
    bg.setOrigin(0, 0)

    const text = this.add.text(100, 400, 'Welcome to my game!')
    text.setInteractive({ useHandCursor: true })
    text.on('pointerdown', () => this.clickButton())
  }

  update (time, delta) {

  }

  clickButton () {
    this.scene.switch('menuScene')
  }
}

export default TitleScene
