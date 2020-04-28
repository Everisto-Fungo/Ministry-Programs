


$(document).ready(function() {
let $btns= $(".project-area .button-group button");
 
$btns.click(function(e){
    $(".project-area .button-group button").removeClass("active")
    e.target.classList.add("active")

    let selector= $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
        filter:selector
    })
    return false;
})


$("#btn-all").trigger("click")

$('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    // other options
  });

// owl carousel
$(".owl-carousel").owlCarousel({
  loop:true,
  autoplay:true,
  autoplayHoverPause:true,
  margin:7,
  lazyLoad:true,
  mouseDrag:true,
  touchDrag:true,
  autoplayTimeout: 5500,
  dots:true,
  responsive:{
    0:{
      items:1
    },
  768:{
      items:1
    }, 992:{
      items:2
    }
  }
});

// motl timer

function lembaNthawi(demo,days,hours,minutes,seconds) {
  demo.innerHTML =` 
  <div class="px-1 timer days-div rounded-top rounded-bottom" >
  <span class="timer-digit">${days}</span> <br>
  <span class="timer-description">Days</span>
  </div>
  
  <div class="px-1 timer hours-div rounded-top rounded-bottom" >
  <span class="timer-digit">${hours}</span> <br>
  <span class="timer-description">Hours</span>
  </div>
  
  <div class=" px-1 timer minutes-div rounded-top rounded-bottom" >
  <span class="timer-digit">${minutes}</span> <br>
  <span class="timer-description">Minutes</span>
  </div>
  
  <div class="px-1 timer seconds-div rounded-top rounded-bottom" >
  <span class="timer-digit">${seconds}</span> <br>
  <span class="timer-description">Seconds</span>
  </div>
  
     `
 }

// Set the date we're counting down to
var countDownDate = new Date("July 27, 2020 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time cacalculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 let demo=  document.getElementById("motl-timer")
 
 lembaNthawi(demo,days,hours,minutes,seconds)


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// gtw timer

// Set the date we're counting down to
var countDownDategtw = new Date("August 3, 2020 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDategtw - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds= Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 let demo=  document.getElementById("gtw-timer")


 lembaNthawi(demo,days,hours,minutes,seconds)

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




// world evanelism timer

// Set the date we're counting down to
var countDownDatewec = new Date("August 9, 2020 24:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDatewec - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds= Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
 let demo=  document.getElementById("wec-timer")



 lembaNthawi(demo,days,hours,minutes,seconds)

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);










// -----------------------------------------------------


let readMoreBtns = document.querySelectorAll(".readMoreBtn")



readMoreBtns.forEach(btn => {
  btn.addEventListener("click", function (e) {
    let SelectedBtn = e.target
    SelectedBtn.classList.toggle("more")
if (SelectedBtn.classList.contains("more")) {
  SelectedBtn.textContent= `Read Less`
} else {
  SelectedBtn.textContent= `Read More`
}

  })
});



});


