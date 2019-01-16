new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = this.monsterHealth = 100;
        },

        attack: function(){
            var maxDamage = 10;
            var minDamage = 3;
            var damage = Math.floor(Math.random() * maxDamage) ;
        },

        specialAttack: function(){

        },

        heal: function(){

        },
        giveUp: function(){

        }
    }
})