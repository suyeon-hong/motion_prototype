const $sliderWrap = $(".slider-wrap");
const $slider = $(".slider");
const $pagebar = $(".bar");
const $prev = $(".prev");
const $next = $(".next");
const len = $slider.length - 3;
let num = 1;
let enableClick = true;

console.log(len);
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