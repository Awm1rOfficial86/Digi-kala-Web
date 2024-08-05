$('.prev').click(function (){
    $('.atefe').animate({'margin-right':"+=200"})
})
$('.next').click(function (){
    $('.atefe').animate({'margin-right':"-=200"})
})







$('.colors li').click(function(){
    $('.circle').removeClass('active');
    $('.circle',this).addClass('active');


});


$('#MenuBox').hover(function (){
    $('.Load').fadeIn(200);
})
$('#Load').mouseleave(function (){
    $('.Load').fadeOut(200);
})
let mozReload = ()=>{
    for(let i = 2 ; i<10 ; i++){
        $(`#Itemlist${i}`).hide();

    }
}

$('#Pil-1').mouseenter(function (){
    mozReload()
    $('#Itemlist2').fadeIn(50);
})
$('#Itemlist2').mouseleave(function (){
    $('#Itemlist2').fadeOut(50);
})

$('#Pil-2').mouseenter(function (){
    mozReload()
    $('#Itemlist3').fadeIn(50);

})
$('#Itemlist3').mouseleave(function (){
    $('#Itemlist3').fadeOut(50);
})

$('#Pil-3').mouseenter(function (){
    mozReload()
    $('#Itemlist4').fadeIn(50);
})
$('#Itemlist4').mouseleave(function (){
    $('#Itemlist4').fadeOut(50);
})

$('#Pil-4').mouseenter(function (){
    mozReload()
    $('#Itemlist5').fadeIn(50);
})
$('#Itemlist5').mouseleave(function (){
    $('#Itemlist5').fadeOut(50);
})

$('#Pil-5').mouseenter(function (){
    mozReload()
    $('#Itemlist6').fadeIn(50);
})
$('#Itemlist6').mouseleave(function (){
    $('#Itemlist6').fadeOut(50);
})

$('#Pil-6').mouseenter(function (){
    mozReload()
    $('#Itemlist7').fadeIn(50);
})
$('#Itemlist7').mouseleave(function (){
    $('#Itemlist7').fadeOut(50);
})

$('#Pil-7').mouseenter(function (){
    mozReload()
    $('#Itemlist8').fadeIn(50);
})
$('#Itemlist8').mouseleave(function (){
    $('#Itemlist8').fadeOut(50);
})

$('#Pil-8').mouseenter(function (){
    mozReload()
    $('#Itemlist9').fadeIn(50);
})
$('#Itemlist9').mouseleave(function (){
    $('#Itemlist9').fadeOut(50);
})
































let mozChangeDev = 0 ;
function  tabeRunChip(){
    mozChangeDev+=100;
    $('.moz--khati div div').css({"transform": `translateX(${mozChangeDev}px)`, "transition": "1s"}, 1000)

}
function changedivRight() {
    if(mozChangeDev<=1300 && mozChangeDev >= 0) {
        tabeRunChip()
    }if(mozChangeDev<0){
        mozChangeDev = 0;
        tabeRunChip()
    }
}
function  changedivLeft(){
    mozChangeDev-=100;
    console.log(mozChangeDev)
    if(mozChangeDev>-100){
        $('.moz--khati div div').css({"transform": `translateX(${mozChangeDev}px)` , "transition":"1s"}, 1000)
    }
}
function Slider() {
    if(nextslid>max){
        nextslid=0;
    }
    if(nextslid<min){
        nextslid=4;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid++;
}
function Slp() {

    if(nextslid<min){
        nextslid=4;
    }

    slideritem.hide();
    slideritem.eq(nextslid).fadeIn(100);
    nextslid--;
}
var max=5;
var min=0;
var slidertag =$('#Slider')
var  slideritem=slidertag.find('.Item')
var nextslid=0;
$('#click-Right').click(function (){
    Slider();


});
$('#click-Left').click(function (){
    Slp();
});



Slider();
var Timer = setInterval(function (){
    Slider();
},3500)
let check = 200;
let checkMoz = ()=>{
    check+=200
    $('#Story-Ul').animate({'margin-left': "+=200px"}, 1000)
}

$('#Right-1').click(function () {
    let Moz = check!=200 || check<=0 ? checkMoz() : console.log(check) ;
})

$('#Left-1').click(function () {
    if(check != -200){
        check -=200;
        $('#Story-Ul').animate({'margin-left': "-=200px"}, 1000)
    }else{
        console.log(check)
    }
})
let checkTrue = true;


let divBaner  = document.querySelectorAll(".baner__div--info");
let imgBaner = document.querySelectorAll(".img-baner");
let divBanerA = document.querySelectorAll(".a-baner");
console.log(imgBaner)
let randomNumber = ()=>{
    let counterNumber = 11
    let random = Math.floor(Math.random()*counterNumber)
    if(random != 0 &&  random!=counterNumber-1){
        return random
    }
    if(random == counterNumber--){
        return  random-=3
    }
    return 1
}
let imgBanerFirst = ()=>{
    let randomNumberValue = randomNumber()

    $(imgBaner[0]).attr("src" , `./imgmoz/${randomNumberValue}.png`)
    randomNumberValue+=1
    $(imgBaner[1]).attr("src" , `./imgmoz/${randomNumberValue}.png`)
    randomNumberValue+=1
    $(imgBaner[2]).attr("src" , `./imgmoz/${randomNumberValue}.png`)

}


setInterval(()=>{
    console.log(randomNumber())
    imgBanerFirst()


} , 3000)
