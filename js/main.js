let speed = 1000;
let enableClick = true;

// visual letter motion
const letter1 = $("#visual .inner >h1");
const letter2 = $("#visual .inner >h2");

letterMotion(letter1, 0.1);
letterMotion(letter2, 0.2);


function letterMotion(item, delay){
    let txt = item.text().split("");
    let bg = $(item).css("color");
    let num = 0;
    $(item).empty();

    $(txt).each(function(_, data){
        $(item).append(
            $("<span>").text(data).css({transitionDelay: delay * num +"s"})
        )
        num++;
    });

    $(item).append(
        $("<p>").css({
            position: "absolute",
            background: bg,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        })
    );

    item.find("p").animate({left: "100%"}, speed, function(){
        $(this).remove();
    });
    item.find("span").css({opacity: 1});
}


// visual tab button
let i=0;

let rotate_timer = setInterval(function(){
    (i >= 2) ? i = 0 : i++;
    $("#visual .wrapbox >.wrap").hide();
    $("#visual .wrapbox >.wrap").eq(i).show();
}, 3000);

/*
let timer3 = setInterval(function(){
    (i >= 2) ? i=0 : i++;
    visualMoving(i);
}, speed*3);

$("#visual .filter li a").on("click", function(e){
    e.preventDefault();
    let target = $(this).parent().index() - 1;
    let isActive = $(this).hasClass("on");

    if(isActive) return;
    if(enableClick){
        enableClick = false;
        clearInterval(timer3);
        visualMoving(target);
    }
});

$("#visual .wrapbox article").on("mouseenter", function(){
    clearInterval(timer3);
});
$("#visual .wrapbox article").on("mouseleave", function(){
    timer3 = setInterval(function(){
        (i >= 2) ? i=0 : i++;
        visualMoving(i);
    }, speed*3);
});


function visualMoving(index){
    $("#visual .filter li a").removeClass("on");
    $("#visual .filter li").eq(index + 1).children("a").addClass("on");
    $("#visual .wrapbox >.wrap").slideUp(speed/1.5);
    setTimeout(function(){
        $("#visual .wrapbox >.wrap").eq(index).slideDown(speed);
    }, speed/1.5, function(){
        enableClick = true;
    });
}
*/



//visual detail page
const $btnClose = $("#visual .detail .close");
const $img = $("#visual .wrapbox img")

$img.on("click", function(e){
    e.preventDefault();
    let imgSrc = $(this).attr("src");
    let index = $(this).closest("article").index();
    let tit1 = $("#visual .wrapbox >.wrap").eq(index).find("article").eq(index).find("h2").text();
    let tit2 = $("#visual .wrapbox >.wrap").eq(index).find("article").eq(index).find("li").eq(0).text();
    let desc = $("#visual .wrapbox >.wrap").eq(index).find("article").eq(index).find(".wrap p").text();

    clearInterval(timer3);

    $("#visual .detail .pic img").attr({src: imgSrc});
    $("#visual .detail .thumb img").attr({src: imgSrc});
    $("#visual .detail h1").text(tit1);
    $("#visual .detail h2").text(tit2);
    $("#visual .detail .con p").text(desc);

    $("#visual .detail").fadeIn(0, function(){
        $("#visual .detail").addClass("on");
    });
    
});

$btnClose.on("click", function(e){
    e.preventDefault();

    $("#visual .detail").removeClass("on");
    $("#visual .detail").fadeOut(1000);
});