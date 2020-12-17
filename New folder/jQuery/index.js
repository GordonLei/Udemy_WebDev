$(document).ready(function(){

    $("h1").css("color", "green");
    $("h1").addClass("big-title");
    $("h1").removeClass("big-title");


    $("button").html("<em>Hey </em>");

    $("img").attr("src");

    $("button").click(function(){
        $("h1").css("color",  "purple");
    })
});

$(document).keydown(function(event){
    $("h1").text(event.key);
})

