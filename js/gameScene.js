/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
    this.ship = null
  }

  init () {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    this.load.image('alien', 'assets/alien.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
  }

  create () {
    const alien = this.add.sprite(400, 100, 'alien')
    alien.setOrigin(0, 0)

    this.ship = this.add.sprite(1920 / 2, 1080 - 100, 'ship')
    // ship.setOrigin(0, 0)

    // create a group for the missiles
    // var invader2 = this.add.group([
    this.missileGroup = this.add.group()
  }

  update (time, delta) {
    this.input.on('pointerup', function (pointer) {
      console.log('pointerup')
      this.addRocket()
    }, this)

    const keySpaceObj = this.input.keyboard.addKey('SPACE') // Get key object
    const keyLeftObj = this.input.keyboard.addKey('LEFT') // Get key object
    const keyRightObj = this.input.keyboard.addKey('RIGHT') // Get key object
    const isDown = keySpaceObj.isDown
    // const isUp = keySpaceObj.isUp

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 5
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 5
    }

    if (isDown === true) {
      // this.addRocket()
      this.missileGroup.create(this.ship.x, this.ship.y, 'missile')
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 5
      if (item.y < 50) {
        item.destroy()
      }
    })
  }

  addRocket () {
    this.missileGroup.create(100, 500, 'missile')
  }

  end () {

  }
}

export default GameScene
