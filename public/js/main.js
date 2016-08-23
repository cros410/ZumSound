$(document).ready(function(){

    ion.sound({
        sounds: [
            {name: "zum"}
        ],
        // main config
        path: "sounds/",
        preload: true,
        multiplay: true,
        volume: 0.1
    });
    console.log("Ready!");
    $("#boton").click(function(){
        for (var i =0 ; i<10;i++){
            $("body").animate({left:"-=5px"},20);
            $("body").animate({left:"+=5px"},20);
            ion.sound.play("zum");
        }
    });

});