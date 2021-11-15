const $sliderWrap = $(".slider-wrap");
const $slider = $(".slider");
const $prev = $(".prev");
const $next = $(".next");
const len = $slider.length - 2;
let num = 1;
let enableClick = true;

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

function prev(){
    if(num >= 2){
        num--;
        $sliderWrap.animate({marginLeft: (-100 / 3) * (num - 1) +"%"}, 500, function(){
            enableClick = true;
        });
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
    }else{
        enableClick = true;
        return;
    }

}