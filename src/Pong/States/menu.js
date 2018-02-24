export default function menuState(){
    return{
        create: function(){
            var nameLabel = this.game.add.text(80, 80, 'Pong', { font: '50px Arial', fill: '#fff' });

            var wkey = this.game.input.keyboard.addKey(window.Phaser.Keyboard.W);
            wkey.onDown.addOnce(this.start, this);
        },
        start: function(){
            this.game.state.start('play')
        }
    }
}