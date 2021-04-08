/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
    const backgroundImage = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log("Splash Scene")
    this.load.image('splashSceneBackground', 'assets/splashSceneImage.png')
  }

  create (data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume()
    }
    this.backgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.backgroundImage.x = 1920 / 2
    this.backgroundImage.y = 1080 / 2
  }

  update (time, delta) {
    console.log(time)
    if (time > 2000) {
      this.scene.switch('titleScene')
    }
  }
}

export default SplashScene
