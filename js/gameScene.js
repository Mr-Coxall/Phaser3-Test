/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This is the Game Scene

class GameScene extends Phaser.Scene {

  // create an alien
  createAlien () {
    const alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
    let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
    alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
    const anAlien = this.physics.add.sprite(alienXLocation, -100, 'alien')
    anAlien.body.velocity.y = 200
    anAlien.body.velocity.x = alienXVelocity
    this.alienGroup.add(anAlien)
  }

  hitAlien (missileCollide, alienCollide) {
    console.log('Hit')
    // this.sound.play('explosion');
    missileCollide.destroy()
    alienCollide.destroy()
    this.createAlien()
  }

  constructor () {
    super({ key: 'gameScene' })
    this.ship = null
    // this.aliens = null
    // this.missiles = null
    this.fireMissile = false
    // this.alienGroup = null
  }

  init () {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    // images
    this.load.image('alien', 'assets/alien.png')
    this.load.image('starBackground', 'assets/starBackground.png')
    this.load.image('ship', 'assets/spaceShip.png')
    this.load.image('missile', 'assets/missile.png')
    // sound
    this.load.audio('laser', 'assets/laser1.wav')
    this.load.audio('explosion', 'assets/barrelExploding.wav')
  }

  create () {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
    this.ship = this.add.sprite(1920 / 2, 1080 - 100, 'ship')

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the aliens
    this.alienGroup = this.add.group()
    this.createAlien()

    // Collisions between missiles and aliens
    // this.physics.add.collider(this.missileGroup, this.alienGroup, function(missileCollide, alienCollide) {
    //  console.log("Yes")
    //  missileCollide.destroy();
    //  alienCollide.destroy;
    // });
    this.physics.add.overlap(this.missileGroup, this.alienGroup, this.hitAlien, null, self)
  }

  update (time, delta) {
    // called 60 times a second
    const keySpaceObj = this.input.keyboard.addKey('SPACE') // Get key object
    const keyLeftObj = this.input.keyboard.addKey('LEFT') // Get key object
    const keyRightObj = this.input.keyboard.addKey('RIGHT') // Get key object

    if (keyLeftObj.isDown === true) {
      this.ship.x -= 15
    }
    if (keyRightObj.isDown === true) {
      this.ship.x += 15
    }

    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {
        // fire missile
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, 'missile')
        aNewMissile.body.velocity.y = -200
        this.missileGroup.add(aNewMissile)
        this.sound.play('laser')
      }
    }
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    this.missileGroup.children.each(function (item) {
      item.y = item.y - 15
      if (item.y < 50) {
        item.destroy()
      }
    })

    this.alienGroup.children.each(function (aSingleAlien) {
      // if the alien falls off the bottom of the screen, move it back to the top
      if (aSingleAlien.y > (1080 + 100)) {
        const alienXLocation = Math.floor(Math.random() * 1920) + 1 // this will get a number between 1 and 1920;
        let alienXVelocity = Math.floor(Math.random() * 50) + 1 // this will get a number between 1 and 50;
        alienXVelocity *= Math.round(Math.random()) ? 1 : -1 // this will add minus sign in 50% of cases
        aSingleAlien.x = alienXLocation
        aSingleAlien.y = -100
        // aSingleAlien.body.velocity.y = 200
        aSingleAlien.body.velocity.x = alienXVelocity
      }
    })
  }

  end () {

  }
}

export default GameScene
