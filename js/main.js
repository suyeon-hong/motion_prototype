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
const $wrap = $("#visual .wrapbox >.wrap");
const $section = $("#visual .wrapbox section");
const $front = $("#visual .front");
const $back = $("#visual .back");
const $btns = $("#visual .filter li");
let i=0;

let timer3 = setInterval(function(){
    rotate();
}, speed*3);

function rotate(){
    (i >= 2) ? i = 0 : i++;
    $section.addClass("on");
    setTimeout(function(){
        $section.removeClass("on");
    }, speed*2);
    setTimeout(function(){
        $wrap.fadeOut();
        $wrap.eq(i).fadeIn();
    }, speed*2.5);
}

$btns.on("click", function(e){
    e.preventDefault();
    let i = $(this).index() - 1;

    clearInterval(timer3);

    $btns.children("a").removeClass("on");
    $(this).children("a").addClass("on");

    $section.addClass("on");
    $wrap.fadeOut();
    $wrap.eq(i).fadeIn();
})

$section.on("mouseenter", function(){
    clearInterval(timer3);
    $section.addClass("on");

});

$section.on("mouseleave", function(){
    timer3 = setInterval(function(){
        rotate();
    }, speed*3);
});


//visual detail page
const $btnClose = $("#visual .detail .close");
const $img = $("#visual .wrapbox img")
let index;
let imgPos = [
    {
        width: "250px",
        height: "280px",
        left: "20%",
        bottom: "30px"
    },
    {
        width: "250px",
        height: "280px",
        left: "40%",
        bottom: "30px"
    },
    {
        width: "250px",
        height: "280px",
        left: "60%",
        bottom: "30px"
    },
]

$img.on("click", function(e){
    e.preventDefault();
    let imgSrc = $(this).attr("src");
    index = $(this).closest("section").index();
    let tit1 = $("#visual .wrapbox >.wrap").eq(index).find("section").eq(index).find("h2").text();
    let tit2 = $("#visual .wrapbox >.wrap").eq(index).find("section").eq(index).find("li").eq(0).text();
    let desc = $("#visual .wrapbox >.wrap").eq(index).find("section").eq(index).find(".wrap p").text();


    $("#visual .detail .pic").css(imgPos[index]);
    $("#visual .detail .pic img").attr({src: imgSrc});
    $("#visual .detail .thumb img").attr({src: imgSrc});
    $("#visual .detail h1").text(tit1);
    $("#visual .detail h2").text(tit2);
    $("#visual .detail .con p").text(desc);

    setTimeout(function(){
        $(".detail .pic").css({
            width: "750px",
            height: "100%",
            left: "150px",
            bottom: 0
        });
    }, 100);
    $("#visual .detail").fadeIn(0, function(){
        $("#visual .detail").addClass("on");
    });
    
});

$btnClose.on("click", function(e){
    e.preventDefault();

    $("#visual .detail .pic").css(imgPos[index]);
    $("#visual .detail").removeClass("on");
    $("#visual .detail").fadeOut(1000);
});