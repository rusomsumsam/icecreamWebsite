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
/*For Five Slider Starts*/
$('.five_loop').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
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
/*For Five Slider Ends*/
/*For Gallery Sorting Starts*/
// init Isotope
var $grid = $('.ice_cream_gallery').isotope({
    itemSelector: '.portfolio_item_main',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });