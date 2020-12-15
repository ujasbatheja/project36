class Food{
    constructor(){
        
    }
    getGameState(){
        fedTime = database.ref('FeedTime');
        fedTime.on("value",function(data){
            lastFed = data.val();
        });
    }

    display(){
        var x=80, y=100;
        imageMode(CENTER);
        Image(this.image,200,200,70,70);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
   /* setGameState(state){
        database.ref("/").update({
            gameState: state
        })
        console.log("setGameState"+state);
    }
    start(){
        if (gameState===0){
            console.log("startingGame");
            player = new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        if (allPlayers!==undefined){
            var display_position = 130;
            for(var plr in allPlayers){
                if(plr==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);
            }
        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.updatePlayerInfo();
        }
    }*/
} 