var canvas=new fabric.Canvas('my_canvas');

player_x=10;
player_y=10;

block_width=30;
block_height=30;

player_object="";
block_image_height="";

function player_Update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        
    }
    
    );
}
function new_Image(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
block_image_object=Img;
block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({
    top:player_y,
    left:player_x
});
canvas.add(block_image_object);
    });

    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);

   if(e.shiftKey==true && keypressed=='80'){
       block_width=block_width+10;
       block_height=block_height+10;
       document.getElementById("current_width").innerHTML=block_width;
       document.getElementById("current_height").innerHTML=block_height;
   } 

   if(e.shiftKey==true && keypressed=='77'){
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}



if(keypressed=='87'){
    new_Image('wall.jpg');
    console.log("W Pressed");
}
if(keypressed=='84'){
    new_Image('trunk.jpg');
    console.log("T Pressed");
}
if(keypressed=='85'){
    new_Image('unique.png');
    console.log("U Pressed");
}

if(keypressed=='89'){
    new_Image('yellow_wall.png');
    console.log("Y Pressed");
}

if(keypressed=='68'){
    new_Image('dark_green.png');
    console.log("D Pressed");
}
if(keypressed=='76'){
    new_Image('light_green.png');
    console.log("L Pressed");
}

if(keypressed=='71'){
    new_Image('ground.png');
    console.log("G Pressed");
}

if(keypressed=='82'){
    new_Image('roof.jpg');
    console.log("R Pressed");
}

if(keypressed=='67'){
    new_Image('cloud.jpg');
    console.log("C Pressed");
}



}