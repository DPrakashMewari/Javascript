$(document).ready(function(){
    console.log('we are using JQUERY', $)
// $('h2').action()
$('h2').click()  // element selector
$('h2').click(function () {
        console.log('You click on h2')
        // $('h2').hide()    // for hiding h2 element selector
        // $(this).hide();    // this is use for particular tag only  not all h2 tag
        $('#forhide').hide()   // id selector
    })
$('p').click(function () {
        $(".forhide1").hide()  // class selector
    })

// three main type of selectors : 1. id; 2.class;3.element
$('span').click(function(){console.log('clicked on span which was just element based')})  //element
$('h3#dd').click(function(){console.log('clicked on h3 which was id based')}) // id 
$('h3.hel').click(function(){console.log('clicked on h3 which was class based')}) // class
$('span').dblclick(function(){console.log('You just dobule clicked on span which was just element based')})  //element
// $('h3.hel').mouseenter(function(){console.log('entered with mouse')}) // class
// $('h3.hel').mouseleave(function(){console.log('leave with mouse')}) // class
// $('h3.hel').mousedown(function(){console.log('down with mouse')}) // class
// $('h3.hel').hover(function(){console.log('hover with mouse')}) // class
$('h3.hel').on('click',function(){console.log('clicked on mouse',this)}) // class
// Multiple tag or events using on 
$('span').on({
     click: function(){
         console.log('You clicked')
     },
     dblclick:  function(){
         console.log('Double clicked')
     }
})

// //
    // $('#word').hide(4000,function(){
    //     console.log('hidden')
    // })
    // $('#word').show(4000,function(){
    //     console.log('visible after few seconds')
    // })

    // $('#but').click(function(){
    //     $('#word').hide(4000,function(){
    //             console.log('hidden')
    //          })
    // })

    // $('#but').dblclick(function(){
    //     $('#word').show(4000,function(){
    //             console.log('visible')
    //          })
    // })

    // made seprate either we can use toggle

    // $('#but').click(function(){
    //     $('#word').toggle(1000)
    // })

    // // Some function more we have too  fadeIN, fadeOut,fadeToggle,fadeTo
    // $('#but').click(function () {
    //     $('#word').fadeToggle(1000)
    // })

    // // slide method - call back function method are optional
    // $('#but').click(function () {
    //     $('#word').slideToggle(1000)
    // })
    
    //animation method : opacity,color,anything we can change; also speed param
    // $('#but').click(function () {
    //     $('#word').animate({opacity:0.4,
    //         height:'140px',
    //         width:'300px'
    //     },'slow')
    // })
$('#word').animate({opacity:0.4},1000)
$('#word').stop()
$('#word').animate({opacity:0.3},200)
$('#word').animate({width:'100%'},100)





})