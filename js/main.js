const $sliderWrap = $(".slider-wrap");
const $slider = $(".slider");
const $pagebar = $(".bar");
const $prev = $(".wrap .prev");
const $next = $(".wrap .next");
const $img = $slider.find(".box");
const $detail = $(".detail");
const $pic = $detail.find(".pic");
const $close = $detail.find(".close");
const len = $slider.length - 3;
let num = 1;
let enableClick = true;
let index;
let picPos = [
    {
        top: "300px",
        left: "290px",
        width: "25vw",
        height: "20vw"
    },
    {
        top: "250px",
        left: "720px",
        width: "25vw",
        height: "20vw"
    },
    {
        top: "290px",
        left: "1150px",
        width: "25vw",
        height: "20vw"
    },
]

for(let i=1; i <= $slider.length; i++ ){
    $slider.eq(i - 1).find(".bg").css({
        backgroundImage: "url(img/bg"+ i +".jpg)"
    });
}

$prev.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        prev();
    }
});

$next.on("click", function(e){
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        next();
    }
});

$img.on("click", function(){
    index = $(this).parent(".slider").index();
    let imgBg = $(this).find(".bg").css("background");
    let imgSrc = $(this).find(".model img").attr("src");

    if(index > 2) index = index - num + 1;
    
    $pic.find(".bg").css({background: imgBg});
    $pic.find(".model img").attr({src: imgSrc});
    $img.eq(index).css({opacity: 0});
    $pic.css(picPos[index]);
    setTimeout(function(){
        $pic.css({
            top: 0,
            left: "10vw",
            width: "40vw",
            height: "100%"
        });
    }, 100);
    setTimeout(function(){
        $(".wrap").addClass("on");
    }, 500);
    $detail.fadeIn(1000);
});

$close.on("click", function(e){
    e.preventDefault();

    $pic.css(picPos[index]);
    setTimeout(function(){
        $img.eq(index).css({opacity: 1});
    }, 500);
    $(".wrap").removeClass("on");
    $detail.fadeOut(1000);
});

function prev(){
    if(num >= 2){
        num--;
        $sliderWrap.animate({marginLeft: (-100 / 3) * (num - 1) +"%"}, 500, function(){
            enableClick = true;
        });
        $pagebar.css({width: (100 / 8 * num) +"%"});
    }else{
        enableClick = true;
        return;
    }
}
function next(){
    if(num <= len){
        $sliderWrap.animate({marginLeft: (-100 / 3) * num +"%"}, 500, function(){
            num++;
            enableClick = true;
        });
        $pagebar.css({width: (100 / len * num) +"%"});
    }else{
        enableClick = true;
        return;
    }

}

