document.getElementById("menu").addEventListener("click", function(e){


    if(e.target.parentElement.classList.contains("active")){
    }else{
        let elm =document.getElementById("menu").getElementsByTagName("Li")

        for(let i in elm){

           elm[i].className = ""
        }
         e.target.parentElement.classList.add("active")

    }
  })

  //............................................
  $(function() {

    $(".progress").each(function() {
  
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');
  
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }
  
    })
  
    function percentageToDegrees(percentage) {
  
      return percentage / 100 * 360
  
    }
  
  });
  /////////////////////////////////////////
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
//
data : {
  borderWidth:0,
  datasets: [{
   
  
    data: [24, 40, 10,26],
    backgroundColor: [
      'rgb(253, 184, 36)',
      'rgb(52, 97, 241)',
      'rgb(136, 191, 241)',
      'rgb(225, 225, 225)'
    ],
    hoverOffset: 4
  }]
},

});


console.log(window.innerWidth)
 



///////
document.getElementById("heart").addEventListener("click",function(){
  if(  document.getElementById("hearti").style.fontWeight == "bold"){
  document.getElementById("hearti").style.fontWeight = "normal"
}else{
  document.getElementById("hearti").style.fontWeight = "bold"
}
})



//////////////jquery


$('#skills-content').waypoint(function() {
  $('.progress .progress-bar').each(function() {
      var width = $(this).data("val");
      $(this).css('width' , width + '%');
  });
}, { offset: '80%'} );
//////
$(".owl-carousel").owlCarousel({
  autoplay: true,
  loop:true,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      768:{
          items:3
      },
      1200:{
          items:5
      }
  }
});