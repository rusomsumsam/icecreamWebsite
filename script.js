/*For First Slider Starts*/
$('.first_loop').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*For First Slider Ends*/
/*For Second Slider Starts*/
$('.second_loop').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navContainer:'#myNav',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
/*For Second Slider Ends*/ 
    