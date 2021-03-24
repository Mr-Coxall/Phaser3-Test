class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}

  init(data) {

  }

	preload() {
		this.load.image('background', 'assets/background.jpg');
	}

	create(data) {
    if (this.sound.context.state === 'suspended') {
      this.sound.context.resume();
    }
    var bg = this.add.sprite(0,0,'background');
    bg.setOrigin(0,0);

    var text = this.add.text(100, 400, 'Welcome to my game!');
    text.setInteractive({ useHandCursor: true });
    text.on('pointerdown', () => this.clickButton());
	}

  update(time, delta) {

	}

  clickButton() {
    this.scene.switch('gameScene');
  }

}

export default TitleScene;