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
    margin:20,
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
        992:{
            items:3
        }
    }
})
/*For Second Slider Ends*/
/*For Third Slider Starts*/
$('.third_loop').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navContainer:'#mySecondNav',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:4
        }
    }
})
/*For Third Slider Ends*/
/*For Four Slider Starts*/
$('.four_loop').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    navContainer:'#myThirdNav',
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        992:{
            items:3
        }
    }
})
/*For Four Slider Ends*/  
    