$(function(){
  let surface = $(".surface")
  let car = $(".car")
  let img = $('.car img')
  let fara = true
  const cars = ['./assets/Img_06.png' , './assets/Img_05.png']

//move
  $(document).on("keypress", function(e){
    if(e.which == 13) {
      $(surface).toggleClass("surface_move")
      $(car).toggleClass("car_jump")
    }
  })
//light
  $(document).on("keypress", function(e){
    if(e.which == 119){
      if(fara){
        fara = false
        img.attr('src', cars[1])
      }
      else {
        fara = true
        img.attr("src", cars[0])
      }
    }
  })

//sound
let audio = document.getElementById('audio')
let plays = true

$(document).on("keydown", function(e){
  if (e.which == 83){
    if(plays){
      plays = false
        audio.play()
    }
  }
})

})
